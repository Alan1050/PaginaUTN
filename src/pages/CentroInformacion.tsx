import "./CentroInformacion.css";
import bannerBiblioteca from "../assets/banner/bannerBiblioteca2.jpg";
//import bannerBiblioteca2 from "../assets/banner/bannerBiblioteca2.jpg";

function CentroInformacion() {
  return (
    <>
      <div className="biblioteca-banner-container">
        <div className="biblioteca-banner">
          <img
            src={bannerBiblioteca}
            alt="Centro de Información - Biblioteca Universitaria"
            className="biblioteca-banner-img"
          />
        </div>
      </div>

      <section className="biblioteca-content">
        <div className="biblioteca-intro">
          <div className="intro-card">
            <p className="intro-text">
              La Biblioteca Universitaria es un espacio académico fundamental
              que contribuye al fortalecimiento del proceso de
              enseñanza–aprendizaje, la investigación y la formación integral de
              la comunidad estudiantil.
            </p>
          </div>
        </div>

        {/* Objetivo */}
        <div className="biblioteca-objetivo">
          <h2 className="objetivo-titulo">
            <span className="objetivo-icon">🎯</span>
            OBJETIVO PRINCIPAL
          </h2>
          <div className="objetivo-card">
            <p className="objetivo-texto">
              Brindar acceso a recursos bibliográficos físicos y digitales
              actualizados, así como ofrecer servicios de orientación, consulta
              y apoyo documental que faciliten el desarrollo académico y
              profesional de estudiantes, docentes y personal administrativo.
            </p>
            <p className="objetivo-texto secundario">
              Se promueve el hábito de la lectura, el pensamiento crítico y la
              cultura de la investigación, proporcionando un ambiente adecuado
              para el estudio individual y colaborativo. A través de sus
              servicios, la Biblioteca Universitaria se consolida como un eje
              estratégico para el desarrollo del conocimiento y la excelencia
              educativa.
            </p>
          </div>
        </div>

        {/* Servicios */}
        <div className="biblioteca-servicios">
          <h2 className="servicios-titulo">
            <span className="servicios-icon">⚡</span>
            SERVICIOS BIBLIOTECARIOS
          </h2>
          <p className="servicios-subtitulo">
            La Biblioteca Universitaria ofrece los siguientes servicios:
          </p>

          <div className="servicios-grid">
            <div className="servicio-card">
              <div className="servicio-icon">📚</div>
              <h3 className="servicio-nombre">Préstamo interbibliotecario</h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">📖</div>
              <h3 className="servicio-nombre">Préstamo de libros en sala</h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">🏠</div>
              <h3 className="servicio-nombre">
                Préstamo de libros a domicilio
              </h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">💻</div>
              <h3 className="servicio-nombre">Préstamo de equipo de cómputo</h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">📐</div>
              <h3 className="servicio-nombre">Préstamo de cubículos</h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">📸</div>
              <h3 className="servicio-nombre">
                Toma de fotos para las credenciales
              </h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">🪪</div>
              <h3 className="servicio-nombre">Troquelado de credenciales</h3>
            </div>

            <div className="servicio-card">
              <div className="servicio-icon">📄</div>
              <h3 className="servicio-nombre">
                Revisión de memorias de estadías
              </h3>
            </div>
          </div>
        </div>

        {/* Información de contacto y horario */}
        <div className="biblioteca-contacto">
          <div className="contacto-grid">
            <div className="horario-card">
              <div className="horario-icon">⏰</div>
              <h3 className="horario-titulo">Horario de atención</h3>
              <p className="horario-texto">Lunes a Viernes</p>
              <p className="horario-texto horario-destacado">
                8:00 - 19:00 hrs
              </p>
            </div>

            <div className="contacto-card">
              <div className="contacto-icon">📧</div>
              <h3 className="contacto-titulo">Correo electrónico</h3>
              <a
                href="mailto:biblioteca@utnay.edu.mx"
                className="contacto-email"
              >
                biblioteca@utnay.edu.mx
              </a>
            </div>

            <div className="enlace-card">
              <div className="enlace-icon">🔗</div>
              <h3 className="enlace-titulo">Biblioteca Digital</h3>
              <a
                href="https://www.digitaliapublishing.com/novedades"
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-boton"
              >
                Acceder a Digitalia Publishing
                <span className="enlace-flecha">→</span>
              </a>
              <p className="enlace-descripcion">
                Consulta las novedades y recursos digitales
              </p>
            </div>
          </div>
        </div>

        {/* Espacio adicional para futuras imágenes 
        <div className="biblioteca-espacio">
          <p className="espacio-texto">Próximamente más imágenes de nuestras instalaciones</p>
        </div>*/}
      </section>
    </>
  );
}

export default CentroInformacion;
