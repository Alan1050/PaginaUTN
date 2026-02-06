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
    const [isMobileAspirantesOpen, setIsMobileAspirantesOpen] = useState<boolean>(false);
    const aspirantesRef = useRef<HTMLLIElement>(null);
    const aspirantesMobileRef = useRef<HTMLLIElement>(null);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsMobileAspirantesOpen(false);
        }
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
        setIsMobileAspirantesOpen(false);
    };

    const toggleAspirantes = (): void => {
        setIsAspirantesOpen(!isAspirantesOpen);
    };

    const toggleMobileAspirantes = (): void => {
        setIsMobileAspirantesOpen(!isMobileAspirantesOpen);
    };

    // Cerrar submenú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (aspirantesRef.current && !aspirantesRef.current.contains(event.target as Node)) {
                setIsAspirantesOpen(false);
            }
            if (aspirantesMobileRef.current && !aspirantesMobileRef.current.contains(event.target as Node)) {
                setIsMobileAspirantesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Controlar scroll y tecla ESC
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                if (isMenuOpen) closeMenu();
                if (isAspirantesOpen) setIsAspirantesOpen(false);
                if (isMobileAspirantesOpen) setIsMobileAspirantesOpen(false);
            }
        };

        if (isMenuOpen || isAspirantesOpen || isMobileAspirantesOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscKey);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isMenuOpen, isAspirantesOpen, isMobileAspirantesOpen]);

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
                        <li><a href={'/'}>Inicio</a></li>
                        <li><a href={'/QuienesSomos'}>¿Quienes Somos?</a></li>
                        
                        {/* Menú desplegable Aspirantes */}
                        <li 
                            className={`dropdown-parent ${isAspirantesOpen ? 'active' : ''}`}
                            ref={aspirantesRef}
                            onMouseEnter={() => setIsAspirantesOpen(true)}
                            onMouseLeave={() => setIsAspirantesOpen(false)}
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
                                    <li><a href="/OfertaEducativa">Oferta Educativa</a></li>
                                    <li><a href="">Pre-registro</a></li>
                                    <li><a href="">Recorrido Virtual</a></li>
                                </ul>
                            )}
                        </li>
                        
                        <li><a href="">Comunidad UTNay</a></li>
                    </ul>
                    <div className="IconosNav">
                        <a href={CalendarioEscolar} target="_blank"><img src={Calendario} alt="Icono Calendario" className="IconoCalendario"/> </a>
                        <a href="https://utn.appsiga.net" target="_blank"><img src={AppSiga} alt="Icono AppSiga" className="IconoAppSiga"/> </a>
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
                    <li><a href={'/'} onClick={closeMenu}>Inicio</a></li>
                    <li><a href={'/QuienesSomos'} onClick={closeMenu}>¿Quienes Somos?</a></li>
                    
                    {/* Menú desplegable Aspirantes en móvil */}
                    <li 
                        className={`mobile-dropdown-parent ${isMobileAspirantesOpen ? 'active' : ''}`}
                        ref={aspirantesMobileRef}
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
                                <li><a href="/OfertaEducativa" onClick={closeMenu}>Oferta Educativa</a></li>
                                <li><a href="" onClick={closeMenu}>Pre-registro</a></li>
                                <li><a href="" onClick={closeMenu}>Recorrido Virtual</a></li>
                            </ul>
                        )}
                    </li>
                    
                    <li><a href="#comunidad" onClick={closeMenu}>Comunidad UTNay</a></li>
                </ul>
                <div className="MobileIcons">
                    <a href={CalendarioEscolar} target="_blank"><img src={Calendario} alt="Icono Calendario" onClick={closeMenu}/> </a>
                    <a href="https://utn.appsiga.net" target="_blank"><img src={AppSiga} alt="Icono AppSiga" onClick={closeMenu}/> </a>
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