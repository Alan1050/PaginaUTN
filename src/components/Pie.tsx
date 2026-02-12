import "./Pie.css";
import logoUT from '../assets/logos/logoUTDegradado.png'
import logoUTGobiero from '../assets/logos/logosUT-Gobierno.png'
import logoCulturaPaz from '../assets/logos/logoCulturaPaz.png'

function Footer() {
  return (
    <section className="FooterContent">
      <div className="FooterContentImage">
      <div>
             <img src={logoUT} alt="Logo Universidad Tecnologica de Nayarit" className="logoUTFooter" />
        </div>
        <div className="footer-pt2">
            <div className="imagesFooter">
              <img src={logoUTGobiero} className="logoGobiernoUT" alt="Logo Gobierno del Estado de Nayarit y Universidad Tecnologica de Nayarit" />
              <img src={logoCulturaPaz} className="logoCulturaPazFooter" alt="" />
            </div>
            <div>
              <p>Carretera Federal 200 K.m 9 Xalisco, Nayarit. C.P. 63780</p>
              <p>311 211 98 00</p>
            </div>
        </div>
      </div>
      <p style={{color: "white", fontFamily: "Arial", textAlign:"center", paddingBottom: "20px"}}>(C) 2026 Universidad Tecnológica de Nayarit. Derechos Reservados</p>
    </section>
  );
}

export default Footer;