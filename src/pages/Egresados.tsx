import React from "react";
// import { Link } from 'react-router-dom';
import "./Egresados.css";
import bannerEgresados from "../assets/banner/bannerEgresados.jpg";

function Egresados() {
  const programasEgresados = [
    {
      titulo: "Diplomados",
      emoji: "📜",
      descripcion:
        "Programas de actualización profesional a precio preferencial para egresados",
      color: "#2E7D32",
    },
    {
      titulo: "Certificaciones",
      emoji: "🏅",
      descripcion: "Certificaciones oficiales que fortalecen tu perfil laboral",
      color: "#1565C0",
    },
    {
      titulo: "Cursos de Inglés",
      emoji: "🌎",
      descripcion:
        "Cursos de inglés con tarifas especiales para nuestra comunidad de egresados",
      color: "#B76E1E",
    },
  ];

  const oportunidadesEgresados = [
    {
      titulo: "Ponente y colaborador",
      emoji: "🎤",
      descripcion:
        "Comparte tu experiencia profesional a través de conferencias y talleres",
      color: "#2E7D32",
    },
    {
      titulo: "Bolsa de Trabajo",
      emoji: "💼",
      descripcion:
        "Acceso a oportunidades laborales y vinculación con empresas",
      color: "#1565C0",
    },
    {
      titulo: "Red de Egresados",
      emoji: "🤝",
      descripcion:
        "Forma parte de nuestra comunidad y amplía tu red de contactos profesionales",
      color: "#B76E1E",
    },
  ];

  const beneficios = [
    {
      beneficio: "Precios preferenciales",
      emoji: "💰",
      descripcion:
        "Tarifas especiales en diplomados, certificaciones y cursos de inglés",
    },
    {
      beneficio: "Desarrollo profesional",
      emoji: "📈",
      descripcion:
        "Fortalecimiento de competencias para mejorar tu perfil laboral",
    },
    {
      beneficio: "Vinculación empresarial",
      emoji: "🏢",
      descripcion:
        "Conexión directa con empresas a través de nuestra bolsa de trabajo",
    },
    {
      beneficio: "Comunidad activa",
      emoji: "👥",
      descripcion: "Participación en eventos, conferencias y talleres",
    },
  ];

  return (
    <>
      <div className="banner-container-egresados">
        <img
          src={bannerEgresados}
          alt="Banner Egresados"
          className="banner-egresados"
        />
      </div>

      <section className="content-egresados">
        {/* Introducción */}
        <div className="section-introduccion-egresados">
          <div className="introduccion-card-egresados">
            <div className="introduccion-header-egresados">
              <div className="introduccion-icono-egresados">
                <span className="introduccion-emoji-egresados">🎓</span>
              </div>
              <div className="introduccion-titulo-wrapper-egresados">
                <h2 className="introduccion-titulo-egresados">
                  Comunidad de Egresados UT Nayarit
                </h2>
                <div className="introduccion-logos-egresados">
                  <span className="logo-ut-egresados">UTNay</span>
                  <span className="logo-egresados">EGRESADOS</span>
                </div>
              </div>
            </div>
            <p className="introduccion-texto-egresados">
              Seguimos acompañando a nuestros egresados en su{" "}
              <strong>crecimiento profesional</strong>. A través de nuestros
              programas, ofrecemos diplomados, certificaciones y cursos de
              inglés a <strong>precio preferencial</strong>, diseñados para
              fortalecer sus competencias y mejorar su perfil laboral.
            </p>
          </div>
        </div>

        {/* Programas para egresados */}
        <div className="section-programas-egresados">
          <div className="section-header-egresados">
            <h2 className="section-title-egresados">
              <span className="title-emoji-egresados">📚</span>
              Programas para Egresados
            </h2>
            <p className="section-subtitle-egresados">
              Fortalece tus competencias con nuestros programas a precio
              preferencial
            </p>
            <div className="title-decoration-egresados">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="programas-grid-egresados">
            {programasEgresados.map((programa, index) => (
              <div
                key={index}
                className="programa-card-egresados"
                style={
                  { "--programa-color": programa.color } as React.CSSProperties
                }
              >
                <div className="programa-icono-egresados">
                  <span className="programa-emoji-egresados">
                    {programa.emoji}
                  </span>
                </div>
                <h3 className="programa-titulo-egresados">{programa.titulo}</h3>
                <p className="programa-descripcion-egresados">
                  {programa.descripcion}
                </p>
                <div className="programa-barra-egresados"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Oportunidades de participación */}
        <div className="section-oportunidades-egresados">
          <div className="section-header-egresados">
            <h2 className="section-title-egresados">
              <span className="title-emoji-egresados">✨</span>
              Oportunidades de participación
            </h2>
            <p className="section-subtitle-egresados">
              Sé parte activa de nuestra comunidad universitaria
            </p>
            <div className="title-decoration-egresados">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="oportunidades-grid-egresados">
            {oportunidadesEgresados.map((oportunidad, index) => (
              <div
                key={index}
                className="oportunidad-card-egresados"
                style={
                  {
                    "--oportunidad-color": oportunidad.color,
                  } as React.CSSProperties
                }
              >
                <div className="oportunidad-icono-egresados">
                  <span className="oportunidad-emoji-egresados">
                    {oportunidad.emoji}
                  </span>
                </div>
                <h3 className="oportunidad-titulo-egresados">
                  {oportunidad.titulo}
                </h3>
                <p className="oportunidad-descripcion-egresados">
                  {oportunidad.descripcion}
                </p>
                <div className="oportunidad-barra-egresados"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="section-beneficios-egresados">
          <div className="section-header-egresados">
            <h2 className="section-title-egresados">
              <span className="title-emoji-egresados">⭐</span>
              Beneficios para Egresados
            </h2>
            <div className="title-decoration-egresados">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="beneficios-grid-egresados">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="beneficio-card-egresados">
                <div className="beneficio-icono-egresados">
                  <span className="beneficio-emoji-egresados">
                    {beneficio.emoji}
                  </span>
                </div>
                <div className="beneficio-contenido-egresados">
                  <h3 className="beneficio-titulo-egresados">
                    {beneficio.beneficio}
                  </h3>
                  <p className="beneficio-descripcion-egresados">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje institucional */}
        <div className="section-mensaje-egresados">
          <div className="mensaje-card-egresados">
            <div className="mensaje-contenido-egresados">
              <span className="mensaje-icono-egresados">💙</span>
              <p className="mensaje-texto-egresados">
                En la <strong>UTNAY</strong>, nuestros egresados continúan
                siendo parte fundamental de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="section-contacto-egresados">
          <div className="contacto-card-egresados">
            <div className="contacto-icono-egresados">
              <span className="contacto-emoji-egresados">📞</span>
            </div>
            <h3 className="contacto-titulo-egresados">
              Información y contacto
            </h3>

            <div className="contacto-mensaje-egresados">
              <p className="contacto-texto-egresados">
                Para mayor información, consulta en los correos institucionales
                correspondientes.
              </p>
            </div>

            <div className="contacto-items-egresados">
              <div className="contacto-item-egresados">
                <span className="contacto-item-icono">📧</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">Correo:</span>
                  <a
                    href="mailto:seguimiento@utnay.edu.mx"
                    className="contacto-email-egresados"
                  >
                    seguimiento@utnay.edu.mx
                  </a>
                </div>
              </div>

              <div className="contacto-item-egresados">
                <span className="contacto-item-icono">📱</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">WhatsApp:</span>
                  <a
                    href="https://wa.me/523114469297"
                    className="contacto-whatsapp-egresados"
                  >
                    +52 (311) 446 9297
                  </a>
                </div>
              </div>
            </div>

            <div className="contacto-horario-egresados">
              <span className="horario-icono">⏰</span>
              <span className="horario-texto">
                Lunes a viernes de 9:00 a 18:00 hrs
              </span>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-egresados">
          <div className="cta-content-egresados">
            <h3 className="cta-titulo-egresados">
              Sigue formando parte de la UT Nayarit
            </h3>
            <p className="cta-descripcion-egresados">
              Accede a todos los beneficios y oportunidades que tenemos para ti
            </p>
            <div className="cta-botones-egresados">
              <a
                href="mailto:seguimiento@utnay.edu.mx"
                className="cta-button-egresados cta-button-programas"
              >
                <span>Conocer programas</span>
              </a>
              <a
                href="https://wa.me/523114469297"
                className="cta-button-egresados cta-button-whatsapp"
              >
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Egresados;
