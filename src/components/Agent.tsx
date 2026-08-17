import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import LogoAgent from "../assets/logos/IAAccess.png";
import "./Agent.css";

interface AgentProps {
  position?: "bottom-left" | "bottom-right";
  size?: "small" | "medium" | "large";
  excludePaths?: string[];
  className?: string;
}

const quickQuestions = [
  "Oferta educativa",
  "Becas disponibles",
  "Resultados de admisión",
  "Guias de pago",
];

interface ChatMessage {
  id: number;
  role: "assistant" | "user";
  content: string;
  links?: AgentLink[];
  options?: AgentOption[];
}

interface AgentLink {
  label: string;
  url: string;
}

interface AgentOption {
  label: string;
  message: string;
}

interface AgentResponseCache {
  answer: string;
  links: AgentLink[];
  options: AgentOption[];
  expiresAt: number;
}

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hola, soy Balam IA tu asistente virtual. Puedo orientarte sobre carreras, becas, pagos, admision y servicios universitarios.",
  },
];

const agentApiUrl = (import.meta.env.VITE_AGENT_API_URL || "").replace(/\/$/, "");
const agentEndpoint = `${agentApiUrl}/api/agent-chat`;
const agentCacheKeyPrefix = "balam-ia-cache";
const agentCacheTtlMs = 30 * 60 * 1000;

const cleanAgentText = (text: string) =>
  text
    .replace(/<co>/gi, "")
    .replace(/<\/?co>/gi, "")
    .replace(/\*\*/g, "")
    .trim();

const normalizeCacheKey = (message: string) =>
  message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9ñ\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getAgentCacheKey = (message: string) =>
  `${agentCacheKeyPrefix}:${normalizeCacheKey(message)}`;

const getCachedAgentResponse = (message: string): AgentResponseCache | null => {
  try {
    const rawCache = sessionStorage.getItem(getAgentCacheKey(message));

    if (!rawCache) {
      return null;
    }

    const cachedResponse = JSON.parse(rawCache) as AgentResponseCache;

    if (!cachedResponse.expiresAt || cachedResponse.expiresAt < Date.now()) {
      sessionStorage.removeItem(getAgentCacheKey(message));
      return null;
    }

    return cachedResponse;
  } catch {
    return null;
  }
};

const saveAgentResponseCache = (
  message: string,
  response: Omit<AgentResponseCache, "expiresAt">
) => {
  try {
    sessionStorage.setItem(
      getAgentCacheKey(message),
      JSON.stringify({
        ...response,
        expiresAt: Date.now() + agentCacheTtlMs,
      })
    );
  } catch {
  }
};

const Agent: React.FC<AgentProps> = ({
  position = "bottom-right",
  size = "medium",
  excludePaths = ["/"],
  className = "",
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const shouldOffsetForBackButton = !excludePaths.includes(location.pathname);
  const hasStartedConversation = messages.some(
    (message) => message.role === "user"
  );

  const sizeStyle = useMemo((): React.CSSProperties => {
    const sizes = {
      small: { agent: "52px", backButton: "40px" },
      medium: { agent: "64px", backButton: "50px" },
      large: { agent: "76px", backButton: "60px" },
    };

    return {
      "--agent-button-size": sizes[size].agent,
      "--back-button-size": sizes[size].backButton,
    } as React.CSSProperties;
  }, [size]);

  const sendMessage = async (message: string) => {
    const cleanMessage = message.trim();

    if (!cleanMessage || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: cleanMessage,
    };

    setMessages((current) => [...current, userMessage]);
    setQuery("");

    const cachedResponse = getCachedAgentResponse(cleanMessage);

    if (cachedResponse) {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: cachedResponse.answer,
          links: cachedResponse.links,
          options: cachedResponse.options,
        },
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(agentEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: cleanMessage }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : { error: await response.text() };

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Oh oh, seguimos innovando, pronto tendremos más información.",
        );
      }

      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: cleanAgentText(data.answer || "No pude generar una respuesta."),
        links: Array.isArray(data.links) ? data.links : [],
        options: Array.isArray(data.options) ? data.options : [],
      };

      if (data.matched !== false) {
        saveAgentResponseCache(cleanMessage, {
          answer: assistantMessage.content,
          links: assistantMessage.links || [],
          options: assistantMessage.options || [],
        });
      }

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof TypeError && error.message === "Failed to fetch"
          ? "No pude conectar con el servidor de Balam IA. Verifica que el API este corriendo y que VITE_AGENT_API_URL apunte al servidor correcto."
          : error instanceof Error
          ? error.message
          : "Ocurrio un error al consultar el agente.";

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(query);
  };

  return (
    <section
      className={`agent-widget ${position} ${
        shouldOffsetForBackButton ? "agent-widget-offset" : ""
      } ${className}`}
      style={sizeStyle}
      aria-label="Agente de consulta de informacion"
    >
      {isOpen && (
        <div className="agent-panel" role="dialog" aria-label="BalamIA">
          <div className="agent-header">
            <div className="agent-title-group">
              <img src={LogoAgent} alt="" className="agent-avatar" />
              <div>
                <p className="agent-kicker">Balam IA</p>
                <h2>Consulta de informacion</h2>
              </div>
            </div>
            <button
              type="button"
              className="agent-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar agente"
            >
              x
            </button>
          </div>

          <div
            className={`agent-body ${
              hasStartedConversation ? "agent-body-no-actions" : ""
            }`}
          >
            <div className="agent-conversation" aria-live="polite">
              {messages.map((message) => (
                <div
                  className={`agent-message agent-message-${message.role}`}
                  key={message.id}
                >
                  <span style={{ whiteSpace: "pre-line" }}>
                    {message.content}
                  </span>
                  {message.links && message.links.length > 0 && (
                    <div className="agent-message-links">
                      {message.links.map((link) => (
                        <a
                          href={link.url}
                          key={`${message.id}-${link.url}`}
                          target={
                            link.url.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.url.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {message.options && message.options.length > 0 && (
                    <div className="agent-message-options">
                      {message.options.map((option) => (
                        <button
                          type="button"
                          key={`${message.id}-${option.message}`}
                          onClick={() => void sendMessage(option.message)}
                          disabled={isLoading}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="agent-message agent-message-assistant">
                  Consultando informacion...
                </div>
              )}
            </div>

            {!hasStartedConversation && (
              <div
                className="agent-quick-actions"
                aria-label="Consultas rapidas"
              >
                {quickQuestions.map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => void sendMessage(question)}
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="agent-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Escribe tu consulta..."
              aria-label="Escribe tu consulta"
            />
            <button type="submit" aria-label="Enviar consulta">
              {isLoading ? "..." : "Enviar"}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="agent-button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Cerrar agente IA" : "Abrir agente IA"}
        aria-expanded={isOpen}
      >
        <img src={LogoAgent} alt="" />
      </button>
    </section>
  );
};

export default Agent;
