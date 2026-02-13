import Breadcrumbs from '../components/Breadcrumbs';
import './QuienesSomos.css';
import { useState } from 'react';

function QuienesSomos() {
  const [activeSection, setActiveSection] = useState<string>('mision');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <>
            <div className="quienesSomosContainerPrincipal">

        {/* Barra lateral de redes sociales (sobre la imagen, solo desktop) */}
        <div className="redes-sociales-sidebar">
          <div className="redes-sociales-contenedor">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/UTNAY"
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-link"
              aria-label="Facebook UTNayarit"
            >
              <div className="red-social-icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.44 21.31 22 17.17 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ut.nayarit/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-link"
              aria-label="Instagram UTNayarit"
            >
              <div className="red-social-icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@utnayarit"
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-link"
              aria-label="TikTok UTNayarit"
            >
              <div className="red-social-icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      

<Breadcrumbs />


      <div className='quienesSomosContent'>
        <div className='sections-container'>
          
          {/* MISIÓN */}
          <div className={`section-item ${activeSection === 'mision' ? 'active' : ''}`}>
            <div 
              className='section-header'
              onClick={() => toggleSection('mision')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleSection('mision')}
            >
                
              <h2>MISIÓN</h2>
              <span className='toggle-icon'>
                {activeSection === 'mision' ? '−' : '+'}
              </span>
            </div>
            
            {activeSection === 'mision' && (
              <div className='section-content'>
                <p>En la Universidad Tecnológica de Nayarit impulsamos la formación de profesionistas innovadores y de alto nivel, mediante una educación integral, tecnológica, humanista e intercultural, con compromiso hacia el desarrollo sostenible, la prosperidad de Nayarit, de México y del mundo.</p>
              </div>
            )}
          </div>

          {/* VISIÓN */}
          <div className={`section-item ${activeSection === 'vision' ? 'active' : ''}`}>
            <div 
              className='section-header'
              onClick={() => toggleSection('vision')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleSection('vision')}
            >
              <h2>VISIÓN</h2>
              <span className='toggle-icon'>
                {activeSection === 'vision' ? '−' : '+'}
              </span>
            </div>
            
            {activeSection === 'vision' && (
              <div className='section-content'>
                <p>Nos consolidaremos como una universidad tecnológica líder, reconocida nacional e internacionalmente por su excelencia académica, cultura digital e innovación, y por impulsar el desarrollo humano, profesional y sostenible de su comunidad.</p>
              </div>
            )}
          </div>

          {/* POLÍTICA DE CALIDAD */}
          <div className={`section-item ${activeSection === 'politica' ? 'active' : ''}`}>
            <div 
              className='section-header'
              onClick={() => toggleSection('politica')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleSection('politica')}
            >
              <h2>POLÍTICA DE CALIDAD</h2>
              <span className='toggle-icon'>
                {activeSection === 'politica' ? '−' : '+'}
              </span>
            </div>
            
            {activeSection === 'politica' && (
              <div className='section-content'>
                <p>En la Universidad Tecnológica de Nayarit estamos comprometidos en mejorar e innovar nuestro Sistema Integral de Calidad bajo la norma ISO 21001:2018, orientado a brindar servicios educativos de calidad, mediante un modelo pertinente de formación integral, incorporando funciones sustantivas de investigación, extensión universitaria, vinculación con el sector productivo y social que impacte el desarrollo tecnológico en el entorno y el respeto a la propiedad intelectual.</p>
              </div>
            )}
          </div>

          {/* VALORES */}
          <div className={`section-item ${activeSection === 'valores' ? 'active' : ''}`}>
            <div 
              className='section-header'
              onClick={() => toggleSection('valores')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleSection('valores')}
            >
              <h2>VALORES</h2>
              <span className='toggle-icon'>
                {activeSection === 'valores' ? '−' : '+'}
              </span>
            </div>
            
            {activeSection === 'valores' && (
              <div className='section-content'>
                <ul className='valores-list'>
                  <li><strong>Compromiso:</strong> Sentido de pertenencia a la organización para generar una identidad universitaria.</li>
                  <li><strong>Solidaridad:</strong> Colaboración mutua que existe entre la comunidad universitaria para el logro de objetivos comunes.</li>
                  <li><strong>Respeto:</strong> Reconocimiento al valor, dignidad y derecho entre alumnos, profesores, administrativos y su entorno físico y social.</li>
                  <li><strong>Responsabilidad:</strong> Cumplimiento de derechos y obligaciones de cada integrante de la comunidad universitaria.</li>
                  <li><strong>Honestidad:</strong> Ser auténtico en sus acciones, congruentes de lo que dicen con lo que hacen y sienten, dentro y fuera de la institución.</li>
                  <li><strong>Lealtad:</strong> Congruencia con las políticas institucionales para el buen actuar de los miembros de la comunidad universitaria.</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default QuienesSomos;