import React from "react";
// import { Link } from 'react-router-dom';
import "./Convenios.css";
import bannerConvenios from "../assets/banner/bannerConvenios.jpg";

function Convenios() {
  const beneficiosConvenios = [
    {
      titulo: "Proyectos académicos",
      emoji: "📚",
      descripcion:
        "Desarrollo de proyectos conjuntos para fortalecer la formación profesional",
      color: "#2E7D32",
    },
    {
      titulo: "Estadías profesionales",
      emoji: "💼",
      descripcion:
        "Oportunidades para que estudiantes realicen estadías en empresas",
      color: "#1565C0",
    },
    {
      titulo: "Capacitación continua",
      emoji: "🎓",
      descripcion:
        "Programas de actualización y desarrollo para el sector productivo",
      color: "#B76E1E",
    },
  ];

  const ambitos = [
    {
      ambito: "Regional",
      emoji: "🌎",
      descripcion: "Fortalecimiento del desarrollo local y regional",
    },
    {
      ambito: "Nacional",
      emoji: "🇲🇽",
      descripcion: "Vinculación con empresas e instituciones de todo el país",
    },
    {
      ambito: "Internacional",
      emoji: "🌐",
      descripcion: "Intercambio de conocimientos y experiencias globales",
    },
  ];

  return (
    <>
      <div className="banner-container-convenios">
        <img
          src={bannerConvenios}
          alt="Banner Convenios de Colaboración"
          className="banner-convenios"
        />
        <div className="banner-overlay-convenios">
          <div className="banner-content-convenios">
            <h1 className="banner-title-convenios">CONVENIOS</h1>
            <p className="banner-subtitle-convenios">
              Creación de Convenios de Colaboración
              <br />
              Universidad Tecnológica de Nayarit
            </p>
            <div className="banner-decoration-convenios"></div>
          </div>
        </div>
      </div>

      <section className="content-convenios">
        {/* Introducción */}
        <div className="section-introduccion">
          <div className="introduccion-card">
            <div className="introduccion-header">
              <div className="introduccion-icono">
                <span className="introduccion-emoji">🤝</span>
              </div>
              <div className="introduccion-titulo-wrapper">
                <h2 className="introduccion-titulo">Vinculación Estratégica</h2>
                <div className="introduccion-logos">
                  <span className="logo-ut">UTNay</span>
                  <span className="logo-vinculacion">VINCULACIÓN</span>
                </div>
              </div>
            </div>
            <p className="introduccion-texto">
              Se promueve la firma de <strong>Convenios de Colaboración</strong>{" "}
              con empresas e instituciones públicas y sociales, con el objetivo
              de fortalecer la vinculación y el trabajo conjunto en beneficio de
              la <strong>comunidad universitaria</strong> y del{" "}
              <strong>sector productivo</strong>.
            </p>
          </div>
        </div>

        {/* Beneficios de los convenios */}
        <div className="section-beneficios-convenios">
          <div className="section-header-convenios">
            <h2 className="section-title-convenios">
              <span className="title-emoji">✨</span>
              Beneficios de los Convenios
            </h2>
            <p className="section-subtitle-convenios">
              Impulsamos proyectos que transforman y fortalecen la formación
              integral
            </p>
            <div className="title-decoration-convenios">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="beneficios-grid-convenios">
            {beneficiosConvenios.map((beneficio, index) => (
              <div
                key={index}
                className="beneficio-card-convenios"
                style={
                  {
                    "--beneficio-color": beneficio.color,
                  } as React.CSSProperties
                }
              >
                <div className="beneficio-icono-convenios">
                  <span className="beneficio-emoji-convenios">
                    {beneficio.emoji}
                  </span>
                </div>
                <div className="beneficio-contenido-convenios">
                  <h3 className="beneficio-titulo-convenios">
                    {beneficio.titulo}
                  </h3>
                  <p className="beneficio-descripcion-convenios">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción principal */}
        <div className="section-descripcion-convenios">
          <div className="descripcion-contenedor-convenios">
            <div className="descripcion-texto-convenios">
              <p className="descripcion-parrafo-convenios">
                Estos convenios permiten impulsar{" "}
                <span className="texto-destacado">
                  proyectos académicos y profesionales
                </span>
                , estadías, estancias, intercambio de conocimientos y acciones
                de capacitación, contribuyendo a la{" "}
                <span className="texto-destacado">
                  formación integral de los estudiantes
                </span>{" "}
                y al desarrollo regional, nacional e internacional.
              </p>
            </div>
            <div className="descripcion-ambitos">
              {ambitos.map((item, index) => (
                <div key={index} className="ambito-item">
                  <span className="ambito-emoji">{item.emoji}</span>
                  <div className="ambito-contenido">
                    <span className="ambito-titulo">{item.ambito}</span>
                    <span className="ambito-descripcion">
                      {item.descripcion}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requisitos - Persona Moral */}
        <div className="section-requisitos-moral">
          <div className="section-header-convenios">
            <h2 className="section-title-convenios">
              <span className="title-emoji">🏢</span>
              Persona Moral
            </h2>
            <p className="section-subtitle-convenios">
              Documentación requerida para empresas e instituciones
            </p>
            <div className="title-decoration-convenios">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="requisitos-card-moral">
            <div className="requisitos-icono-moral">
              <span className="requisitos-emoji-moral">📋</span>
            </div>
            <div className="requisitos-lista-moral">
              <div className="lista-titulo">
                <span className="lista-numero">1</span>
                <span className="lista-texto">Acta Constitutiva</span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">2</span>
                <span className="lista-texto">Poder notarial</span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">3</span>
                <span className="lista-texto">
                  Registro público de la propiedad
                </span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">4</span>
                <span className="lista-texto">Razón Social de la empresa</span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">5</span>
                <span className="lista-texto">RFC de la empresa</span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">6</span>
                <span className="lista-texto">
                  CURP del representante legal
                </span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">7</span>
                <span className="lista-texto">INE del representante legal</span>
              </div>
              <div className="lista-titulo">
                <span className="lista-numero">8</span>
                <span className="lista-texto">
                  Comprobante de Domicilio de la empresa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Requisitos - Persona Física */}
        <div className="section-requisitos-fisica">
          <div className="section-header-convenios">
            <h2 className="section-title-convenios">
              <span className="title-emoji">👤</span>
              Persona Física
            </h2>
            <p className="section-subtitle-convenios">
              Documentación requerida para personas físicas con actividad
              empresarial
            </p>
            <div className="title-decoration-convenios">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="requisitos-card-fisica">
            <div className="requisitos-icono-fisica">
              <span className="requisitos-emoji-fisica">📄</span>
            </div>
            <div className="requisitos-lista-fisica">
              <div className="lista-item-fisica">
                <span className="lista-numero-fisica">1</span>
                <span className="lista-texto-fisica">RFC de la empresa</span>
              </div>
              <div className="lista-item-fisica">
                <span className="lista-numero-fisica">2</span>
                <span className="lista-texto-fisica">
                  CURP del representante
                </span>
              </div>
              <div className="lista-item-fisica">
                <span className="lista-numero-fisica">3</span>
                <span className="lista-texto-fisica">
                  INE del representante
                </span>
              </div>
              <div className="lista-item-fisica">
                <span className="lista-numero-fisica">4</span>
                <span className="lista-texto-fisica">
                  Comprobante de Domicilio de la empresa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de firma de convenio */}
        <div className="section-proceso-convenios">
          <div className="section-header-convenios">
            <h2 className="section-title-convenios">
              <span className="title-emoji">🔄</span>
              Proceso de firma de convenio
            </h2>
            <div className="title-decoration-convenios">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="proceso-steps-convenios">
            <div className="step-item-convenios">
              <div className="step-numero-convenios">1</div>
              <div className="step-contenido-convenios">
                <h4 className="step-titulo-convenios">Contacto inicial</h4>
                <p className="step-descripcion-convenios">
                  Comunicación con el área de vinculación
                </p>
              </div>
            </div>
            <div className="step-connector-convenios"></div>
            <div className="step-item-convenios">
              <div className="step-numero-convenios">2</div>
              <div className="step-contenido-convenios">
                <h4 className="step-titulo-convenios">
                  Revisión de requisitos
                </h4>
                <p className="step-descripcion-convenios">
                  Verificación de documentación
                </p>
              </div>
            </div>
            <div className="step-connector-convenios"></div>
            <div className="step-item-convenios">
              <div className="step-numero-convenios">3</div>
              <div className="step-contenido-convenios">
                <h4 className="step-titulo-convenios">
                  Elaboración del convenio
                </h4>
                <p className="step-descripcion-convenios">
                  Desarrollo del documento legal
                </p>
              </div>
            </div>
            <div className="step-connector-convenios"></div>
            <div className="step-item-convenios">
              <div className="step-numero-convenios">4</div>
              <div className="step-contenido-convenios">
                <h4 className="step-titulo-convenios">Firma del convenio</h4>
                <p className="step-descripcion-convenios">
                  Formalización del acuerdo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="section-contacto-convenios">
          <div className="contacto-card-convenios">
            <div className="contacto-icono-convenios">
              <span className="contacto-emoji-convenios">📞</span>
            </div>
            <h3 className="contacto-titulo-convenios">
              Información y contacto
            </h3>

            <div className="contacto-mensaje">
              <p className="contacto-texto">
                Para mayor información, consulta en los correos institucionales
                correspondientes.
              </p>
            </div>

            <div className="contacto-item-convenios">
              <span className="contacto-item-icono">📧</span>
              <div className="contacto-item-contenido">
                <span className="contacto-item-etiqueta">Correo:</span>
                <a
                  href="mailto:convenios@utnay.edu.mx"
                  className="contacto-email"
                >
                  convenios@utnay.edu.mx
                </a>
              </div>
            </div>

            <div className="contacto-adicional">
              <p className="contacto-adicional-texto">
                También puedes contactar al área de Vinculación para recibir
                asesoría personalizada
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-convenios">
          <div className="cta-content-convenios">
            <h3 className="cta-titulo-convenios">¿Listo para colaborar?</h3>
            <p className="cta-descripcion-convenios">
              Firme un convenio con la UT Nayarit y fortalezca el desarrollo
              académico y profesional
            </p>
            {/*
            <Link to="/contacto" className="cta-button-convenios">
              <span>Solicitar información</span>
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

export default Convenios;
