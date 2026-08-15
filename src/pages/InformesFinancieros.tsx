import { useEffect, useMemo, useState } from "react";
import "./InformesFinancieros.css";
import trabajandoJaguar from "../assets/banner/Trabajando.jpg";

import { URL_ASSETS_FINANZAS } from "../config/constants";

type CategoryKey = "contable" | "presupuestal" | "programatico" | "otros";

type FinancialFile = {
  name: string;
  url: string;
};

type CategoryNode = {
  key: CategoryKey;
  label: string;
  icon: string;
  files: FinancialFile[];
};

type QuarterNode = {
  key: string;
  label: string;
  filesCount: number;
  categories: CategoryNode[];
};

type YearNode = {
  key: string;
  label: string;
  filesCount: number;
  quarters: QuarterNode[];
};

const categoryOrder: Array<{
  key: CategoryKey;
  label: string;
  icon: string;
  matchers: string[];
}> = [
  {
    key: "contable",
    label: "Contable",
    icon: "📘",
    matchers: ["CONTABLE", "CONTABLLE"],
  },
  {
    key: "presupuestal",
    label: "Presupuestal",
    icon: "📊",
    matchers: ["PRESUPUESTAL"],
  },
  {
    key: "programatico",
    label: "Programático",
    icon: "📈",
    matchers: [
      "PROGRAMATICO",
      "PROGRAMATICOS",
      "PROGRAMÁTICO",
      "PROGRAMÁTICOS",
    ],
  },
  {
    key: "otros",
    label: "Otros Informes",
    icon: "📄",
    matchers: ["OTROS", "OTRO", "INFORMES"],
  },
];

const quarterOrder = [
  {
    key: "primer-trimestre",
    label: "Primer trimestre",
    matchers: ["PRIMER", "1ER", "1ERO", "1ER."],
  },
  {
    key: "segundo-trimestre",
    label: "Segundo trimestre",
    matchers: ["SEGUNDO", "2DO", "2DO.", "2DA"],
  },
  {
    key: "tercer-trimestre",
    label: "Tercer trimestre",
    matchers: ["TERCER", "3ER", "3ER.", "3RO", "3RO."],
  },
  {
    key: "cuarto-trimestre",
    label: "Cuarto trimestre",
    matchers: ["CUARTO", "4TO", "4TO.", "4TA"],
  },
];

const pdfFiles = import.meta.glob("../assets/InformesFinancieros/**/*.pdf", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "");

const getQuarterInfo = (segment: string) =>
  quarterOrder.find((quarter) =>
    quarter.matchers.some((matcher) =>
      normalizeText(segment).includes(normalizeText(matcher)),
    ),
  );

const getCategoryInfo = (segment: string) =>
  categoryOrder.find((category) =>
    category.matchers.some((matcher) =>
      normalizeText(segment).includes(normalizeText(matcher)),
    ),
  ) ?? categoryOrder[3];

const getReadableFileName = (filePath: string) =>
  filePath.split("/").pop() ?? filePath;

const buildTree = (files: Record<string, string>): YearNode[] => {
  const years = new Map<
    string,
    {
      label: string;
      quarters: Map<
        string,
        {
          label: string;
          categories: Map<CategoryKey, FinancialFile[]>;
        }
      >;
    }
  >();

  Object.entries(files).forEach(([filePath, url]) => {
    const parts = filePath.split("/");
    const rootIndex = parts.findIndex((part) => part === "InformesFinancieros");

    if (rootIndex === -1 || !parts[rootIndex + 1] || !parts[rootIndex + 2]) {
      return;
    }

    const yearKey = parts[rootIndex + 1];
    const quarterSegment = parts[rootIndex + 2];
    const categorySegment = parts[rootIndex + 3] ?? "Otros Informes";

    const quarterInfo = getQuarterInfo(quarterSegment);
    const categoryInfo = getCategoryInfo(categorySegment);

    if (!quarterInfo) {
      return;
    }

    if (!years.has(yearKey)) {
      years.set(yearKey, {
        label: yearKey,
        quarters: new Map(),
      });
    }

    const yearNode = years.get(yearKey)!;

    if (!yearNode.quarters.has(quarterInfo.key)) {
      yearNode.quarters.set(quarterInfo.key, {
        label: quarterInfo.label,
        categories: new Map(),
      });
    }

    const quarterNode = yearNode.quarters.get(quarterInfo.key)!;

    if (!quarterNode.categories.has(categoryInfo.key)) {
      quarterNode.categories.set(categoryInfo.key, []);
    }

    quarterNode.categories.get(categoryInfo.key)!.push({
      name: getReadableFileName(filePath),
      url,
    });
  });

  return [...years.entries()]
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([yearKey, yearNode]) => {
      const quarters = quarterOrder
        .filter((quarter) => yearNode.quarters.has(quarter.key))
        .map((quarter) => {
          const quarterNode = yearNode.quarters.get(quarter.key)!;

          const categories = categoryOrder
            .filter((category) => quarterNode.categories.has(category.key))
            .map((category) => ({
              key: category.key,
              label: category.label,
              icon: category.icon,
              files: [...quarterNode.categories.get(category.key)!].sort(
                (a, b) =>
                  a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
              ),
            }));

          const filesCount = categories.reduce(
            (total, category) => total + category.files.length,
            0,
          );

          return {
            key: quarter.key,
            label: quarter.label,
            filesCount,
            categories,
          };
        });

      const filesCount = quarters.reduce(
        (total, quarter) => total + quarter.filesCount,
        0,
      );

      return {
        key: yearKey,
        label: yearNode.label,
        filesCount,
        quarters,
      };
    });
};

