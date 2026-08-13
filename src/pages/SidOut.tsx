import { useState, type ComponentType } from "react";
import {
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiFileText,
  FiShield,
} from "react-icons/fi";
import styles from "./SidOut.module.css";

type SectionId = "normatividad" | "documentacion" | "calidad";

type Section = {
  id: SectionId;
  label: string;
  title: string;
  description: string;
  Icon: ComponentType<{ "aria-hidden"?: boolean }>;
};

type Resource = {
  title: string;
  description: string;
  Icon: ComponentType<{ "aria-hidden"?: boolean }>;
  href?: string;
};

const sections: Section[] = [
  {
    id: "normatividad",
    label: "Normatividad",
    title: "Normatividad institucional",
    description:
      "Conocer la normativa de la Universidad es fundamental para comprender los derechos, las obligaciones y los procedimientos institucionales. Esto asegura un marco de convivencia ordenado y transparente que contribuye al logro de los objetivos educativos.",
    Icon: FiShield,
  },
  {
    id: "documentacion",
    label: "Documentación",
    title: "Documentos y procedimientos",
    description:
      "Los documentos, procedimientos e instrucciones de trabajo de la Universidad son esenciales para estandarizar las operaciones, optimizar los recursos y garantizar que todas las tareas se realicen de manera eficiente y consistente.",
    Icon: FiFileText,
  },
  {
    id: "calidad",
    label: "Calidad educativa",
    title: "Calidad educativa",
    description:
      "En este apartado se pueden consultar las certificaciones, los reconocimientos y las acreditaciones oficiales que respaldan la calidad y excelencia académica de nuestra institución ante organismos externos.",
    Icon: FiAward,
  },
];

const resources: Resource[] = [
  {
    title: "Sistema de Gestión de Calidad",
    description:
      "Información y lineamientos del Sistema de Gestión de Calidad.",
    Icon: FiCheckCircle,
  },
  {
    title: "Curso de Inducción",
    description:
      "Material de apoyo para el proceso de inducción institucional.",
    Icon: FiBookOpen,
  },
  {
    title: "Manual de Calidad",
    description:
      "Consulta los criterios que orientan la gestión de la calidad.",
    Icon: FiFileText,
  },
];

function Documentacion() {
  const [activeSection, setActiveSection] = useState<SectionId>("normatividad");
  const currentSection =
    sections.find((section) => section.id === activeSection) ?? sections[0];
  const CurrentIcon = currentSection.Icon;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="documentacion-title">
        <div className={styles.heroContent}>
          <h1 id="documentacion-title">Sistema de Gestión de Calidad</h1>
        </div>
      </section>

      <section
        className={styles.content}
        aria-labelledby="quality-information-title"
      >
        <div className={styles.sectionHeading}>
          <h2 id="quality-information-title">Información del SGC</h2>
        </div>

        <div className={styles.tabs}>
          <div
            className={styles.tabList}
            role="tablist"
            aria-label="Secciones del Sistema de Gestión de Calidad"
          >
            {sections.map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                id={`tab-${id}`}
                className={`${styles.tabButton} ${
                  activeSection === id ? styles.activeTab : ""
                }`}
                role="tab"
                aria-selected={activeSection === id}
                aria-controls={`panel-${id}`}
                tabIndex={activeSection === id ? 0 : -1}
                onClick={() => setActiveSection(id)}
              >
                <Icon aria-hidden />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <article
            key={currentSection.id}
            id={`panel-${currentSection.id}`}
            className={styles.tabPanel}
            role="tabpanel"
            aria-labelledby={`tab-${currentSection.id}`}
          >
            <div className={styles.panelIcon} aria-hidden="true">
              <CurrentIcon />
            </div>
            <div>
              <h3>{currentSection.title}</h3>
              <p>{currentSection.description}</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.resources} aria-labelledby="resources-title">
        <div className={styles.resourcesInner}>
          <div className={styles.sectionHeading}>
            <p>Documentos destacados</p>
            <h2 id="resources-title">Recursos de calidad</h2>
          </div>

          <div className={styles.resourceGrid}>
            {resources.map(({ title, description, Icon, href }) => (
              <article className={styles.resourceCard} key={title}>
                <div className={styles.resourceIcon} aria-hidden="true">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    Consultar documento
                  </a>
                ) : (
                  <span className={styles.pending}>Documento por publicar</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Documentacion;
