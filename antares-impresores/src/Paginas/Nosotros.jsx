import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/nosotros.css";

function Nosotros() {
  return (
    <div
      className="container mt-5 container "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column" /* Fila (uno al costado del otro) */,
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
          style={{ display: "flex", flexDirection: "column", gap: "15px" ,width: "70%" }}
        >
          <span className="tituloPoppins" style={{ color: "#00418B" }}>
            ¿QUIÉNES SOMOS?
          </span>

          <p>
            Somos una empresa arequipeña que inició sus operaciones en 1998.
            Contamos con 3 locales entre nuestros talleres y tienda. Operamos
            con maquinaria de primer nivel en nuestros procesos y personal
            experto para lograr los más altos estándares de calidad del país en
            nuestros productos.
          </p>

          <p>
            En Antares nos empeñamos a través de nuestros servicios en aportar a
            nuestros clientes los medios necesarios para contribuir con el
            crecimiento y desarrollo de sus empresas, todo esto utilizando
            insumos eco-amigables, reciclando, reutilizando y operando de manera
            eficiente para así aportar a un mundo sostenible en el tiempo,
            estamos comprometidos con el cambio.
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
          style={{ display: "flex", flexDirection: "column", gap: "15px" ,width: "70%" }}
        >
          <span className="tituloPoppins" style={{ color: "#00418B" }}>
            ¿QUÉ HACEMOS?
          </span>
          <p>
            Ofrecemos impresiones de todo tipo en papelería, además de
            merchandising, gigantografías y en los últimos años nos hemos
            especializado en la fabricación de envases ecológicos. Contamos con
            la experiencia necesaria para cumplir todas tus expectativas de
            producto.
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
  );
}

export default Nosotros;
