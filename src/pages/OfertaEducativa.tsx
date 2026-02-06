import './OfertaEducativa.css';
import { useState, useRef, useEffect } from 'react';

// Logos de las Carreras:
import LogoIA from "../assets/logos/IA.png";
import LogoIAL from "../assets/logos/IAL.png";
import LogoIC from "../assets/logos/IC.png";
import LogoILI from "../assets/logos/ILI.png";
import LogoIMI from "../assets/logos/IMI.png";
import LogoIMS from "../assets/logos/IMS.png";
import LogoIMT from "../assets/logos/IMT.png";
import LogoITIID from "../assets/logos/ITIID.png";
import LogoLAD from "../assets/logos/LAD.png";
import LogoLGDT from "../assets/logos/LGDT.png";
import LogoLGT from "../assets/logos/LGT.png";
import LogoLINM from "../assets/logos/LINM.png";
import LogoLSP from "../assets/logos/LSP.png";
import LogoLPS from "../assets/logos/LPS.png";

interface Carrera {
    id: number;
    label: string;
    logo: string;
    division: string;
}

function OfertaEducativa() {
    const carreras: Carrera[] = [
        {
            id: 1,
            label: "IA",
            logo: LogoIA,
            division: 'DIVISIÓN DE INFORMACIÓN, INTELIGENCIA ARTIFICIAL Y COMUNICACIÓN'
        },
        {
            id: 2,
            label: "ITIID",
            logo: LogoITIID,
            division: 'DIVISIÓN DE INFORMACIÓN, INTELIGENCIA ARTIFICIAL Y COMUNICACIÓN'
        },
        {
            id: 3,
            label: "IMS",
            logo: LogoIMS,
            division: 'DIVISIÓN DE INFORMACIÓN, INTELIGENCIA ARTIFICIAL Y COMUNICACIÓN'
        },
        {
            id: 4,
            label: "IAL",
            logo: LogoIAL,
            division: 'DIVISIÓN DE INGENIERÍAS'
        },
        {
            id: 5,
            label: "IC",
            logo: LogoIC,
            division: 'DIVISIÓN DE INGENIERÍAS'
        },
        {
            id: 6,
            label: "ILI",
            logo: LogoILI,
            division: 'DIVISIÓN DE INGENIERÍAS'
        },
        {
            id: 7,
            label: "IMI",
            logo: LogoIMI,
            division: 'DIVISIÓN ELECTROMECÁNICA INDUSTRIAL'
        },
        {
            id: 8,
            label: "IMT",
            logo: LogoIMT,
            division: 'DIVISIÓN ELECTROMECÁNICA INDUSTRIAL'
        },
        {
            id: 9,
            label: "LSP",
            logo: LogoLSP,
            division: 'DIVISIÓN DE SEGURIDAD PÚBLICA'
        },
        {
            id: 10,
            label: "LINM",
            logo: LogoLINM,
            division: 'DIVISIÓN ECONÓMICO ADMINISTRATIVA'
        },
        {
            id: 11,
            label: "LAD",
            logo: LogoLAD,
            division: 'DIVISIÓN ECONÓMICO ADMINISTRATIVA'
        },
        {
            id: 12,
            label: "LGDT",
            logo: LogoLGDT,
            division: 'DIVISIÓN DE TURISMO Y GASTRONOMÍA'
        },
        {
            id: 13,
            label: "LGT",
            logo: LogoLGT,
            division: 'DIVISIÓN DE TURISMO Y GASTRONOMÍA'
        },
        {
            id: 14,
            label: "LPS",
            logo: LogoLPS,
            division: 'DIVISIÓN DE TURISMO Y GASTRONOMÍA'
        },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDesktop, setIsDesktop] = useState(false);

    // Obtener todas las divisiones únicas
    const divisiones = Array.from(new Set(carreras.map(carrera => carrera.division)));
    
    // Estado para el filtro activo (null = todas las carreras)
    const [filtroActivo, setFiltroActivo] = useState<string | null>(null);

    // Filtrar carreras según el filtro activo
    const carrerasFiltradas = filtroActivo 
        ? carreras.filter(carrera => carrera.division === filtroActivo)
        : carreras;

    const manejarFiltro = (division: string | null) => {
        setFiltroActivo(division === filtroActivo ? null : division);
    };

    // Función para remover el prefijo "DIVISIÓN DE " o "DIVISIÓN "
    const removeDivisionPrefix = (division: string): string => {
        // Usar regex para remover "DIVISIÓN DE " o "DIVISIÓN " al inicio
        return division.replace(/^DIVISIÓN\s+(DE\s+)?/, '');
    };

    // Función para obtener el texto de la división según el tamaño de pantalla
    const getDivisionText = (division: string): string => {
        const sinPrefijo = removeDivisionPrefix(division);
        
        if (isDesktop) {
            // En desktop mostrar el texto completo
            return sinPrefijo;
        } else {
            // En móvil mostrar versiones acortadas
            if (sinPrefijo === 'INFORMACIÓN, INTELIGENCIA ARTIFICIAL Y COMUNICACIÓN') {
                return 'TECNOLOGIAS DE LA INFORMACION';
            }
            if (sinPrefijo === 'ELECTROMECÁNICA INDUSTRIAL') {
                return 'ELECTROMECÁNICA INDUSTRIAL';
            }
            if (sinPrefijo === 'ECONÓMICO ADMINISTRATIVA') {
                return 'ECONÓMICA ADMINISTRATIVA';
            }
            if (sinPrefijo === 'TURISMO Y GASTRONOMÍA') {
                return 'TURISMO Y GASTRONOMÍA';
            }
            if (sinPrefijo === 'SEGURIDAD PÚBLICA') {
                return 'SEGURIDAD PUBLICA';
            }
            if (sinPrefijo === 'INGENIERÍAS') {
                return 'INGENIERÍAS';
            }
            return sinPrefijo;
        }
    };

    // Verificar scroll disponible
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Verificar si es desktop
    const checkIsDesktop = () => {
        setIsDesktop(window.innerWidth > 900);
        checkScroll();
    };

    useEffect(() => {
        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    return (
        <>
                  <div className="ofertaEducativaContainerPrincipal">

        {/* Barra lateral de redes sociales (sobre la imagen, solo desktop) */}
        <div className="redes-sociales-sidebar">
          <div className="redes-sociales-contenedor">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/UTNAY"
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-link"
              aria-label="Facebook UTNayarit"
            >
              <div className="red-social-icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.44 21.31 22 17.17 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ut.nayarit/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-link"
              aria-label="Instagram UTNayarit"
            >
              <div className="red-social-icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@utnayarit"
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-link"
              aria-label="TikTok UTNayarit"
            >
              <div className="red-social-icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

            

                            <h1>
                    <span className="Text1">Oferta</span>
                    <span className="Text2">Educativa</span>
                </h1>
            
            {/* Línea decorativa */}
            <hr />
            
            <div className='ofertaEducativaContent'>
                {/* Sección de Filtros */}
                <div className='filtrosContainer'>
                    
                    <div className='filtrosBurbujas' ref={scrollRef} onScroll={checkScroll}>
                        {/* Burbuja para "Todas" */}
                        <button 
                            className={`filtroBurbuja ${filtroActivo === null ? 'activo' : ''}`}
                            onClick={() => manejarFiltro(null)}
                        >
                            <span className='burbujaTexto'>TODAS LAS CARRERAS</span>
                            <span className='burbujaCantidad'>{carreras.length}</span>
                        </button>
                        
                        {/* Burbujas para cada división */}
                        {divisiones.map((division, index) => {
                            const cantidad = carreras.filter(c => c.division === division).length;
                            const divisionText = getDivisionText(division);
                            
                            return (
                                <button
                                    key={index}
                                    className={`filtroBurbuja ${filtroActivo === division ? 'activo' : ''}`}
                                    onClick={() => manejarFiltro(division)}
                                    title={division} // Tooltip con nombre completo
                                >
                                    <span className='burbujaTexto'>
                                        {divisionText}
                                    </span>
                                    <span className='burbujaCantidad'>{cantidad}</span>
                                </button>
                            );
                        })}
                    </div>
                    
                    {/* Indicadores de scroll para móvil */}
                    <div className='scrollIndicators'>
                       
                        {!isDesktop && canScrollRight && <span className='scrollHint'>Desliza →</span>}
                    </div>
                    
                </div>


                {/* Sección de Carreras */}
                <div className='carrerasContainer'>
                    <div className='carrerasGrid'>
                        {carrerasFiltradas.map((carrera) => (
                            <div key={carrera.id} className='carreraCard'>
                                <a href={`/Carrera/${carrera.label}`} className='carreraLogoContainer'>
                                    <img 
                                        src={carrera.logo} 
                                        alt={`Logo ${carrera.label}`}
                                        className='carreraLogo'
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                    
                    {/* Mensaje si no hay carreras */}
                    {carrerasFiltradas.length === 0 && (
                        <div className='sinResultados'>
                            <p>No se encontraron carreras para esta división.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default OfertaEducativa;