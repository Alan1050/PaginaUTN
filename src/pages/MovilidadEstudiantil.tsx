// import { Link } from 'react-router-dom';
import { useState } from "react";
import "./MovilidadEstudiantil.css";
import bannerMovilidad from "../assets/banner/bannerMovilidad.jpg";
import experiencia3 from "../assets/experienciasMovilidad/Experiencia3.jpg";
import experiencia4 from "../assets/experienciasMovilidad/Experiencia4.jpg";
import experiencia5 from "../assets/experienciasMovilidad/Experiencia5.jpg";
import experiencia6 from "../assets/experienciasMovilidad/Experiencia6.jpg";
import experiencia7 from "../assets/experienciasMovilidad/Experiencia7.jpg";
import experiencia8 from "../assets/experienciasMovilidad/Experiencia8.jpg";
import experiencia9 from "../assets/experienciasMovilidad/Experiencia9.jpg";
import experiencia10 from "../assets/experienciasMovilidad/Experiencia10.jpg";

const experiencia1 = new URL(
  "../assets/experienciasMovilidad/Experiencia1.JPG",
  import.meta.url,
).href;
const experiencia2 = new URL(
  "../assets/experienciasMovilidad/Experiencia2.JPG",
  import.meta.url,
).href;

function MovilidadEstudiantil() {
  const [experienciaActiva, setExperienciaActiva] = useState(0);
  const [mostrarIntroduccionCompleta, setMostrarIntroduccionCompleta] =
    useState(false);

  const paisesAcademicos = [
    {
      nombre: "Canadá",
      emoji: "🇨🇦",
      bandera: "🍁",
    },
    {
      nombre: "Chile",
      emoji: "🇨🇱",
      bandera: "🌶️",
    },
    {
      nombre: "Perú",
      emoji: "🇵🇪",
      bandera: "🏔️",
    },
    {
      nombre: "Colombia",
      emoji: "🇨🇴",
      bandera: "☕",
    },
  ];

  const paisesEstancias = [
    {
      nombre: "España",
      emoji: "🇪🇸",
      bandera: "💃",

    },
    {
      nombre: "Las Bahamas",
      emoji: "🇧🇸",
      bandera: "🏝️",
    },
    {
      nombre: "Colombia",
      emoji: "🇨🇴",
      bandera: "☕",
    },
    {
      nombre: "Estados Unidos",
      emoji: "🇺🇸",
      bandera: "🗽",
    },
    {
      nombre: "Y más...",
      emoji: "🌎",
      bandera: "✨",
    },
  ];

  const beneficios = [
    {
      titulo: "Formación académica",
      emoji: "📚",
      descripcion:
        "Fortalece tu formación en Instituciones de Educación Superior internacionales",
    },
    {
      titulo: "Formación cultural",
      emoji: "🌍",
      descripcion: "Sumérgete en nuevas culturas y expande tu visión del mundo",
    },
    {
      titulo: "Formación personal",
      emoji: "💪",
      descripcion: "Desarrolla independencia, resiliencia y adaptabilidad",
    },
    {
      titulo: "Desarrollo profesional",
      emoji: "💼",
      descripcion: "Realiza estancias en empresas internacionales",
    },
    {
      titulo: "Contextos reales",
      emoji: "🤝",
      descripcion: "Aprende en entornos multiculturales y diversos",
    },
    {
      titulo: "Idiomas",
      emoji: "🗣️",
      descripcion: "El dominio de idiomas abre puertas a más oportunidades",
    },
  ];

  const experiencias = [
    {
      imagen: experiencia1,
      titulo: "Intercambio cultural en Corea del Sur",
      descripcion:
        "Una experiencia de movilidad que permite descubrir nuevas tradiciones, ampliar la visión del mundo y crecer dentro y fuera del aula.",
    },
    {
      imagen: experiencia2,
      titulo: "Bienvenida académica en Colombia",
      descripcion:
        "Estudiantes de movilidad celebran el encuentro entre culturas y el inicio de una etapa llena de aprendizaje y nuevas amistades.",
    },
    {
      imagen: experiencia3,
      titulo: "Nuevas conexiones internacionales",
      descripcion:
        "La movilidad estudiantil también crea vínculos personales y profesionales que acompañan a nuestros estudiantes durante toda su formación.",
    },
    {
      imagen: experiencia4,
      titulo: "Estancia profesional en el extranjero",
      descripcion:
        "Nuestros estudiantes llevan sus conocimientos a escenarios internacionales y conocen de cerca la operación de empresas de clase mundial.",
    },
    {
      imagen: experiencia5,
      titulo: "Formación en entornos reales",
      descripcion:
        "Cada jornada de práctica fortalece las competencias técnicas, la seguridad profesional y la capacidad de adaptarse a nuevos retos.",
    },
    {
      imagen: experiencia6,
      titulo: "Aprendizaje en equipo",
      descripcion:
        "Compartir experiencias con profesionales de otros lugares enriquece el aprendizaje y abre nuevas perspectivas de colaboración.",
    },
    {
      imagen: experiencia7,
      titulo: "Excelencia gastronómica internacional",
      descripcion:
        "La práctica en cocinas profesionales permite perfeccionar técnicas y aprender de estándares internacionales de calidad y servicio.",
    },
    {
      imagen: experiencia8,
      titulo: "Desarrollo de habilidades profesionales",
      descripcion:
        "La dedicación, la creatividad y la atención al detalle se convierten en herramientas esenciales durante una estancia internacional.",
    },
    {
      imagen: experiencia9,
      titulo: "Una experiencia compartida",
      descripcion:
        "El trabajo junto a equipos multiculturales fortalece la comunicación, el liderazgo y el sentido de comunidad profesional.",
    },
    {
      imagen: experiencia10,
      titulo: "Encuentro entre México y Colombia",
      descripcion:
        "La movilidad crea puentes entre países y reúne a estudiantes que comparten el entusiasmo por aprender y conocer nuevas culturas.",
    },
  ];

  const experienciaSeleccionada = experiencias[experienciaActiva];

  return (
    <>
      <div className="banner-container-movilidad">
        <img
          src={bannerMovilidad}
          alt="Banner Movilidad Estudiantil"
          className="banner-movilidad"
        />
      </div>

      <section className="content-movilidad">
        {/* Introducción */}
        <div className="section-intro-movilidad">
          <div className="intro-card-movilidad">
            <div className="intro-texto-movilidad">
              <p className="intro-parrafo-movilidad">
                Se ha impulsado la proyección de sus estudiantes promoviendo{" "}
                <span className="texto-destacado-movilidad">
                  experiencias académicas y profesionales en el extranjero
                </span>
                , mediante convocatorias de intercambio académico internacional
                hemos enviado estudiantes a países como Canadá, Chile, Perú y
                Colombia, fortaleciendo su formación académica, cultural y
                personal en Instituciones de Educación Superior.
              </p>
              <p
                id="contenido-adicional-movilidad"
                className={`intro-parrafo-movilidad intro-parrafo-adicional-movilidad${
                  mostrarIntroduccionCompleta ? " visible" : ""
                }`}
              >
                Asimismo, gracias a la vinculación con empresas internacionales,
                nuestros estudiantes han sido aceptados para realizar{" "}
                <span className="texto-destacado-movilidad">
                  estancias y proyectos
                </span>{" "}
                en países como España, Las Bahamas, Colombia, Estados Unidos y
                más, ampliando sus oportunidades de desarrollo profesional en
                contextos reales y multiculturales.
              </p>
              <button
                type="button"
                className="intro-leer-mas-movilidad"
                onClick={() =>
                  setMostrarIntroduccionCompleta((estadoActual) => !estadoActual)
                }
                aria-expanded={mostrarIntroduccionCompleta}
                aria-controls="contenido-adicional-movilidad"
              >
                {mostrarIntroduccionCompleta ? "Leer menos" : "Leer más"}
                <span
                  className={`intro-leer-mas-icono-movilidad${
                    mostrarIntroduccionCompleta ? " abierto" : ""
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>
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
              Hemos enviado estudiantes a instituciones de educación superior
              en:
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

                </div>
                <h3 className="pais-nombre-movilidad">{pais.nombre}</h3>
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
              <div
                key={index}
                className="pais-card-movilidad pais-card-destacada"
              >
                <div className="pais-icono-movilidad">
                  <span className="pais-emoji-movilidad">{pais.emoji}</span>

                </div>
                <h3 className="pais-nombre-movilidad">{pais.nombre}</h3>
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
              La Movilidad Internacional es una experiencia que transforma, abre
              horizontes y fortalece el perfil profesional de nuestros
              estudiantes.
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

                <div className="beneficio-contenido-movilidad">
                  <h3 className="beneficio-titulo-movilidad">
                    {beneficio.titulo}
                  </h3>
                  <p className="beneficio-descripcion-movilidad">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galería de Experiencias */}
        <div className="section-galeria-movilidad">
          <div className="section-header-movilidad">
            <h2 className="section-title-movilidad">
              Experiencia Jaguar
            </h2>
            <p className="section-subtitle-movilidad">
              Conoce algunos de los momentos que nuestros estudiantes han
              vivido alrededor del mundo.
            </p>
            <div className="title-decoration-movilidad">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="galeria-movilidad">
            <figure className="galeria-destacada-movilidad">
              <div className="galeria-imagen-contenedor-movilidad">
                <img
                  key={experienciaSeleccionada.imagen}
                  src={experienciaSeleccionada.imagen}
                  alt={experienciaSeleccionada.titulo}
                  className="galeria-imagen-principal-movilidad"
                />
                <span className="galeria-contador-movilidad">
                  {String(experienciaActiva + 1).padStart(2, "0")} /{" "}
                  {String(experiencias.length).padStart(2, "0")}
                </span>
              </div>
              <figcaption
                id="descripcion-experiencia-movilidad"
                className="galeria-descripcion-movilidad"
                aria-live="polite"
              >
                <h3>{experienciaSeleccionada.titulo}</h3>
                <p>{experienciaSeleccionada.descripcion}</p>
              </figcaption>
            </figure>

            <div
              className="galeria-opciones-movilidad"
              aria-label="Seleccionar experiencia"
            >
              {experiencias.map((experiencia, index) => (
                <button
                  key={experiencia.imagen}
                  type="button"
                  className={`galeria-miniatura-movilidad${
                    experienciaActiva === index ? " activa" : ""
                  }`}
                  onClick={() => setExperienciaActiva(index)}
                  aria-pressed={experienciaActiva === index}
                  aria-controls="descripcion-experiencia-movilidad"
                  aria-label={`Ver ${experiencia.titulo}`}
                >
                  <img src={experiencia.imagen} alt="" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="section-contacto-movilidad">
          <div className="contacto-card-movilidad">
            <div className="contacto-contenido-movilidad">
              <h3 className="contacto-titulo-movilidad">
                ¿Quieres vivir esta experiencia?
              </h3>
              <p className="contacto-descripcion-movilidad">
                Para mayor información, consulta en los correos institucionales
                correspondientes.
              </p>

              <div className="contacto-info-grid-movilidad">
                <div className="contacto-item-movilidad">
                  <span className="contacto-item-icono-movilidad">📧</span>
                  <div className="contacto-item-contenido-movilidad">
                    <span className="contacto-item-etiqueta-movilidad">
                      Correo:
                    </span>
                    <a
                      href="mailto:movilidad@utnay.edu.mx"
                      className="contacto-email-movilidad"
                    >
                      movilidad@utnay.edu.mx
                    </a>
                  </div>
                </div>

                <div className="contacto-item-movilidad">
                  <span className="contacto-item-icono-movilidad">📞</span>
                  <div className="contacto-item-contenido-movilidad">
                    <span className="contacto-item-etiqueta-movilidad">
                      Teléfono:
                    </span>
                    <a
                      href="tel:+523112119800"
                      className="contacto-telefono-movilidad"
                    >
                      +52 (311) 211 9800 ext. 3100
                    </a>
                  </div>
                </div>

                <div className="contacto-item-movilidad contacto-item-whatsapp">
                  <span className="contacto-item-icono-movilidad">📱</span>
                  <div className="contacto-item-contenido-movilidad">
                    <span className="contacto-item-etiqueta-movilidad">
                      WhatsApp:
                    </span>
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
                La movilidad internacional es una experiencia que transforma,
                abre horizontes y fortalece el perfil profesional
                <span className="frase-comillas-movilidad">"</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovilidadEstudiantil;
