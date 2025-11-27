import { Link } from "react-router-dom";
import "../css/Encabezado.css";
import logoAntares from "../img/Encabezado/logo-antares.png";


function Encabezado() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logoAntares}
            alt=""
            className="logo-img"
          />
        </Link>

        {/* MENÚ HAMBURGUESA */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#menuAntares"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menuAntares">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary-custom" to="/nosotros">
                Nosotros
              </Link>
            </li>

            <div className="divider"></div>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary-custom" to="/talleres">
                Talleres
              </Link>
            </li>

            <div className="divider"></div>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary-custom" to="/productos">
                Productos & Servicios
              </Link>
            </li>

            <div className="divider"></div>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary-custom" to="/ecologicos">
                Envases Ecológicos
              </Link>
            </li>

            <div className="divider"></div>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary-custom" to="/preguntas">
                Preguntas
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Encabezado;
