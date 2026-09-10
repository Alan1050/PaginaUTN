import { useState } from "react";
import {
  FaLaptopCode,
  FaUtensils,
  FaChartLine,
  FaSeedling,
  FaSolarPanel,
  FaMapMarkedAlt,
  FaUserGraduate,
} from "react-icons/fa";
import styles from "./Posgrados.module.css";
import FooterPosgrados from "../components/FooterPosgrados";
import banner from "../assets/banner/bannerInvestigacionPosgrados.jpg";

interface Compromiso {
  id: number;
  numero: string;
  title: string;
  description: string;
  icon: string;
}

const compromisos: Compromiso[] = [
  {
    id: 1,
    numero: "01",
    title: "COMPROMISO E INCIDENCIA SOCIAL",
    description:
      "Nuestra labor científica se fundamenta en la responsabilidad hacia el entorno. Apostamos por proyectos multi e interdisciplinarios diseñados para resolver problemas críticos, elevar la calidad de vida de las personas y garantizar la protección del medio ambiente. En la UT evitamos prácticas de extractivismo académico y promovemos la construcción colectivo del conocimiento.",
    icon: "🤝",
  },
  {
    id: 2,
    numero: "02",
    title: "INTEGRIDAD Y ÉTICA EN LA INVESTIGACIÓN",
    description:
      "Toda actividad científica se desarrolla bajo los más estrictos estándares éticos, asegurando el respeto, la transparencia y la validez en cada etapa del proceso investigativo.",
    icon: "⚖️",
  },
  {
    id: 3,
    numero: "03",
    title: "CIENCIA DE ACCESO ABIERTO",
    description:
      "Promovemos la democratización del conocimiento mediante políticas de ciencia abierta, permitiendo que los hallazgos sean consultables y aprovechables por toda la sociedad sin barreras técnicas o económicas.",
    icon: "🔓",
  },
  {
    id: 4,
    numero: "04",
    title: "ALINEACIÓN ESTRATÉGICA CON EL DESARROLLO NACIONAL",
    description:
      "Vinculamos nuestra producción científica con los planes de desarrollo gubernamentales, asegurando que la investigación contribuya directamente al crecimiento y a las metas estratégicas del sector público.",
    icon: "🎯",
  },
  {
    id: 5,
    numero: "05",
    title: "PERSPECTIVA DE DERECHOS HUMANOS E INTERSECCIONALIDAD",
    description:
      "Abordamos la investigación reconociendo la diversidad de contextos y las brechas de desigualdad, garantizando que el conocimiento respete la dignidad humana y las realidades múltiples de la población.",
    icon: "👥",
  },
  {
    id: 6,
    numero: "06",
    title: "ENFOQUE DE GÉNERO TRANSVERSAL",
    description:
      "Implementamos una perspectiva de género que permite identificar y reducir sesgos, promoviendo la equidad tanto en la conformación de equipos de investigación como en el impacto de los resultados.",
    icon: "⚧️",
  },
  {
    id: 7,
    numero: "07",
    title: "COLABORACIÓN INTERINSTITUCIONAL Y REDES DE CONOCIMIENTO",
    description:
      "Fomentamos una cultura científica colaborativa, participando activamente en redes de trabajo nacionales e internacionales que potencien el intercambio de saberes y recursos.",
    icon: "🌐",
  },
  {
    id: 8,
    numero: "08",
    title: "SOPORTE A LA POLÍTICA PÚBLICA",
    description:
      "Generamos evidencia científica sólida que sirve como base para el diseño, implementación y evaluación de políticas públicas efectivas, fundamentadas en datos y realidades sociales.",
    icon: "🏛️",
  },
  {
    id: 9,
    numero: "09",
    title: "RETROALIMENTACIÓN ACADÉMICA E INSTITUCIONAL",
    description:
      "La actividad científica nutre de forma constante nuestras políticas académicas y nuestro deber ser, asegurando una evolución continua de los estándares educativos y administrativos de la institución.",
    icon: "📈",
  },
  {
    id: 10,
    numero: "10",
    title: "CIENCIA PARA LA TRANSFORMACIÓN GLOBAL",
    description:
      "Concebimos el conocimiento como el motor fundamental para la construcción de un futuro más justo, sostenible y humano.",
    icon: "🌍",
  },
];

const gruposInvestigacion = [
  {
    title: "TEDES",
    subtitle: "Tecnología Educativa, Desarrollo de Software - Universidad Tecnológica de Nayarit",
    researchers: 4,
    icon: <FaLaptopCode />,
  },
  {
    title: "CEINGASTRO UTNAY",
    subtitle: "Centro de Investigación en Gastronomía",
    researchers: 8,
    icon: <FaUtensils />,
  },
  {
    title: "Investigaciones Económicas y Empresariales",
    subtitle: "Cuerpo Académico (UTNay)",
    researchers: 3,
    icon: <FaChartLine />,
  },
  {
    title: "Tecnologías Agroalimentarias de la UTN",
    subtitle: "(También referido como Grupo de Investigación de Tecnologías Agroalimentarias)",
    researchers: 6,
    icon: <FaSeedling />,
  },
  {
    title: "ITCAR",
    subtitle: "Innovación Tecnológica en Ciencias Ambientales y Energías Renovables",
    researchers: 2,
    icon: <FaSolarPanel />,
  },
  {
    title: "CADIT",
    subtitle: "Cuerpo Académico Desarrollo e Innovación en el Turismo",
    researchers: 2,
    icon: <FaMapMarkedAlt />,
  },
];

