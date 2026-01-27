import './App.css'
import Nav from './components/Nav.tsx'
import ImagenPrincipal from './assets/banner/Index.jpg'

function App() {

  return (
    <>
      <Nav></Nav>
      
      <div className=''>
        <img src={ImagenPrincipal} className="ImagenPrincipal" alt="" />
      </div>
    </>
  )
}

export default App
