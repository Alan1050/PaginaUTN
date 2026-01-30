import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.tsx';
import HomePage from './pages/HomePage.tsx'; // Nuevo: Mover contenido principal aquí
import CarreraPage from './pages/Carrera.tsx'; // Nuevo
// import NotFoundPage from './pages/NotFoundPage.tsx'; // Nuevo

function App() {
  return (
    <Router>
      <Nav /> {/* Nav visible en todas las páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Carrera/:nombre" element={<CarreraPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;