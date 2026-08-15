import React from "react";
// import { Link } from 'react-router-dom';
import "./BolsaTrabajo.css";
import bannerBolsaTrabajo from "../assets/banner/bannerBolsaTrabajo.jpg"; 

function BolsaTrabajo() {
  const beneficiosEmpresarios = [
    {
      titulo: "Talento calificado",
      emoji: "🎯",
      descripcion:
        "Acceso a egresados con formación profesional y competencias actualizadas",
      color: "#2E7D32",
    },
    {
      titulo: "Registro gratuito",
      emoji: "✨",
      descripcion:
        "Sin costo para publicar tus vacantes y encontrar al candidato ideal",
      color: "#1565C0",
    },
    {
      titulo: "Vinculación directa",
      emoji: "🤝",
      descripcion:
        "Conexión inmediata con el talento de la Universidad Tecnológica de Nayarit",
      color: "#B76E1E",
    },
  ];

  const beneficiosEgresados = [
    {
      titulo: "Oportunidades laborales",
      emoji: "💼",
      descripcion:
        "Acceso a vacantes de empresas que buscan tu perfil profesional",
      color: "#2E7D32",
    },
    {
      titulo: "Conexión directa",
      emoji: "📱",
      descripcion:
        "Comunicación inmediata a través de WhatsApp con los reclutadores",
      color: "#1565C0",
    },
    {
      titulo: "Actualización constante",
      emoji: "🔄",
      descripcion:
        "Notificaciones de nuevas vacantes disponibles en tiempo real",
      color: "#B76E1E",
    },
  ];

  return (
    <>
      <div className="banner-container-bolsa">
        <img
          src={bannerBolsaTrabajo}
          alt="Banner Bolsa de Trabajo"
          className="banner-bolsa"
        />
        <div className="banner-overlay-bolsa">
          <div className="banner-content-bolsa">
            <h1 className="banner-title-bolsa">BOLSA DE TRABAJO</h1>
            <p className="banner-subtitle-bolsa">
              Conectando talento universitario
              <br />
              con el sector productivo
            </p>
            <div className="banner-decoration-bolsa"></div>
          </div>
        </div>
      </div>

      <section className="content-bolsa">
        {/* Introducción */}
        <div className="section-introduccion-bolsa">
          <div className="introduccion-card-bolsa">
            <div className="introduccion-header-bolsa">
              <div className="introduccion-icono-bolsa">
                <span className="introduccion-emoji-bolsa">🎓</span>
              </div>
              <div className="introduccion-titulo-wrapper-bolsa">
                <h2 className="introduccion-titulo-bolsa">
                  Vinculación Laboral UT Nayarit
                </h2>
                <div className="introduccion-logos-bolsa">
                  <span className="logo-ut-bolsa">UTNay</span>
                  <span className="logo-empleo-bolsa">EMPLEO</span>
                </div>
              </div>
            </div>
            <p className="introduccion-texto-bolsa">
              Está dirigida a <strong>empresarios y egresados</strong>, con el
              objetivo de fortalecer la vinculación laboral y generar{" "}
              <strong>oportunidades de empleo</strong> para la comunidad
              universitaria.
            </p>
          </div>
        </div>

        {/* Sección Empresarios */}
        <div className="section-empresarios-bolsa">
          <div className="section-header-bolsa">
            <h2 className="section-title-bolsa">
              <span className="title-emoji-bolsa">🏢</span>
              Empresarios
            </h2>
            <p className="section-subtitle-bolsa">
              Las empresas interesadas en ofertar vacantes pueden registrarse y
              compartir sus oportunidades laborales
            </p>
            <div className="title-decoration-bolsa">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="empresarios-contenido-bolsa">
            <div className="empresarios-beneficios-bolsa">
              {beneficiosEmpresarios.map((beneficio, index) => (
                <div
                  key={index}
                  className="beneficio-card-bolsa"
                  style={
                    {
                      "--beneficio-color": beneficio.color,
                    } as React.CSSProperties
                  }
                >
                  <div className="beneficio-icono-bolsa">
                    <span className="beneficio-emoji-bolsa">
                      {beneficio.emoji}
                    </span>
                  </div>
                  <div className="beneficio-contenido-bolsa">
                    <h3 className="beneficio-titulo-bolsa">
                      {beneficio.titulo}
                    </h3>
                    <p className="beneficio-descripcion-bolsa">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="empresarios-cta-bolsa">
              <div className="cta-card-bolsa cta-empresarios">
                <div className="cta-icono-bolsa">
                  <span className="cta-emoji-bolsa">📋</span>
                </div>
                <h3 className="cta-titulo-bolsa">Registra tus vacantes</h3>
                <p className="cta-descripcion-bolsa">
                  Comparte las oportunidades laborales de tu empresa y encuentra
                  al talento que necesitas
                </p>
                <a
                  href="https://forms.gle/7rDUNCtgskoqnJMy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-bolsa cta-button-empresarios"
                >
                  <span>Registrar empresa</span>
                  <svg className="cta-arrow-bolsa" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Egresados */}
        <div className="section-egresados-bolsa">
          <div className="section-header-bolsa">
            <h2 className="section-title-bolsa">
              <span className="title-emoji-bolsa">👥</span>
              Egresados
            </h2>
            <p className="section-subtitle-bolsa">
              Si deseas formar parte de nuestra Bolsa de Trabajo y conocer
              vacantes disponibles
            </p>
            <div className="title-decoration-bolsa">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="egresados-contenido-bolsa">
            <div className="egresados-beneficios-bolsa">
              {beneficiosEgresados.map((beneficio, index) => (
                <div
                  key={index}
                  className="beneficio-card-bolsa"
                  style={
                    {
                      "--beneficio-color": beneficio.color,
                    } as React.CSSProperties
                  }
                >
                  <div className="beneficio-icono-bolsa">
                    <span className="beneficio-emoji-bolsa">
                      {beneficio.emoji}
                    </span>
                  </div>
                  <div className="beneficio-contenido-bolsa">
                    <h3 className="beneficio-titulo-bolsa">
                      {beneficio.titulo}
                    </h3>
                    <p className="beneficio-descripcion-bolsa">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="egresados-cta-bolsa">
              <div className="cta-card-bolsa cta-egresados">
                <div className="cta-icono-bolsa">
                  <span className="cta-emoji-bolsa">💬</span>
                </div>
                <h3 className="cta-titulo-bolsa">Únete al grupo de WhatsApp</h3>
                <p className="cta-descripcion-bolsa">
                  Conoce las vacantes disponibles y recibe notificaciones de
                  nuevas oportunidades
                </p>
                <a
                  href="https://chat.whatsapp.com/CSTHAhTM1aEBRHvHdpmEDJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-bolsa cta-button-egresados"
                >
                  <span>Unirse al grupo</span>
                  <svg className="cta-arrow-bolsa" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje institucional */}
        <div className="section-mensaje-bolsa">
          <div className="mensaje-card-bolsa">
            <div className="mensaje-contenido-bolsa">
              <span className="mensaje-icono-bolsa">🤝</span>
              <p className="mensaje-texto-bolsa">
                La <strong>Universidad Tecnológica de Nayarit</strong> continúa
                impulsando la conexión entre el talento de sus egresados y el
                sector productivo.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="section-contacto-bolsa">
          <div className="contacto-card-bolsa">
            <div className="contacto-icono-bolsa">
              <span className="contacto-emoji-bolsa">📞</span>
            </div>
            <h3 className="contacto-titulo-bolsa">Información y contacto</h3>

            <div className="contacto-mensaje-bolsa">
              <p className="contacto-texto-bolsa">
                Para mayor información, consulta en los correos institucionales
                correspondientes.
              </p>
            </div>

            <div className="contacto-items-bolsa">
              <div className="contacto-item-bolsa">
                <span className="contacto-item-icono">📧</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">Correo:</span>
                  <a
                    href="mailto:bolsatrabajo@utnay.edu.mx"
                    className="contacto-email-bolsa"
                  >
                    bolsatrabajo@utnay.edu.mx
                  </a>
                </div>
              </div>

              <div className="contacto-item-bolsa">
                <span className="contacto-item-icono">📱</span>
                <div className="contacto-item-contenido">
                  <span className="contacto-item-etiqueta">WhatsApp:</span>
                  <a
                    href="https://wa.me/523114469297"
                    className="contacto-whatsapp-bolsa"
                  >
                    +52 (311) 446 9297
                  </a>
                </div>
              </div>
            </div>

            <div className="contacto-horario-bolsa">
              <span className="horario-icono">⏰</span>
              <span className="horario-texto">
                Lunes a viernes de 9:00 a 18:00 hrs
              </span>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-bolsa">
          <div className="cta-content-bolsa">
            <h3 className="cta-titulo-principal-bolsa">
              ¿Eres egresado o empresario?
            </h3>
            <p className="cta-descripcion-principal-bolsa">
              Forma parte de nuestra comunidad laboral y accede a las mejores
              oportunidades
            </p>
            <div className="cta-botones-bolsa">
              <a
                href="https://forms.gle/7rDUNCtgskoqnJMy9"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-principal-bolsa cta-button-empresarios-principal"
              >
                <span>Soy empresario</span>
              </a>
              <a
                href="https://chat.whatsapp.com/CSTHAhTM1aEBRHvHdpmEDJ"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-principal-bolsa cta-button-egresados-principal"
              >
                <span>Soy egresado</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BolsaTrabajo;
