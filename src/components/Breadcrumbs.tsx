import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

interface BreadcrumbsProps {
  items?: {
    path: string;
    label: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  
  // Mapeo de rutas a etiquetas
  const routeLabels: Record<string, string> = {
    '/': 'Inicio',
    '/Vinculacion': 'Vinculación',
    '/Becas': 'Becas',
    '/Incubadora': 'Incubadora de Negocios',
    '/CEELEX': 'CEELEX',
    '/ECECUT': 'ECECUT',
    '/ExtensionUniversitaria': 'Extensión Universitaria',
    '/MovilidadEstudiantil': 'Movilidad Estudiantil',
    '/OfertaEducativa': 'Oferta Educativa',
    '/QuienesSomos' : '¿Quiénes Somos?',

    //Carreras
    '/Carrera/IAL' : 'Ingenieria en Alimentos',
    
  };

  // Generar breadcrumbs automáticamente desde la ruta actual
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    
    // Siempre agregar Inicio
    breadcrumbs.push({ path: '/', label: 'Inicio' });
    
    let currentPath = '';
    for (let i = 0; i < paths.length; i++) {
      currentPath += `/${paths[i]}`;
      const label = routeLabels[currentPath] || paths[i].charAt(0).toUpperCase() + paths[i].slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ path: currentPath, label });
    }
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  return (
    <nav className={`breadcrumbs breadcrumbs`} aria-label="Breadcrumb">
      <div className="breadcrumbs-container">
        <ol className="breadcrumbs-list">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="breadcrumbs-item">
              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link to={item.path} className="breadcrumbs-link">
                    {item.label}
                  </Link>
                  <span className="breadcrumbs-separator" aria-hidden="true">/</span>
                </>
              ) : (
                <span className="breadcrumbs-current">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;