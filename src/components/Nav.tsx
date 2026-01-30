import { useState, useEffect } from 'react';
import './Nav.css';
import LogoUTN from '../assets/logos/LOGOUTN.png';
import LogoUTyP from '../assets/logos/LOGOUTYP.png';
import Calendario from '../assets/logos/LOGO CALENDARIO.png';
import AppSiga from '../assets/logos/LOGO APPSIGA.png';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    // Controlar scroll y tecla ESC
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent): void => {
            if (event.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscKey);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className='Nav'>
                <div className="Logos">
                    <img src={LogoUTyP} alt="Logo UTyP" className="LogoUTN"/>
                    <img src={LogoUTN} alt="Logo UTN" className="LogoUTyP"/>
                </div>
                
                {/* Navegación normal (escritorio) */}
                <div className="Navegacion">
                    <ul>
                        <li><a href={'/'}>Inicio</a></li>
                        <li><a href="#quienes-somos">¿Quienes Somos?</a></li>
                        <li><a href="#aspirantes">Aspirantes</a></li>
                        <li><a href="#comunidad">Comunidad UTNay</a></li>
                    </ul>
                    <div className="IconosNav">
                        <img src={Calendario} alt="Icono Calendario" className="IconoCalendario"/>
                        <img src={AppSiga} alt="Icono AppSiga" className="IconoAppSiga"/>
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
                    <li><a href="#quienes-somos" onClick={closeMenu}>¿Quienes Somos?</a></li>
                    <li><a href="#aspirantes" onClick={closeMenu}>Aspirantes</a></li>
                    <li><a href="#comunidad" onClick={closeMenu}>Comunidad UTNay</a></li>
                </ul>
                <div className="MobileIcons">
                    <img src={Calendario} alt="Icono Calendario" onClick={closeMenu}/>
                    <img src={AppSiga} alt="Icono AppSiga" onClick={closeMenu}/>
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