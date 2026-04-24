import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./CulturaPaz.css";
import bannerCulturaPaz from "../assets/banner/banerCulturaPaz.jpg";
import Programa from "../assets/extras/PROGRAMA CULTURA DE LA PAZ.pdf";

// Interfaces para TypeScript
interface AccionInfo {
  id: string;
  titulo: string;
  descripcion: string;
  link?: string; // Link opcional para descargas
  color: string;
  gradient: string;
  lightGradient: string;
}

function CulturaPaz() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 992);
  const [selectedAccion, setSelectedAccion] = useState<AccionInfo | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false);

  // Memoizar la información para evitar re-renders innecesarios
  const culturaPazInfo = useMemo(
    () => ({
      derechos: {
        id: "derechos",
        titulo: "DERECHOS HUMANOS",
        descripcion:
          "Respeto irrestricto de los derechos humanos. Rechazo de la violencia y aseguramiento de la no discriminación. Reconocimiento de todas las diversidades a través de sus expresiones interculturales, sexogenéricas, étnicas y lingüísticas.",
        color: "#FF6B6B",
        gradient:
          "linear-gradient(145deg, #8B4513 0%, #B85E3A 50%, #E07A5F 100%)",
        lightGradient:
          "linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(184,94,58,0.1) 100%)",
      },
      dialogo: {
        id: "dialogo",
        titulo: "DIÁLOGO Y COMUNICACIÓN",
        descripcion:
          "Disposición a la solución pacífica de conflictos. Diálogo y comunicación. Construcción y transformación colaborativa.",
        color: "#4ECDC4",
        gradient:
          "linear-gradient(145deg, #2A6F8B 0%, #3B9EBF 50%, #5FA7C9 100%)",
        lightGradient:
          "linear-gradient(135deg, rgba(78,205,196,0.1) 0%, rgba(59,158,191,0.1) 100%)",
      },
      inclusion: {
        id: "inclusion",
        titulo: "INCLUSIÓN Y DIVERSIDAD",
        descripcion:
          "Valoración de la resiliencia y la inclusión. Compromiso con la igualdad de oportunidades para todas las personas. Justicia social y solidaridad.",
        color: "#A8E6CF",
        gradient:
          "linear-gradient(145deg, #4A7C59 0%, #68A86C 50%, #8ABF8E 100%)",
        lightGradient:
          "linear-gradient(135deg, rgba(168,230,207,0.1) 0%, rgba(104,168,108,0.1) 100%)",
      },
      ambiente: {
        id: "ambiente",
        titulo: "CUIDADO DEL ENTORNO",
        descripcion:
          "Cuidado de los animales y el medio ambiente. Arte, deporte, educación ambiental y acciones con impacto social.",
        color: "#FFD700",
        gradient:
          "linear-gradient(145deg, #2E5C3E 0%, #3B7850 50%, #4F9E6A 100%)",
        lightGradient:
          "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(59,120,80,0.1) 100%)",
      },
      programa: {
        id: "programa",
        titulo: "PROGRAMA 2026",
        descripcion:
          "Descarga el programa completo de actividades para la Cultura de la Paz 2026",
        link: Programa, // Aquí guardas el link del PDF
        color: "#5f4e4e",
        gradient:
          "linear-gradient(145deg, #8B4513 0%, #B85E3A 50%, #E07A5F 100%)",
        lightGradient:
          "linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(184,94,58,0.1) 100%)",
      },
    }),
    [],
  );

  // Manejar el resize con useCallback
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 992);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (selectedAccion) {
      setIsInfoVisible(true);
    } else {
      const timer = setTimeout(() => setIsInfoVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedAccion]);

  const handleAccionClick = useCallback(
    (accionId: string, e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();

      if (selectedAccion?.id === accionId) {
        setSelectedAccion(null);
      } else {
        setSelectedAccion(
          culturaPazInfo[accionId as keyof typeof culturaPazInfo],
        );

        if (isMobile) {
          setTimeout(() => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop - 20;
            window.scrollTo({ top: targetY, behavior: "smooth" });
          }, 100);
        }
      }
    },
    [selectedAccion, culturaPazInfo, isMobile],
  );

  // Componente para el contenido detallado (reutilizable)
  const DetalleAccion = ({
    accion,
    onClose,
  }: {
    accion: AccionInfo;
    onClose: () => void;
  }) => (
    <div
      className="cultura-info-detallada"
      style={{
        background: accion.lightGradient,
        borderTop: `4px solid ${accion.color}`,
      }}
    >
      <button
        className="close-info-btn"
        onClick={onClose}
        aria-label="Cerrar información"
      >
        <span>×</span>
      </button>

      <div className="cultura-info-header">
        <div
          className="cultura-info-icon"
          style={{ background: accion.gradient }}
        >
          <span className="icon-text">{accion.titulo.charAt(0)}</span>
        </div>
        <div className="cultura-info-title-wrapper">
          <h2 className="cultura-info-titulo">{accion.titulo}</h2>
          <p className="cultura-info-descripcion">{accion.descripcion}</p>

          {/* Renderizar botón de descarga si existe el link */}
          {accion.link && (
            <a
              href={accion.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-descargar"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "20px",
                padding: "12px 24px",
                background: accion.gradient,
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>📄</span>
              Descargar {accion.titulo}
              <span>⬇️</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="banner-container">
        <div className="carousel-container">
          <div className="carousel-slide active">
            <img
              src={bannerCulturaPaz}
              alt="Cultura de Paz"
              className="bannerCulturaPaz"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section className="contentCulturaPaz">
        <div className="cultura-header">
          <br />
          <br />
          <h2 className="cultura-title">
            <span className="title-main">CULTURA DE LA PAZ</span>
          </h2>
          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="cultura-intro">
            <p className="header-description">
              La Universidad Tecnológica de Nayarit promueve la cultura de la
              paz a través de un Programa Integral multidisciplinario que
              permita contribuir a una convivencia democrática basada en el
              respeto a la dignidad de las personas y de los derechos humanos,
              realizando acciones que favorezcan el sentido de solidaridad entre
              la comunidad universitaria.
            </p>
          </div>
        </div>

        <div className="objetivo-container">
          <div className="objetivo-card">
            <h3 className="objetivo-titulo">
              <span className="objetivo-icon">🎯</span>
              OBJETIVO GENERAL
            </h3>
            <p className="objetivo-texto">
              En la Universidad Tecnológica de Nayarit, se promueve un ambiente
              de convivencia armónica y respetuosa, donde se fomenta el diálogo,
              la tolerancia y la resolución pacífica de conflictos,
              desarrollando en los estudiantes habilidades sociales y
              emocionales que les permiten interactuar de manera positiva al
              interior de la comunidad universitaria, de conformidad con lo
              anterior, se enuncian principios que servirán de base para la
              construcción de una paz universitaria, contribuyendo en la
              formación integral de nuestros estudiantes convirtiéndose en
              agentes de cambio en su región, construyendo una sociedad más
              justa y equitativa.
            </p>
          </div>
        </div>

        {/* Tarjetas de acciones */}
        <div className="logosContainerCultura">
          {(Object.values(culturaPazInfo) as AccionInfo[]).map((accion) => (
            <React.Fragment key={accion.id}>
              <a
                href="#"
                onClick={(e) => handleAccionClick(accion.id, e)}
                className={`cultura-card ${selectedAccion?.id === accion.id ? "active" : ""}`}
                style={
                  {
                    "--cultura-gradient": accion.gradient,
                    "--cultura-light": accion.lightGradient,
                  } as React.CSSProperties
                }
              >
                <div className="cultura-icon-wrapper">
                  <div className="icon-glow"></div>
                  <div className="icon-placeholder">
                    <span>{accion.titulo.charAt(0)}</span>
                  </div>
                  <div className="cultura-hover-info">
                    <span>Ver detalles</span>
                  </div>
                </div>
                <h3 className="cultura-titulo">{accion.titulo}</h3>
                <p className="cultura-descripcion-corta">
                  {accion.descripcion.substring(0, 60)}...
                </p>
              </a>

              {/* Vista móvil */}
              {isMobile && selectedAccion?.id === accion.id && (
                <div className="cultura-info-mobile">
                  <DetalleAccion
                    accion={selectedAccion}
                    onClose={() => setSelectedAccion(null)}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Vista desktop */}
        {!isMobile && (
          <div
            className={`cultura-info-section ${isInfoVisible ? "visible" : ""}`}
            style={{ marginBottom: "40px" }}
          >
            {selectedAccion && (
              <DetalleAccion
                accion={selectedAccion}
                onClose={() => setSelectedAccion(null)}
              />
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default CulturaPaz;
