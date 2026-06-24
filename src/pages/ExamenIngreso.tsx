import "./ExamenIngreso.css";
import bannerGuias from "../assets/banner/Aguila.jpeg";
import CMD from "../assets/extras/CMD.pdf"
import DocenciaI from "../assets/extras/DOCENCIA I.pdf"
import DocenciaII from "../assets/extras/DOCENCIA II.pdf"
import DocenciaIII from "../assets/extras/DOCENCIA III.pdf";

function ExamenIngreso() {
      const programas = [
        {
          id: "cmd",
          nombre: "CMD",
          descripcion: "Carreras: Turismo y Seguridad Publica",
          link: CMD,
          color: "#FF6B6B",
          gradient:
            "linear-gradient(145deg, #FF6B6B 0%, #FF8E8E 50%, #FFB5B5 100%)",
        },
        {
          id: "docenciaI",
          nombre: "Docencia I",
          descripcion:
            "Carreras: Inteligencia Artificial, Tecnología de Alimentos, Manufactura de Semiconductores, Mantenimiento Industrial, Desarrollo de Software Multiplataforma",
          link: DocenciaI,
          color: "#4ECDC4",
          gradient:
            "linear-gradient(145deg, #4ECDC4 0%, #6FD6CF 50%, #9FE5E0 100%)",
        },
        {
          id: "docenciaII",
          nombre: "Docencia II",
          descripcion: "Carreras: Operaciones Logística y Comercio Exterior, Mercadotecnia, Instalaciones Eléctricas",
          link: DocenciaII,
          color: "#FFD93D",
          gradient:
            "linear-gradient(145deg, #FFD93D 0%, #FFE270 50%, #FFF0B5 100%)",
        },
        {
          id: "docenciaIII",
          nombre: "Docencia III",
          descripcion: "Carreras: Gastronomía, Emprendimiento, Formulación y Evalución de Proyectos, Construcción",
          link: DocenciaIII,
          color: "#6C5CE7",
          gradient:
            "linear-gradient(145deg, #6C5CE7 0%, #8F7EFF 50%, #B5A8FF 100%)",
        },
        
      ];

  return (
    <>
      <div className="banner-container-vinculacion">
        <img
          src={bannerGuias}
          alt="Banner de Encuentra tu Aula"
          className="banner-vinculacion"
        />
      </div>

      <section className="content-vinculacion">
        <div className="section-header-Vinculacion">
          <h2 className="section-title">Encuentra Tu Aula</h2>
          <p className="section-description">
            Conoce donde tienes que aplicar tu examen de admision.
          </p>
          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="programas-grid-Examen">
          {programas.map((programa) => (
<a
  key={programa.id}
  href={programa.link}
  target="_blank"
  rel="noopener noreferrer"
  className="programa-card"
  style={
    {
      "--programa-color": programa.color,
      "--programa-gradient": programa.gradient,
    } as React.CSSProperties
  }
>
              <div className="card-content">
  

                <h3 className="programa-nombre">{programa.nombre}</h3>
                <p className="programa-descripcion">{programa.descripcion}</p>

                <div className="card-hover-info">
                  <span>Ver Listas</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default ExamenIngreso;
