import React from "react";
import "./GuiasPago.css";
import bannerGuias from "../assets/banner/bannerGuiasPago.jpg";
import iconoCELEX from "../assets/logos/iconoCELEX.png";
import iconoECECUT from "../assets/logos/iconoECECUT.png";
import iconoEU from "../assets/logos/iconoEU.png";
import iconoIncubadora from "../assets/logos/iconoIncubadora.png";
import iconoMovilidad from "../assets/logos/iconoMovilidadEstadias.png";
import GuiaBancaSantander from "../assets/extras/GUÍA BANCA SANTANDER.pdf";
import GuiaBancaBanamex from "../assets/extras/GUÍA BANCA BANAMEX.pdf";
import GuiaPracticajaSantander from "../assets/extras/GUÍA PRACTICAJA SANTANDER.pdf";
import GuiaTransferenciaBancariaBanamex from "../assets/extras/GUÍA TRANSFERENCIAS BANCARIAS BANAMEX.pdf";
import GuiaTransferenciaBancariaSantander from "../assets/extras/GUÍA TRANSFERENCIAS BANCARIAS SANTANDER.pdf";


function GuiasPago() {
  const programas = [
    {
      id: "bancaBanamex",
      nombre: "Banca Banamex",
      icono: iconoIncubadora,
      descripcion: "Impulsa tu idea de negocio con asesoría y recursos",
      link: GuiaBancaBanamex,
      color: "#FF6B6B",
      gradient:
        "linear-gradient(145deg, #FF6B6B 0%, #FF8E8E 50%, #FFB5B5 100%)",
    },
    {
      id: "ceelex",
      nombre: "Banca Santander",
      icono: iconoCELEX,
      descripcion:
        "Centro de Enseñanza Especializado en Lenguas Extranjeras - Aprende idiomas",
      link: GuiaBancaSantander,
      color: "#4043f1",
      gradient:
        "linear-gradient(145deg, #4043f1 0%, #6668fe 50%, #0004ff 100%)",
    },
    {
      id: "ececut",
      nombre: "Practicaja Santander",
      icono: iconoECECUT,
      descripcion: "Educación Continua - Cursos y diplomados",
      link: GuiaPracticajaSantander,
      color: "#FFD93D",
      gradient:
        "linear-gradient(145deg, #FFD93D 0%, #FFE270 50%, #FFF0B5 100%)",
    },
    {
      id: "eu",
      nombre: "Transferencia Bancaria Banamex",
      icono: iconoEU,
      descripcion: "Aprende en la empresa y estudia en la universidad",
      link: GuiaTransferenciaBancariaBanamex,
      color: "#6C5CE7",
      gradient:
        "linear-gradient(145deg, #6C5CE7 0%, #8F7EFF 50%, #B5A8FF 100%)",
    },
    {
      id: "movilidad",
      nombre: "Transferencia Bancaria Santander",
      icono: iconoMovilidad,
      descripcion: "Intercambio nacional e internacional",
      link: GuiaTransferenciaBancariaSantander,
      color: "#FF8C42",
      gradient:
        "linear-gradient(145deg, #FF8C42 0%, #FFA86B 50%, #FFC594 100%)",
    },
  ];

  return (
    <>
      <div className="banner-container-vinculacion">
        <img
          src={bannerGuias}
          alt="Banner Guias de Pago"
          className="banner-vinculacion"
        />
      </div>

      <section className="content-vinculacion">
        <div className="section-header-Vinculacion">
          <h2 className="section-title">Guias de Pago</h2>
          <p className="section-description">
            Conoce como realizar tus pagos de manera fácil y segura con nuestras guías detalladas para cada programa.
          </p>
          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="programas-grid">
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

                <div className="card-hover-info">
                  <span>Ver guía</span>
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

export default GuiasPago;
