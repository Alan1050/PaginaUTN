import './Accesos.css';
import { Link } from 'react-router-dom';
import logoVinculacion from '../assets/logos/LOGO VINCULACION.png';
import logoBecas from '../assets/logos/LOGO BECAS.png';
import logoRecorrido from '../assets/logos/LOGO RECORRIDO.png';
import logoInvestigacion from '../assets/logos/IconoInvestigacion.png';
import logoTransparencia from '../assets/logos/LOGO TRANSPARENCIA.png';
import logoComite from '../assets/logos/LOGO COMITE DE ETICA.png';
import logoBuzon from '../assets/logos/LOGO BUZON SUGERENCIAS.png';
import logoCultura from '../assets/logos/LOGO CULTURA DE PAZ.png';

function Accesos() {

  return (
    <section className="accesos-container">
      <div className='ContainerButton1'>
        <Link to="/Vinculacion"><img src={logoVinculacion} alt="Vinculación" /></Link>
        <Link to="/Becas"><img src={logoBecas} alt="Becas" /></Link>
        <a href="https://utnay.edu.mx/recorrido/" target='_blank' rel="noopener noreferrer">
        <img src={logoRecorrido} alt="Recorrido" /></a>
        <Link to="/Posgrados"><img src={logoInvestigacion} alt="Investigación" /></Link>
      </div>
      <div className='ContainerButton2'>
        <a href="https://transparencia.utnay.edu.mx/" 
        target='_blank' rel="noopener noreferrer"><img src={logoTransparencia} alt="Transparencia" /></a>
        <Link to="/ComiteEtica"><img src={logoComite} alt="Comité de Ética" /></Link>
        <a href="https://forms.gle/ebbMNe2izfpJQMKd7" 
        target='_blank' rel="noopener noreferrer"><img src={logoBuzon} alt="Buzón de Sugerencias" /></a>
        <Link to="/CulturaPaz"><img src={logoCultura} alt="Cultura de Paz" /></Link>
      </div>
    </section>
  );
}

export default Accesos;