import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/nosotros.css";

function Nosotros() {
  return (
    <>
      <div
        className="container mt-5 container "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          paddingBottom: "50px",
        }}
      >
        {/* que Somos */}
        <div
          className="contenedorDerecha borderradius10px  QueSomos"
          style={{
            width: "1240px",
            height: "346px",
            alignItems: "center",
          }}
        >
          <div className="mi-caja-QueSomos"></div>
          <div
            className="textoPoppins"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "70%",
            }}
          >
            <span className="tituloPoppins" style={{ color: "#00418B" }}>
              ¿QUIÉNES SOMOS?
            </span>

            <p>
              Somos una empresa arequipeña que inició sus operaciones en 1998.
              Contamos con 3 locales entre nuestros talleres y tienda. Operamos
              con maquinaria de primer nivel en nuestros procesos y personal
              experto para lograr los más altos estándares de calidad del país
              en nuestros productos.
            </p>

            <p>
              En Antares nos empeñamos a través de nuestros servicios en aportar
              a nuestros clientes los medios necesarios para contribuir con el
              crecimiento y desarrollo de sus empresas, todo esto utilizando
              insumos eco-amigables, reciclando, reutilizando y operando de
              manera eficiente para así aportar a un mundo sostenible en el
              tiempo, estamos comprometidos con el cambio.
            </p>
          </div>
        </div>

        {/* ¿QUÉ HACEMOS? */}
        <div
          className=" contenedorIzquierda borderradius10px  QueSomos"
          style={{
            width: "1240px",
            height: "346px",
          }}
        >
          <div
            className="textoPoppins"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "70%",
            }}
          >
            <span className="tituloPoppins" style={{ color: "#00418B" }}>
              ¿QUÉ HACEMOS?
            </span>
            <p>
              Ofrecemos impresiones de todo tipo en papelería, además de
              merchandising, gigantografías y en los últimos años nos hemos
              especializado en la fabricación de envases ecológicos. Contamos
              con la experiencia necesaria para cumplir todas tus expectativas
              de producto.
            </p>

            <p>
              Atendemos a las instituciones y empresas más grandes del Perú, así
              como a pequeños microempresarios y emprendedores, siempre con la
              misma responsabilidad, puntualidad y calidad.
            </p>
          </div>

          <div className="mi-caja-QueHacemos"></div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {/* Misión */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card rounded-4 h-100 p-3 textoPoppins tarjeta-hover">
              <h3 className="text-center mb-3 tituloPoppins ">MISIÓN</h3>
              <p>
                En ANTARES IMPRESORES tenemos como misión ser una organización
                integral de artes gráficas, que satisfaga las necesidades de
                impresión de nuestros clientes con calidad, rapidez y
                eficiencia, apoyándonos en un capital humano excelente y
                tecnología de vanguardia.
              </p>
              <p>
                Asimismo, brindamos productos ecológicos que reemplazan al
                plástico, contribuyendo a un mundo más limpio.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card  rounded-4 h-100 p-3 textoPoppins tarjeta-hover">
              <h3 className="text-center mb-3 tituloPoppins">VISIÓN</h3>
              <p>
                Ser la empresa líder en artes gráficas en Arequipa y una
                referencia nacional por la excelencia en nuestros trabajos, el
                buen trato de nuestra gente, el cuidado del medio ambiente y la
                plena satisfacción de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card  rounded-4 h-100 p-3 textoPoppins tarjeta-hover">
              <h3 className="text-center mb-3 tituloPoppins">VALORES</h3>
              <p>
                En ANTARES IMPRESORES consideramos que el activo más importante
                y clave del éxito es nuestro equipo humano, altamente calificado
                tanto en el uso de la tecnología, como en el conocimiento
                funcional de las áreas del negocio en las que desarrollan su
                labor.
              </p>
              <ul className="mb-0">
                <li>Respeto</li>
                <li>Integridad</li>
                <li>Honestidad</li>
                <li>Compromiso</li>
                <li>Consciencia ecológica</li>
                <li>Responsabilidad social</li>
                <li>Trabajo por el Bien Común</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-center mb-4 tituloPoppins"
          style={{ color: "#00418B" }}
        >
          SOLUCIONES DE NEGOCIO
        </h2>
        <div className="container my-5 contenedorIzquierda padre">
          <div className="mi-caja-Soluciones"></div>
          <div style={{ width: "100%" }}>
            <div className="accordion" id="accordionSoluciones">
              {/* ASESORAMIENTO */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                  >
                    <div className="ASESORAMIENTO-PERSONALIZADO"></div>
                    <span className="ms-3 tituloPoppins">
                      ASESORAMIENTO PERSONALIZADO
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionSoluciones"
                >
                  <div className="accordion-body textoPoppins">
                    Entendemos las necesidad de nuestros clientes y si su
                    negocio necesita una constante reposición de stocks, en
                    Antares encontrarán la puntualidad y responsabilidad para no
                    desabastecer su negocio.
                  </div>
                </div>
              </div>

              {/* STOCKS */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                  >
                    <div className="STOCKS-DE-SEGURIDAD"></div>
                    <span className="ms-3 tituloPoppins">
                      STOCKS DE SEGURIDAD
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionSoluciones"
                >
                  <div className="accordion-body textoPoppins">
                    Entendemos la necesidad de reposición constante de stocks.
                    En Antares garantizamos puntualidad y responsabilidad para
                    no desabastecer su negocio.
                  </div>
                </div>
              </div>

              {/* PRECIOS COMPETITIVOS */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                  >
                    <div className="PRECIOS-COMPETITIVOS"></div>
                    <span className="ms-3 tituloPoppins">
                      PRECIOS COMPETITIVOS
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionSoluciones"
                >
                  <div className="accordion-body textoPoppins">
                    Nuestra capacidad instalada nos permite utilizar la
                    maquinaria ideal según el tipo requerimiento y así disminuir
                    costos en insumos, mermas y tiempos de trabajo. Además
                    contamos una convertidora de papel, la cual nos permite
                    cortar el papel a la medida deseada logrando incluso
                    desperdicios del 0%. De esta forma ofrecemos un proceso
                    completo.
                  </div>
                </div>
              </div>

              {/* FACILIDADES DE PAGO */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                  >
                    <div className="FACILIDADES-DE-PAGO"></div>
                    <span className="ms-3 tituloPoppins">
                      FACILIDADES DE PAGO
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionSoluciones"
                >
                  <div className="accordion-body textoPoppins">
                    Contamos con todas las plataformas (Yape/Plin,
                    transferencias, pagos con enlace, entre otros) para recibir
                    pagos entre diferentes entidades bancarias, y la posibilidad
                    de pagar con cualquier tipo de tarjeta (débito o crédito).
                    Asimismo, aceptamos pagos en soles y dólares. Si su empresa
                    trabaja a crédito, luego de establecer compromisos y plazos
                    estaremos gustosos de cerrar negociaciones.
                  </div>
                </div>
              </div>

              {/* ATENCIÓN NACIONAL */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                  >
                    <div className="ATENCIÓN-A-NIVEL-NACIONAL"></div>
                    <span className="ms-3 tituloPoppins">
                      ATENCIÓN A NIVEL NACIONAL
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionSoluciones"
                >
                  <div className="accordion-body textoPoppins">
                    Debido a nuestra experiencia en licitaciones públicas y
                    privadas contamos con la logística necesaria para hacer
                    llegar los productos a cualquier lugar del Perú, esto
                    gracias a nuestra cooperación estratégica con empresas de
                    transporte. De igual forma, contamos con transporte propio
                    (camión grúa y camionetas) para entregas y distribución
                    local.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
