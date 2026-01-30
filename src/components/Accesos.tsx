import './Accesos.css';
import logoVinculacion from '../assets/logos/LOGO VINCULACION.png';
import logoBecas from '../assets/logos/LOGO BECAS.png';
import logoRecorrido from '../assets/logos/LOGO RECORRIDO.png';
import logoInvestigacion from '../assets/logos/LOGO INVESTIGACION.png';
import logoTransparencia from '../assets/logos/LOGO INVESTIGACION.png';
import logoComite from '../assets/logos/LOGO COMITE DE ETICA.png';
import logoBuzon from '../assets/logos/LOGO BUZON SUGERENCIAS.png';
import logoCultura from '../assets/logos/LOGO CULTURA DE PAZ.png';

function Accesos() {

  return (
    <section className="accesos-container">
      <div className='ContainerButton1'>
        <a href=""><img src={logoVinculacion} alt="Vinculación" /></a>
        <a href=""><img src={logoBecas} alt="Becas" /></a>
        <a href=""><img src={logoRecorrido} alt="Recorrido" /></a>
        <a href=""><img src={logoInvestigacion} alt="Investigación" /></a>
      </div>
      <div className='ContainerButton2'>
        <a href=""><img src={logoTransparencia} alt="Transparencia" /></a>
        <a href=""><img src={logoComite} alt="Comité de Ética" /></a>
        <a href=""><img src={logoBuzon} alt="Buzón de Sugerencias" /></a>
        <a href=""><img src={logoCultura} alt="Cultura de Paz" /></a>
      </div>
    </section>
  );
}

export default Accesos;