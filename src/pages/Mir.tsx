import { useState } from "react";
import styles from "./Mir.module.css";

type MirFile = {
  key: string;
  name: string;
  url: string;
  extension: string;
};

type MirYear = {
  key: string;
  label: string;
  files: MirFile[];
};

const mirAssets = import.meta.glob("../assets/mir/**/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const getFileExtension = (fileName: string) =>
  fileName.includes(".") ? fileName.split(".").pop()!.toUpperCase() : "ARCHIVO";

const buildMirTree = (assets: Record<string, string>): MirYear[] => {
  const years = new Map<string, MirFile[]>();

  Object.entries(assets).forEach(([filePath, url]) => {
    const parts = filePath.split("/");
    const rootIndex = parts.findIndex((part) => part === "mir");
    const year = parts[rootIndex + 1];
    const fileName = parts.at(-1);

    if (rootIndex === -1 || !year || !fileName || fileName.startsWith(".")) {
      return;
    }

    if (!years.has(year)) {
      years.set(year, []);
    }

    years.get(year)!.push({
      key: filePath,
      name: fileName,
      url,
      extension: getFileExtension(fileName),
    });
  });

  return [...years.entries()]
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, files]) => ({
      key: year,
      label: year,
      files: files.sort((a, b) =>
        a.name.localeCompare(b.name, "es", {
          sensitivity: "base",
          numeric: true,
        }),
      ),
    }));
};

const mirTree = buildMirTree(mirAssets);

function Mir() {
  const [activeYear, setActiveYear] = useState(mirTree[0]?.key ?? "");

  const toggleYear = (yearKey: string) => {
    setActiveYear((current) => (current === yearKey ? "" : yearKey));
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Reporte de Avance Trimestral MIR</h1>
        </div>
      </section>

      <section className={styles.content} aria-label="Reportes MIR por año">
        {mirTree.length ? (
          mirTree.map((year) => {
            const isYearOpen = activeYear === year.key;

            return (
              <article
                className={`${styles.yearItem} ${isYearOpen ? styles.active : ""}`}
                key={year.key}
              >
                <button
                  type="button"
                  className={styles.yearHeader}
                  onClick={() => toggleYear(year.key)}
                  aria-expanded={isYearOpen}
                  aria-controls={`mir-year-${year.key}`}
                >
                  <h2>{year.label}</h2>
                  <span className={styles.toggleIcon} aria-hidden="true">
                    {isYearOpen ? "−" : "+"}
                  </span>
                </button>

                {isYearOpen && (
                  <div
                    className={styles.yearContent}
                    id={`mir-year-${year.key}`}
                  >
                    <ul
                      className={styles.fileList}
                      aria-label={`Archivos MIR de ${year.label}`}
                    >
                      {year.files.map((file) => (
                        <li key={file.key}>
                          <a
                            className={styles.fileLink}
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span
                              className={styles.fileType}
                              aria-hidden="true"
                            >
                              {file.extension}
                            </span>
                            <span className={styles.fileName}>
                              {file.name.replace(/\.[^.]+$/, "")}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })
        ) : (
          <p className={styles.emptyState}>
            No se encontraron archivos en la carpeta MIR.
          </p>
        )}
      </section>
    </main>
  );
}

export default Mir;
