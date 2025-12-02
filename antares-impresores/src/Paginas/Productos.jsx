import React from 'react';
import '../css/Productos.css';
import giga from "../img/productos/gigan.jpg";

const Productos = () => {
  const serviciosImpresion = [
    "Anillado",
    "Encolado",
    "Enmicado",
    "Numerado",
    "Plastificado",
    "Cosido francés",
    "Pan de oro/plata",
    "Corte en guillotina",
    "Serigrafía automatizada",
    "Engrapado automatizado",
    "Compaginado automatizado",
    "Contraplacado automatizado",
    "CTP – Grabado de placas digital",
    "Troquelado de hasta 120 x 140 cm",
    "Sectorizado/barniz selectivo/hot stamping",
    "Impresión de 70 x 50 cm a todo color por selección",
    "Conversión de bobinas de papel/cartón a la medida deseada"
  ];

  return (
    <section className="productos-servicios">
      <div className="container">
        {/* Título principal */}
        <div className="section-header">
          <h1 className="main-title">PRODUCTOS & SERVICIOS</h1>
          <div className="title-divider"></div>
        </div>

        {/* Sección de Impresiones */}
        <div className="service-section">
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title">IMPRESIONES</h2>
              <p className="service-description">
                Nuestros talleres están equipados para la elaboración de productos con:
              </p>
              <div className="service-features">
                <ul className="features-list">
                  {serviciosImpresion.map((servicio, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">•</span>
                      {servicio}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="service-image">
              <img 
                src="https://static.wixstatic.com/media/3379ea_9cab6ba6b0924e87bb8f05ce12527159~mv2.png/v1/fill/w_570,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Collage_Impresiones.png" 
                alt="Impresiones Antares" 
                className="responsive-image"
              />
            </div>
          </div>
        </div>

        {/* Sección de Gigantografías */}
        <div className="service-section alternate">
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title">GIGANTOGRAFÍAS</h2>
              <p className="service-description">
                Ofrecemos desde banners y viniles impresos hasta la elaboración de letreros luminosos.
              </p>
            </div>
            <div className="service-image">
              <img 
                src={giga} 
                alt="Ejemplos de gigantografías Antares" 
                className="responsive-image gigantografia-img"
              />
            </div>
          </div>
        </div>

        {/* Sección de Merchandising */}
        <div className="service-section">
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title">MERCHANDISING</h2>
              <p className="service-description">
                Te brindamos soluciones en publicidad y branding de calidad, contamos con una amplia cartera 
                de productos personalizables, los cuales se adaptan a todo tipo de presupuesto y eventos, 
                permitiéndote lograr la fidelización deseada en tus clientes.
              </p>
            </div>
            <div className="service-image">
              <img 
                src="https://static.wixstatic.com/media/3379ea_d1b032f3140d43448fe39fa26fc75b86~mv2.png/v1/fill/w_527,h_265,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Collage_Merch.png" 
                alt="Merchandising Antares" 
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;