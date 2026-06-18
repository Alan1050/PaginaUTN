import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
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
import InformesFinancieros from './pages/InformesFinancieros.tsx';
import GuiasPago from './pages/GuiasPago.tsx';
// import Agent from './components/Agent';
import CulturaPaz from './pages/CulturaPaz.tsx';
import CentroInformacion from './pages/CentroInformacion.tsx';
import BackButton from './components/BackButton.tsx';
import ExamenIngreso from './pages/ExamenIngreso.tsx';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    requestAnimationFrame(resetScroll);
  }, [pathname, search, hash]);

  return null;
}

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
    <Router basename="/">
      {" "}
      {/* Se cambia segun la ubicacion de la carpeta */}
      <ScrollToTop />
      {!isMobile && <NavContacto />}
      <Nav />
      <BackButton
        position="bottom-right"
        color="#18817d"
        hoverColor="#18817d"
        size={isMobile ? "small" : "medium"} // Se adapta al tamaño de pantalla
        excludePaths={excludedRoutes}
      />
      {/* Agente flotante de consulta 
      <Agent
        position="bottom-right"
        size={isMobile ? "small" : "medium"} // Se adapta al tamaño de pantalla
        excludePaths={excludedRoutes}
      /> */}
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
        <Route path="/InformesFinancieros" element={<InformesFinancieros />} />
        <Route path="/ExamenIngreso" element={<ExamenIngreso />} />
        <Route
          path="/ExtensionUniversitaria"
          element={<ExtensionUniversitaria />}
        />
        <Route
          path="/MovilidadEstudiantil"
          element={<MovilidadEstudiantil />}
        />
        <Route path="/Convenios" element={<Convenios />} />
        <Route path="/BolsaTrabajo" element={<BolsaTrabajo />} />
        <Route path="/ComiteEtica" element={<ComiteEtica />} />
        <Route path="/Egresados" element={<Egresados />} />
        <Route path="/Informes/Financieros" element={<InformesFinancieros />} />
        <Route path="/CulturaPaz" element={<CulturaPaz />} />
        <Route path="/CentroInformacion" element={<CentroInformacion />} />
        <Route path="/GuiasPago" element={<GuiasPago />} />
        {/* Ruta para manejar 404 - Redirige a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
