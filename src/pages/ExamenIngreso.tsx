import "./Resultados.css";
import bannerResultados from "../assets/banner/bannerResultados.jpg";
import ResultadosPrimerExamen from "../assets/extras/ResultadoPrimerExamen.pdf";
import ResultadoSegundoExamen from "../assets/extras/ResultadoSegundoExamen.pdf"


function ExamenIngreso() {
  return (
    <>
      <div className="banner-container-vinculacion">
        <img
          src={bannerResultados}
          alt="Banner de Resultados Admisión"
          className="banner-vinculacion"
        />
      </div>

      <section className="content-vinculacion resultados-section">
        <div className="resultados-card">
          <div className="resultados-header">
            <h1>Resultados del Primer Examen de Ingreso</h1>
          </div>

          <div className="resultados-actions">
            <a
              href={ResultadosPrimerExamen}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resultados primary"
            >
              Ver PDF
            </a>

            <a
              href={ResultadosPrimerExamen}
              download
              className="btn-resultados secondary"
            >
              Descargar
            </a>
          </div>

          <div className="pdf-frame">
            <iframe src={ResultadosPrimerExamen} title="Resultados Primer Examen" />
          </div>
        </div>
      </section>

      <section className="content-vinculacion resultados-section">
        <div className="resultados-card">
          <div className="resultados-header">
            <h1>Resultados del Segundo Examen de Ingreso</h1>
          </div>

          <div className="resultados-actions">
            <a
              href={ResultadoSegundoExamen}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resultados primary"
            >
              Ver PDF
            </a>

            <a
              href={ResultadoSegundoExamen}
              download
              className="btn-resultados secondary"
            >
              Descargar
            </a>
          </div>

          <div className="pdf-frame">
            <iframe src={ResultadoSegundoExamen} title="Resultados Segundo Examen" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ExamenIngreso;
