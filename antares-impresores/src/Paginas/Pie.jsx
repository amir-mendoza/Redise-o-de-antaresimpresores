import "../css/Pie.css";
import logoAntares from "../img/pie/LOGO-GRUPO-EMPRESARIAL.png";

function Pie() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y nombre de la empresa */}
        <div className="footer-section logo-section">
          <img 
            src={logoAntares} 
            alt="GRUPO EMPRESARIAL" 
            className="footer-logo"
          />
          <h3 className="company-name">ANTARES IMPRESORES</h3>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section links-section">
          <h4 className="section-title">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="https://www.antaresimpresores.com/productos-y-servicios">Productos & Servicios</a></li>
            <li><a href="https://www.antaresimpresores.com/preguntas">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="footer-section contact-section">
          <h4 className="section-title">Contacto</h4>
          <div className="contact-info">
            <div className="phone-numbers">
              <p><i className="icon-phone"></i> +51 997 687 679</p>
              <p><i className="icon-phone"></i> +51 959 830 447</p>
              <p><i className="icon-phone"></i> +51 959 045 438</p>
            </div>
            <div className="address">
              <p><i className="icon-location"></i> Calle Pucarpata 406, Arequipa 04001</p>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social-section">
          <h4 className="section-title">Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100063518829925" target="_blank" rel="noopener noreferrer">
              <i className="icon-facebook"></i>
            </a>
            <a href="https://www.instagram.com/antares_impresores" target="_blank" rel="noopener noreferrer">
              <i className="icon-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="icon-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Antares Impresores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
export default Pie;
