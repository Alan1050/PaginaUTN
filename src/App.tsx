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

export default App;