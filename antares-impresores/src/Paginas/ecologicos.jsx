import React from "react";
import "../css/ecologicos.css";

const Ecologicos = () => {
  return (
    <>
      <div className="container-1 intro-ecologico">
        <h2>Envases Ecológicos</h2>
        <p>
          Somos especialistas en la fabricación de envases de cartón, contamos
          con una convertidora de papel (la cual convierte bobinas de cartón a
          cualquier medida deseada logrando mermas de hasta el 0%), bobinas de
          cartón dúplex calibre 12, 14, 16, 18, 20, 28 y single face, 2
          contraplacadoras industriales automatizadas, 5 troqueladoras y cientos
          de troqueles de cajas.
        </p>
      </div>

      <div className="container-2 catalogo-ecologico">
        <h3>Catálogo de Envases</h3>
        <p>
          El modelo de negocio que diseñamos nos permite ofrecerte empaques
          personalizados desde 01 unidad. Además, tenemos máquinas instaladas
          para la producción industrial e impresión de bolsas de papel y platos
          de cartón.
        </p>

        <div className="pdf-links">
          <a
            href="https://www.antaresimpresores.com/_files/ugd/3379ea_7ae2032d62d0454ba6d487a593d1c6f8.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pdf"
          >
            Catálogo productos para Pastelerías
          </a>

          <a
            href="https://www.antaresimpresores.com/_files/ugd/3379ea_5a9e0d00a1bf45ba8f58395940008127.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pdf"
          >
            Catálogo Producto para Delivery
          </a>

          <a
            href="https://www.antaresimpresores.com/_files/ugd/3379ea_40525a711ba0457590c6c70f77b1e020.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pdf"
          >
            Catálogo General
          </a>
        </div>
      </div>

      <div className="container-3 valores-ecologicos">
        <p>
          Todo esto nos permite lograr productos de alta calidad al menor precio
          del mercado.
          <strong>
            {" "}
            Antares es el socio estratégico ideal que impulsará tu negocio.
          </strong>
        </p>

        <img
          className="imagen bottom"
          src="https://static.wixstatic.com/media/3379ea_58346f3d21db4e5499632483543a81b6~mv2.png/v1/fill/w_702,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/COLLAGE-03%20todos%20los%20envases.png"
          alt="Collage envases"
        />
      </div>
    </>
  );
};

export default Ecologicos;
