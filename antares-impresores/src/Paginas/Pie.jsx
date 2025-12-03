import "../css/Pie.css";
import logoAntares from "../img/pie/LOGO-GRUPO-EMPRESARIAL.png";
import { Link } from "react-router-dom";

function Pie() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-section logo-section">
          <img src={logoAntares} alt="GRUPO EMPRESARIAL" className="footer-logo" />
          <h3 className="company-name">ANTARES IMPRESORES</h3>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section links-section">
          <h4 className="section-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/productos">Productos & Servicios</Link></li>
            <li><Link to="/preguntas">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-section contact-section">
          <h4 className="section-title">Contacto</h4>
          <div className="contact-info">
            <p>+51 997 687 679</p>
            <p>+51 959 830 447</p>
            <p>+51 959 045 438</p>
            <p>Calle Pucarpata 406, Arequipa 04001</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social-section">
          <h4 className="section-title">Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100063518829925" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
            <a href="https://www.instagram.com/antares_impresores" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="icon-whatsapp"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Antares Impresores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Pie;
