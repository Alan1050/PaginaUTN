import { useEffect } from 'react';
import LogosCarreras from '../components/LogosCarreras.tsx';
import ImagenPrincipal from '../assets/banner/IMG_3690_.jpg';
import ImagenNuevaCarrera from '../assets/banner/NuevaCarrera.jpg';
import Swal from 'sweetalert2';
import Accesos from '../components/Accesos.tsx';
import './HomePages.css';

function HomePage() {
  useEffect(() => {
    const mostrarAlertaBienvenida = () => {
      const ultimaAlerta = localStorage.getItem('alertaBienvenidaMostrada');
      const ahora = new Date().getTime();
      
      if (!ultimaAlerta || (ahora - parseInt(ultimaAlerta)) > 3600000) {
        localStorage.setItem('alertaBienvenidaMostrada', ahora.toString());
        
        Swal.fire({
          title: '¡Explora la carrera del futuro en la Universidad Tecnológica de Nayarit!',
          html: `
            <div style="text-align: center;">
              <img 
                src=${ImagenNuevaCarrera}
                alt="Nueva Carrera" 
                style="max-width: 100%; border-radius: 10px; margin: 15px 0;"
              />
            </div>
          `,
          width: window.innerWidth <= 768 ? '90%' : 600, // Responsive
          padding: window.innerWidth <= 768 ? '1em' : '2em', // Responsive
          background: '#fff',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Ver Carrera',
          cancelButtonText: 'Mas Tarde',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#aaa',
          allowOutsideClick: false,
          allowEscapeKey: false,
          timerProgressBar: false,
          focusConfirm: false,
          preConfirm: () => {
            window.location.href = '/Carrera/IMS';
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
      <div className='imagen-contenedor'>
        <img 
          src={ImagenPrincipal} 
          className="ImagenPrincipal" 
          alt="Banner principal de la Universidad Tecnológica de Nayarit" 
          loading="lazy" // Mejora rendimiento
        />
        <div className="gradiente-overlay"></div>
        <div className="texto-overlay">
          <h1>UNIVERSIDAD DEL TALENTO E INNOVACIÓN</h1>
        </div>
      </div>
      
      <LogosCarreras />
      
      <div className='Acces'>
        <h1>ACCESOS RÁPIDOS</h1>
        <Accesos />
      </div>
    </>
  );
}

export default HomePage;