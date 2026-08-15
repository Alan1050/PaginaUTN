import { useState, useEffect } from "react";
import "./AvisoPrivacidad.css";
import avisoPrivacidadPDF from "../assets/extras/aviso de privacidad.pdf";

import { URL_ASSETS_FINANZAS } from "../config/constants";

function AvisoPrivacidad() {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(
        userAgent,
      );
    setIsMobile(isMobileDevice);
  }, []);

  const handleOpenPDF = () => {
    if (isMobile) {
      // En móvil: abrir en nueva ventana
      window.open(avisoPrivacidadPDF, "_blank");
    } else {
      // En desktop: mostrar modal
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="aviso-container">
        <div className="aviso-content">
          <h2 className="aviso-titulo">AVISO DE PRIVACIDAD</h2>
          <div className="aviso-botones">
            <button onClick={handleOpenPDF} className="aviso-btn-ver">
              <span>🔒</span> Ver Aviso de Privacidad
            </button>
            <a
              href={avisoPrivacidadPDF}
              download="Aviso_Privacidad.pdf"
              className="aviso-btn-descargar"
            >
              <span>📥</span> Descargar PDF
            </a>
          </div>
        </div>
      </section>

      {/* Modal solo para desktop */}
      {!isMobile && showModal && (
        <div className="aviso-modal-overlay" onClick={handleCloseModal}>
          <div
            className="aviso-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aviso-modal-header">
              <h3>Aviso de Privacidad</h3>
              <button className="aviso-modal-close" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <div className="aviso-modal-body">
              <iframe
                src={`${avisoPrivacidadPDF}#toolbar=0&navpanes=0&view=FitH`}
                title="Aviso de Privacidad"
                className="aviso-pdf-iframe"
              />
            </div>
            <div className="aviso-modal-footer">
              <a
                href={avisoPrivacidadPDF}
                download="Aviso_Privacidad.pdf"
                className="aviso-download-btn"
              >
                📥 Descargar PDF
              </a>
              <a
                href={avisoPrivacidadPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="aviso-open-btn"
              >
                🔗 Abrir en nueva ventana
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AvisoPrivacidad;
