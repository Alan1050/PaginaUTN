import React, { useState, useEffect } from "react";
import "./Becas.css";
import bannerBecas from "../assets/banner/bannerBecas.jpg";
import imagen2 from "../assets/banner/becas2.jpg";
import imagen3 from "../assets/banner/becas3.jpg";
import iconoBecaFamilia from "../assets/logos/iconoBecaFamilia.png";
import iconoBecaCompañeros from "../assets/logos/iconoBecaCompañeros.png";
import iconoBecaDeportiva from "../assets/logos/iconoBecaDeportiva.png";
import iconoBecaAcademica from "../assets/logos/iconoBecaAcademica.png";

// Interfaces para TypeScript
interface Descuento {
  rango: string;
  descuento: string;
}

interface Merito {
  nivel: string;
  descuento: string;
}

interface BecaInfo {
  id: string;
  titulo: string;
  icono: string;
  descripcion: string;
  color: string;
  gradient: string;
  lightGradient: string;
  descuentos?: Descuento[];
  casos?: string[];
  meritos?: Merito[];
}

interface BecasInfoType {
  academica: BecaInfo;
  familia: BecaInfo;
  compañeros: BecaInfo;
  deportiva: BecaInfo;
}

function Becas() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedBeca, setSelectedBeca] = useState<BecaInfo | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 992);

  const slides = [bannerBecas, imagen2, imagen3];

  const becasInfo: BecasInfoType = {
    academica: {
      id: "academica",
      titulo: "BECA ACADÉMICA",
      icono: iconoBecaAcademica,
      descripcion: "Una beca académica es un apoyo económico que se otorga a estudiantes que destacan por su buen desempeño escolar. Su objetivo es reconocer el esfuerzo, la dedicación y el rendimiento académico, así como motivar a las y los estudiantes a continuar con su formación profesional.",
      descuentos: [
        { rango: "9.0 - 9.2", descuento: "40%" },
        { rango: "9.3 - 9.4", descuento: "50%" },
        { rango: "9.5 - 9.6", descuento: "60%" },
        { rango: "9.7 - 9.8", descuento: "80%" },
        { rango: "9.9 - 10", descuento: "100%" }
      ],
      color: "#FFD700",
      gradient: "linear-gradient(145deg, #B8860B 0%, #DAA520 50%, #FFD700 100%)",
      lightGradient: "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(218,165,32,0.1) 100%)"
    },
    familia: {
      id: "familia",
      titulo: "BECA FAMILIA",
      icono: iconoBecaFamilia,
      descripcion: "Consiste en la exención del 100% únicamente del pago de la colegiatura cuatrimestral.",
      casos: [
        "Ser madre o padre soltero(a)",
        "Estudiantes o familiares directos (padre, madre, hermanos) con alguna discapacidad física",
        "Estudiantes con algún hermano que también sea estudiante de la Universidad Tecnológica de Nayarit",
        "Alumnos en orfandad"
      ],
      color: "#FF6B6B",
      gradient: "linear-gradient(145deg, #C41E3A 0%, #DC143C 50%, #FF6B6B 100%)",
      lightGradient: "linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(220,20,60,0.1) 100%)"
    },
    compañeros: {
      id: "compañeros",
      titulo: "BECA COMPAÑEROS",
      icono: iconoBecaCompañeros,
      descripcion: "Consiste en la exención del 100% únicamente del pago de la colegiatura cuatrimestral. Se otorga a estudiantes que a través de votación hayan sido elegidos por sus compañeros de grupo.",
      color: "#4ECDC4",
      gradient: "linear-gradient(145deg, #2E8B57 0%, #3CB371 50%, #4ECDC4 100%)",
      lightGradient: "linear-gradient(135deg, rgba(78,205,196,0.1) 0%, rgba(60,179,113,0.1) 100%)"
    },
    deportiva: {
      id: "deportiva",
      titulo: "BECA DEPORTIVA - CULTURAL",
      icono: iconoBecaDeportiva,
      descripcion: "Los estudiantes candidatos a obtener esta beca son aquellos que cuenten con mérito deportivo. El apoyo consiste en la condonación total o parcial del pago del cuatrimestre.",
      meritos: [
        { nivel: "Seleccionado nacional", descuento: "100%" },
        { nivel: "Seleccionado UTNay", descuento: "50%" }
      ],
      color: "#A8E6CF",
      gradient: "linear-gradient(145deg, #1E4D6B 0%, #2A6F8B 50%, #3B9EBF 100%)",
      lightGradient: "linear-gradient(135deg, rgba(168,230,207,0.1) 0%, rgba(59,158,191,0.1) 100%)"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (selectedBeca) {
      setIsInfoVisible(true);
    } else {
      const timer = setTimeout(() => setIsInfoVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedBeca]);

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleBecaClick = (becaId: string, e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    
    if (selectedBeca?.id === becaId) {
      setSelectedBeca(null);
    } else {
      setSelectedBeca(becasInfo[becaId as keyof BecasInfoType]);
      
      // En móvil, hacer scroll hacia la tarjeta seleccionada
      if (isMobile) {
        setTimeout(() => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetY = rect.top + scrollTop - 20;
          
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  };

  return (
    <>
      <div className="banner-container">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="bannerBecas"
              />
            </div>
          ))}

          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <span>&#10094;</span>
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <span>&#10095;</span>
          </button>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="contentBecas">
        <div className="becas-header">
          <br /><br />
          <h2 className="becas-title">
            <span className="title-main">BECAS</span>
          </h2>
          <div className="title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="header-description">
            La Universidad Tecnológica de Nayarit ofrece becas internas a las que podrás postularte de manera cuatrimestral, 
            con la posibilidad de obtener la condonación total o parcial del pago de tu cuatrimestre.
          </p>
        </div>

        <div className="logosContainerBecas">
          {(Object.values(becasInfo) as BecaInfo[]).map((beca) => (
            <React.Fragment key={beca.id}>
              <a
                href="#"
                onClick={(e) => handleBecaClick(beca.id, e)}
                className={`beca-card ${selectedBeca?.id === beca.id ? "active" : ""}`}
                style={{ 
                  '--beca-gradient': beca.gradient, 
                  '--beca-light': beca.lightGradient 
                } as React.CSSProperties}
              >
                <div className="beca-icon-wrapper">
                  <div className="icon-glow"></div>
                  <img src={beca.icono} alt="" className="iconBecas" />
                  <div className="beca-hover-info">
                    <span>Ver detalles</span>
                  </div>
                </div>
                <h3 className="beca-titulo">{beca.titulo}</h3>
                <p className="beca-descripcion-corta">{beca.descripcion.substring(0, 60)}...</p>
              </a>
              
              {/* En móvil, mostrar la información detallada debajo de la tarjeta */}
              {isMobile && selectedBeca?.id === beca.id && (
                <div className="beca-info-mobile">
                  <div 
                    className="beca-info-detallada"
                    style={{ 
                      background: selectedBeca.lightGradient,
                      borderTop: `4px solid ${selectedBeca.color}`
                    }}
                  >
                    <button 
                      className="close-info-btn"
                      onClick={() => setSelectedBeca(null)}
                      aria-label="Cerrar información"
                    >
                      <span>×</span>
                    </button>
                    
                    <div className="beca-info-header">
                      <div 
                        className="beca-info-icon"
                        style={{ background: selectedBeca.gradient }}
                      >
                        <img src={selectedBeca.icono} alt={selectedBeca.titulo} />
                      </div>
                      <div className="beca-info-title-wrapper">
                        <h2 className="beca-info-titulo">{selectedBeca.titulo}</h2>
                        <p className="beca-info-descripcion">{selectedBeca.descripcion}</p>
                      </div>
                    </div>

                    <div className="beca-info-content">
                      {selectedBeca.id === "academica" && selectedBeca.descuentos && (
                        <div className="descuentos-table-container">
                          <h3 className="info-subtitulo">
                            <span className="sub-icon">📊</span>
                            Descuentos por promedio
                          </h3>
                          <div className="descuentos-grid">
                            {selectedBeca.descuentos.map((item, index) => (
                              <div key={index} className="descuento-item">
                                <span className="rango">{item.rango}</span>
                                <span 
                                  className="porcentaje"
                                  style={{ background: selectedBeca.gradient }}
                                >
                                  {item.descuento}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedBeca.id === "familia" && selectedBeca.casos && (
                        <div className="casos-container">
                          <h3 className="info-subtitulo">
                            <span className="sub-icon">👨‍👩‍👧‍👦</span>
                            Casos elegibles
                          </h3>
                          <ul className="casos-lista">
                            {selectedBeca.casos.map((caso, index) => (
                              <li key={index}>
                                <span className="caso-numero">{index + 1}</span>
                                <span className="caso-texto">{caso}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="beneficio-destacado">
                            <span className="destacado-icon">🎯</span>
                            <p>Exención del <strong>100%</strong> en el pago de colegiatura cuatrimestral</p>
                          </div>
                        </div>
                      )}

                      {selectedBeca.id === "compañeros" && (
                        <div className="compañeros-container">
                          <div className="proceso-card">
                            <h3 className="info-subtitulo">
                              <span className="sub-icon">🗳️</span>
                              Proceso de selección
                            </h3>
                            <div className="proceso-steps">
                              <div className="step">
                                <span className="step-number">1</span>
                                <p>Votación democrática</p>
                              </div>
                              <div className="step">
                                <span className="step-number">2</span>
                                <p>Elección por compañeros de grupo</p>
                              </div>
                              <div className="step">
                                <span className="step-number">3</span>
                                <p>Exención del 100% en colegiatura</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedBeca.id === "deportiva" && selectedBeca.meritos && (
                        <div className="meritos-container">
                          <h3 className="info-subtitulo">
                            <span className="sub-icon">🏆</span>
                            Méritos deportivos
                          </h3>
                          <div className="meritos-grid">
                            {selectedBeca.meritos.map((merito, index) => (
                              <div key={index} className="merito-card">
                                <div className="merito-nivel">{merito.nivel}</div>
                                <div 
                                  className="merito-descuento"
                                  style={{ background: selectedBeca.gradient }}
                                >
                                  {merito.descuento}
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="merito-extra">* Aplica también para méritos culturales</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* En desktop, mantener la sección de información separada */}
        {!isMobile && (
          <div className={`beca-info-section ${isInfoVisible ? "visible" : ""}`} style={{marginBottom: "40px"}}>
            {selectedBeca && (
              <div 
                className="beca-info-detallada"
                style={{ 
                  background: selectedBeca.lightGradient,
                  borderTop: `4px solid ${selectedBeca.color}`
                }}
              >
                <button 
                  className="close-info-btn"
                  onClick={() => setSelectedBeca(null)}
                  aria-label="Cerrar información"
                >
                  <span>×</span>
                </button>
                
                <div className="beca-info-header">
                  <div 
                    className="beca-info-icon"
                    style={{ background: selectedBeca.gradient }}
                  >
                    <img src={selectedBeca.icono} alt={selectedBeca.titulo} />
                  </div>
                  <div className="beca-info-title-wrapper">
                    <h2 className="beca-info-titulo">{selectedBeca.titulo}</h2>
                    <p className="beca-info-descripcion">{selectedBeca.descripcion}</p>
                  </div>
                </div>

                <div className="beca-info-content">
                  {selectedBeca.id === "academica" && selectedBeca.descuentos && (
                    <div className="descuentos-table-container">
                      <h3 className="info-subtitulo">
                        <span className="sub-icon">📊</span>
                        Descuentos por promedio
                      </h3>
                      <div className="descuentos-grid">
                        {selectedBeca.descuentos.map((item, index) => (
                          <div key={index} className="descuento-item">
                            <span className="rango">{item.rango}</span>
                            <span 
                              className="porcentaje"
                              style={{ background: selectedBeca.gradient }}
                            >
                              {item.descuento}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedBeca.id === "familia" && selectedBeca.casos && (
                    <div className="casos-container">
                      <h3 className="info-subtitulo">
                        <span className="sub-icon">👨‍👩‍👧‍👦</span>
                        Casos elegibles
                      </h3>
                      <ul className="casos-lista">
                        {selectedBeca.casos.map((caso, index) => (
                          <li key={index}>
                            <span className="caso-numero">{index + 1}</span>
                            <span className="caso-texto">{caso}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="beneficio-destacado">
                        <span className="destacado-icon">🎯</span>
                        <p>Exención del <strong>100%</strong> en el pago de colegiatura cuatrimestral</p>
                      </div>
                    </div>
                  )}

                  {selectedBeca.id === "compañeros" && (
                    <div className="compañeros-container">
                      <div className="proceso-card">
                        <h3 className="info-subtitulo">
                          <span className="sub-icon">🗳️</span>
                          Proceso de selección
                        </h3>
                        <div className="proceso-steps">
                          <div className="step">
                            <span className="step-number">1</span>
                            <p>Votación democrática</p>
                          </div>
                          <div className="step">
                            <span className="step-number">2</span>
                            <p>Elección por compañeros de grupo</p>
                          </div>
                          <div className="step">
                            <span className="step-number">3</span>
                            <p>Exención del 100% en colegiatura</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedBeca.id === "deportiva" && selectedBeca.meritos && (
                    <div className="meritos-container">
                      <h3 className="info-subtitulo">
                        <span className="sub-icon">🏆</span>
                        Méritos deportivos
                      </h3>
                      <div className="meritos-grid">
                        {selectedBeca.meritos.map((merito, index) => (
                          <div key={index} className="merito-card">
                            <div className="merito-nivel">{merito.nivel}</div>
                            <div 
                              className="merito-descuento"
                              style={{ background: selectedBeca.gradient }}
                            >
                              {merito.descuento}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="merito-extra">* Aplica también para méritos culturales</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default Becas;