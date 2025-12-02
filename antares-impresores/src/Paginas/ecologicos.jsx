import React from "react";
import "../css/Ecologicos.css"; 

const Ecologicos = () => {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark" aria-hidden="true">A</div>
            <div className="brand-text">
              <strong>Grupo Empresarial</strong>
              <span>Antares Impresores</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#productos" className="nav-link">Productos &amp; Servicios</a>
            <a href="#faq" className="nav-link">Preguntas frecuentes</a>
            <div className="social">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="title">Envases ecológicos</h1>
            <p className="lead">
              Especialistas en fabricación de envases de cartón: convertidor de papel propio,
              cartones de calibres 12, 14, 16, 18, 20 y 28, cartón corrugado single face,
              laminadoras industriales automatizadas, 5 troqueladoras y cientos de troqueles de cajas.
            </p>
            <p className="desc">
              Ofrecemos envases personalizados desde 1 unidad y producción industrial de bolsas de papel y placas de cartón.
              Alta calidad al menor precio del mercado. Somos tu aliado estratégico para crecer.
            </p>

            <div className="catalogos">
              <a className="btn btn-primary" href="https://www.antaresimpresores.com/_files/ugd/3379ea_7ae2032d62d0454ba6d487a593d1c6f8.pdf" download>
                <span className="btn-icon">📄</span> Catálogo productos para pastelerías
              </a>
              <a className="btn btn-primary" href="https://www.antaresimpresores.com/_files/ugd/3379ea_5a9e0d00a1bf45ba8f58395940008127.pdf" download>
                <span className="btn-icon">📄</span> Catálogo productos para delivery
              </a>
              <a className="btn btn-outline" href="https://www.antaresimpresores.com/_files/ugd/3379ea_40525a711ba0457590c6c70f77b1e020.pdf" download>
                <span className="btn-icon">📄</span> Catálogo general
              </a>
            </div>
          </div>

          <div className="hero-media">
            <div className="gallery">
              <figure className="card">
                <img src="img/envase-1.jpg" alt="Catálago Productos para Pastelerías" loading="lazy" />
                <figcaption>Caja para pastelería</figcaption>
              </figure>
              <figure className="card">
                <img src="img/envase-2.jpg" alt="Catálago Productos para delivery" loading="lazy" />
                <figcaption>Contenedor para delivery</figcaption>
              </figure>
              <figure className="card">
                <img src="img/envase-3.jpg" alt="Catálago general" loading="lazy" />
                <figcaption>Bolsa de papel</figcaption>
              </figure>
              <figure className="card">
                <img src="img/envase-4.jpg" alt="Placa de cartón y packaging personalizado" loading="lazy" />
                <figcaption>Packaging personalizado</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="features">
        <div className="container">
          <h2 className="section-title">Productos &amp; servicios</h2>
          <div className="features-grid">
            <article className="feature">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Envases de cartón</h3>
              <p className="feature-desc">Cajas, contenedores y tarjetas en múltiples calibres y terminaciones.</p>
            </article>
            <article className="feature">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Bolsas de papel</h3>
              <p className="feature-desc">Fabricación industrial con refuerzos y opciones de personalización.</p>
            </article>
            <article className="feature">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Troquelado y laminado</h3>
              <p className="feature-desc">Proceso automatizado, 5 troqueladoras y amplia biblioteca de troqueles.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>¿Puedo pedir envases personalizados desde 1 unidad?</summary>
              <p>Sí, trabajamos pedidos personalizados desde una sola unidad y también grandes volúmenes.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué tiempos de producción manejan?</summary>
              <p>Depende del tipo de producto y volumen. Te daremos un cronograma estimado al confirmar tu pedido.</p>
            </details>
            <details className="faq-item">
              <summary>¿Realizan envíos a nivel nacional?</summary>
              <p>Sí, coordinamos envíos a todo el país con operadores logísticos confiables.</p>
            </details>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="contact">
            <h3 className="footer-title">Contáctanos</h3>
            <ul className="contact-list">
              <li><span className="contact-icon">📞</span> +51 997 687 679</li>
              <li><span className="contact-icon">📞</span> +51 959 830 447</li>
              <li><span className="contact-icon">📞</span> +51 959 045 318</li>
            </ul>
          </div>
          <div className="address">
            <h3 className="footer-title">Dirección</h3>
            <p>Calle Pucarpata 406, Arequipa 04001</p>
            <p className="copy">© 2025 Antares Impresores</p>
          </div>
          <div className="footer-links">
            <a href="#productos" className="footer-link">Productos &amp; Servicios</a>
            <a href="#faq" className="footer-link">Preguntas frecuentes</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Ecologicos;
