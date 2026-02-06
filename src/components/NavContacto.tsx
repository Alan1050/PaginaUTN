import "./NavContacto.css";

function NavContacto() {
  return (
    <>
      <section className="nav-contacto-contenedor">
        <div className="nav-contacto-redes">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/UTNAY"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-contacto-red-social"
            aria-label="Facebook UTNayarit"
          >
            <div className="nav-contacto-icono">
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
            className="nav-contacto-red-social"
            aria-label="Instagram UTNayarit"
          >
            <div className="nav-contacto-icono">
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
            className="nav-contacto-red-social"
            aria-label="TikTok UTNayarit"
          >
            <div className="nav-contacto-icono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
            </div>
          </a>

          <a href="/OfertaEducativa" className="nav-contacto-btn-oferta">
            <span>Oferta Educativa</span>
          </a>
        </div>

        <div className="nav-contacto-telefono">
          <div className="nav-contacto-telefono-icono">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.3 2.4.6 3.5L5.2 11.8c-.6-1.3-.9-2.7-1.1-4.1-.1-.3.1-.7.4-.8.2-.1.5-.1.7 0 .4 0 .8 0 1.2.1zM19 20c-1.4-.2-2.8-.5-4.1-1.1l2.3-2.3c1.1.3 2.3.5 3.5.6v1.5c0 .3-.2.5-.5.5-.1 0-.2 0-.2-.1z"/>
            </svg>
          </div>
          <p className="nav-contacto-telefono-numero">311 211 98 00</p>
        </div>
      </section>
    </>
  );
}

export default NavContacto;