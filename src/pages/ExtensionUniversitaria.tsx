import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./ExtensionUniversitaria.css";
import bannerExtension from "../assets/banner/bannerExtension.jpg";
import {
  URL_ASSETS_INSTALACIONES,
  URL_ASSETS_DIPLOMADOS,
} from "../config/constants";
import eventosJson from "../data/eventosCalendario.json";

interface CalendarioEvento {
  id: string;
  fecha: string;
  titulo: string;
  imagen: string;
}

function ExtensionUniversitaria() {
  const [activeTrainingSection, setActiveTrainingSection] =
    useState<string>("diplomados");
  const [calendarMonth, setCalendarMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const [selectedCalendarDate, setSelectedCalendarDate] =
    useState<Date | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInstalacion, setSelectedInstalacion] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

const [eventoActivo, setEventoActivo] = useState<CalendarioEvento | null>(null);

useEffect(() => {
  if (isModalOpen || eventoActivo !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isModalOpen, eventoActivo]);

// Función auxiliar para convertir un Date a "YYYY-MM-DD" en hora local
const formatFechaLocal = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const toggleTrainingSection = (section: string) => {
    setActiveTrainingSection((current) =>
      current === section ? "" : section,
    );
  };

  const calendarDays = Array.from({ length: 42 }, (_, index) => {
    const firstDay = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth(),
      1,
    );
    const mondayOffset = (firstDay.getDay() + 6) % 7;

    return new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth(),
      index - mondayOffset + 1,
    );
  });

  const changeCalendarMonth = (offset: number) => {
    setCalendarMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + offset, 1),
    );
  };

  const goToCurrentMonth = () => {
    const today = new Date();
    setCalendarMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedCalendarDate(today);
  };

  const isSameCalendarDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const calendarMonthLabel = new Intl.DateTimeFormat("es-MX", {
    month: "long",
    year: "numeric",
  }).format(calendarMonth);

  const calendarWeekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const diplomados = [
    "Administración de recursos humanos",
    "Desarrollo de habilidades gerenciales",
    "Administración básica de negocios",
    "Mercadotecnia y ventas",
    "Gestión y administración pública",
    "Gestión y administración de proyectos",
    "Tecnologías de alimentos",
    "Gastronomía",
    "Gestión y administración educativa",
    "Seguridad hotelera",
  ];

  const capacitaciones = [
    "Administración de negocios",
    "Mercadotecnia y ventas",
    "Gastronomía",
    "Servicios turísticos",
    "Desarrollo de habilidades de liderazgo",
    "Cultura organizacional",
    "Recursos humanos",
    "Servicio y seguimiento al cliente",
    "Relaciones humanas en las empresas",
    "Mantenimiento industrial",
    "Logística y negocios internacionales",
    "Tecnologías de alimentos",
    "Tecnologías de la información y comunicación",
    "Seguridad pública",
    "Energías renovables",
  ];

  const beneficiosCapacitacion = [
    "Profesores altamente calificados en conocimiento y experiencia",
    "Metodología de enseñanza que se enfoca en resolver problemas reales en el trabajo",
    "Herramientas prácticas y de aplicación inmediata que permiten alcanzar mayores niveles de rendimiento y logro",
    "Diseño de curso y cotización de acuerdo a las necesidades presentadas",
  ];

  const serviciosCEDPAI = [
    {
      nombre: "Declaración nutrimental",
      emoji: "📊",
      descripcion: "Análisis y etiquetado nutrimental",
    },
    {
      nombre: "Vida de anaquel",
      emoji: "⏳",
      descripcion: "Estudios de estabilidad y caducidad",
    },
    {
      nombre: "Asesoría de conservación de alimentos",
      emoji: "❄️",
      descripcion: "Técnicas y procesos de preservación",
    },
    {
      nombre: "Análisis",
      emoji: "🔬",
      descripcion: "Pruebas fisicoquímicas y microbiológicas",
    },
    {
      nombre: "Desarrollo de nuevos productos",
      emoji: "🧪",
      descripcion: "Innovación y formulación de alimentos",
    },
  ];

  const espaciosAlquiler = [
    {
      nombre: "Auditorio Chico",
      emoji: "🏫",
      capacidad: "50",
      color: "#2A9D8F",
      fotosId: "AuditorioChico",
    },
    {
      nombre: "Auditorio Grande",
      emoji: "🏛️",
      capacidad: "150",
      color: "#2A9D8F",
      fotosId: "AuditorioTurismo",
    },
    {
      nombre: "Auditorio de vinculación",
      emoji: "🎭",
      capacidad: "250",
      color: "#E76F51",
      fotosId: "AuditorioVinculación",
    },
    {
      nombre: "Poliforum",
      emoji: "🏟️",
      capacidad: "Multiusos",
      color: "#E9C46A",
      fotosId: "Poliforum",
    },
    {
      nombre: "Salas de capacitación",
      emoji: "📚",
      capacidad: "20-40",
      color: "#2A9D8F",
      fotosId: "SalaCapacitación",
    },
  ];

  const fotosInstalaciones = [
    {
      id: "AuditorioTurismo",
      prefijo: "AuditorioTurismo/",
      fotos: [
        {
          name1: "AuditorioTurismo1.jpg",
          name2: "AuditorioTurismo2.jpg",
          name3: "AuditorioTurismo3.jpg",
          name4: "AuditorioTurismo4.jpg",
          name5: "AuditorioTurismo5.jpg",
          name6: "AuditorioTurismo6.jpg",
        },
      ],
    },
    {
      id: "AuditorioChico",
      prefijo: "AuditorioChico/",
      fotos: [
        {
          name1: "AuditorioChico1.jpg",
          name2: "AuditorioChico2.jpg",
          name3: "AuditorioChico3.jpg",
          name4: "AuditorioChico4.jpg",
          name5: "AuditorioChico5.jpg",
          name6: "AuditorioChico6.jpg",
        },
      ],
    },
    {
      id: "AuditorioVinculación",
      prefijo: "AuditorioVinculacion/",
      fotos: [
        {
          name1: "AuditorioVinculacion1.jpg",
          name2: "AuditorioVinculacion2.jpg",
          name3: "AuditorioVinculacion3.jpg",
          name4: "AuditorioVinculacion4.jpg",
          name5: "AuditorioVinculacion5.jpg",
          name6: "AuditorioVinculacion6.jpg",
        },
      ],
    },
    {
      id: "Poliforum",
      prefijo: "Poliforum/",
      fotos: [
        {
          name1: "Poliforum1.jpg",
          name2: "Poliforum2.jpg",
          name3: "Poliforum3.jpg",
          name4: "Poliforum4.jpg",
          name5: "Poliforum5.jpg",
          name6: "Poliforum6.jpg",
        },
      ],
    },
    {
      id: "SalaCapacitación",
      prefijo: "SalaCapacitacion/",
      fotos: [
        {
          name1: "SalaCapacitacion1.jpg",
          name2: "SalaCapacitacion2.jpg",
          name3: "SalaCapacitacion3.jpg",
          name4: "SalaCapacitacion4.jpg",
          name5: "SalaCapacitacion5.jpg",
        },
      ],
    },
  ];

  const sectores = [
    {
      nombre: "Egresados",
      emoji: "👩‍🎓",
      descripcion: "Actualización profesional continua",
    },
    {
      nombre: "Sector Empresarial",
      emoji: "🏢",
      descripcion: "Capacitación y vinculación",
    },
    {
      nombre: "Sector Gubernamental",
      emoji: "🏛️",
      descripcion: "Colaboración institucional",
    },
    {
      nombre: "Público en general",
      emoji: "👥",
      descripcion: "Desarrollo personal y profesional",
    },
  ];

  return (
    <>
      <div className="banner-container-extension">
        <img
          src={bannerExtension}
          alt="Banner Extensión Universitaria"
          className="banner-extension"
        />
      </div>

      <section className="content-extension">
        {/* Introducción */}
        <div className="section-intro-extension">
          <div className="intro-card-extension">
            <div className="intro-texto-extension">
              <p className="intro-parrafo-extension">
                La <strong>Extensión Universitaria</strong> es el conjunto de
                actividades y programas mediante los cuales la universidad se
                vincula con{" "}
                <span className="texto-destacado-extension">
                  estudiantes, egresados, sector empresarial, sector
                  gubernamental y público en general,
                </span>{" "}
                fortaleciendo la colaboración y contribuyendo al desarrollo
                académico, social y productivo.
              </p>
            </div>
          </div>
        </div>

        {/* Sectores */}
        <div className="section-sectores-extension">
          <div className="section-header-extension">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🤝</span>
              Nos vinculamos con
            </h2>
            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="sectores-grid-extension">
            {sectores.map((sector, index) => (
              <div key={index} className="sector-card-extension">
                <div className="sector-icono-extension">
                  <span className="sector-emoji-extension">{sector.emoji}</span>
                </div>
                <h3 className="sector-nombre-extension">{sector.nombre}</h3>
                <p className="sector-descripcion-extension">
                  {sector.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS DE CAPACITACIÓN */}
        <div className="section-capacitacion" id="continua">
          <div className="section-header-extension">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🎓</span>
              Servicios de Capacitación
            </h2>

            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Diplomados */}
          <div
            className={`diplomados-section extension-training-accordion ${
              activeTrainingSection === "diplomados" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="extension-training-header"
              onClick={() => toggleTrainingSection("diplomados")}
              aria-expanded={activeTrainingSection === "diplomados"}
              aria-controls="extension-diplomados-content"
            >
              <h3 className="subtitulo-extension">
                <span className="subtitulo-icono">📜</span>
                Diplomados ofertados
              </h3>
              <span className="extension-training-toggle" aria-hidden="true">
                {activeTrainingSection === "diplomados" ? "−" : "+"}
              </span>
            </button>

            {activeTrainingSection === "diplomados" && (
              <div
                className="extension-training-content"
                id="extension-diplomados-content"
              >
                <div className="diplomados-grid">
                  {diplomados.map((diplomado) => (
                    <div className="diplomado-item" key={diplomado}>
                      <span className="diplomado-check" aria-hidden="true">
                        ✓
                      </span>
                      <span className="diplomado-nombre">{diplomado}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Áreas de capacitación */}
          <div
            className={`capacitaciones-section extension-training-accordion ${
              activeTrainingSection === "capacitaciones" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="extension-training-header"
              onClick={() => toggleTrainingSection("capacitaciones")}
              aria-expanded={activeTrainingSection === "capacitaciones"}
              aria-controls="extension-capacitaciones-content"
            >
              <h3 className="subtitulo-extension">
                <span className="subtitulo-icono">📋</span>
                Programas de capacitación
              </h3>
              <span className="extension-training-toggle" aria-hidden="true">
                {activeTrainingSection === "capacitaciones" ? "−" : "+"}
              </span>
            </button>

            {activeTrainingSection === "capacitaciones" && (
              <div
                className="extension-training-content"
                id="extension-capacitaciones-content"
              >
                <div className="capacitaciones-grid">
                  {capacitaciones.map((capacitacion, index) => (
                    <div className="capacitacion-item" key={capacitacion}>
                      <span className="capacitacion-bullet" aria-hidden="true">
                        {index + 1}
                      </span>
                      <span className="capacitacion-nombre">
                        {capacitacion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Beneficios de capacitación */}
          <div
            className={`beneficios-section extension-training-accordion ${
              activeTrainingSection === "beneficios" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="extension-training-header"
              onClick={() => toggleTrainingSection("beneficios")}
              aria-expanded={activeTrainingSection === "beneficios"}
              aria-controls="extension-beneficios-content"
            >
              <h3 className="subtitulo-extension">
                <span className="subtitulo-icono">✨</span>
                Beneficios
              </h3>
              <span className="extension-training-toggle" aria-hidden="true">
                {activeTrainingSection === "beneficios" ? "−" : "+"}
              </span>
            </button>

            {activeTrainingSection === "beneficios" && (
              <div
                className="extension-training-content extension-beneficios-content"
                id="extension-beneficios-content"
              >
                <div className="beneficios-grid beneficios-accordion-grid">
                  {beneficiosCapacitacion.map((beneficio, index) => (
                    <div
                      key={beneficio}
                      className="beneficio-item beneficio-item-accordion"
                    >
                      <span className="beneficio-numero">{index + 1}</span>
                      <p className="beneficio-texto">{beneficio}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SERVICIOS AL SECTOR PRODUCTIVO */}
        <div className="section-sector-productivo">
          <div className="section-header-extension">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🏭</span>
              Servicios al Sector Productivo
            </h2>
            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* CEDPAI */}
          <div className="cedpai-section">
            <div className="cedpai-header">
              <div className="cedpai-icono-grande">
                <span className="cedpai-emoji-grande">🔬</span>
              </div>
              <div className="cedpai-titulo-wrapper">
                <h3 className="cedpai-titulo">CEDPAI</h3>
                <p className="cedpai-subtitulo">
                  Centro de Estudios y Desarrollo de Procesos Agroindustriales
                </p>
              </div>
            </div>

            <div className="cedpai-servicios-grid">
              {serviciosCEDPAI.map((servicio, index) => (
                <div key={index} className="cedpai-servicio-card">
                  <div className="cedpai-servicio-icono">
                    <span className="cedpai-servicio-emoji">
                      {servicio.emoji}
                    </span>
                  </div>
                  <div className="cedpai-servicio-contenido">
                    <h4 className="cedpai-servicio-nombre">
                      {servicio.nombre}
                    </h4>
                    <p className="cedpai-servicio-descripcion">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alquiler de espacios */}
          <div className="alquiler-section">
            <div className="alquiler-header">
              <div className="alquiler-icono-grande">
                <span className="alquiler-emoji-grande">🏛️</span>
              </div>
              <h3 className="alquiler-titulo-principal">
                Alquiler de instalaciones
              </h3>
            </div>

            <div className="espacios-grid">
              {espaciosAlquiler.map((espacio, index) => (
                <a
                  href="/"
                  key={index}
                  className="espacio-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedInstalacion(espacio.fotosId);
                    setSelectedImageIndex(0);
                    setIsModalOpen(true);
                  }}
                >
                  <div
                    className={`espacio-card `}
                    style={
                      {
                        "--espacio-color": espacio.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="espacio-icono">
                      <span className="espacio-emoji">{espacio.emoji}</span>
                    </div>
                    <h4 className="espacio-nombre">{espacio.nombre}</h4>
                    <div className="espacio-capacidad">
                      <span className="capacidad-icono">👥</span>
                      <span className="capacidad-texto">
                        {espacio.capacidad}
                      </span>
                    </div>
                    <p
                      style={{
                        backgroundColor: "var(--espacio-color)",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        margin: "10px 0",
                      }}
                    >
                      Ver Fotos
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Calendario de Convocatorias */}
        <div className="section-calendar-extension">
          <div className="section-header-extension calendar-section-header">
            <h2 className="section-title-extension">
              <span className="title-emoji-extension">🗓️</span>
              Calendario de Convocatorias
            </h2>
            <div className="title-decoration-extension">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="calendar-card-extension">
            <div className="calendar-toolbar-extension">
              <div>
                <span className="calendar-eyebrow-extension">
                  Agenda mensual
                </span>
                <h3 className="calendar-month-extension">
                  {calendarMonthLabel}
                </h3>
              </div>

              <div className="calendar-controls-extension">
                <button
                  type="button"
                  className="calendar-today-extension"
                  onClick={goToCurrentMonth}
                >
                  Hoy
                </button>
                <div className="calendar-navigation-extension">
                  <button
                    type="button"
                    onClick={() => changeCalendarMonth(-1)}
                    aria-label="Ver mes anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => changeCalendarMonth(1)}
                    aria-label="Ver mes siguiente"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="calendar-grid-extension" role="grid">
              {calendarWeekdays.map((weekday) => (
                <div
                  className="calendar-weekday-extension"
                  role="columnheader"
                  key={weekday}
                >
                  {weekday}
                </div>
              ))}

              {calendarDays.map((day) => {
                const isCurrentMonth =
                  day.getMonth() === calendarMonth.getMonth();
                const isToday = isSameCalendarDay(day, new Date());
                const isSelected =
                  selectedCalendarDate !== null &&
                  isSameCalendarDay(day, selectedCalendarDate);

                // Buscar si hay un evento para este día
                const fechaString = formatFechaLocal(day);
                const eventoDelDia = eventosJson.find(
                  (evt) => evt.fecha === fechaString,
                );

                return (
                  <button
                    type="button"
                    role="gridcell"
                    key={day.toISOString()}
                    className={`calendar-day-extension${
                      isCurrentMonth ? "" : " is-outside-month"
                    }${isToday ? " is-today" : ""}${
                      isSelected ? " is-selected" : ""
                    }${eventoDelDia ? " has-event" : ""}`}
                    onClick={() => {
                      setSelectedCalendarDate(day);
                      if (!isCurrentMonth) {
                        setCalendarMonth(
                          new Date(day.getFullYear(), day.getMonth(), 1),
                        );
                      }
                      // Si hay un evento, abrir la alerta
                      if (eventoDelDia) {
                        setEventoActivo(eventoDelDia);
                      }
                    }}
                    aria-label={new Intl.DateTimeFormat("es-MX", {
                      dateStyle: "full",
                    }).format(day)}
                    aria-selected={isSelected}
                  >
                    <span>{day.getDate()}</span>
                    {/* Indicador visual de que hay un evento */}
                    {eventoDelDia && (
                      <div className="event-indicator-dot"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && selectedInstalacion && (
        <div
          className="modal-overlay-instalaciones"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content-instalaciones"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-instalaciones"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className="modal-gallery-layout">
              {(() => {
                const fotoData = fotosInstalaciones.find(
                  (f) => f.id === selectedInstalacion,
                );
                if (!fotoData) return null;
                const images = Object.values(fotoData.fotos[0]);

                return (
                  <>
                    <div className="modal-main-image-container">
                      <img
                        src={`${URL_ASSETS_INSTALACIONES}/${fotoData.prefijo}${images[selectedImageIndex]}`}
                        alt="Vista principal de instalación"
                        className="modal-main-image"
                      />
                    </div>
                    <div className="modal-thumbnails-container">
                      {images.map((name, idx) => (
                        <div
                          key={idx}
                          className={`modal-thumbnail-wrapper ${idx === selectedImageIndex ? "active" : ""}`}
                          onClick={() => setSelectedImageIndex(idx)}
                        >
                          <img
                            src={`${URL_ASSETS_INSTALACIONES}/${fotoData.prefijo}${name}`}
                            alt={`Miniatura ${idx + 1}`}
                            className="modal-thumbnail-image"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
      {eventoActivo && (
        <div
          className="modal-overlay-instalaciones"
          onClick={() => setEventoActivo(null)}
        >
          <div
            className="modal-content-evento"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-instalaciones"
              onClick={() => setEventoActivo(null)}
            >
              &times;
            </button>
            <div className="evento-alerta-body">
              <img
                src={`${URL_ASSETS_DIPLOMADOS}/${eventoActivo.imagen}`}
                alt={eventoActivo.titulo}
                className="evento-alerta-imagen"
              />
              <h3 className="evento-alerta-titulo">{eventoActivo.titulo}</h3>
              <p className="evento-alerta-fecha">
                {new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
                  new Date(`${eventoActivo.fecha}T12:00:00`),
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExtensionUniversitaria;
