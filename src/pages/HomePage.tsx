import { useEffect, useState } from "react";
import LogosCarreras from "../components/LogosCarreras.tsx";
import ImagenPrincipal from "../assets/banner/Index.jpg";
import bannerAdminision from '../assets/banner/bannerAdmision.jpg'
import ImagenNuevaCarrera from "../assets/banner/NuevaCarrera.jpg";
import Swal from "sweetalert2";
import Accesos from "../components/Accesos.tsx";
import "./HomePages.css";

function HomePage() {
 const banners = [bannerAdminision, ImagenPrincipal];
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const mostrarAlertaBienvenida = () => {
      const ultimaAlerta = localStorage.getItem("alertaBienvenidaMostrada");
      const ahora = new Date().getTime();

      if (!ultimaAlerta || ahora - parseInt(ultimaAlerta) > 3600000) {
        localStorage.setItem("alertaBienvenidaMostrada", ahora.toString());

        Swal.fire({
          title:
            "¡Explora la carrera del futuro en la Universidad Tecnológica de Nayarit!",
          html: `
            <div style="text-align: center;">
              <img 
                src=${ImagenNuevaCarrera}
                alt="Nueva Carrera" 
                style="max-width: 100%; border-radius: 10px; margin: 15px 0;"
              />
            </div>
          `,
          width: window.innerWidth <= 768 ? "90%" : 600, // Responsive
          padding: window.innerWidth <= 768 ? "1em" : "2em", // Responsive
          background: "#fff",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Ver Carrera",
          cancelButtonText: "Mas Tarde",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#aaa",
          allowOutsideClick: false,
          allowEscapeKey: false,
          timerProgressBar: false,
          focusConfirm: false,
          preConfirm: () => {
            window.location.href = "/Carrera/IMS";
          },
        });
      }
    };

    const timer = setTimeout(() => {
      mostrarAlertaBienvenida();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="imagen-contenedor" style={{backgroundColor: "rgb(10,81,76)"}}>
 {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt={`Banner ${index + 1} - Universidad Tecnológica de Nayarit`}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === indiceActual ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            visibility: index === indiceActual ? 'visible' : 'hidden',
            
          }}
        />
      ))}

        {/* Barra lateral de redes sociales */}
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

      <LogosCarreras />

      <div className="Acces">
        <h1>ACCESOS RÁPIDOS</h1>
        <Accesos />
      </div>
    </>
  );
}

export default HomePage;
