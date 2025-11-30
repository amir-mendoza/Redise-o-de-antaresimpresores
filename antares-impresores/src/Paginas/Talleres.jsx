import "../css/Talleres.css";

function Talleres() {
  const talleres = [
    {
      id: 1,
      titulo: "Calle 7 de Junio 204 - Arequipa",
      descripcion:
        "Este local ubicado en el céntrico barrio de IV Centenario, tiene proyección para operar en 4 niveles, fue construido en el año 2016 y cuenta con todas las medidas necesarias de seguridad para llevar acabo nuestras operaciones con total seguridad. El edificio tiene implementada una sub-estación eléctrica, la cual permite que nuestra maquinaria opere al máximo de su capacidad y un montacarga que nos facilita el transporte de material de manera rápida y eficiente. En estas instalaciones funcionan los Departamentos de Administración, Logística, Producción y Contabilidad.",
      imagen: "/Talleres/taller1.png",
      googleMaps: "https://maps.google.com/?q=Calle+7+de+Junio+204+Arequipa",
      icono: "bi-building"
    },
    {
      id: 2,
      titulo: "Calle Paucapata 406 - Arequipa",
      descripcion:
        "En este local ubicado en la calle Paucarpata en el centro de la ciudad, se ubica nuestra tienda donde brindamos atención al público en general, además de la exhibición de nuestros artículos publicitarios y envases ecológicos de cartón. Asimismo, se ubica el taller para la producción de lo inherente a publicidad, como serigrafía, tampografía, acabados de nuestros productos, entre otros.",
      imagen: "/Talleres/taller2.png",
      googleMaps: "https://maps.google.com/?q=Calle+Paucapata+406+Arequipa",
      icono: "bi-shop"
    },
    {
      id: 3,
      titulo: "Parque Industrial - Arequipa",
      descripcion:
        "Este taller es utilizado para la conversión y empaquetado de cartón. Además, es el centro de operaciones para nuestra máquina de producción de bolsas.",
      imagen: "/Talleres/taller3.png",
      googleMaps: "https://maps.google.com/?q=Parque+Industrial+Arequipa",
      icono: "bi-box-seam"
    }
  ];

  const handleUbicacion = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="talleres-section py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: "#1973B0" }}
          >
            TALLERES
          </h2>
          <p className="lead text-secondary">
            En ANTARES IMPRESORES contamos con 3 talleres.
          </p>
        </div>

        {/* Talleres Items*/}
        {talleres.map((taller, index) => (
          <div key={taller.id} className="taller-item mb-5">
            {index % 2 === 0 ? (
              <div className="row g-4 align-items-center">
                {/* Imagen */}
                <div className="col-lg-4">
                  <div
                    className="taller-imagen-wrapper"
                    onClick={() => handleUbicacion(taller.googleMaps)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="taller-header text-white p-3">
                      <i className={`${taller.icono} me-2`}></i>
                      <strong>{taller.titulo}</strong>
                    </div>
                    <img
                      src={taller.imagen}
                      alt={taller.titulo}
                      className="img-fluid taller-imagen"
                    />
                  </div>
                </div>
                {/* Texto */}
                <div className="col-lg-8">
                  <div className="taller-content">
                    <p className="text-secondary text-justify mb-4">
                      {taller.descripcion}
                    </p>
                    <button
                      className="btn-custom"
                      onClick={() => handleUbicacion(taller.googleMaps)}
                    >
                      <i className="bi bi-map me-2"></i>
                      Ver Ubicación en Google Maps
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row g-4 align-items-center">
                {/* Texto */}
                <div className="col-lg-8 order-lg-1">
                  <div className="taller-content text-lg-end">
                    <p className="text-secondary text-justify mb-4">
                      {taller.descripcion}
                    </p>
                    <button
                      className="btn-custom"
                      onClick={() => handleUbicacion(taller.googleMaps)}
                    >
                      <i className="bi bi-map me-2"></i>
                      Ver Ubicación en Google Maps
                    </button>
                  </div>
                </div>

                {/* Imagen */}
                <div className="col-lg-4 order-lg-2">
                  <div
                    className="taller-imagen-wrapper"
                    onClick={() => handleUbicacion(taller.googleMaps)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="taller-header text-white p-3">
                      <i className={`${taller.icono} me-2`}></i>
                      <strong>{taller.titulo}</strong>
                    </div>
                    <img
                      src={taller.imagen}
                      alt={taller.titulo}
                      className="img-fluid taller-imagen"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Separador */}
            {index < talleres.length - 1 && (
              <hr className="my-5 separator-line" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Talleres;