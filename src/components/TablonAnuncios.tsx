import { useEffect, useState } from "react";
import "./TablonAnuncios.css";
import bannerBecas from "../assets/banner/bannerBecas.jpg";
import bannerGuias from "../assets/banner/bannerGuiasPago.jpg";
import bannerBiblioteca from "../assets/banner/bannerBiblioteca.jpg";
import bannerOferta from "../assets/banner/bannerOferta.jpg";

type Anuncio = {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  enlace: string;
  textoEnlace: string;
};

const anuncios: Anuncio[] = [
  {
    id: 1,
    imagen: bannerBecas,
    titulo: "Convocatoria de becas",
    descripcion:
      "Consulta las fechas, requisitos y modalidades disponibles para solicitar apoyos institucionales.",
    enlace: "/Becas",
    textoEnlace: "Ver convocatoria",
  },
  {
    id: 2,
    imagen: bannerGuias,
    titulo: "Guías de pago",
    descripcion:
      "Encuentra las instrucciones para realizar pagos por banca, practicaja o transferencia bancaria.",
    enlace: "/GuiasPago",
    textoEnlace: "Consultar guías",
  },
  {
    id: 3,
    imagen: bannerBiblioteca,
    titulo: "Centro de información",
    descripcion:
      "Accede a recursos digitales, biblioteca y herramientas de consulta para la comunidad universitaria.",
    enlace: "/Biblioteca",
    textoEnlace: "Ir a biblioteca",
  },
  {
    id: 4,
    imagen: bannerOferta,
    titulo: "Oferta educativa",
    descripcion:
      "Explora los programas académicos disponibles y conoce las opciones de formación profesional.",
    enlace: "/OfertaEducativa",
    textoEnlace: "Conocer oferta",
  },
];

function TablonAnuncios() {
  const [anuncioActivo, setAnuncioActivo] = useState(0);
  const [carruselPausado, setCarruselPausado] = useState(false);
  const [reinicioCarrusel, setReinicioCarrusel] = useState(0);

  const reiniciarTemporizadorCarrusel = () => {
    setReinicioCarrusel((actual) => actual + 1);
  };

  const irAlAnuncio = (index: number) => {
    setAnuncioActivo(index);
    reiniciarTemporizadorCarrusel();
  };

  const anuncioAnterior = () => {
    setAnuncioActivo((actual) =>
      actual === 0 ? anuncios.length - 1 : actual - 1
    );
    reiniciarTemporizadorCarrusel();
  };

  const anuncioSiguiente = () => {
    setAnuncioActivo((actual) => (actual + 1) % anuncios.length);
    reiniciarTemporizadorCarrusel();
  };

  useEffect(() => {
    if (carruselPausado) {
      return;
    }

    const interval = window.setInterval(() => {
      setAnuncioActivo((actual) => (actual + 1) % anuncios.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [carruselPausado, reinicioCarrusel]);

  const anuncio = anuncios[anuncioActivo];

  return (
    <section className="tablon-anuncios" aria-label="Tablón de anuncios">
      <div className="tablon-header">
        <p>Comunidad UTN</p>
        <h2>Tablón de anuncios</h2>
      </div>

      <div className="tablon-carousel">
        <button
          type="button"
          className="tablon-nav tablon-nav-prev"
          onClick={anuncioAnterior}
          aria-label="Anuncio anterior"
        >
          ‹
        </button>

        <article className="tablon-card" key={anuncio.id}>
          <div className="tablon-image-wrap">
            <img
              src={anuncio.imagen}
              alt={anuncio.titulo}
              className="tablon-image"
              loading="lazy"
            />
          </div>

          <div className="tablon-content">
            <span className="tablon-count">
              {anuncioActivo + 1} / {anuncios.length}
            </span>
            <h3>{anuncio.titulo}</h3>
            <p>{anuncio.descripcion}</p>
            <a className="tablon-link" href={anuncio.enlace}>
              {anuncio.textoEnlace}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <button
          type="button"
          className="tablon-nav tablon-nav-next"
          onClick={anuncioSiguiente}
          aria-label="Siguiente anuncio"
        >
          ›
        </button>
      </div>

      <div className="tablon-controls">
        <button
          type="button"
          className="tablon-pause-btn"
          onClick={() => setCarruselPausado((actual) => !actual)}
          aria-label={carruselPausado ? "Reanudar carrusel" : "Pausar carrusel"}
        >
          {carruselPausado ? "Reanudar" : "Pausar"}
        </button>

        <div className="tablon-indicators" aria-label="Seleccionar anuncio">
          {anuncios.map((anuncioItem, index) => (
          <button
            type="button"
            key={anuncioItem.id}
            className={`tablon-indicator ${
              index === anuncioActivo ? "active" : ""
            }`}
            onClick={() => irAlAnuncio(index)}
            aria-label={`Ver anuncio: ${anuncioItem.titulo}`}
            aria-current={index === anuncioActivo}
          />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TablonAnuncios;
