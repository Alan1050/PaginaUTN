import "./Resultados.css";
import bannerResultados from "../assets/banner/bannerResultados.jpg";
import ResultadosPDF from "../assets/extras/RESULTADOS JUNIO 2026.pdf";


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
            <h1>Resultados del Examen de Ingreso</h1>
          </div>

          <div className="resultados-actions">
            <a
              href={ResultadosPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resultados primary"
            >
              Ver PDF
            </a>

            <a
              href={ResultadosPDF}
              download
              className="btn-resultados secondary"
            >
              Descargar
            </a>
          </div>

          <div className="pdf-frame">
            <iframe src={ResultadosPDF} title="Resultados Junio 2026" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ExamenIngreso;
