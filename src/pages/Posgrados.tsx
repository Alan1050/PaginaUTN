import { useState } from "react";
import {
  FaLaptopCode,
  FaUtensils,
  FaChartLine,
  FaSeedling,
  FaSolarPanel,
  FaMapMarkedAlt,
  FaUserGraduate,
  FaUserTie,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaRobot,
  FaCogs,
  FaUniversity,
  FaChartBar,
  FaBolt,
  FaShieldAlt,
  FaTag,
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
  { nombre: "Dra. Miriam Fabiola González Cobian", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Dra. Nadia Teresa Adaile Benitez", estatus: "Promoción 2026" },
  { nombre: "Dra. Lizet Aguirre Güitrón", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Dra. Martha Ruth Camacho Vázquez", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Dra. Jazmín Pérez Méndez", estatus: "Promoción 2026" },
  { nombre: "Dra. Erika Soto González", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Dra. Janitzín Cárdenas Castellanos", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Dra. Gloria Samantha Béjar Rivera", estatus: "Con Reconocimiento Vigente" },
  { nombre: "Dra. Nadia Grisell de Jesús Espinoza", estatus: "Promoción 2026" },
  { nombre: "Dr. Jordan Vladimir Tello Ibarra", estatus: "Con Reconocimiento Vigente" },
];

interface ProyectoInvestigacion {
  id: number;
  numero: string;
  folio: string;
  responsables: string[];
  titulo: string;
  area: string;
}

const proyectosInvestigacion: ProyectoInvestigacion[] = [
  {
    id: 1,
    numero: "01",
    folio: "SA_CI_UTNAY_001_2026",
    responsables: ["Martha Lorena Guzmán Robles"],
    titulo: "Formulaciones farmacéuticas a base de antioxidantes funcionalizados y nanoencapsulados",
    area: "Ingenierías",
  },
  {
    id: 2,
    numero: "02",
    folio: "SA_CI_UTNAY_002_2026",
    responsables: ["Gloria Samantha Béjar Rivera"],
    titulo: "Análisis holístico de la sostenibilidad en IES desde el cumplimiento normativo. Caso: UAN",
    area: "Ingenierías",
  },
  {
    id: 3,
    numero: "03",
    folio: "SA_CI_UTNAY_003_2026",
    responsables: ["Jazmín Pérez Méndez"],
    titulo: "Impacto de la IA en la educación superior",
    area: "IA y Comunicación",
  },
  {
    id: 4,
    numero: "04",
    folio: "SA_CI_UTNAY_004_2026",
    responsables: ["Sergio Raúl Bonilla Alejo"],
    titulo: "Mecanismos de interacción hidrodinámica y límites teóricos de conversión energética...",
    area: "IA y Comunicación",
  },
  {
    id: 5,
    numero: "05",
    folio: "SA_CI_UTNAY_005_2026",
    responsables: ["Martha Lorena Guzmán Robles"],
    titulo: "Modelo de intervención para la competitividad en la cadena de café Nayarita",
    area: "Ingenierías",
  },
  {
    id: 6,
    numero: "06",
    folio: "SA_CI_UTNAY_006_2026",
    responsables: ["Jordan Vladimir Tello Ibarra"],
    titulo: "Reconstrucción de la memoria histórica a 25 años de la UT Nayarit. Un estudio desde las experiencias vividas",
    area: "Secretaría Académica",
  },
  {
    id: 7,
    numero: "07",
    folio: "SA_CI_UTNAY_007_2026",
    responsables: ["Martha Ruth Camacho Vázquez"],
    titulo: "Ética en el uso de la Inteligencia Artificial",
    area: "IA y Comunicación",
  },
  {
    id: 8,
    numero: "08",
    folio: "SA_CI_UTNAY_008_2026",
    responsables: ["Yecatl Mata Robledo"],
    titulo: "Determinación de factores operativos de la cadena de suministro de zonas apícolas...",
    area: "Ingenierías",
  },
  {
    id: 9,
    numero: "09",
    folio: "SA_CI_UTNAY_009_2026",
    responsables: ["Janitzín Cárdenas Castellanos"],
    titulo: "Tecnología para la Orientación en Salud Mental / Realidad Aumentada y QR",
    area: "IA y Comunicación",
  },
  {
    id: 10,
    numero: "10",
    folio: "SA_CI_UTNAY_010_2026",
    responsables: ["Xóchitl Estrada Neri"],
    titulo: "La sustentabilidad de la micro y pequeña empresa de Latinoamérica: estrategia y operación",
    area: "Económico-Admva.",
  },
  {
    id: 11,
    numero: "11",
    folio: "SA_CI_UTNAY_011_2026",
    responsables: ["Rosario de Jesús García Chávez"],
    titulo: "Academia de Ciencias Básicas para la retención estudiantil",
    area: "Ingenierías",
  },
  {
    id: 12,
    numero: "12",
    folio: "SA_CI_UTNAY_012_2026",
    responsables: [
      "Sandra Díaz Montes",
      "Suhei Lizette Cabrera Gregoire",
      "Ma. Del Rosario Villanueva Macías",
    ],
    titulo: "Valorización biotecnológica de subproductos de Jaka (Enfoque Economía Circular)",
    area: "Ingenierías",
  },
  {
    id: 13,
    numero: "13",
    folio: "SA_CI_UTNAY_013_2026",
    responsables: ["Martha Lorena Guzmán Robles"],
    titulo: "Equipamiento del laboratorio de Química de Ing. en Tecnologías Bioalimentarias",
    area: "Ingenierías",
  },
  {
    id: 14,
    numero: "14",
    folio: "SA_CI_UTNAY_014_2026",
    responsables: ["Lizet Aguirre Güitrón"],
    titulo: "Valorización biotecnológica de subproductos de jaca (Agentes de biocontrol)",
    area: "Electromecánica Ind.",
  },
  {
    id: 15,
    numero: "15",
    folio: "SA_CI_UTNAY_015_2026",
    responsables: ["Julissa Gómez Varela"],
    titulo: "Ibero4jobs - Universidades de Iberoamérica tejiendo lazos con el sector empresarial",
    area: "Secretaría Académica",
  },
  {
    id: 16,
    numero: "16",
    folio: "SA_CI_UTNAY_016_2026",
    responsables: ["Martin Isidro Jimenez Flores"],
    titulo: "La andragogía y el aprendizaje por competencias en la educación universitaria",
    area: "Seguridad Públicas",
  },
];


const getAreaBadgeClass = (area: string) => {
  switch (area) {
    case "Ingenierías":
      return styles.areaIngenierias;
    case "IA y Comunicación":
      return styles.areaIa;
    case "Secretaría Académica":
      return styles.areaAcademica;
    case "Económico-Admva.":
      return styles.areaEconomico;
    case "Electromecánica Ind.":
      return styles.areaElectromecanica;
    case "Seguridad Públicas":
      return styles.areaSeguridad;
    default:
      return styles.areaDefault;
  }
};

const getAreaIcon = (area: string) => {
  switch (area) {
    case "IA y Comunicación":
      return <FaRobot />;
    case "Ingenierías":
      return <FaCogs />;
    case "Secretaría Académica":
      return <FaUniversity />;
    case "Económico-Admva.":
      return <FaChartBar />;
    case "Electromecánica Ind.":
      return <FaBolt />;
    case "Seguridad Públicas":
      return <FaShieldAlt />;
    default:
      return <FaTag />;
  }
};

const getAreaWatermark = (area: string) => {
  switch (area) {
    case "IA y Comunicación":
      return "🤖";
    case "Ingenierías":
      return "⚙️";
    case "Secretaría Académica":
      return "🏛️";
    case "Económico-Admva.":
      return "📊";
    case "Electromecánica Ind.":
      return "⚡";
    case "Seguridad Públicas":
      return "🛡️";
    default:
      return "🔬";
  }
};

const Posgrados = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [activeProyectoId, setActiveProyectoId] = useState<number>(1);
  //const [copiedFolio, setCopiedFolio] = useState<string | null>(null);
/*
  const handleCopyFolio = (folio: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(folio);
    setCopiedFolio(folio);
    setTimeout(() => {
      setCopiedFolio(null);
    }, 2000);
  };
  */

  const activeCompromiso =
    compromisos.find((c) => c.id === activeId) || compromisos[0];

  const activeProyecto =
    proyectosInvestigacion.find((p) => p.id === activeProyectoId) ||
    proyectosInvestigacion[0];

  const handlePrevProyecto = () => {
    const currentIndex = proyectosInvestigacion.findIndex(
      (p) => p.id === activeProyecto.id
    );
    if (currentIndex > 0) {
      setActiveProyectoId(proyectosInvestigacion[currentIndex - 1].id);
    } else {
      setActiveProyectoId(
        proyectosInvestigacion[proyectosInvestigacion.length - 1].id
      );
    }
  };

  const handleNextProyecto = () => {
    const currentIndex = proyectosInvestigacion.findIndex(
      (p) => p.id === activeProyecto.id
    );
    if (currentIndex < proyectosInvestigacion.length - 1) {
      setActiveProyectoId(proyectosInvestigacion[currentIndex + 1].id);
    } else {
      setActiveProyectoId(proyectosInvestigacion[0].id);
    }
  };

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

        {/* Sección de Proyectos de Investigación (Showcase Interactivo) */}
        <section className={styles.proyectosSection} aria-labelledby="proyectos-heading">
          <div className={styles.sectionHeader}>

            <h2 id="proyectos-heading" className={styles.sectionTitle}>
              <span className={styles.titleIcon} aria-hidden="true">🔬</span>
              Proyectos de Investigación
            </h2>
            <div className={styles.titleDecoration} aria-hidden="true">
              <span className={styles.decoSmall}></span>
              <span className={styles.decoLarge}></span>
              <span className={styles.decoSmall}></span>
            </div>
          </div>

          {/* Showcase Interactivo (Mismo estilo que Compromisos) */}
          <div className={styles.proyectoShowcaseContainer}>
            {/* Menú de Navegación Izquierda */}
            <nav className={styles.proyectoShowcaseMenu} aria-label="Lista de proyectos de investigación">
              {proyectosInvestigacion.map((proyecto) => {
                const isSelected = activeProyecto.id === proyecto.id;
                return (
                  <button
                    key={proyecto.id}
                    type="button"
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setActiveProyectoId(proyecto.id);
                    }}
                    className={`${styles.proyectoMenuItem} ${isSelected ? styles.active : ""}`}
                    aria-pressed={isSelected}
                  >
                    <span className={styles.proyectoMenuNumber}>{proyecto.numero}</span>
                    <div className={styles.proyectoMenuContent}>
                      <span className={styles.proyectoMenuTitle}>{proyecto.titulo}</span>
                      <span className={styles.proyectoMenuMeta}>
                        <span>{proyecto.area}</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Tarjeta Principal de Contenido (Derecha) */}
            <article className={styles.proyectoShowcaseCard}>
              <div className={styles.proyectoCardTop}>
                <div className={styles.topBadgesRow}>
                  <span className={`${styles.areaBadge} ${getAreaBadgeClass(activeProyecto.area)}`}>
                    <span className={styles.areaBadgeIcon}>{getAreaIcon(activeProyecto.area)}</span>
                    <span>{activeProyecto.area}</span>
                  </span>
                </div>

                {/*
                                <div className={styles.folioBox}>
                  <span className={styles.folioLabel}>Folio:</span>
                  <span className={styles.folioText}>{activeProyecto.folio}</span>
                  <button
                    type="button"
                    className={styles.copyFolioBtn}
                    onClick={(e) => handleCopyFolio(activeProyecto.folio, e)}
                    title="Copiar folio al portapapeles"
                    aria-label="Copiar folio"
                  >
                    {copiedFolio === activeProyecto.folio ? (
                      <>
                        <FaCheck className={styles.copySuccessIcon} />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                */}
              </div>

              <div className={styles.proyectoCardMain}>
                <h3 className={styles.proyectoCardTitle}>{activeProyecto.titulo}</h3>

                <div className={styles.descriptionAccent} aria-hidden="true" />

                {/* Equipo Responsable */}
                <div className={styles.responsablesSection}>
                  <h4 className={styles.responsablesTitle}>
                    {activeProyecto.responsables.length > 1 ? <FaUsers /> : <FaUserTie />}
                    <span>
                      {activeProyecto.responsables.length > 1
                        ? "Equipo de Investigación Responsable"
                        : "Persona Investigadora Responsable"}
                    </span>
                  </h4>

                  <div className={styles.responsablesGrid}>
                    {activeProyecto.responsables.map((resp, i) => (
                      <div key={i} className={styles.responsableCard}>
                        <div className={styles.responsableAvatar}>
                          <FaGraduationCap />
                        </div>
                        <div className={styles.responsableMeta}>
                          <span className={styles.responsableName}>{resp}</span>
                          <span className={styles.responsableRole}>Docente Investigador(a) UT Nayarit</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadatos */}
                <div className={styles.metaPillsRow}>
                  <div className={styles.metaPillItem}>
                    <span className={styles.metaPillLabel}>División Académica</span>
                    <span className={styles.metaPillValue}>{activeProyecto.area}</span>
                  </div>
                  <div className={styles.metaPillItem}>
                    <span className={styles.metaPillLabel}>Estatus</span>
                    <span className={styles.metaPillStatus}>Aprobado y Registrado (2026)</span>
                  </div>
                </div>
              </div>

              {/* Botones de Navegación Anterior / Siguiente */}
              <div className={styles.proyectoCardFooter}>
                <button
                  type="button"
                  onClick={handlePrevProyecto}
                  className={styles.navBtn}
                  title="Ver proyecto anterior"
                >
                  <FaChevronLeft />
                  <span>Anterior</span>
                </button>

                <span className={styles.navProgress}>
                  {proyectosInvestigacion.findIndex((p) => p.id === activeProyecto.id) + 1} de {proyectosInvestigacion.length}
                </span>

                <button
                  type="button"
                  onClick={handleNextProyecto}
                  className={styles.navBtn}
                  title="Ver siguiente proyecto"
                >
                  <span>Siguiente</span>
                  <FaChevronRight />
                </button>
              </div>

              {/* Marca de agua de fondo */}
              <div className={styles.watermarkAreaIcon} aria-hidden="true">
                {getAreaWatermark(activeProyecto.area)}
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