function InformesFinancieros() {
  const yearTree = useMemo(() => buildTree(pdfFiles), []);
  const [activeYear, setActiveYear] = useState<string>("");
  const [activeQuarter, setActiveQuarter] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    if (!yearTree.length) {
      return;
    }

    setActiveYear(yearTree[0].key);
    const firstQuarter = yearTree[0].quarters[0];
    setActiveQuarter(firstQuarter?.key ?? "");
    setActiveCategory(firstQuarter?.categories[0]?.key ?? "");
  }, [yearTree]);

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
        {yearTree.length > 0 ? (
          yearTree.map((year) => {
            const isYearOpen = activeYear === year.key;

            return (
              <article
                className={`informe-accordion-item informe-year-item ${
                  isYearOpen ? "active" : ""
                }`}
                key={year.key}
              >
                <button
                  type="button"
                  className="informe-accordion-header"
                  onClick={() => toggleYear(year.key)}
                  aria-expanded={isYearOpen}
                  aria-controls={`informe-content-year-${year.key}`}
                >
                  <h2>
                    <span className="informe-header-icon" aria-hidden="true">
                      🗂️
                    </span>
                    <span className="informe-heading-label">{year.label}</span>
                  </h2>
                  <span className="informe-toggle-icon" aria-hidden="true">
                    {isYearOpen ? "−" : "+"}
                  </span>
                </button>

                {isYearOpen && (
                  <div
                    className="informe-accordion-content"
                    id={`informe-content-year-${year.key}`}
                  >
                    <div className="informe-content-box informe-year-content">
                      {year.quarters.map((quarter) => {
                        const isQuarterOpen = activeQuarter === quarter.key;

                        return (
                          <article
                            className={`informe-subaccordion-item ${
                              isQuarterOpen ? "active" : ""
                            }`}
                            key={quarter.key}
                          >
                            <button
                              type="button"
                              className="informe-subaccordion-header"
                              onClick={() => toggleQuarter(quarter.key)}
                              aria-expanded={isQuarterOpen}
                              aria-controls={`informe-content-quarter-${year.key}-${quarter.key}`}
                            >
                              <h3>
                                <span
                                  className="informe-subheader-icon"
                                  aria-hidden="true"
                                >
                                  ▸
                                </span>
                                <span className="informe-heading-label">
                                  {quarter.label}
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
                                id={`informe-content-quarter-${year.key}-${quarter.key}`}
                              >
                                {quarter.categories.map((category) => {
                                  const isCategoryOpen =
                                    activeCategory === category.key;

                                  return (
                                    <article
                                      className={`informe-category-item ${
                                        isCategoryOpen ? "active" : ""
                                      }`}
                                      key={category.key}
                                    >
                                      <button
                                        type="button"
                                        className="informe-category-header"
                                        onClick={() =>
                                          toggleCategory(category.key)
                                        }
                                        aria-expanded={isCategoryOpen}
                                        aria-controls={`informe-content-category-${year.key}-${quarter.key}-${category.key}`}
                                      >
                                        <h4>
                                          <span
                                            className="informe-category-icon"
                                            aria-hidden="true"
                                          >
                                            {category.icon}
                                          </span>
                                          <span className="informe-heading-label">
                                            {category.label}
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
                                          id={`informe-content-category-${year.key}-${quarter.key}-${category.key}`}
                                        >
                                          <ul
                                            className="informe-file-list"
                                            aria-label={`Archivos de ${category.label} en ${quarter.label}, ${year.label}`}
                                          >
                                            {category.files.map((file) => (
                                              <li
                                                key={`${year.key}-${quarter.key}-${category.key}-${file.name}`}
                                              >
                                                <a
                                                  href={file.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="informe-file-link"
                                                >
                                                  <span
                                                    className="informe-file-icon"
                                                    aria-hidden="true"
                                                  ></span>
                                                  <span className="informe-file-name">
                                                    {file.name.replace(
                                                      /\.pdf$/i,
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
