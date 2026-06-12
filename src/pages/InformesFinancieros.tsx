import { useState } from "react";
import "./InformesFinancieros.css";

const financialSections = [
  {
    id: "contable",
    title: "Información Contable",
    icon: "📘",
    description:
      "Consulta los reportes contables emitidos para el seguimiento financiero institucional.",
    documents: [],
  },
  {
    id: "presupuestal",
    title: "Información Presupuestal",
    icon: "📊",
    description:
      "Revisa información relacionada con el ejercicio, control y avance presupuestal.",
    documents: [],
  },
  {
    id: "programatica",
    title: "Información Programática",
    icon: "📈",
    description:
      "Encuentra reportes programáticos vinculados al cumplimiento de metas y objetivos.",
    documents: [],
  },
  {
    id: "otra",
    title: "Otra Información",
    icon: "📄",
    description:
      "Accede a documentación complementaria de transparencia financiera.",
    documents: [],
  },
];

function InformesFinancieros() {
  const [activeSection, setActiveSection] = useState<string>("contable");

  const toggleSection = (section: string) => {
    setActiveSection((current) => (current === section ? "" : section));
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
        {financialSections.map((section) => (
          <article
            className={`informe-accordion-item ${
              activeSection === section.id ? "active" : ""
            }`}
            key={section.id}
          >
            <button
              type="button"
              className="informe-accordion-header"
              onClick={() => toggleSection(section.id)}
              aria-expanded={activeSection === section.id}
              aria-controls={`informe-content-${section.id}`}
            >
              <h2>
                <span className="informe-header-icon" aria-hidden="true">
                  {section.icon}
                </span>
                {section.title}
              </h2>
              <span className="informe-toggle-icon" aria-hidden="true">
                {activeSection === section.id ? "−" : "+"}
              </span>
            </button>

            {activeSection === section.id && (
              <div
                className="informe-accordion-content"
                id={`informe-content-${section.id}`}
              >
                <div className="informe-content-box">
                  <p>{section.description}</p>

                  {section.documents.length > 0 ? (
                    <ul
                      className="informe-document-list"
                      aria-label={`Documentos de ${section.title}`}
                    >
                      {section.documents.map((document) => (
                        <li key={document}>{document}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="informe-empty-state">
                      Documentos pendientes de publicación.
                    </p>
                  )}
                </div>
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default InformesFinancieros;
