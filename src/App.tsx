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
import CarreraPage from './pages/Carrera.tsx'; 
import QuienesSomos from './pages/QuinesSomos.tsx';
import OfertaEducativa from './pages/OfertaEducativa.tsx';
import NavContacto from './components/NavContacto.tsx';
import Becas from './pages/Becas.tsx'
import Vinculacion from './pages/Vinculacion.tsx';
import Footer from './components/Pie.tsx';

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
    <Router basename="/"> {/* Se cambia segun la ubicacion de la carpeta */}
      {!isMobile && <NavContacto />} 
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Carrera/:nombre" element={<CarreraPage />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/OfertaEducativa" element={<OfertaEducativa />} />
        <Route path="/Becas" element={<Becas />} />
        <Route path="/Vinculacion" element={<Vinculacion />} />
        {/* Ruta para manejar 404 - Redirige a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;