const sniIntegrantes = [
  { nombre: "Lizet Aguirre Güitrón", nivel: "Nivel 1", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Jazmín Pérez Méndez", nivel: "Nivel C", estatus: "Promoción 2026" },
  { nombre: "Erika Soto González", nivel: "Nivel C", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Janitzín Cárdenas Castellanos", nivel: "Nivel C", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Gloria Samantha Béjar Rivera", nivel: "Nivel C", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Martha Ruth Camacho Vázquez", nivel: "Nivel C", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Nadia Teresa Adaile Benitez", nivel: "Nivel C", estatus: "Promoción 2026" }
];

const Posgrados = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const activeCompromiso = compromisos.find(c => c.id === activeId) || compromisos[0];

  return (
    <div className={styles.posgradosContainer}>
      {/* Banner Hero */}
      <header className={styles.heroBanner}>
        <img src={banner} alt="Banner de Investigación y Posgrados" />
      </header>

      {/* Contenido Principal */}
      <main className={styles.mainContent}>


        {/* Sección de Compromisos */}
        <section className={styles.compromisosSection} aria-labelledby="compromisos-heading">
          <div className={styles.sectionHeader}>
            <h2 id="compromisos-heading" className={styles.sectionTitle}>
              <span className={styles.titleIcon} aria-hidden="true">🎓</span>
              Compromiso de los Investigadores
            </h2>
            <div className={styles.titleDecoration} aria-hidden="true">
              <span className={styles.decoSmall}></span>
              <span className={styles.decoLarge}></span>
              <span className={styles.decoSmall}></span>
            </div>
          </div>

          {/* Interactive Showcase Container */}
          <div className={styles.showcaseContainer}>
            {/* Menú de Pestañas (Navegación Izquierda) */}
            <nav className={styles.showcaseMenu} aria-label="Lista de compromisos">
              {compromisos.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`${styles.menuItem} ${activeId === item.id ? styles.active : ""}`}
                  aria-pressed={activeId === item.id}
                >
                  <span className={styles.menuNumber}>{item.numero}</span>
                  <span className={styles.menuTitle}>{item.title}</span>
                </button>
              ))}
            </nav>

            {/* Tarjeta Principal de Contenido (Derecha) */}
            <article className={styles.showcaseCard}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{activeCompromiso.title}</h3>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.descriptionAccent} aria-hidden="true" />
                  <p className={styles.cardDescription}>{activeCompromiso.description}</p>
                </div>
              </div>

              {/* Icono de fondo como marca de agua */}
              <div className={styles.watermarkIcon} aria-hidden="true">
                {activeCompromiso.icon}
              </div>
            </article>
          </div>
        </section>

        {/* Sección de Grupos de Investigación */}
        <section className={styles.gruposSection} aria-labelledby="grupos-heading">
          <div className={styles.sectionHeader}>
            <h2 id="grupos-heading" className={styles.sectionTitle}>
              <span className={styles.titleIcon} aria-hidden="true">🔬</span>
              Grupos de Investigación UTN
            </h2>
            <div className={styles.titleDecoration} aria-hidden="true">
              <span className={styles.decoSmall}></span>
              <span className={styles.decoLarge}></span>
              <span className={styles.decoSmall}></span>
            </div>
          </div>

          <div className={styles.gruposGrid}>
            {gruposInvestigacion.map((grupo, idx) => (
              <article key={idx} className={styles.grupoCard}>
                <div className={styles.grupoIconWrapper}>
                  {grupo.icon}
                </div>
                <h3 className={styles.grupoTitle}>{grupo.title}</h3>
                <p className={styles.grupoSubtitle}>{grupo.subtitle}</p>
                <div className={styles.grupoResearchers}>
                  <span className={styles.researchersNumber}>{grupo.researchers}</span>
                  <span className={styles.researchersText}>Personas Investigadoras</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sección del SNI */}
        <section className={styles.sniSection} aria-labelledby="sni-heading">
          <div className={styles.sectionHeader}>
            <h2 id="sni-heading" className={styles.sectionTitle}>
              <span className={styles.titleIcon} aria-hidden="true">🎖️</span>
              Integrantes del Sistema Nacional de Investigadoras e Investigadores
            </h2>
            <div className={styles.titleDecoration} aria-hidden="true">
              <span className={styles.decoSmall}></span>
              <span className={styles.decoLarge}></span>
              <span className={styles.decoSmall}></span>
            </div>
          </div>

          <div className={styles.sniGrid}>
            {sniIntegrantes.map((miembro, idx) => (
              <article key={idx} className={styles.sniCard}>
                <div className={styles.sniCardHeader}>
                  <div className={styles.sniIconWrapper}>
                    <FaUserGraduate />
                  </div>
                  <h3 className={styles.sniName}>{miembro.nombre}</h3>
                </div>
                <div className={styles.sniCardBody}>
                  <div className={styles.sniBadgeContainer}>
                    <span className={styles.sniLabel}>Nivel que Aspira</span>
                    <span className={styles.sniNivel}>{miembro.nivel}</span>
                  </div>
                  <div className={styles.sniBadgeContainer} style={{ justifyContent: 'center', marginTop: '4px' }}>
                    <span className={`${styles.sniEstatus} ${miembro.estatus.includes('Vigente') ? styles.estatusVigente : styles.estatusPromocion}`}>
                      {miembro.estatus}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterPosgrados />
    </div>
  );
};

export default Posgrados;
