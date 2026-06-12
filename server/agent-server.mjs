import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const loadEnvFile = async () => {
  try {
    const raw = await readFile(join(__dirname, "..", ".env"), "utf8");

    raw.split(/\r?\n/).forEach((line) => {
      const trimmedLine = line.trim();

      if (!trimmedLine || trimmedLine.startsWith("#")) {
        return;
      }

      const separatorIndex = trimmedLine.indexOf("=");

      if (separatorIndex === -1) {
        return;
      }

      const key = trimmedLine.slice(0, separatorIndex).trim();
      const value = trimmedLine
        .slice(separatorIndex + 1)
        .trim()
        .replace(/^["']|["']$/g, "");

      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    });
  } catch {
    // El servidor tambien puede usar variables configuradas por el host.
  }
};

await loadEnvFile();

const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || "127.0.0.1";
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const CONTACT_HOURS =
  process.env.CONTACT_HOURS || "lunes a viernes en horario de atencion";
const CONTACT_PHONE = process.env.CONTACT_PHONE || "";
const RESPONSES_PATH =
  process.env.RESPONSES_PATH || join(__dirname, "data", "agent-responses.json");

const fallbackAnswer = `Lo lamento, aun no cuento con esa informacion. Puedes comunicarte con la Universidad Tecnologica de Nayarit${
  CONTACT_PHONE ? ` al telefono ${CONTACT_PHONE}` : ""
} de ${CONTACT_HOURS} para consultar informacion actualizada.`;

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9ñ\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const cleanAnswer = (text) =>
  String(text || "")
    .replace(/<co>/gi, "")
    .replace(/<\/?co>/gi, "")
    .replace(/\*\*/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const STOP_WORDS = new Set([
  "con",
  "cual",
  "cuales",
  "del",
  "las",
  "los",
  "para",
  "por",
  "que",
  "una",
  "uno",
]);

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
};

const readJsonBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (!chunks.length) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
};

const loadResponses = async () => {
  const raw = await readFile(RESPONSES_PATH, "utf8");
  const responses = JSON.parse(raw);

  if (!Array.isArray(responses)) {
    throw new Error("server/data/agent-responses.json debe contener un arreglo.");
  }

  return responses
    .map((item, index) => ({
      id: item.id || `respuesta-${index + 1}`,
      title: item.title || "",
      keywords: Array.isArray(item.keywords) ? item.keywords : [],
      answer: cleanAnswer(item.answer),
      links: Array.isArray(item.links) ? item.links : [],
      options: Array.isArray(item.options) ? item.options : [],
      priority: Number(item.priority || 0),
    }))
    .filter((item) => item.answer && item.keywords.length > 0);
};

const scoreResponse = (query, response) => {
  const normalizedQuery = normalize(query);
  const queryWords = new Set(normalizedQuery.split(" "));

  const keywordScore = response.keywords.reduce((score, keyword) => {
    const normalizedKeyword = normalize(keyword);

    if (!normalizedKeyword) {
      return score;
    }

    if (normalizedQuery === normalizedKeyword) {
      return score + 12;
    }

    const keywordParts = normalizedKeyword.split(" ");

    if (keywordParts.length === 1 && normalizedKeyword.length <= 3) {
      return queryWords.has(normalizedKeyword) ? score + 8 : score;
    }

    if (normalizedQuery.includes(normalizedKeyword)) {
      return score + 8;
    }

    const keywordWords = keywordParts.filter(
      (word) => word.length > 2 && !STOP_WORDS.has(word)
    );
    const matchingWords = keywordWords.filter((word) =>
      queryWords.has(word)
    );

    if (
      keywordWords.length > 1 &&
      matchingWords.length < Math.ceil(keywordWords.length / 2)
    ) {
      return score;
    }

    return score + matchingWords.length;
  }, 0);

  return keywordScore > 0 ? keywordScore + response.priority : 0;
};

const findBestResponse = (message, responses) => {
  return responses
    .map((response) => ({
      ...response,
      score: scoreResponse(message, response),
    }))
    .filter((response) => response.score > 0)
    .sort((a, b) => b.score - a.score)[0];
};

const handleAgentChat = async (req, res) => {
  const body = await readJsonBody(req);
  const message = String(body.message || "").trim();

  if (!message) {
    return sendJson(res, 400, { error: "La consulta no puede estar vacia." });
  }

  if (message.length > 800) {
    return sendJson(res, 400, {
      error: "La consulta es demasiado larga. Intenta hacerla mas breve.",
    });
  }

  const responses = await loadResponses();
  const bestResponse = findBestResponse(message, responses);

  if (!bestResponse) {
    return sendJson(res, 200, {
      answer: fallbackAnswer,
      links: [],
      matched: false,
    });
  }

  return sendJson(res, 200, {
    answer: bestResponse.answer,
    links: bestResponse.links,
    options: bestResponse.options,
    matched: true,
    matchedId: bestResponse.id,
  });
};

const server = createServer(async (req, res) => {
  try {
    if (req.method === "OPTIONS") {
      return sendJson(res, 204, {});
    }

    if (req.method === "GET" && req.url === "/health") {
      return sendJson(res, 200, { ok: true });
    }

    if (req.method === "POST" && req.url === "/api/agent-chat") {
      return await handleAgentChat(req, res);
    }

    return sendJson(res, 404, { error: "Ruta no encontrada." });
  } catch (error) {
    return sendJson(res, 500, {
      error: error instanceof Error ? error.message : "Error interno.",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Balam IA API listening on http://${HOST}:${PORT}`);
});
