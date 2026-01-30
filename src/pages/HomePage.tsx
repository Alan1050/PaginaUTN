import { useEffect } from 'react';
import LogosCarreras from '../components/LogosCarreras.tsx';
import ImagenPrincipal from '../assets/banner/Index.jpg';
import ImagenNuevaCarrera from '../assets/banner/NuevaCarrera.jpg';
import Swal from 'sweetalert2';
import Accesos from '../components/Accesos.tsx';
import './HomePages.css';

function HomePage() {
  useEffect(() => {
    const mostrarAlertaBienvenida = () => {
      // Verificar si ya se mostró la alerta recientemente (menos de 1 hora)
      const ultimaAlerta = localStorage.getItem('alertaBienvenidaMostrada');
      const ahora = new Date().getTime();
      
      // Si nunca se ha mostrado o fue hace más de 1 hora (3600000 ms)
      if (!ultimaAlerta || (ahora - parseInt(ultimaAlerta)) > 3600000) {
        
        // Guardar el tiempo actual en localStorage
        localStorage.setItem('alertaBienvenidaMostrada', ahora.toString());
        
Swal.fire({
  title: '¡Explora la carrera del futuro en la Universidad Tecnológica de Nayarit.!',
  html: `
    <div style="text-align: center;">
      <img 
        src=${ImagenNuevaCarrera}
        alt="Nueva Carrera" 
        style="max-width: 100%; border-radius: 10px; margin: 15px 0;"
      />
      <p style="margin-top: 0px; font-size: 1.1rem;">
      </p>
    </div>
  `,
  width: 600,
  padding: '2em',
  background: '#fff',
  showConfirmButton: true,
  showCancelButton: true, // Agregar botón de cancelar
  confirmButtonText: 'Ver Carrera',
  cancelButtonText: 'Mas Tarde',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#aaa',
  allowOutsideClick: false,
  allowEscapeKey: false,
  timerProgressBar: false,
  focusConfirm: false,
  // Manejar los botones
  preConfirm: () => {
    // Esto se ejecutará al hacer clic en "Confirmar"
    window.location.href = '/Carrera/IMS';
  },
  // Si necesitas manejar también el botón de cancelar
  // showDenyButton también es una opción si necesitas 3 botones
});
      }
    };

    // Agregar un pequeño delay para que la página cargue primero
    const timer = setTimeout(() => {
      mostrarAlertaBienvenida();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className=''>
        <img src={ImagenPrincipal} className="ImagenPrincipal" alt="Banner principal" />
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