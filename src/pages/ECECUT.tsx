import React from 'react';
// import { Link } from 'react-router-dom';
import './ECECUT.css';
import bannerECECUT from '../assets/banner/ECECUT1.jpg';

function ECECUT() {
  const facultades = [
    {
      titulo: 'Evaluar competencias laborales',
      emoji: '📋',
      descripcion: 'Con base en estándares oficiales del CONOCER',
      color: '#2E7D32'
    },
    {
      titulo: 'Certificar personas',
      emoji: '🏅',
      descripcion: 'Que demuestren conocimientos, habilidades y actitudes necesarias',
      color: '#1565C0'
    },
    {
      titulo: 'Emitir certificados',
      emoji: '📜',
      descripcion: 'Con validez oficial en todo el país',
      color: '#B76E1E'
    }
  ];

  const dirigidoA = [
    'Estudiantes',
    'Egresados',
    'Docentes',
    'Fuerza laboral del sector productivo',
    'Sector gubernamental',
    'Sector social'
  ];

  const beneficios = [
    {
      titulo: 'Validez Oficial',
      emoji: '✅',
      descripcion: 'Certificados reconocidos en todo el país por la SEP',
      color: '#2E7D32'
    },
    {
      titulo: 'Perfil Profesional',
      emoji: '📈',
      descripcion: 'Fortalece tu carrera y mejora tu empleabilidad',
      color: '#1565C0'
    },
    {
      titulo: 'Productividad',
      emoji: '⚡',
      descripcion: 'Contribuye a la competitividad del sector productivo',
      color: '#B76E1E'
    }
  ];

  return (
    <>
      <div className="banner-container-ececut">
        <img 
          src={bannerECECUT} 
          alt="Banner ECECUT" 
          className="banner-ececut" 
        />
        <div className="banner-overlay-ececut">
          <div className="banner-content-ececut">
            <h1 className="banner-title-ececut">ECECUT</h1>
            <p className="banner-subtitle-ececut">
              Entidad de Certificación y Evaluación de Competencias<br />
              de la Universidad Tecnológica de Nayarit
            </p>
            <div className="banner-decoration-ececut"></div>
          </div>
        </div>
      </div>

      <section className="content-ececut">
        {/* Introducción / Acreditación */}
        <div className="section-acreditacion">
          <div className="acreditacion-card">
            <div className="acreditacion-header">
              <div className="acreditacion-icono">
                <span className="acreditacion-emoji">🏛️</span>
              </div>
              <div className="acreditacion-titulo-wrapper">
                <h2 className="acreditacion-titulo">Acreditado por</h2>
                <div className="acreditacion-logos">
                  <span className="logo-conocer">CONOCER</span>
                  <span className="logo-sep">SEP</span>
                </div>
              </div>
            </div>
            <p className="acreditacion-texto">
              Es el área acreditada por el <strong>CONOCER</strong>, bajo la rectoría de la{' '}
              <strong>Secretaría de Educación Pública (SEP)</strong>, que tiene la facultad de:
            </p>
          </div>
        </div>

        {/* Facultades */}
        <div className="section-facultades">
          <div className="section-header-ececut">
            <h2 className="section-title-ececut">
              <span className="title-emoji">⚖️</span>
              Nuestras facultades
            </h2>
            <div className="title-decoration-ececut">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="facultades-grid">
            {facultades.map((facultad, index) => (
              <div 
                key={index} 
                className="facultad-card"
                style={{ '--facultad-color': facultad.color } as React.CSSProperties}
              >
                <div className="facultad-icono">
                  <span className="facultad-emoji">{facultad.emoji}</span>
                </div>
                <h3 className="facultad-titulo">{facultad.titulo}</h3>
                <p className="facultad-descripcion">{facultad.descripcion}</p>
                <div className="facultad-barra"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción principal */}
        <div className="section-descripcion">
          <div className="descripcion-contenedor">
            <div className="descripcion-texto">
              <p className="descripcion-parrafo">
                El <strong>ECECUT</strong> evalúa y certifica oficialmente las competencias laborales de estudiantes, 
                egresados, docentes, fuerza laboral de los sectores productivos, del sector gubernamental y social,{' '}
                <span className="texto-destacado">fortaleciendo su perfil profesional</span> y contribuyendo a la{' '}
                <span className="texto-destacado">productividad y competitividad</span>.
              </p>
            </div>
            <div className="descripcion-stats">
              <div className="stat-item">
                <span className="stat-numero">+10</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-numero">+5000</span>
                <span className="stat-label">Personas certificadas</span>
              </div>
              <div className="stat-item">
                <span className="stat-numero">+50</span>
                <span className="stat-label">Estándares evaluados</span>
              </div>
            </div>
          </div>
        </div>

        {/* ¿A quién va dirigido? */}
        <div className="section-dirigido-ececut">
          <div className="section-header-ececut">
            <h2 className="section-title-ececut">
              <span className="title-emoji">👥</span>
              ¿A quién va dirigido?
            </h2>
            <p className="section-subtitle-ececut">
              Fortalecemos el perfil profesional de:
            </p>
            <div className="title-decoration-ececut">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="dirigido-grid-ececut">
            {dirigidoA.map((item, index) => (
              <div key={index} className="dirigido-card-ececut">
                <div className="dirigido-numero-ececut">{index + 1}</div>
                <span className="dirigido-texto-ececut">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="section-beneficios">
          <div className="section-header-ececut">
            <h2 className="section-title-ececut">
              <span className="title-emoji">✨</span>
              Beneficios
            </h2>
            <div className="title-decoration-ececut">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="beneficios-grid">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className="beneficio-card"
                style={{ '--beneficio-color': beneficio.color } as React.CSSProperties}
              >
                <div className="beneficio-icono">
                  <span className="beneficio-emoji">{beneficio.emoji}</span>
                </div>
                <div className="beneficio-contenido">
                  <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
                  <p className="beneficio-descripcion">{beneficio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificados con validez oficial */}
        <div className="section-certificados">
          <div className="certificados-card">
            <div className="certificados-icono">
              <span className="certificados-emoji">🏆</span>
            </div>
            <div className="certificados-contenido">
              <h3 className="certificados-titulo">Certificados con validez oficial</h3>
              <p className="certificados-texto">
                Nuestros certificados cuentan con <strong>reconocimiento oficial en todo el país</strong>, 
                avalados por la Secretaría de Educación Pública y el CONOCER.
              </p>
              <div className="certificados-sellos">
                <span className="sello">SEP</span>
                <span className="sello">CONOCER</span>
                <span className="sello">UTNay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de certificación */}
        <div className="section-proceso">
          <div className="section-header-ececut">
            <h2 className="section-title-ececut">
              <span className="title-emoji">🔄</span>
              Proceso de certificación
            </h2>
            <div className="title-decoration-ececut">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="proceso-steps-ececut">
            <div className="step-item">
              <div className="step-numero">1</div>
              <div className="step-contenido">
                <h4 className="step-titulo">Evaluación</h4>
                <p className="step-descripcion">Se evalúan tus conocimientos, habilidades y actitudes</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-numero">2</div>
              <div className="step-contenido">
                <h4 className="step-titulo">Demostración</h4>
                <p className="step-descripcion">Demuestras tu competencia laboral</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-numero">3</div>
              <div className="step-contenido">
                <h4 className="step-titulo">Certificación</h4>
                <p className="step-descripcion">Recibes tu certificado con validez oficial</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-ececut">
          <div className="cta-content-ececut">
            <h3 className="cta-titulo">Certifica tu competencia laboral</h3>
            <p className="cta-descripcion">
                Obtén un certificado con validez oficial que respalde tu experiencia y conocimientos
            </p>
            {/*
            <Link to="/contacto" className="cta-button-ececut">
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

export default ECECUT;