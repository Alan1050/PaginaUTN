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
import LogoLPS from '../assets/logos/LPS.png';

// Interfaz para los logos
interface Logo {
  id: number;
  src: string;
  alt: string;
  label: string;
  nombre: string;
}

function LogosCarreras() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Datos de carreras con tipo Logo[]
  const allLogos: Logo[] = [
    { id: 1, src: LogoIMS, alt: "Logotipo Carrera Ingenieria en Microelectronica y Semiconductores", label: "IMS", nombre: "ingenieria-microelectronica" },
    { id: 2, src: LogoIAL, alt: "Logotipo Carrera Ingenieria en Alimentos", label: "IAL", nombre: "ingenieria-alimentos" },
    { id: 3, src: LogoIA, alt: "Logotipo Carrera Tecnico Superior Universitario en Inteligencia Artificial", label: "IA", nombre: "inteligencia-artificial" },
    { id: 4, src: LogoIMI, alt: "Logotipo Carrera Ingenieria en Mantenimiento Industrial", label: "IMI", nombre: "ingenieria-mantenimiento-industrial" },
    { id: 5, src: LogoIMT, alt: "Logotipo Carrera Ingenieria en Mecatronica", label: "IMT", nombre: "ingenieria-mecatronica" },
    { id: 6, src: LogoLGDT, alt: "Logotipo Carrera Licenciatura en Gestión y Desarrollo Turistico", label: "LGDT", nombre: "gestion-desarrollo-turistico" },
    { id: 7, src: LogoLAD, alt: "Logotipo Carrera Licenciatura en Administración", label: "LAD", nombre: "administracion" },
    { id: 8, src: LogoLPS, alt: "Logotipo Carrera Licenciatura en Psicologia", label: "LPS", nombre: "psicologia" },
    { id: 9, src: LogoITIID, alt: "Logotipo Carrera Ingenieria en Tecnologias de la Información e Innovación Digital", label: "ITIID", nombre: "tecnologias-informacion" },
    { id: 10, src: LogoIC, alt: "Logotipo Carrera Ingenieria Civil", label: "IC", nombre: "ingenieria-civil" },
    { id: 11, src: LogoLINM, alt: "Logotipo Carrera Licenciatura en Negocios y Mercadotecnia", label: "LINM", nombre: "negocios-mercadotecnia" },
    { id: 12, src: LogoLSP, alt: "Logotipo Carrera Licenciatura en Seguridad Publica", label: "LSP", nombre: "seguridad-publica" },
    { id: 13, src: LogoILI, alt: "Logotipo Carrera Ingenieria en Logistica Internacional", label: "ILI", nombre: "logistica-internacional" },
    { id: 14, src: LogoLGT, alt: "Logotipo Carrera Licenciatura en Gastronomia", label: "LGT", nombre: "gastronomia" },
  ];

  // Función con tipos explícitos
  const handleLogoClick = (carreraNombre: string, carreraLabel: string): void => {
    console.log(`Redirigiendo a carrera: ${carreraNombre} (${carreraLabel})`);
    // Puedes agregar aquí analytics, tracking, etc.
  };

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
            {allLogos.slice(0, 7).map((logo: Logo) => (
              <a 
                key={logo.id} 
                href={`/Carrera/${logo.label}`} 
                onClick={() => handleLogoClick(logo.nombre, logo.label)}
                aria-label={logo.alt}
                className="logo-link"
              >
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
          
          <div className='LogosCarrerasGrid2'>
            {allLogos.slice(7).map((logo: Logo) => (
              <a 
                key={logo.id} 
                href={`/Carrera/${logo.label}`} 
                onClick={() => handleLogoClick(logo.nombre, logo.label)}
                aria-label={logo.alt}
                className="logo-link"
              >
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
            {allLogos.map((logo: Logo) => (
              <a 
                key={logo.id} 
                href={`/Carrera/${logo.label}`} 
                onClick={() => handleLogoClick(logo.nombre, logo.label)}
                aria-label={logo.alt}
                className="logo-link"
              >
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