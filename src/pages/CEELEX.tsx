import React from "react";
// import { Link } from 'react-router-dom';
import "./CEELEX.css";
import bannerCEELEX from "../assets/banner/bannerCELEEX.jpg";

function CEELEX() {
  const idiomas = [
    {
      nombre: "Inglés",
      emoji: "🇬🇧",
      nivel: "Básico a Avanzado",
      certificaciones: ["TOEFL ITP", "Cambridge", "MCER"],
      color: "#1E88E5",
    },
    {
      nombre: "Francés",
      emoji: "🇫🇷",
      nivel: "Básico a Avanzado",
      certificaciones: ["DELF", "DALF", "MCER"],
      color: "#2C3E50",
    },
  ];

  const modalidades = [
    {
      nombre: "Presencial",
      emoji: "🏛️",
      descripcion: "Clases en nuestras instalaciones",
    },
    {
      nombre: "Virtual",
      emoji: "💻",
      descripcion: "En línea desde cualquier lugar",
    },
    {
      nombre: "Sabatino",
      emoji: "📅",
      descripcion: "Fines de semana para tu comodidad",
    },
  ];

  const certificaciones = [
    {
      nombre: "TOEFL ITP",
      descripcion: "Certificación internacional de inglés",
      nivel: "Internacional",
    },
    {
      nombre: "Certificaciones alineadas al MCER",
      descripcion: "Marco Común Europeo de Referencia",
      nivel: "Europeo",
    },
    {
      nombre: "Evaluaciones institucionales",
      descripcion: "Con respaldo universitario",
      nivel: "Nacional",
    },
  ];

  const dirigidoA = [
    "Estudiantes universitarios",
    "Egresados",
    "Personal administrativo y docente",
    "Público en general",
    "Empresas e instituciones",
  ];

  const ventajas = [
    {
      titulo: "Respaldo Universitario",
      emoji: "🏛️",
      descripcion: "Aval de la Universidad Tecnológica de Nayarit",
    },
    {
      titulo: "Docentes Certificados",
      emoji: "👨‍🏫",
      descripcion: "Profesores capacitados y con experiencia",
    },
    {
      titulo: "Estándares Internacionales",
      emoji: "💼",
      descripcion: "Programas alineados al MCER",
    },
    {
      titulo: "Costos Accesibles",
      emoji: "💰",
      descripcion: "Precios competitivos para todos",
    },
    {
      titulo: "Certificaciones Oficiales",
      emoji: "🏅",
      descripcion: "Reconocimiento nacional e internacional",
    },
  ];

  const idealesPara = [
    "Titulación",
    "Movilidad académica",
    "Requisitos laborales",
    "Estudios de posgrado",
  ];

  return (
    <>
      <div className="banner-container-ceelex">
        <img src={bannerCEELEX} alt="Banner CEELEX" className="banner-ceelex" />
      </div>

      <section className="content-ceelex">
        {/* Introducción */}
        <div className="section-intro">
          <div className="intro-card">
            <div className="intro-texto">
              <p className="intro-parrafo">
                El <strong>CEELEX</strong> de la Universidad Tecnológica de
                Nayarit es el espacio institucional dedicado a la{" "}
                <span className="texto-destacado">
                  enseñanza, evaluación y certificación
                </span>{" "}
                de lenguas extranjeras, dirigido a estudiantes, egresados,
                personal universitario y público en general.
              </p>
              <div className="intro-frase">
                <span className="frase-comillas">"</span>
                Invierte en tu futuro. Domina un idioma. Certifícalo en CEELEX
                <span className="frase-comillas">"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="section-idiomas">
          <div className="section-header-ceelex">
            <h2 className="section-title-ceelex">
              <span className="title-emoji-CEELEX">🗣️</span>
              Idiomas que ofrecemos
            </h2>
            <p className="section-subtitle-ceelex">
              Nuestros programas se estructuran conforme al Marco Común Europeo
              de Referencia para las Lenguas (MCER)
            </p>
            <div className="title-decoration-ceelex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="idiomas-grid">
            {idiomas.map((idioma, index) => (
              <div
                key={index}
                className="idioma-card"
                style={
                  { "--idioma-color": idioma.color } as React.CSSProperties
                }
              >
                <div className="idioma-header">
                  <span className="idioma-emoji">{idioma.emoji}</span>
                  <h3 className="idioma-nombre">{idioma.nombre}</h3>
                </div>
                <div className="idioma-nivel">
                  <span className="nivel-etiqueta">Nivel:</span>
                  <span className="nivel-valor">{idioma.nivel}</span>
                </div>
                <div className="idioma-certificaciones">
                  <span className="cert-etiqueta">Certificaciones:</span>
                  <div className="cert-badges">
                    {idioma.certificaciones.map((cert, idx) => (
                      <span key={idx} className="cert-badge">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modalidades */}
        <div className="section-modalidades">
          <div className="section-header-ceelex">
            <h2 className="section-title-ceelex">
              <span className="title-emoji-CEELEX">📚</span>
              Modalidades
            </h2>
            <p className="section-subtitle-ceelex">
              Diseñados para adaptarse a estudiantes, profesionistas y personas
              que trabajan
            </p>
            <div className="title-decoration-ceelex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="modalidades-grid">
            {modalidades.map((modalidad, index) => (
              <div key={index} className="modalidad-card">
                <div className="modalidad-icono">
                  <span className="modalidad-emoji-grande">
                    {modalidad.emoji}
                  </span>
                </div>
                <h3 className="modalidad-nombre">{modalidad.nombre}</h3>
                <p className="modalidad-descripcion">{modalidad.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="section-certificaciones">
          <div className="section-header-ceelex">
            <h2 className="section-title-ceelex">
              <span className="title-emoji-CEELEX">🏆</span>
              Certificaciones oficiales
            </h2>
            <p className="section-subtitle-ceelex">
              En CEELEX puedes evaluar y certificar tu dominio del idioma
            </p>
            <div className="title-decoration-ceelex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="certificaciones-grid">
            {certificaciones.map((cert, index) => (
              <div key={index} className="certificacion-card">
                <div className="certificacion-contenido">
                  <h3 className="certificacion-nombre">{cert.nombre}</h3>
                  <p className="certificacion-descripcion">
                    {cert.descripcion}
                  </p>
                  <span className="certificacion-nivel">{cert.nivel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ideales-container">
            <h4 className="ideales-titulo">
              <span className="ideales-icono">✨</span>
              Ideales para:
            </h4>
            <div className="ideales-grid">
              {idealesPara.map((ideal, index) => (
                <div key={index} className="ideal-item">
                  <span className="ideal-check">✓</span>
                  <span className="ideal-texto">{ideal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dirigido a */}
        <div className="section-dirigido">
          <div className="section-header-ceelex">
            <h2 className="section-title-ceelex">
              <span className="title-emoji-CEELEX">👥</span>
              ¿A quién va dirigido?
            </h2>
            <p className="section-subtitle-ceelex">
              No necesitas pertenecer a la UTN para inscribirte
            </p>
            <div className="title-decoration-ceelex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="dirigido-container">
            {dirigidoA.map((item, index) => (
              <div key={index} className="dirigido-item">
                <div className="dirigido-numero">{index + 1}</div>
                <span className="dirigido-texto">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ventajas */}
        <div className="section-ventajas">
          <div className="section-header-ceelex">
            <h2 className="section-title-ceelex">
              <span className="title-emoji-CEELEX">⭐</span>
              ¿Por qué elegir CEELEX?
            </h2>
            <div className="title-decoration-ceelex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="ventajas-grid">
            {ventajas.map((ventaja, index) => (
              <div key={index} className="ventaja-card">
                <div className="ventaja-icono">
                  <span className="ventaja-emoji">{ventaja.emoji}</span>
                </div>
                <div className="ventaja-contenido">
                  <h3 className="ventaja-titulo">{ventaja.titulo}</h3>
                  <p className="ventaja-descripcion">{ventaja.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="section-contacto">
          <div className="contacto-grid">
            <div className="contacto-card">
              <div className="contacto-icono">
                <span className="contacto-emoji">📞</span>
              </div>
              <h3 className="contacto-titulo">Contacto</h3>

              <div className="contacto-item contacto-item-correos">
                <span className="contacto-item-icono">📧</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">Correo:</span>
                  <a
                    href="mailto:atencion.ceelex@utnay.edu.mx"
                    className="contacto-email"
                  >
                    atencion.ceelex@utnay.edu.mx
                  </a>
                  <a
                    href="mailto:ceelex@utnay.edu.mx"
                    className="contacto-email"
                  >
                    ceelex@utnay.edu.mx
                  </a>
                </div>
              </div>

              <div className="contacto-item">
                <span className="contacto-item-icono">☎️</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">Teléfono:</span>
                  <a href="tel:+523112119800" className="contacto-telefono">
                    311 211 9800
                  </a>
                  <span className="contacto-extension">
                    Ext. 2400, 24001 y 2408
                  </span>
                </div>
              </div>

              <div className="contacto-item">
                <span className="contacto-item-icono">📱</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">WhatsApp:</span>
                  <a
                    href="https://wa.me/523113961384"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-telefono"
                  >
                    311 396 1384
                  </a>
                </div>
              </div>

              <div className="contacto-item">
                <span className="contacto-item-icono">🕘</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">
                    Horario de atención:
                  </span>
                  <span className="contacto-dato">09:00 a 17:00 hrs.</span>
                </div>
              </div>

              <div className="contacto-item">
                <span className="contacto-item-icono">📘</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">Facebook:</span>
                  <a
                    href="https://www.facebook.com/ceelex.ut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-facebook"
                  >
                    Ceelex UT Nayarit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CEELEX;
