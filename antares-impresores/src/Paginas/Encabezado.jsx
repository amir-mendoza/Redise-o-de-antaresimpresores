import { Link } from "react-router-dom";
import "../css/Encabezado.css";

function Encabezado() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/nosotros">
          <img 
            src="https://static.wixstatic.com/media/3379ea_f4954b36bad347f2b4748578ec46d36d~mv2.png/v1/fill/w_195,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GRUPO%20EMPRESARIAL.png"
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
