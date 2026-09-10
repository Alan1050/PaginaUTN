import React from "react";
import { Link } from "react-router-dom";
import "./Vinculacion.css";
import bannerVinculacion from "../assets/banner/bannerVinculacion.jpg";
import iconoCELEX from "../assets/logos/iconoCELEX.png";
import iconoECECUT from "../assets/logos/iconoECECUT.png";
import iconoEU from "../assets/logos/iconoEU.png";
import iconoIncubadora from "../assets/logos/iconoIncubadora.png";
import iconoMovilidad from "../assets/logos/iconoMovilidadEstadias.png";

function Vinculacion() {
  const programas = [
    {
      id: "incubadora",
      nombre: "Incubadora de Negocios",
      categoria: "Emprendimiento",
      icono: iconoIncubadora,
      descripcion: "Impulsa tu idea de negocio con asesoría y recursos",
      link: "/Incubadora",
      color: "#FF6B6B",
      gradient:
        "linear-gradient(145deg, #FF6B6B 0%, #FF8E8E 50%, #FFB5B5 100%)",
    },
    {
      id: "ceelex",
      nombre: "CEELEX",
      categoria: "Idiomas",
      icono: iconoCELEX,
      descripcion:
        "Centro de Enseñanza Especializado en Lenguas Extranjeras - Aprende idiomas",
      link: "/CEELEX",
      color: "#4ECDC4",
      gradient:
        "linear-gradient(145deg, #4ECDC4 0%, #6FD6CF 50%, #9FE5E0 100%)",
    },
    {
      id: "ececut",
      nombre: "ECECUT",
      categoria: "Educación continua",
      icono: iconoECECUT,
      descripcion: "Educación Continua - Cursos y diplomados",
      link: "/ECECUT",
      color: "#FFD93D",
      gradient:
        "linear-gradient(145deg, #FFD93D 0%, #FFE270 50%, #FFF0B5 100%)",
    },
    {
      id: "eu",
      nombre: "Extensión Universitaria",
      categoria: "Formación integral",
      icono: iconoEU,
      descripcion: "Aprende en la empresa y estudia en la universidad",
      link: "/ExtensionUniversitaria",
      color: "#6C5CE7",
      gradient:
        "linear-gradient(145deg, #6C5CE7 0%, #8F7EFF 50%, #B5A8FF 100%)",
    },
    {
      id: "movilidad",
      nombre: "Movilidad Estudiantil y Estadías",
      categoria: "Experiencia global",
      icono: iconoMovilidad,
      descripcion: "Intercambio nacional e internacional",
      link: "/MovilidadEstudiantil",
      color: "#FF8C42",
      gradient:
        "linear-gradient(145deg, #FF8C42 0%, #FFA86B 50%, #FFC594 100%)",
    },
  ];

  return (
    <>
      <div className="banner-container-vinculacion">
        <img
          src={bannerVinculacion}
          alt="Banner Vinculación"
          className="banner-vinculacion"
        />
      </div>

      <section className="content-vinculacion">
        <div className="section-header-Vinculacion">
          <h2 className="section-title">Vinculación Universitaria</h2>

          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="programas-grid-vinculacion">
          {programas.map((programa) => (
            <Link
              key={programa.id}
              to={programa.link}
              className={`programa-card programa-card-${programa.id}`}
              style={
                {
                  "--programa-color": programa.color,
                  "--programa-gradient": programa.gradient,
                } as React.CSSProperties
              }
            >
              <div className="card-content">
                <div className="icon-container">
                  <div className="icon-glow"></div>
                  <img
                    src={programa.icono}
                    alt={programa.nombre}
                    className="programa-icon"
                    loading="lazy"
                  />
                  <div className="icon-ring"></div>
                </div>

                <span className="programa-categoria">
                  {programa.categoria}
                </span>
                <h3 className="programa-nombre">{programa.nombre}</h3>
                <p className="programa-descripcion">{programa.descripcion}</p>

                <div className="card-hover-info">
                  <span>Ver programa</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Vinculacion;
