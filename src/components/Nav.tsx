import { useState, useEffect, useRef } from 'react';
import './Nav.css';
import LogoUTN from '../assets/logos/LOGOUTN.png';
import LogoUTyP from '../assets/logos/LOGOUTYP.png';
import Calendario from '../assets/logos/LOGO CALENDARIO.png';
import AppSiga from '../assets/logos/LOGO APPSIGA.png';
import CalendarioEscolar from '../assets/extras/CALENDARIO ESCOLAR 2026.pdf';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isAspirantesOpen, setIsAspirantesOpen] = useState<boolean>(false);
    const [isComunidadOpen, setIsComunidadOpen] = useState<boolean>(false);
    const [isMobileAspirantesOpen, setIsMobileAspirantesOpen] = useState<boolean>(false);
    const [isMobileComunidadOpen, setIsMobileComunidadOpen] = useState<boolean>(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    
    // Usamos timeouts para evitar cierres inmediatos

    const closeTimeoutRef = useRef<number | null>(null);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsMobileAspirantesOpen(false);
            setIsMobileComunidadOpen(false);
            setActiveMobileSubmenu(null);
        }
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
        setIsMobileAspirantesOpen(false);
        setIsMobileComunidadOpen(false);
        setActiveMobileSubmenu(null);
    };


    const handleAspirantesHover = (open: boolean): void => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setIsAspirantesOpen(open);
        if (!open) setActiveSubmenu(null);
    };

    const handleComunidadHover = (open: boolean): void => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setIsComunidadOpen(open);
        if (!open) setActiveSubmenu(null);
    };

    const toggleAspirantes = (e: React.MouseEvent): void => {
        e.stopPropagation(); // Prevenir propagación
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setIsAspirantesOpen(!isAspirantesOpen);
        if (isAspirantesOpen) setActiveSubmenu(null);
    };

    const toggleComunidad = (e: React.MouseEvent): void => {
        e.stopPropagation(); // Prevenir propagación
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setIsComunidadOpen(!isComunidadOpen);
        if (isComunidadOpen) setActiveSubmenu(null);
    };

    const toggleMobileAspirantes = (): void => {
        setIsMobileAspirantesOpen(!isMobileAspirantesOpen);
        if (isMobileAspirantesOpen) setActiveMobileSubmenu(null);
    };

    const toggleMobileComunidad = (): void => {
        setIsMobileComunidadOpen(!isMobileComunidadOpen);
        if (isMobileComunidadOpen) setActiveMobileSubmenu(null);
    };

    const toggleMobileSubmenu = (menuName: string): void => {
        setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
    };

    // Modificar la función handleSubmenuLinkClick para ser más específica
    const handleLinkClick = (e: React.MouseEvent, href: string): void => {
        e.stopPropagation(); // Importante: detener la propagación
        
        // Cerrar todos los menús inmediatamente
        setIsAspirantesOpen(false);
        setIsComunidadOpen(false);
        setActiveSubmenu(null);
        
        if (isMenuOpen) {
            closeMenu();
        }
        
        // Si es un enlace interno, navegar manualmente
        if (href.startsWith('/') || href.startsWith('http')) {
            // Para enlaces internos
            if (href.startsWith('/')) {
                window.location.href = href;
            }
            // Para enlaces externos, el <a> tag se encargará
        }
    };

    // Limpiar timeout al desmontar
    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    // Controlar scroll y tecla ESC
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                if (isMenuOpen) closeMenu();
                setIsAspirantesOpen(false);
                setIsComunidadOpen(false);
                setIsMobileAspirantesOpen(false);
                setIsMobileComunidadOpen(false);
                setActiveSubmenu(null);
                setActiveMobileSubmenu(null);
            }
        };

        if (isMenuOpen || isAspirantesOpen || isComunidadOpen || isMobileAspirantesOpen || isMobileComunidadOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscKey);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isMenuOpen, isAspirantesOpen, isComunidadOpen, isMobileAspirantesOpen, isMobileComunidadOpen]);

    return (
        <>
            <div className='Nav'>
                <div className="Logos">
                    <img src={LogoUTN} alt="Logo UTN" className="LogoUTN"/>
                    <img src={LogoUTyP} alt="Logo UTyP" className="LogoUTyP"/>
                </div>
                
                {/* Navegación normal (escritorio) */}
                <div className="Navegacion">
                    <ul>
                        <li><a href={'/'} onClick={(e) => handleLinkClick(e, '/')}>Inicio</a></li>
                        <li><a href={'/QuienesSomos'} onClick={(e) => handleLinkClick(e, '/QuienesSomos')}>¿Quienes Somos?</a></li>
                        
                        {/* Menú desplegable Aspirantes */}
                        <li 
                            className={`dropdown-parent ${isAspirantesOpen ? 'active' : ''}`}
                            onMouseEnter={() => handleAspirantesHover(true)}
                            onMouseLeave={() => handleAspirantesHover(false)}
                        >
                            <span 
                                className="dropdown-trigger" 
                                onClick={toggleAspirantes}
                            >
                                Aspirantes
                                <span className={`dropdown-arrow ${isAspirantesOpen ? 'rotated' : ''}`}>▼</span>
                            </span>
                            
                            {isAspirantesOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <a 
                                            href="/OfertaEducativa" 
                                            onClick={(e) => handleLinkClick(e, '/OfertaEducativa')}
                                        >
                                            Oferta Educativa
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://utn.appsiga.net/admision" 
                                            target='_blank'
                                            
                                        >
                                            Pre-registro
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/recorrido" 
                                            onClick={(e) => handleLinkClick(e, '/recorrido')}
                                        >
                                            Recorrido Virtual
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        
                        {/* Menú desplegable Comunidad UTNay con submenús */}
                        <li 
                            className={`dropdown-parent ${isComunidadOpen ? 'active' : ''}`}
                            onMouseEnter={() => handleComunidadHover(true)}
                            onMouseLeave={() => handleComunidadHover(false)}
                        >
                            <span 
                                className="dropdown-trigger" 
                                onClick={toggleComunidad}
                            >
                                Comunidad UTNay
                                <span className={`dropdown-arrow ${isComunidadOpen ? 'rotated' : ''}`}>▼</span>
                            </span>
                            
                            {isComunidadOpen && (
                                <ul className="dropdown-menu comunidad-menu">
                                    {/* Estudiantes con submenú */}
                                    <li 
                                        className={`has-submenu ${activeSubmenu === 'estudiantes' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveSubmenu('estudiantes')}
                                        onMouseLeave={() => activeSubmenu === 'estudiantes' && setActiveSubmenu(null)}
                                    >
                                        <div className="submenu-trigger">
                                            <span>Estudiantes</span>
                                            <span className="submenu-arrow">▶</span>
                                        </div>
                                        
                                        {activeSubmenu === 'estudiantes' && (
                                            <ul className="submenu">
                                                <li>
                                                    <a 
                                                        href="https://utn.appsiga.net" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleLinkClick(e, 'https://utn.appsiga.net')}
                                                    >
                                                        APPSIGA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="/Becas" 
                                                        onClick={(e) => handleLinkClick(e, '/Becas')}
                                                    >
                                                        Becas
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href={CalendarioEscolar} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleLinkClick(e, CalendarioEscolar)}
                                                    >
                                                        Calendario Escolar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="" 
                                                        onClick={(e) => handleLinkClick(e, '')}
                                                    >
                                                        Buzón de Sugerencias
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="/Vinculacion" 
                                                        onClick={(e) => handleLinkClick(e, '/Vinculacion')}
                                                    >
                                                        Vinculación
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    
                                    {/* Docentes con submenú */}
                                    <li 
                                        className={`has-submenu ${activeSubmenu === 'docentes' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveSubmenu('docentes')}
                                        onMouseLeave={() => activeSubmenu === 'docentes' && setActiveSubmenu(null)}
                                    >
                                        <div className="submenu-trigger">
                                            <span>Docentes</span>
                                            <span className="submenu-arrow">▶</span>
                                        </div>
                                        
                                        {activeSubmenu === 'docentes' && (
                                            <ul className="submenu">
                                                <li>
                                                    <a 
                                                        href="https://utn.appsiga.net" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleLinkClick(e, 'https://utn.appsiga.net')}
                                                    >
                                                        APPSIGA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="" 
                                                        onClick={(e) => handleLinkClick(e, '')}
                                                    >
                                                        Comite de Etica
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="" 
                                                        onClick={(e) => handleLinkClick(e, '')}
                                                    >
                                                        Investigación y Desarrollo
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="/Vinculacion" 
                                                        onClick={(e) => handleLinkClick(e, '/Vinculacion')}
                                                    >
                                                        Vinculación
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href={CalendarioEscolar} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleLinkClick(e, CalendarioEscolar)}
                                                    >
                                                        Calendario Escolar
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    
                                    {/* Administrativos con submenú */}
                                    <li 
                                        className={`has-submenu ${activeSubmenu === 'administrativos' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveSubmenu('administrativos')}
                                        onMouseLeave={() => activeSubmenu === 'administrativos' && setActiveSubmenu(null)}
                                    >
                                        <div className="submenu-trigger">
                                            <span>Administrativos</span>
                                            <span className="submenu-arrow">▶</span>
                                        </div>
                                        
                                        {activeSubmenu === 'administrativos' && (
                                            <ul className="submenu">
                                                <li>
                                                    <a 
                                                        href="https://utn.appsiga.net" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleLinkClick(e, 'https://utn.appsiga.net')}
                                                    >
                                                        APPSIGA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="" 
                                                        onClick={(e) => handleLinkClick(e, '')}
                                                    >
                                                        Comité de Ética
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href="/Vinculacion" 
                                                        onClick={(e) => handleLinkClick(e, '/Vinculacion')}
                                                    >
                                                        Vinculación
                                                    </a>
                                                </li>
                                                <li>
                                                    <a 
                                                        href={CalendarioEscolar} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => handleLinkClick(e, CalendarioEscolar)}
                                                    >
                                                        Calendario Escolar
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    
                                    {/* Egresados con submenú */}
                                    <li 
                                        className={`has-submenu ${activeSubmenu === 'egresados' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveSubmenu('egresados')}
                                        onMouseLeave={() => activeSubmenu === 'egresados' && setActiveSubmenu(null)}
                                    >
                                        <div className="submenu-trigger">
                                            <span>Egresados</span>
                                            <span className="submenu-arrow">▶</span>
                                        </div>
                                        
                                        {activeSubmenu === 'egresados' && (
                                            <ul className="submenu">
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>Bolsa de Trabajo</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>Educación Continua</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>Incubadora de Negocios</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>ECECUT</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>CEELEX</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    
                                    {/* Empresarios con submenú */}
                                    <li 
                                        className={`has-submenu ${activeSubmenu === 'empresarios' ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveSubmenu('empresarios')}
                                        onMouseLeave={() => activeSubmenu === 'empresarios' && setActiveSubmenu(null)}
                                    >
                                        <div className="submenu-trigger">
                                            <span>Empresarios</span>
                                            <span className="submenu-arrow">▶</span>
                                        </div>
                                        
                                        {activeSubmenu === 'empresarios' && (
                                            <ul className="submenu">
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>Incubadora de Negocios</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>CEELEX</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>ECECUT</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>Educación Continua</a></li>
                                                <li><a href="" onClick={(e) => handleLinkClick(e, '')}>Servicios al Sector Productivo</a></li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className="IconosNav">
                        <a href={CalendarioEscolar} target="_blank" rel="noopener noreferrer">
                            <img src={Calendario} alt="Icono Calendario" className="IconoCalendario"/>
                        </a>
                        <a href="https://utn.appsiga.net" target="_blank" rel="noopener noreferrer">
                            <img src={AppSiga} alt="Icono AppSiga" className="IconoAppSiga"/>
                        </a>
                    </div>
                </div>
                
                {/* Botón hamburguesa (móvil) */}
                <button 
                    className={`HamburgerMenu ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="HamburgerLine"></span>
                    <span className="HamburgerLine"></span>
                    <span className="HamburgerLine"></span>
                </button>
            </div>

            {/* Menú móvil */}
            <div 
                id="mobile-menu"
                className={`MobileMenu ${isMenuOpen ? 'active' : ''}`}
                aria-hidden={!isMenuOpen}
            >
                <ul>
                    <li><a href={'/'} onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Inicio</a></li>
                    <li><a href={'/QuienesSomos'} onClick={(e) => { e.stopPropagation(); closeMenu(); }}>¿Quienes Somos?</a></li>
                    
                    {/* Menú desplegable Aspirantes en móvil */}
                    <li 
                        className={`mobile-dropdown-parent ${isMobileAspirantesOpen ? 'active' : ''}`}
                    >
                        <div 
                            className="mobile-dropdown-trigger"
                            onClick={toggleMobileAspirantes}
                        >
                            <span>Aspirantes</span>
                            <span className={`mobile-dropdown-arrow ${isMobileAspirantesOpen ? 'rotated' : ''}`}>▼</span>
                        </div>
                        
                        {isMobileAspirantesOpen && (
                            <ul className="mobile-dropdown-menu">
                                <li><a href="/OfertaEducativa" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Oferta Educativa</a></li>
                                <li><a href="https://utn.appsiga.net/admision" target='_blank' onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Pre-registro</a></li>
                                <li><a href="/recorrido" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Recorrido Virtual</a></li>
                            </ul>
                        )}
                    </li>
                    
                    {/* Menú desplegable Comunidad UTNay en móvil con submenús */}
                    <li 
                        className={`mobile-dropdown-parent ${isMobileComunidadOpen ? 'active' : ''}`}
                    >
                        <div 
                            className="mobile-dropdown-trigger"
                            onClick={toggleMobileComunidad}
                        >
                            <span>Comunidad UTNay</span>
                            <span className={`mobile-dropdown-arrow ${isMobileComunidadOpen ? 'rotated' : ''}`}>▼</span>
                        </div>
                        
                        {isMobileComunidadOpen && (
                            <ul className="mobile-dropdown-menu comunidad-mobile-menu">
                                
                                <li 
                                    className={`mobile-has-submenu ${activeMobileSubmenu === 'estudiantes' ? 'active' : ''}`}
                                >
                                    <div 
                                        className="mobile-submenu-trigger"
                                        onClick={() => toggleMobileSubmenu('estudiantes')}
                                    >
                                        <span>Estudiantes</span>
                                        <span className={`mobile-submenu-arrow ${activeMobileSubmenu === 'estudiantes' ? 'rotated' : ''}`}>▶</span>
                                    </div>
                                    
                                    {activeMobileSubmenu === 'estudiantes' && (
                                        <ul className="mobile-submenu">
                                            <li>
                                                <a 
                                                    href="https://utn.appsiga.net" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    APPSIGA
                                                </a>
                                            </li>
                                            <li><a href="/Becas" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Becas</a></li>
                                            <li>
                                                <a 
                                                    href={CalendarioEscolar} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    Calendario Escolar
                                                </a>
                                            </li>
                                            <li><a href="" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Buzón de Sugerencias</a></li>
                                            <li><a href="/Vinculacion" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Vinculación</a></li>
                                        </ul>
                                    )}
                                </li>
                                
                                <li 
                                    className={`mobile-has-submenu ${activeMobileSubmenu === 'docentes' ? 'active' : ''}`}
                                >
                                    <div 
                                        className="mobile-submenu-trigger"
                                        onClick={() => toggleMobileSubmenu('docentes')}
                                    >
                                        <span>Docentes</span>
                                        <span className={`mobile-submenu-arrow ${activeMobileSubmenu === 'docentes' ? 'rotated' : ''}`}>▶</span>
                                    </div>
                                    
                                    {activeMobileSubmenu === 'docentes' && (
                                        <ul className="mobile-submenu">
                                            <li>
                                                <a 
                                                    href="https://utn.appsiga.net" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    APPSIGA
                                                </a>
                                            </li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Comité de Ética</a></li>
                                            <li><a href="/Vinculacion" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Vinculación</a></li>
                                            <li>
                                                <a 
                                                    href={CalendarioEscolar} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    Calendario Escolar
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    )}
                                </li>
                                
                                <li 
                                    className={`mobile-has-submenu ${activeMobileSubmenu === 'administrativo' ? 'active' : ''}`}
                                >
                                    <div 
                                        className="mobile-submenu-trigger"
                                        onClick={() => toggleMobileSubmenu('administrativo')}
                                    >
                                        <span>Administrativos</span>
                                        <span className={`mobile-submenu-arrow ${activeMobileSubmenu === 'administrativo' ? 'rotated' : ''}`}>▶</span>
                                    </div>
                                    
                                    {activeMobileSubmenu === 'administrativo' && (
                                        <ul className="mobile-submenu">
                                            <li>
                                                <a 
                                                    href="https://utn.appsiga.net" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    APPSIGA
                                                </a>
                                            </li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Comité de Ética</a></li>
                                            <li><a href="/Vinculacion" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Vinculación</a></li>
                                            <li>
                                                <a 
                                                    href={CalendarioEscolar} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    Calendario Escolar
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    )}
                                </li>

                                <li 
                                    className={`mobile-has-submenu ${activeMobileSubmenu === 'egresado' ? 'active' : ''}`}
                                >
                                    <div 
                                        className="mobile-submenu-trigger"
                                        onClick={() => toggleMobileSubmenu('egresado')}
                                    >
                                        <span>Egresados</span>
                                        <span className={`mobile-submenu-arrow ${activeMobileSubmenu === 'egresado' ? 'rotated' : ''}`}>▶</span>
                                    </div>
                                    
                                    {activeMobileSubmenu === 'egresado' && (
                                        <ul className="mobile-submenu">
                                            <li>
                                                <a 
                                                    href="/" 
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    Bolsa de Trabajo
                                                </a>
                                            </li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Educación Continua</a></li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Incubadora de Negocios</a></li>
                                            <li>
                                                <a 
                                                    href="/"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    ECECUT
                                                </a>
                                            </li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>CEELEX</a></li>
                                        </ul>
                                    )}
                                </li>

                                <li 
                                    className={`mobile-has-submenu ${activeMobileSubmenu === 'empresarios' ? 'active' : ''}`}
                                >
                                    <div 
                                        className="mobile-submenu-trigger"
                                        onClick={() => toggleMobileSubmenu('empresarios')}
                                    >
                                        <span>Empresarios</span>
                                        <span className={`mobile-submenu-arrow ${activeMobileSubmenu === 'empresarios' ? 'rotated' : ''}`}>▶</span>
                                    </div>
                                    
                                    {activeMobileSubmenu === 'empresarios' && (
                                        <ul className="mobile-submenu">
                                            <li>
                                                <a 
                                                    href="/" 
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    Incubadora de Negocios
                                                </a>
                                            </li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>CEELEX</a></li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>ECECUT</a></li>
                                            <li>
                                                <a 
                                                    href="/"
                                                    onClick={(e) => { e.stopPropagation(); closeMenu(); }}
                                                >
                                                    Educación Continua
                                                </a>
                                            </li>
                                            <li><a href="/" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Servicios al Sector Productivo</a></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    
                </ul>
                <div className="MobileIcons">
                    <a href={CalendarioEscolar} target="_blank" rel="noopener noreferrer">
                        <img src={Calendario} alt="Icono Calendario" onClick={(e) => { e.stopPropagation(); closeMenu(); }}/>
                    </a>
                    <a href="https://utn.appsiga.net" target="_blank" rel="noopener noreferrer">
                        <img src={AppSiga} alt="Icono AppSiga" onClick={(e) => { e.stopPropagation(); closeMenu(); }}/>
                    </a>
                </div>
            </div>

            {/* Overlay para cerrar menú */}
            {isMenuOpen && (
                <div 
                    className={`Overlay ${isMenuOpen ? 'active' : ''}`} 
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </>
    );
}

export default Nav;