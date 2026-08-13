import React from "react";
// import { Link } from 'react-router-dom';
import "./Incubadora.css";
import bannerIncubadora from "../assets/banner/bannerIncubadora.jpg";

function Incubadora() {
  const sectores = [
    {
      nombre: "Agricultura y ganadería",
      emoji: "🌾",
      color: "#4CAF50",
      descripcion: "Desarrollo agropecuario y ganadería sostenible",
    },
    {
      nombre: "Industria",
      emoji: "🏭",
      color: "#2196F3",
      descripcion: "Transformación y procesos industriales",
    },
    {
      nombre: "Comercio",
      emoji: "🏪",
      color: "#FF9800",
      descripcion: "Negocios locales y cadenas comerciales",
    },
    {
      nombre: "Servicios",
      emoji: "💼",
      color: "#9C27B0",
      descripcion: "Consultoría, turismo y servicios profesionales",
    },
    {
      nombre: "Emprendimiento social",
      emoji: "🤝",
      color: "#E91E63",
      descripcion: "Proyectos con impacto social y comunitario",
    },
  ];

  const servicios = [
    {
      nombre: "Planes de negocio",
      emoji: "📋",
      descripcion: "Estructuración y desarrollo de tu modelo de negocio",
    },
    {
      nombre: "Diagnósticos",
      emoji: "🔍",
      descripcion: "Evaluación integral de tu empresa",
    },
    {
      nombre: "Estudios de mercado",
      emoji: "📊",
      descripcion: "Análisis de mercado y competencia",
    },
    {
      nombre: "Análisis financiero",
      emoji: "💰",
      descripcion: "Proyecciones y viabilidad financiera",
    },
    {
      nombre: "Capacitación empresarial",
      emoji: "🎓",
      descripcion: "Formación para emprendedores",
    },
    {
      nombre: "Asistencia técnica",
      emoji: "🛠️",
      descripcion: "Apoyo a empresas del sector social",
    },
  ];

  const objetivos = [
    "Motivar y reclutar a emprendedores para impulsar la creación de nuevas empresas",
    "Establecer programas de asesoría técnico-administrativa para el crecimiento empresarial",
    "Integrar una red de enlace con emprendedores y empresarios",
    "Apoyo para programas empresariales y participación en ferias",
  ];

  return (
    <>
      <div className="banner-container-incubadora">
        <img
          src={bannerIncubadora}
          alt="Banner Incubadora de Negocios"
          className="banner-incubadora"
        />
      </div>

      <section className="content-incubadora">
        {/* Antecedentes */}
        <div className="section-antecedentes">
          <div className="section-header-incubadora">
            <h2 className="section-title-incubadora">
              <span className="title-emoji">📜</span>
              Antecedentes
            </h2>
            <div className="title-decoration-incubadora">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="antecedentes-content">
            <div className="historia-card">
              <div className="historia-grid">
                <div className="historia-texto">
                  <p className="historia-parrafo">
                    <span className="texto-destacado">
                      La Incubadora de Negocios
                    </span>{" "}
                    es un área que pertenece a la
                    <strong> Universidad Tecnológica de Nayarit</strong>, creada
                    como plataforma de impulso a la creación de empresas.
                  </p>
                  <p className="historia-parrafo">
                    En el año <span className="año-destacado">2005</span> fue
                    reconocida como Incubadora de Tecnología Intermedia, desde
                    entonces ha atendido a emprendedores a través de un proceso
                    de incubación en los diferentes municipios del estado.
                  </p>
                  <p className="historia-parrafo">
                    Debido al trabajo realizado y al impacto generado en el
                    Estado de Nayarit, el gobierno municipal de Xalisco y
                    estatal,
                    <span className="texto-destacado">
                      {" "}
                      reconoce el desempeño
                    </span>{" "}
                    de la incubadora y dirige proyectos específicos para el
                    desarrollo de planes de negocio con nuestra metodología de
                    incubación.
                  </p>
                </div>
                <div className="historia-stats">
                  <div className="stat-card">
                    <span className="stat-numero">2005</span>
                    <span className="stat-label">Año de fundación</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-numero">+500</span>
                    <span className="stat-label">Emprendedores atendidos</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-numero">20+</span>
                    <span className="stat-label">Municipios impactados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectores Económicos */}
        <div className="section-sectores">
          <div className="section-header-incubadora">
            <h2 className="section-title-incubadora">
              <span className="title-emoji">🏢</span>
              Sectores Económicos
            </h2>
            <p className="section-subtitle">
              A través de un modelo reconocido, se asesoran proyectos y empresas
              relacionados con:
            </p>
            <div className="title-decoration-incubadora">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="sectores-grid">
            {sectores.map((sector, index) => (
              <div
                key={index}
                className="sector-card"
                style={
                  { "--sector-color": sector.color } as React.CSSProperties
                }
              >
                <div className="sector-icono">
                  <span className="sector-emoji">{sector.emoji}</span>
                </div>
                <h3 className="sector-nombre">{sector.nombre}</h3>
                <p className="sector-descripcion">{sector.descripcion}</p>
                <div className="sector-barra"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="section-mision-vision">
          <div className="mision-vision-grid">
            <div className="mision-card">
              <div className="mision-icono">
                <span className="icono-emoji">🎯</span>
              </div>
              <h3 className="mision-titulo">Misión</h3>
              <p className="mision-texto">
                Ofrecer a los emprendedores de la sociedad en general, servicios
                para la formulación y evaluación de ideas de negocios,
                propiciando un ambiente óptimo para iniciar, desarrollar y
                fortalecer sus empresas.
              </p>
              <div className="mision-decoration"></div>
            </div>

            <div className="vision-card">
              <div className="vision-icono">
                <span className="icono-emoji">🔭</span>
              </div>
              <h3 className="vision-titulo">Visión</h3>
              <p className="vision-texto">
                Consolidar el proceso de incubación y la cultura de
                emprendimiento en alumnos y personal de la universidad, así como
                en clientes externos, para fomentar la creación de empresas.
              </p>
              <div className="vision-decoration"></div>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        <div className="section-objetivos">
          <div className="section-header-incubadora">
            <h2 className="section-title-incubadora">
              <span className="title-emoji">✅</span>
              Objetivos
            </h2>
            <div className="title-decoration-incubadora">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="objetivos-container">
            {objetivos.map((objetivo, index) => (
              <div key={index} className="objetivo-item">
                <div className="objetivo-numero">{index + 1}</div>
                <p className="objetivo-texto">{objetivo}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div className="section-servicios">
          <div className="section-header-incubadora">
            <h2 className="section-title-incubadora">
              <span className="title-emoji">⚙️</span>
              Servicios
            </h2>
            <div className="title-decoration-incubadora">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="servicios-grid">
            {servicios.map((servicio, index) => (
              <div key={index} className="servicio-card">
                <div className="servicio-icono">
                  <span className="servicio-emoji">{servicio.emoji}</span>
                </div>
                <div className="servicio-contenido">
                  <h3 className="servicio-nombre">{servicio.nombre}</h3>
                  <p className="servicio-descripcion">{servicio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section-cta-incubadora">
          <div className="cta-content-incubadora">
            <h3 className="cta-titulo">¿Tienes una idea de negocio?</h3>
            <p className="cta-descripcion">
              Conviértela en realidad con el apoyo de nuestra incubadora
            </p>
            {/*
                            <Link to="/contacto" className="cta-button-incubadora">
              <span>Solicita información</span>
              <svg className="cta-arrow" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
                */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Incubadora;
