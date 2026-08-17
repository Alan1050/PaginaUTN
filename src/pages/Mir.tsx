import { useState } from "react";
import styles from "./Mir.module.css";
import { obtenerAniosMir } from "../services/informesMir";

const aniosMir = obtenerAniosMir();

const obtenerEtiquetaTipo = (tipo: string | undefined, archivo: string) =>
  (tipo || archivo.split(".").pop() || "archivo").toUpperCase();

function Mir() {
  const [activeYear, setActiveYear] = useState(
    aniosMir[0] ? String(aniosMir[0].anio) : "",
  );

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
        {aniosMir.length ? (
          aniosMir.map((year) => {
            const yearKey = String(year.anio);
            const isYearOpen = activeYear === yearKey;

            return (
              <article
                className={`${styles.yearItem} ${isYearOpen ? styles.active : ""}`}
                key={yearKey}
              >
                <button
                  type="button"
                  className={styles.yearHeader}
                  onClick={() => toggleYear(yearKey)}
                  aria-expanded={isYearOpen}
                  aria-controls={`mir-year-${yearKey}`}
                >
                  <h2>{year.anio}</h2>
                  <span className={styles.toggleIcon} aria-hidden="true">
                    {isYearOpen ? "−" : "+"}
                  </span>
                </button>

                {isYearOpen && (
                  <div
                    className={styles.yearContent}
                    id={`mir-year-${yearKey}`}
                  >
                    {year.archivos.length ? (
                      <ul
                        className={styles.fileList}
                        aria-label={`Archivos MIR de ${year.anio}`}
                      >
                        {year.archivos.map((file) => (
                          <li key={file.id}>
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
                                {obtenerEtiquetaTipo(file.tipo, file.archivo)}
                              </span>
                              <span className={styles.fileName}>
                                {file.nombre.replace(/\.[^.]+$/, "")}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className={styles.emptyState}>
                        No hay archivos MIR disponibles para {year.anio}.
                      </p>
                    )}
                  </div>
                )}
              </article>
            );
          })
        ) : (
          <p className={styles.emptyState}>
            No hay informes MIR disponibles.
          </p>
        )}
      </section>
    </main>
  );
}

export default Mir;
