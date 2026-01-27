import './App.css'
import Nav from './components/Nav.tsx'
import LogosCarreras from './components/LogosCarreras.tsx'
import ImagenPrincipal from './assets/banner/Index.jpg'

function App() {

  return (
    <>
      <Nav></Nav>
      
      <div className=''>
        <img src={ImagenPrincipal} className="ImagenPrincipal" alt="" />
      </div>
      <LogosCarreras></LogosCarreras>
      <div className='Acces'>
        <h1>ACCESOS RÁPIDOS</h1>
      </div>
    </>
  )
}

export default App
