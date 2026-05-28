import './InformesFinancieros.css'
import ImageConstruccion from '../assets/banner/Trabajando.jpg'


const InformesFinancieros = () => {
  return (
    <>
        <img src={ImageConstruccion} className='ConstructionImgFinanzas' alt="Construcción" />
        <h2 className='ConstructionTitle'>Estamos trabajando para que la Universidad Tecnólogica de Nayarit sea mas transparente.</h2>
    </>
  )
}

export default InformesFinancieros
