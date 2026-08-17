import { useState } from "react";
import "./InformesFinancieros.css";
import trabajandoJaguar from "../assets/banner/Trabajando.jpg";
import { getFinancialYears } from "../services/finanzasInformes";
import {
  buildFinanceAssetUrl,
  getFinancialFileType,
} from "../utils/finanzasAssets";

const financialYears = getFinancialYears();
const initialYear = financialYears[0];
const initialQuarter = initialYear?.quarters[0];

function InformesFinancieros() {
  const [activeYear, setActiveYear] = useState<string>(
    initialYear ? String(initialYear.year) : "",
  );
  const [activeQuarter, setActiveQuarter] = useState<string>(
    initialQuarter?.id ?? "",
  );
  const [activeCategory, setActiveCategory] = useState<string>(
    initialQuarter?.categories[0]?.id ?? "",
  );

  const toggleYear = (yearKey: string) => {
    setActiveYear((current) => (current === yearKey ? "" : yearKey));
    setActiveQuarter("");
    setActiveCategory("");
  };

  const toggleQuarter = (quarterKey: string) => {
    setActiveQuarter((current) => (current === quarterKey ? "" : quarterKey));
    setActiveCategory("");
  };

  const toggleCategory = (categoryKey: string) => {
    setActiveCategory((current) =>
      current === categoryKey ? "" : categoryKey,
    );
  };

  return (
    <main className="informes-financieros-page">
      <section className="informes-financieros-hero">
        <div className="informes-financieros-hero-content">
          <h1>Informes Financieros</h1>
        </div>
      </section>

      <section
        className="informes-financieros-content"
        aria-label="Secciones de informes financieros"
      >
        {financialYears.length > 0 ? (
          financialYears.map((year) => {
            const yearKey = String(year.year);
            const isYearOpen = activeYear === yearKey;

            return (
              <article
                className={`informe-accordion-item informe-year-item ${
                  isYearOpen ? "active" : ""
                }`}
                key={yearKey}
              >
                <button
                  type="button"
                  className="informe-accordion-header"
                  onClick={() => toggleYear(yearKey)}
                  aria-expanded={isYearOpen}
                  aria-controls={`informe-content-year-${yearKey}`}
                >
                  <h2>
                    <span className="informe-header-icon" aria-hidden="true">
                      🗂️
                    </span>
                    <span className="informe-heading-label">{year.year}</span>
                  </h2>
                  <span className="informe-toggle-icon" aria-hidden="true">
                    {isYearOpen ? "−" : "+"}
                  </span>
                </button>

                {isYearOpen && (
                  <div
                    className="informe-accordion-content"
                    id={`informe-content-year-${yearKey}`}
                  >
                    <div className="informe-content-box informe-year-content">
                      {year.quarters.map((quarter) => {
                        const isQuarterOpen = activeQuarter === quarter.id;

                        return (
                          <article
                            className={`informe-subaccordion-item ${
                              isQuarterOpen ? "active" : ""
                            }`}
                            key={quarter.id}
                          >
                            <button
                              type="button"
                              className="informe-subaccordion-header"
                              onClick={() => toggleQuarter(quarter.id)}
                              aria-expanded={isQuarterOpen}
                              aria-controls={`informe-content-quarter-${yearKey}-${quarter.id}`}
                            >
                              <h3>
                                <span
                                  className="informe-subheader-icon"
                                  aria-hidden="true"
                                >
                                  ▸
                                </span>
                                <span className="informe-heading-label">
                                  {quarter.name}
                                </span>
                              </h3>
                              <span
                                className="informe-toggle-icon"
                                aria-hidden="true"
                              >
                                {isQuarterOpen ? "−" : "+"}
                              </span>
                            </button>

                            {isQuarterOpen && (
                              <div
                                className="informe-subaccordion-content"
                                id={`informe-content-quarter-${yearKey}-${quarter.id}`}
                              >
                                {quarter.categories.map((category) => {
                                  const isCategoryOpen =
                                    activeCategory === category.id;

                                  return (
                                    <article
                                      className={`informe-category-item ${
                                        isCategoryOpen ? "active" : ""
                                      }`}
                                      key={category.id}
                                    >
                                      <button
                                        type="button"
                                        className="informe-category-header"
                                        onClick={() =>
                                          toggleCategory(category.id)
                                        }
                                        aria-expanded={isCategoryOpen}
                                        aria-controls={`informe-content-category-${yearKey}-${quarter.id}-${category.id}`}
                                      >
                                        <h4>
                                          <span
                                            className="informe-category-icon"
                                            aria-hidden="true"
                                          >
                                            {category.icon ?? "📄"}
                                          </span>
                                          <span className="informe-heading-label">
                                            {category.name}
                                          </span>
                                        </h4>
                                        <span
                                          className="informe-toggle-icon"
                                          aria-hidden="true"
                                        >
                                          {isCategoryOpen ? "−" : "+"}
                                        </span>
                                      </button>

                                      {isCategoryOpen && (
                                        <div
                                          className="informe-category-content"
                                          id={`informe-content-category-${yearKey}-${quarter.id}-${category.id}`}
                                        >
                                          <ul
                                            className="informe-file-list"
                                            aria-label={`Archivos de ${category.name} en ${quarter.name}, ${year.year}`}
                                          >
                                            {category.files.map((file) => (
                                              <li key={file.id}>
                                                <a
                                                  href={buildFinanceAssetUrl(
                                                    year.year,
                                                    quarter.folder,
                                                    category.folder,
                                                    file.file,
                                                  )}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="informe-file-link"
                                                  aria-label={`${file.name} (${getFinancialFileType(file).toUpperCase()})`}
                                                >
                                                  <span
                                                    className="informe-file-icon"
                                                    aria-hidden="true"
                                                  ></span>
                                                  <span className="informe-file-name">
                                                    {file.name.replace(
                                                      /\.[^.]+$/,
                                                      "",
                                                    )}
                                                  </span>
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </article>
                                  );
                                })}
                              </div>
                            )}
                          </article>
                        );
                      })}
                    </div>
                  </div>
                )}
              </article>
            );
          })
        ) : (
          <article className="informe-accordion-item active">
            <div className="informe-accordion-content">
              <div className="informe-content-box">
                <img
                  src={trabajandoJaguar}
                  alt="Trabajando"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

export default InformesFinancieros;
