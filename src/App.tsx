/*
LOCAL:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.tsx';
import HomePage from './pages/HomePage.tsx'; 
import CarreraPage from './pages/Carrera.tsx'; 
import QuienesSomos from './pages/QuinesSomos.tsx';
import OfertaEducativa from './pages/OfertaEducativa.tsx';
import NavContacto from './components/NavContacto.tsx';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Router>
      {!isMobile && <NavContacto />} 
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Carrera/:nombre" element={<CarreraPage />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/OfertaEducativa" element={<OfertaEducativa />} />
      </Routes>
    </Router>
  );
}

export default App; */

//De Produccion:
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.tsx';
import HomePage from './pages/HomePage.tsx'; 
import CarreraPage from './pages/Carreras.tsx'; 
import QuienesSomos from './pages/QuinesSomos.tsx';
import OfertaEducativa from './pages/OfertaEducativa.tsx';
import NavContacto from './components/NavContacto.tsx';
import Becas from './pages/Becas.tsx'
import Vinculacion from './pages/Vinculacion.tsx';
import Footer from './components/Pie.tsx';
import Incubadora from './pages/Incubadora.tsx';
import CEELEX from './pages/CEELEX.tsx';
import ECECUT from './pages/ECECUT.tsx';
import ExtensionUniversitaria from './pages/ExtensionUniversitaria.tsx';
import MovilidadEstudiantil from './pages/MovilidadEstudiantil.tsx';
import Convenios from './pages/Convenios.tsx';
import BolsaTrabajo from './pages/BolsaTrabajo.tsx';
import ComiteEtica from './pages/ComiteEtica.tsx';
import Egresados from './pages/Egresados.tsx';
// Importamos el componente del botón
import BackButton from './components/BackButton';
import CulturaPaz from './pages/CulturaPaz.tsx';
import CentroInformacion from './pages/CentroInformacion.tsx';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lista de rutas donde NO queremos mostrar el botón
  const excludedRoutes = ['/'];

  return (
    <Router basename="/"> {/* Se cambia segun la ubicacion de la carpeta */}
      {!isMobile && <NavContacto />} 
      <Nav />
      
      {/* Botón flotante - se muestra en todas las rutas excepto las excluidas */}
      <BackButton 
        position="bottom-right"
        color="#18817d"
        hoverColor="#18817d"
        size={isMobile ? "small" : "medium"} // Se adapta al tamaño de pantalla
        excludePaths={excludedRoutes}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Carrera/:nombre" element={<CarreraPage />} />
        <Route path="/Carreras" element={<OfertaEducativa />} />        
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/OfertaEducativa" element={<OfertaEducativa />} />
        <Route path="/Becas" element={<Becas />} />
        <Route path="/Vinculacion" element={<Vinculacion />} />
        <Route path="/Incubadora" element={<Incubadora />} />  
        <Route path="/CEELEX" element={<CEELEX />} />    
        <Route path="/ECECUT" element={<ECECUT />} /> 
        <Route path="/ExtensionUniversitaria" element={<ExtensionUniversitaria />} />  
        <Route path="/MovilidadEstudiantil" element={<MovilidadEstudiantil />} />  
        <Route path="/Convenios" element={<Convenios />} />  
        <Route path="/BolsaTrabajo" element={<BolsaTrabajo />} />  
        <Route path="/ComiteEtica" element={<ComiteEtica />} />  
        <Route path="/Egresados" element={<Egresados />} />  
        <Route path="/CulturaPaz" element={<CulturaPaz />} /> 
        <Route path="/CentroInformacion" element={<CentroInformacion />} />  
        {/* Ruta para manejar 404 - Redirige a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;