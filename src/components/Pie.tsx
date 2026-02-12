import "./Pie.css";
import logoUT from '../assets/logos/logoUTDegradado.png'
import logoUTGobiero from '../assets/logos/logosUT-Gobierno.png'
import logoCulturaPaz from '../assets/logos/logoCulturaPaz.png'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import type { JSX } from "react";

function Footer(): JSX.Element {
  return (
    <section className="FooterContent">
      <div className="FooterContentImage">
        <div>
          <img src={logoUT} alt="Logo Universidad Tecnologica de Nayarit" className="logoUTFooter" />
        </div>
        <div className="footer-pt2">
          <div className="imagesFooter">
            <img src={logoUTGobiero} className="logoGobiernoUT" alt="Logo Gobierno del Estado de Nayarit y Universidad Tecnologica de Nayarit" />
            <img src={logoCulturaPaz} className="logoCulturaPazFooter" alt="Logo Cultura de Paz" />
          </div>
          <div className="contactInfo">
            <a href="https://maps.app.goo.gl/ZdBmhuT67ZRS9xgZA" target="_blank" className="contactItem">
              <FaMapMarkerAlt className="contactIcon" /> Carretera Federal 200 K.m 9 Xalisco, Nayarit. C.P. 63780
            </a>
            <p className="contactItem">
              <FaPhone className="contactIcon" /> 311 211 98 00
            </p>
          </div>
        </div>
      </div>
      <p className="copyright" style={{color: "white", textAlign: "center", paddingBottom: "20px"}}>(C) 2026 Universidad Tecnológica de Nayarit. Derechos Reservados</p>
    </section>
  );
}

export default Footer;