// import { Link } from 'react-router-dom';
import './MovilidadEstudiantil.css';
import bannerMovilidad from '../assets/banner/MOVILIDAD2.jpg';

function MovilidadEstudiantil() {
  const paisesAcademicos = [
    { nombre: 'Canadá', emoji: '🇨🇦', bandera: '🍁', descripcion: 'Intercambio académico' },
    { nombre: 'Chile', emoji: '🇨🇱', bandera: '🌶️', descripcion: 'Intercambio académico' },
    { nombre: 'Perú', emoji: '🇵🇪', bandera: '🏔️', descripcion: 'Intercambio académico' },
    { nombre: 'Colombia', emoji: '🇨🇴', bandera: '☕', descripcion: 'Intercambio académico' }
  ];

  const paisesEstancias = [
    { nombre: 'España', emoji: '🇪🇸', bandera: '💃', descripcion: 'Estancias profesionales' },
    { nombre: 'Las Bahamas', emoji: '🇧🇸', bandera: '🏝️', descripcion: 'Estancias profesionales' },
    { nombre: 'Colombia', emoji: '🇨🇴', bandera: '☕', descripcion: 'Estancias profesionales' },
    { nombre: 'Estados Unidos', emoji: '🇺🇸', bandera: '🗽', descripcion: 'Estancias profesionales' },
    { nombre: 'Y más...', emoji: '🌎', bandera: '✨', descripcion: 'Más destinos' }
  ];

  const beneficios = [
    {
      titulo: 'Formación académica',
      emoji: '📚',
      descripcion: 'Fortalece tu formación en Instituciones de Educación Superior internacionales'
    },
    {
      titulo: 'Formación cultural',
      emoji: '🌍',
      descripcion: 'Sumérgete en nuevas culturas y expande tu visión del mundo'
    },
    {
      titulo: 'Formación personal',
      emoji: '💪',
      descripcion: 'Desarrolla independencia, resiliencia y adaptabilidad'
    },
    {
      titulo: 'Desarrollo profesional',
      emoji: '💼',
      descripcion: 'Realiza estancias en empresas internacionales'
    },
    {
      titulo: 'Contextos reales',
      emoji: '🤝',
      descripcion: 'Aprende en entornos multiculturales y diversos'
    },
    {
      titulo: 'Idiomas',
      emoji: '🗣️',
      descripcion: 'El dominio de idiomas abre puertas a más oportunidades'
    }
  ];

  return (
    <>
      <div className="banner-container-movilidad">
        <img 
          src={bannerMovilidad} 
          alt="Banner Movilidad Estudiantil" 
          className="banner-movilidad" 
        />
        <div className="banner-overlay-movilidad">
          <div className="banner-content-movilidad">
            <h1 className="banner-title-movilidad">MOVILIDAD</h1>
            <p className="banner-subtitle-movilidad">ESTUDIANTIL</p>
            <div className="banner-decoration-movilidad"></div>
          </div>
        </div>
      </div>

      <section className="content-movilidad">
        {/* Introducción */}
        <div className="section-intro-movilidad">
          <div className="intro-card-movilidad">
            <div className="intro-icono-movilidad">
              <span className="intro-emoji-movilidad">✈️</span>
            </div>
            <div className="intro-texto-movilidad">
              <p className="intro-parrafo-movilidad">
                Se ha impulsado la proyección de sus estudiantes promoviendo{' '}
                <span className="texto-destacado-movilidad">experiencias académicas y profesionales en el extranjero</span>, 
                mediante convocatorias de intercambio académico internacional hemos enviado estudiantes a países como 
                Canadá, Chile, Perú y Colombia, fortaleciendo su formación académica, cultural y personal en 
                Instituciones de Educación Superior.
              </p>
              <p className="intro-parrafo-movilidad">
                Asimismo, gracias a la vinculación con empresas internacionales, nuestros estudiantes han sido aceptados 
                para realizar <span className="texto-destacado-movilidad">estancias y proyectos</span> en países como España, 
                Las Bahamas, Colombia, Estados Unidos y más, ampliando sus oportunidades de desarrollo profesional en 
                contextos reales y multiculturales.
              </p>
            </div>
          </div>
        </div>

        {/* Países intercambio académico */}
        <div className="section-paises-academicos">
          <div className="section-header-movilidad">
            <h2 className="section-title-movilidad">
              <span className="title-emoji-movilidad">🎓</span>
              Intercambio Académico
            </h2>
            <p className="section-subtitle-movilidad">
              Hemos enviado estudiantes a instituciones de educación superior en:
            </p>
            <div className="title-decoration-movilidad">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="paises-grid-movilidad">
            {paisesAcademicos.map((pais, index) => (
              <div key={index} className="pais-card-movilidad">
                <div className="pais-icono-movilidad">
                  <span className="pais-emoji-movilidad">{pais.emoji}</span>
                  <span className="pais-bandera-movilidad">{pais.bandera}</span>
                </div>
                <h3 className="pais-nombre-movilidad">{pais.nombre}</h3>
                <p className="pais-descripcion-movilidad">{pais.descripcion}</p>
                <div className="pais-barra-movilidad"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Países estancias profesionales */}
        <div className="section-paises-estancias">
          <div className="section-header-movilidad">
            <h2 className="section-title-movilidad">
              <span className="title-emoji-movilidad">💼</span>
              Estancias Profesionales
            </h2>
            <p className="section-subtitle-movilidad">
              Nuestros estudiantes han realizado estancias y proyectos en:
            </p>
            <div className="title-decoration-movilidad">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="paises-grid-movilidad">
            {paisesEstancias.map((pais, index) => (
              <div key={index} className="pais-card-movilidad pais-card-destacada">
                <div className="pais-icono-movilidad">
                  <span className="pais-emoji-movilidad">{pais.emoji}</span>
                  <span className="pais-bandera-movilidad">{pais.bandera}</span>
                </div>
                <h3 className="pais-nombre-movilidad">{pais.nombre}</h3>
                <p className="pais-descripcion-movilidad">{pais.descripcion}</p>
                <div className="pais-barra-movilidad"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="section-beneficios-movilidad">
          <div className="section-header-movilidad">
            <h2 className="section-title-movilidad">
              <span className="title-emoji-movilidad">✨</span>
              La experiencia transforma
            </h2>
            <p className="section-subtitle-movilidad">
              La Movilidad Internacional es una experiencia que transforma, abre horizontes y fortalece el perfil profesional de nuestros estudiantes.
            </p>
            <div className="title-decoration-movilidad">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="beneficios-grid-movilidad">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="beneficio-card-movilidad">
                <div className="beneficio-icono-movilidad">
                  <span className="beneficio-emoji-movilidad">{beneficio.emoji}</span>
                </div>
                <div className="beneficio-contenido-movilidad">
                  <h3 className="beneficio-titulo-movilidad">{beneficio.titulo}</h3>
                  <p className="beneficio-descripcion-movilidad">{beneficio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Importancia del idioma */}
        <div className="section-idioma-movilidad">
          <div className="idioma-card-movilidad">
            <div className="idioma-icono-movilidad">
              <span className="idioma-emoji-movilidad">🗣️</span>
            </div>
            <div className="idioma-contenido-movilidad">
              <h3 className="idioma-titulo-movilidad">El idioma es la llave</h3>
              <p className="idioma-texto-movilidad">
                El contar con un adecuado nivel de idioma extranjero representa un{' '}
                <span className="texto-destacado-movilidad">factor clave</span> para acceder a un mayor número de oportunidades, 
                ya que facilita la integración académica, laboral y cultural en el país de destino.
              </p>
              <div className="idioma-badge-movilidad">
                <span className="idioma-badge-icono">🔑</span>
                <span className="idioma-badge-texto">Aprende idiomas, abre fronteras</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="section-contacto-movilidad">
          <div className="contacto-card-movilidad">
            <div className="contacto-icono-movilidad">
              <span className="contacto-emoji-movilidad">📬</span>
            </div>
            <div className="contacto-contenido-movilidad">
              <h3 className="contacto-titulo-movilidad">¿Quieres vivir esta experiencia?</h3>
              <p className="contacto-descripcion-movilidad">
                Para mayor información, consulta en los correos institucionales correspondientes.
              </p>
              
              <div className="contacto-info-grid-movilidad">
                <div className="contacto-item-movilidad">
                  <span className="contacto-item-icono-movilidad">📧</span>
                  <div className="contacto-item-contenido-movilidad">
                    <span className="contacto-item-etiqueta-movilidad">Correo:</span>
                    <a href="mailto:movilidad@utnay.edu.mx" className="contacto-email-movilidad">
                      movilidad@utnay.edu.mx
                    </a>
                  </div>
                </div>

                <div className="contacto-item-movilidad">
                  <span className="contacto-item-icono-movilidad">📞</span>
                  <div className="contacto-item-contenido-movilidad">
                    <span className="contacto-item-etiqueta-movilidad">Teléfono:</span>
                    <a href="tel:+523112119800" className="contacto-telefono-movilidad">
                      +52 (311) 211 9800 ext. 3100
                    </a>
                  </div>
                </div>

                <div className="contacto-item-movilidad contacto-item-whatsapp">
                  <span className="contacto-item-icono-movilidad">📱</span>
                  <div className="contacto-item-contenido-movilidad">
                    <span className="contacto-item-etiqueta-movilidad">WhatsApp:</span>
                    <a 
                      href="https://wa.me/523114469297" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contacto-whatsapp-movilidad"
                    >
                      +52 (311) 446 9297
                    </a>
                  </div>
                </div>
              </div>

              <div className="contacto-frase-movilidad">
                <span className="frase-comillas-movilidad">"</span>
                La movilidad internacional es una experiencia que transforma, abre horizontes y fortalece el perfil profesional
                <span className="frase-comillas-movilidad">"</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="section-cta-movilidad">
          <div className="cta-content-movilidad">
            <h3 className="cta-titulo-movilidad">¡Tu aventura internacional comienza aquí!</h3>
            <p className="cta-descripcion-movilidad">
            Prepárate para vivir una experiencia única que transformará tu futuro profesional
            </p>
            {/*
                            <Link to="/contacto" className="cta-button-movilidad">
              <span>Solicita información</span>
              <svg className="cta-arrow-movilidad" viewBox="0 0 24 24">
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

export default MovilidadEstudiantil;