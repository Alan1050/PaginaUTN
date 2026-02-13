import React from 'react';
// import { Link } from 'react-router-dom';
import './ExtensionUniversitaria.css';
import bannerExtension from '../assets/banner/EXTENSIÓN_UNI 1.jpg';

function ExtensionUniversitaria() {
  const diplomados = [
    'Administración de recursos humanos',
    'Desarrollo de habilidades gerenciales',
    'Administración básica de negocios',
    'Mercadotecnia y ventas',
    'Gestión y administración pública',
    'Gestión y administración de proyectos',
    'Tecnologías de alimentos',
    'Gastronomía',
    'Gestión y administración educativa',
    'Seguridad hotelera'
  ];

  const capacitaciones = [
    'Administración de negocios',
    'Mercadotecnia y ventas',
    'Gastronomía',
    'Servicios turísticos',
    'Desarrollo de habilidades de liderazgo',
    'Cultura organizacional',
    'Recursos humanos',
    'Servicio y seguimiento al cliente',
    'Relaciones humanas en las empresas',
    'Mantenimiento industrial',
    'Logística y negocios internacionales',
    'Tecnologías de alimentos',
    'Tecnologías de la información y comunicación',
    'Seguridad pública',
    'Energías renovables'
  ];

  const beneficiosCapacitacion = [
    'Profesores altamente calificados en conocimiento y experiencia',
    'Metodología de enseñanza que se enfoca en resolver problemas reales en el trabajo',
    'Herramientas prácticas y de aplicación inmediata que permiten alcanzar mayores niveles de rendimiento y logro',
    'Diseño de curso y cotización de acuerdo a las necesidades presentadas'
  ];

  const serviciosCEDPAI = [
    { nombre: 'Declaración nutrimental', emoji: '📊', descripcion: 'Análisis y etiquetado nutrimental' },
    { nombre: 'Vida de anaquel', emoji: '⏳', descripcion: 'Estudios de estabilidad y caducidad' },
    { nombre: 'Asesoría de conservación de alimentos', emoji: '❄️', descripcion: 'Técnicas y procesos de preservación' },
    { nombre: 'Análisis', emoji: '🔬', descripcion: 'Pruebas fisicoquímicas y microbiológicas' },
    { nombre: 'Desarrollo de nuevos productos', emoji: '🧪', descripcion: 'Innovación y formulación de alimentos' }
  ];

  const espaciosAlquiler = [
    { nombre: 'Auditorio (50 personas)', emoji: '🏫', capacidad: '50', color: '#2A9D8F' },
    { nombre: 'Auditorio (150 personas)', emoji: '🏛️', capacidad: '150', color: '#2A9D8F' },
    { nombre: 'Auditorio de vinculación', emoji: '🎭', capacidad: '250', color: '#E76F51' },
    { nombre: 'Poliforum', emoji: '🏟️', capacidad: 'Multiusos', color: '#E9C46A' },
    { nombre: 'Salas de capacitación', emoji: '📚', capacidad: '20-40', color: '#2A9D8F' }
  ];

  const sectores = [
    { nombre: 'Estudiantes', emoji: '👨‍🎓', descripcion: 'Complementa tu formación académica' },
    { nombre: 'Egresados', emoji: '👩‍🎓', descripcion: 'Actualización profesional continua' },
    { nombre: 'Sector Empresarial', emoji: '🏢', descripcion: 'Capacitación y vinculación' },
    { nombre: 'Sector Gubernamental', emoji: '🏛️', descripcion: 'Colaboración institucional' },
    { nombre: 'Público en general', emoji: '👥', descripcion: 'Desarrollo personal y profesional' }
  ];

  return (
    <>
      <div className="banner-container-extension">
        <img 
          src={bannerExtension} 
          alt="Banner Extensión Universitaria" 
          className="banner-extension" 
        />
        <div className="banner-overlay-extension">
          <div className="banner-content-extension">
            <h1 className="banner-title-extension">EXTENSIÓN</h1>
            <p className="banner-subtitle-extension">UNIVERSITARIA</p>
            <div className="banner-decoration-extension"></div>
          </div>
        </div>
      </div>

      <section className="content-extension">
        {/* Introducción */}
        <div className="section-intro-extension">
          <div className="intro-card-extension">
            <div className="intro-icono-extension">
              <span className="intro-emoji-extension">🌉</span>
            </div>
            <div className="intro-texto-extension">
              <p className="intro-parrafo-extension">
                La <strong>Extensión Universitaria</strong> es el conjunto de actividades y programas mediante los cuales 
                la universidad se vincula con <span className="texto-destacado-extension">estudiantes, egresados, sector empresarial, 
                sector gubernamental y público en general</span>, fortaleciendo la colaboración y contribuyendo al desarrollo 
                académico, social y productivo.
              </p>
            </div>
          </div>
        </div>

        {/* Sectores */}
        <div className="section-sectores-extension">
          <div className="section-header-extension">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🤝</span>
              Nos vinculamos con
            </h2>
            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="sectores-grid-extension">
            {sectores.map((sector, index) => (
              <div key={index} className="sector-card-extension">
                <div className="sector-icono-extension">
                  <span className="sector-emoji-extension">{sector.emoji}</span>
                </div>
                <h3 className="sector-nombre-extension">{sector.nombre}</h3>
                <p className="sector-descripcion-extension">{sector.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS DE CAPACITACIÓN */}
        <div className="section-capacitacion">
          <div className="section-header-extension">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🎓</span>
              Servicios de Capacitación
            </h2>
            <p className="section-subtitle-extension">
              Educación continua para el desarrollo profesional
            </p>
            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="capacitacion-intro-card">
            <p className="capacitacion-intro-texto">
              La Universidad Tecnológica de Nayarit, a través del área de <strong>Educación Continua</strong>, 
              ofrece programas especializados de Capacitación y Actualización para el Sector Productivo 
              y Público en general, en la modalidad de <span className="texto-destacado-extension">cursos, talleres y diplomados</span>.
              <br /><br />
              Además de los programas abiertos, se atienden las necesidades específicas de las empresas, 
              diseñando el Curso o Diplomado de acuerdo a ellas.
            </p>
          </div>

          {/* Diplomados */}
          <div className="diplomados-section">
            <h3 className="subtitulo-extension">
              <span className="subtitulo-icono">📜</span>
              Diplomados ofrecidos en:
            </h3>
            <div className="diplomados-grid">
              {diplomados.map((diplomado, index) => (
                <div key={index} className="diplomado-item">
                  <span className="diplomado-check">✓</span>
                  <span className="diplomado-nombre">{diplomado}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Áreas de capacitación */}
          <div className="capacitaciones-section">
            <h3 className="subtitulo-extension">
              <span className="subtitulo-icono">📋</span>
              Programas de capacitación en:
            </h3>
            <div className="capacitaciones-grid">
              {capacitaciones.map((capacitacion, index) => (
                <div key={index} className="capacitacion-item">
                  <span className="capacitacion-bullet">•</span>
                  <span className="capacitacion-nombre">{capacitacion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beneficios de capacitación */}
          <div className="beneficios-capacitacion-card">
            <h3 className="beneficios-titulo">
              <span className="beneficios-icono">✨</span>
              Beneficios
            </h3>
            <div className="beneficios-grid">
              {beneficiosCapacitacion.map((beneficio, index) => (
                <div key={index} className="beneficio-item">
                  <span className="beneficio-numero">{index + 1}</span>
                  <p className="beneficio-texto">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICIOS AL SECTOR PRODUCTIVO */}
        <div className="section-sector-productivo">
          <div className="section-header-extension">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🏭</span>
              Servicios al Sector Productivo
            </h2>
            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* CEDPAI */}
          <div className="cedpai-section">
            <div className="cedpai-header">
              <div className="cedpai-icono-grande">
                <span className="cedpai-emoji-grande">🔬</span>
              </div>
              <div className="cedpai-titulo-wrapper">
                <h3 className="cedpai-titulo">CEDPAI</h3>
                <p className="cedpai-subtitulo">Centro de Estudios y Desarrollo de Procesos Agroindustriales</p>
              </div>
            </div>

            <div className="cedpai-servicios-grid">
              {serviciosCEDPAI.map((servicio, index) => (
                <div key={index} className="cedpai-servicio-card">
                  <div className="cedpai-servicio-icono">
                    <span className="cedpai-servicio-emoji">{servicio.emoji}</span>
                  </div>
                  <div className="cedpai-servicio-contenido">
                    <h4 className="cedpai-servicio-nombre">{servicio.nombre}</h4>
                    <p className="cedpai-servicio-descripcion">{servicio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alquiler de espacios */}
          <div className="alquiler-section">
            <div className="alquiler-header">
              <div className="alquiler-icono-grande">
                <span className="alquiler-emoji-grande">🏛️</span>
              </div>
              <h3 className="alquiler-titulo-principal">Alquiler de instalaciones</h3>
            </div>

            <div className="espacios-grid">
              {espaciosAlquiler.map((espacio, index) => (
                <div 
                  key={index} 
                  className={`espacio-card `}
                  style={{ '--espacio-color': espacio.color } as React.CSSProperties}
                >
                  <div className="espacio-icono">
                    <span className="espacio-emoji">{espacio.emoji}</span>
                  </div>
                  <h4 className="espacio-nombre">{espacio.nombre}</h4>
                  <div className="espacio-capacidad">
                    <span className="capacidad-icono">👥</span>
                    <span className="capacidad-texto">{espacio.capacidad}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-extension">
          <div className="cta-content-extension">
            <h3 className="cta-titulo-extension">¿Necesitas nuestros servicios?</h3>
            <p className="cta-descripcion-extension">
              Capacitación especializada, servicios CEDPAI o alquiler de espacios, estamos listos para colaborar contigo
            </p>
            {/*
            <Link to="/contacto" className="cta-button-extension">
              <span>Solicita información</span>
              <svg className="cta-arrow-extension" viewBox="0 0 24 24">
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

export default ExtensionUniversitaria;