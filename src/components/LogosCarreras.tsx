import { useState, useEffect } from 'react';
import './LogosCarreras.css';
import LogoIA from '../assets/logos/IA.png';
import LogoIAL from '../assets/logos/IAL.png';
import LogoIC from '../assets/logos/IC.png';
import LogoILI from '../assets/logos/ILI.png';
import LogoIMI from '../assets/logos/IMI.png';
import LogoIMS from '../assets/logos/IMS.png';
import LogoIMT from '../assets/logos/IMT.png';
import LogoITIID from '../assets/logos/ITIID.png';
import LogoLAD from '../assets/logos/LAD.png';
import LogoLGDT from '../assets/logos/LGDT.png';
import LogoLGT from '../assets/logos/LGT.png';
import LogoLINM from '../assets/logos/LINM.png';
import LogoLSP from '../assets/logos/LSP.png';

function LogosCarreras() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar si es móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificar al cargar
    checkIfMobile();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkIfMobile);

    // Limpiar evento
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Todos los logos en un array para fácil manipulación
  const allLogos = [
    { id: 1, src: LogoLINM, alt: "Licenciatura en Negocios y Mercadotecnia", label: "LINM" },
    { id: 2, src: LogoLAD, alt: "Licenciatura en Administración", label: "LAD" },
    { id: 3, src: LogoLGDT, alt: "Licenciatura en Gestión y Desarrollo Turístico", label: "LGDT" },
    { id: 4, src: LogoLGT, alt: "Licenciatura en Gastronomía", label: "LGT" },
    { id: 5, src: LogoITIID, alt: "Ingeniería en Tecnologías de la Información e Innovación", label: "ITIID" },
    { id: 6, src: LogoIA, alt: "Técnico Superior Universitario en Inteligencia Artificial", label: "IA" },
    { id: 7, src: LogoIMS, alt: "Ingeniería en Microelectrónica y Semiconductores", label: "IMS" },
    { id: 8, src: LogoLSP, alt: "Licenciatura en Seguridad Pública", label: "LSP" },
    { id: 9, src: LogoIAL, alt: "Ingeniería en Alimentos", label: "IAL" },
    { id: 10, src: LogoIC, alt: "Ingeniería Civil", label: "IC" },
    { id: 11, src: LogoILI, alt: "Ingeniería en Logística Internacional", label: "ILI" },
    { id: 12, src: LogoIMI, alt: "Ingeniería en Mantenimiento Industrial", label: "IMI" },
    { id: 13, src: LogoIMT, alt: "Ingeniería en Mecatrónica", label: "IMT" },
  ];

  return (
    <section className="LogosCarrerasSection">
      <h1>
        <span className='Text1'>OFERTA</span>
        <span className='Text2'>EDUCATIVA</span>
      </h1>
      <hr />
      
      {/* VERSIÓN DESKTOP (2 filas) */}
      {!isMobile && (
        <div className='LogosCarrerasContainer'> 
          <div className='LogosCarrerasGrid1'>
            {allLogos.slice(0, 7).map(logo => (
              <a key={logo.id} href={`#${logo.label.toLowerCase()}`} aria-label={logo.alt}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
          
          <div className='LogosCarrerasGrid2'>
            {allLogos.slice(7).map(logo => (
              <a key={logo.id} href={`#${logo.label.toLowerCase()}`} aria-label={logo.alt}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      )}
      
      {/* VERSIÓN MÓVIL (todos juntos en un grid flexible) */}
      {isMobile && (
        <div className='LogosCarrerasMobileContainer'>
          <div className='LogosCarrerasMobileGrid'>
            {allLogos.map(logo => (
              <a key={logo.id} href={`#${logo.label.toLowerCase()}`} aria-label={logo.alt}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default LogosCarreras;