import React from 'react';
// import { Link } from 'react-router-dom';
import './ComiteEtica.css';
import bannerComiteEtica from '../assets/banner/bannerComiteEtica.jpg'; // Descomentar cuando tengas la imagen

function ComiteEtica() {
  const funcionesComite = [
    {
      titulo: 'Difusión y capacitación',
      emoji: '📢',
      descripcion: 'Promoción de la cultura de ética e integridad en la Administración Pública',
      color: '#2E7D32'
    },
    {
      titulo: 'Atención a denuncias',
      emoji: '⚖️',
      descripcion: 'Recepción y seguimiento de quejas por vulneración del Código de Ética y Conducta',
      color: '#1565C0'
    },
    {
      titulo: 'Prevención de conflictos',
      emoji: '🛡️',
      descripcion: 'Capacitación en prevención de conflictos de intereses y mejora organizacional',
      color: '#B76E1E'
    }
  ];

  const estructuraComite = [
    {
      puesto: 'Presidencia',
      responsable: 'Titular de la Dependencia o Entidad',
      emoji: '👤',
      descripcion: 'Lidera y coordina las actividades del Comité'
    },
    {
      puesto: 'Secretaría Ejecutiva',
      responsable: 'Designada por la Presidencia',
      emoji: '📋',
      descripcion: 'Gestiona y da seguimiento a los acuerdos del Comité'
    },
    {
      puesto: 'Secretaría Técnica',
      responsable: 'Persona con perfil jurídico o administrativo',
      emoji: '⚖️',
      descripcion: 'Asesora en aspectos legales y técnicos'
    },
    {
      puesto: 'Miembros temporales',
      responsable: 'Elegidos por votación entre servidores públicos',
      emoji: '🗳️',
      descripcion: 'Representantes de distintos niveles jerárquicos'
    },
    {
      puesto: 'Representante del Órgano Interno de Control',
      responsable: 'Designación institucional',
      emoji: '🔍',
      descripcion: 'Garantiza la transparencia y legalidad'
    }
  ];

  const procedimientoDenuncias = [
    {
      paso: 1,
      nombre: 'Recepción',
      descripcion: 'Se recibe la denuncia en el Comité de Ética',
      emoji: '📥'
    },
    {
      paso: 2,
      nombre: 'Análisis',
      descripcion: 'Se determina si procede y se analiza la evidencia',
      emoji: '🔍'
    },
    {
      paso: 3,
      nombre: 'Determinación',
      descripcion: 'Se emiten recomendaciones o canaliza el caso a la instancia correspondiente',
      emoji: '⚖️'
    },
    {
      paso: 4,
      nombre: 'Seguimiento',
      descripcion: 'Se vigila el cumplimiento de las recomendaciones',
      emoji: '📊'
    }
  ];

  const valoresEtica = [
    {
      valor: 'Integridad',
      emoji: '⭐',
      descripcion: 'Actuar con honestidad y rectitud'
    },
    {
      valor: 'Transparencia',
      emoji: '🔍',
      descripcion: 'Manejo claro y abierto de la información'
    },
    {
      valor: 'Responsabilidad',
      emoji: '🤝',
      descripcion: 'Compromiso con las obligaciones institucionales'
    },
    {
      valor: 'Imparcialidad',
      emoji: '⚖️',
      descripcion: 'Actuar sin favoritismos ni discriminación'
    }
  ];

  return (
    <>
      <div className="banner-container-comite">
        <img 
          src={bannerComiteEtica} 
          alt="Banner Comité de Ética" 
          className="banner-comite" 
        /> 
        <div className="banner-overlay-comite">
          <div className="banner-content-comite">
            <h1 className="banner-title-comite">COMITÉ DE ÉTICA</h1>
            <p className="banner-subtitle-comite">
              Fomentando la cultura de integridad<br />
              en la Administración Pública
            </p>
            <div className="banner-decoration-comite"></div>
          </div>
        </div>
      </div>

      <section className="content-comite">
        {/* Introducción / Sabías que */}
        <div className="section-sabiasque">
          <div className="sabiasque-card">
            <div className="sabiasque-header">
              <div className="sabiasque-icono">
                <span className="sabiasque-emoji">💡</span>
              </div>
              <div className="sabiasque-titulo-wrapper">
                <h2 className="sabiasque-titulo">¿Sabías que contamos con un Comité de Ética?</h2>
                <div className="sabiasque-logos">
                  <span className="logo-comite">COMITÉ</span>
                  <span className="logo-etica">ÉTICA</span>
                </div>
              </div>
            </div>
            <p className="sabiasque-texto">
              Es un <strong>órgano colegiado</strong> encargado de fomentar la cultura de integridad en la 
              Administración Pública, capacitar en ética y atender denuncias relacionadas con el{' '}
              <strong>Código de Ética</strong> y el <strong>Código de Conducta</strong>.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="section-valores">
          <div className="section-header-comite">
            <h2 className="section-title-comite">
              <span className="title-emoji-comite">✨</span>
              Valores Institucionales
            </h2>
            <p className="section-subtitle-comite">
              Principios que guían nuestra actuación
            </p>
            <div className="title-decoration-comite">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="valores-grid">
            {valoresEtica.map((valor, index) => (
              <div key={index} className="valor-card">
                <span className="valor-emoji">{valor.emoji}</span>
                <h3 className="valor-titulo">{valor.valor}</h3>
                <p className="valor-descripcion">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Principales funciones */}
        <div className="section-funciones">
          <div className="section-header-comite">
            <h2 className="section-title-comite">
              <span className="title-emoji-comite">⚙️</span>
              Principales funciones
            </h2>
            <div className="title-decoration-comite">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="funciones-grid">
            {funcionesComite.map((funcion, index) => (
              <div 
                key={index} 
                className="funcion-card"
                style={{ '--funcion-color': funcion.color } as React.CSSProperties}
              >
                <div className="funcion-icono">
                  <span className="funcion-emoji">{funcion.emoji}</span>
                </div>
                <h3 className="funcion-titulo">{funcion.titulo}</h3>
                <p className="funcion-descripcion">{funcion.descripcion}</p>
                <div className="funcion-barra"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Estructura del Comité */}
        <div className="section-estructura">
          <div className="section-header-comite">
            <h2 className="section-title-comite">
              <span className="title-emoji-comite">🏛️</span>
              Integración del Comité
            </h2>
            <p className="section-subtitle-comite">
              Estructura organizacional del Comité de Ética
            </p>
            <div className="title-decoration-comite">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="estructura-grid">
            {estructuraComite.map((miembro, index) => (
              <div key={index} className="estructura-card">
                <div className="estructura-icono">
                  <span className="estructura-emoji">{miembro.emoji}</span>
                </div>
                <div className="estructura-contenido">
                  <h3 className="estructura-puesto">{miembro.puesto}</h3>
                  <p className="estructura-responsable">{miembro.responsable}</p>
                  <p className="estructura-descripcion">{miembro.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Procedimiento para Atención de Denuncias */}
        <div className="section-procedimiento">
          <div className="section-header-comite">
            <h2 className="section-title-comite">
              <span className="title-emoji-comite">📋</span>
              Procedimiento para la Atención de Denuncias
            </h2>
            <div className="title-decoration-comite">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="procedimiento-timeline">
            {procedimientoDenuncias.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-numero">{item.paso}</div>
                <div className="timeline-contenido">
                  <div className="timeline-header">
                    <span className="timeline-emoji">{item.emoji}</span>
                    <h3 className="timeline-titulo">{item.nombre}</h3>
                  </div>
                  <p className="timeline-descripcion">{item.descripcion}</p>
                </div>
                {index < procedimientoDenuncias.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Códigos de Ética y Conducta */}
        <div className="section-codigos">
          <div className="codigos-card">
            <div className="codigos-icono">
              <span className="codigos-emoji">📜</span>
            </div>
            <div className="codigos-contenido">
              <h3 className="codigos-titulo">Códigos que nos rigen</h3>
              <div className="codigos-lista">
                <div className="codigo-item">
                  <span className="codigo-icono">📘</span>
                  <div className="codigo-texto">
                    <strong>Código de Ética</strong>
                    <p>Principios y valores que guían el comportamiento de los servidores públicos</p>
                  </div>
                </div>
                <div className="codigo-item">
                  <span className="codigo-icono">📗</span>
                  <div className="codigo-texto">
                    <strong>Código de Conducta</strong>
                    <p>Reglas específicas de actuación para el personal de la UT Nayarit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="section-contacto-comite">
          <div className="contacto-card-comite">
            <div className="contacto-icono-comite">
              <span className="contacto-emoji-comite">📞</span>
            </div>
            <h3 className="contacto-titulo-comite">Contacto del Comité de Ética</h3>
            
            <div className="contacto-mensaje-comite">
              <p className="contacto-texto-comite">
                Para presentar denuncias, recibir asesoría o solicitar capacitación en materia de ética e integridad
              </p>
            </div>
            
            <div className="contacto-item-comite">
              <span className="contacto-item-icono">📧</span>
              <div className="contacto-item-contenido">
                <span className="contacto-item-etiqueta">Correo:</span>
                <a href="mailto:comitedeetica@utnay.edu.mx" className="contacto-email-comite">
                  comitedeetica@utnay.edu.mx
                </a>
              </div>
            </div>

            <div className="contacto-confidencialidad">
              <span className="confidencialidad-icono">🔒</span>
              <span className="confidencialidad-texto">
                Garantizamos confidencialidad y protección a los denunciantes
              </span>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-comite">
          <div className="cta-content-comite">
            <h3 className="cta-titulo-comite">Construyamos juntos una cultura de integridad</h3>
            <p className="cta-descripcion-comite">
              Tu participación es fundamental para fortalecer la ética institucional
            </p>
            <div className="cta-botones-comite">
              <a href="mailto:comitedeetica@utnay.edu.mx" className="cta-button-comite cta-button-denuncia">
                <span>Presentar denuncia</span>
              </a>
              <a href="mailto:comitedeetica@utnay.edu.mx" className="cta-button-comite cta-button-asesoria">
                <span>Solicitar asesoría</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComiteEtica;