import './Vinculacion.css';
import bannerBecas from '../assets/banner/bannerBecas.jpg'
import iconoCELEX from '../assets/logos/iconoCELEX.png'
import iconoECECUT from '../assets/logos/iconoECECUT.png'
import iconoEU from '../assets/logos/iconoEU.png'
import iconoIncubadora from '../assets/logos/iconoIncubadora.png'
import iconoMovilidad from '../assets/logos/iconoMovilidad.png'

function Vinculacion() {
  return (
    <>
        <div className='banner-container-Vinculacion'>
            <img src={bannerBecas} alt="" className='bannerVinculacion' />
        </div>

        <section className='contentVinculacion'>
            <h1>VINCULACIÓN</h1>
            <div className='logosContainerVinculacion'>
                <a href=""><img src={iconoIncubadora} alt=""  className='iconVinculacion' /></a>
                <a href=""><img src={iconoCELEX} alt="" className='iconVinculacion'  /></a>
                <a href=""><img src={iconoECECUT} alt=""  className='iconVinculacion' /></a>
                <a href=""><img src={iconoEU} alt=""  className='iconVinculacion' /></a>
                <a href=""><img src={iconoMovilidad} alt="" className='iconVinculacion' /></a>
            </div>
        </section>
    </>
  );
}
export default Vinculacion;