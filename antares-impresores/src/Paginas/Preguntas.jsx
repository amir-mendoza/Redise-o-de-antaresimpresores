import "../css/Preguntas.css";

function Preguntas() {
  const faqs = [
    {
      id: 1,
      pregunta: "¿Cómo puedo solicitar una cotización?",
      respuesta:
        "Contamos con un equipo comercial listo para asesorarlo, si su consulta refiere a empaques, bolsas, promociones etc., escribir al +51 997 687 679, si su consulta refiere a impresiones y consultas en general, comunicarse al +51 959045438, si su consulta involucra producciones grandes, urgentes o especiales, comunicarse al +51 959 930 447.",
      icono: "bi-envelope-fill"
    },
    {
      id: 2,
      pregunta: "¿Qué información es indispensable para solicitar una cotización?",
      respuesta:
        "Para poder realizar una cotización es indispensable que nos especifique estos 4 aspectos: 1. Cantidad requerida, 2. Tamaño requerido, 3. Material requerido, 4. Acabados requeridos",
      icono: "bi-clipboard-check-fill"
    },
    {
      id: 3,
      pregunta: "¿Cuál es la cantidad mínima para solicitar una producción?",
      respuesta:
        "No existen cantidades mínimas para una producción, pero recomendamos solicitar la mayor cantidad de unidades posibles para disminuir los precios unitarios, sin embargo, presentamos algunas referencias: Impresiones: 100 unidades, Envases: Atendemos desde 01 unidad sin impresión en modelos estándar, Gigantografías: Atendemos desde 01 unidad, Merchandising: Atendemos desde 100 unidades",
      icono: "bi-box-seam-fill"
    },
    {
      id: 4,
      pregunta: "¿Qué medios de pago aceptan?",
      respuesta:
        "Contamos con todas las plataformas (Yape/Plin, transferencias, pagos con enlace, entre otros) para recibir pagos entre diferentes entidades bancarias, y la posibilidad de pagar con cualquier tipo de tarjeta (débito o crédito). Asimismo, aceptamos pagos en soles y dólares. Si su empresa trabaja a crédito, luego de establecer compromisos y plazos estaremos gustosos de cerrar negociaciones.",
      icono: "bi-credit-card-fill"
    },
    {
      id: 5,
      pregunta: "¿Puedo diseñar mi propio empaque?",
      respuesta:
        "Diseñar un empaque nuevo es costoso y lleva tiempo, para esto se debe desarrollar un troquel nuevo y hacer pruebas con el mismo, es por ello que recomendamos el uso nuestros más de 100 modelos estándar. Sin embargo, si se requiere de una producción larga, es posible que el costo de desarrollar un nuevo empaque resulte rentable para el usuario.",
      icono: "bi-box-fill"
    },
    {
      id: 6,
      pregunta: "¿Tengo que enviar los artes del trabajo o ustedes los trabajan?",
      respuesta:
        "Se puede trabajar de las dos formas, lo ideal es que cada cliente nos envíe sus diseños en un programa editable (Corel, Ilustrator o Photoshop) para agilizar el proceso de impresión. Sin embargo, si se carecen de estos artes, nuestro equipo de diseño estará gustoso de apoyarlos.",
      icono: "bi-palette-fill"
    },
    {
      id: 7,
      pregunta: "¿Antes de imprimir debo de dar un visto bueno?",
      respuesta:
        "El Visto Bueno (V°B°) es fundamental para proceder con la impresión, sin este no será posible pasar de la etapa de preprensa a prensa.",
      icono: "bi-check-circle-fill"
    },
    {
      id: 8,
      pregunta: "¿Pueden hacerme una prueba de color para saber cómo quedará mi trabajo?",
      respuesta:
        "Las pruebas de color son igual de costosas que el mismo trabajo en sí, ya que para esto los artes deben pasar a placas CTP, para luego armarlas en la máquina y prepararla para impresión, lo cual lleva tiempo tal y cual como preparar el mismo trabajo en sí. Esperar a tener un V°B° por parte del cliente significaría tener la máquina armada y parada por horas, lo cual retrasaría nuestra producción y tiempos de entrega con otros clientes.",
      icono: "bi-eyedropper"
    },
    {
      id: 9,
      pregunta: "¿El color de impresión será idéntico a lo mostrado en pantalla?",
      respuesta:
        "Los equipos electrónicos utilizan el formato RGB para exhibir sus colores, las máquinas de impresión utilizan el formato CMYK y por más que los artes se diseñen en este mismo formato (CMYK) el resultado en papel jamás será idéntico, ya que estaríamos comparando pixeles vs tintas. Incluso entre pantallas electrónicas los varían dependiendo del fabricante.",
      icono: "bi-display-fill"
    },
    {
      id: 10,
      pregunta: "¿Cómo podría mejorar la aproximación del color que deseo?",
      respuesta:
        "Cuando se requieren colores Institucionales o Corporativos, lo ideal es que el cliente nos proporcione o defina PANTONES (no más de 4 por trabajo), ya que estos colores son estándar a nivel mundial y nos indican en qué proporción mezclar las tintas para llegar a un color aproximado de más del 90%.",
      icono: "bi-paint-bucket"
    },
    {
      id: 11,
      pregunta: "¿Cuáles son sus tiempos de entrega?",
      respuesta:
        "Los tiempos de entrega varían dependiendo de las características de la producción y el momento en que lo solicite. Su asesor le indicará los tiempos de entrega actualizados en taller antes de realizar el contrato. Los tiempos de entrega cuentan DESDE el momento en que el cliente le da el Visto Bueno al trabajo.",
      icono: "bi-clock-fill"
    },
    {
      id: 12,
      pregunta: "¿Puedo pedir un adelanto de producción o hacer un pedido parcial para aprovechar los precios?",
      respuesta:
        "Una vez que se inicia la producción de su requerimiento este no se detiene hasta ser finalizado, todo esto para aprovechar la optimización de las máquinas y los insumos, es por ello que NO se pueden hacer pedidos parciales, ni tampoco realizar adelantos de producción, a menos que sea una producción muy larga y esta tenga urgencia.",
      icono: "bi-truck"
    },
    {
      id: 13,
      pregunta: "¿Puedo hacer algún cambio en el pedido una vez acordado el contrato de trabajo?",
      respuesta:
        "Todo cambio en los ARTES será posible si este aún no ha sido enviado a placas CTP, si la producción ya pasó esta etapa cualquier cambio en los artes tendrá un costo adicional. No es posible cambiar cantidades, tamaños, materiales o acabados una vez acordado el contrato de producción.",
      icono: "bi-pencil-square"
    },
    {
      id: 14,
      pregunta: "¿Hay alguna solución si mi trabajo presenta algún defecto por error de revisión una vez finalizada la producción?",
      respuesta:
        "Una vez impreso el trabajo, cualquiera que fuera el error o cambio en este, será materialmente imposible de corregir, es por ello que el cliente tiene la responsabilidad de revisar cuidadosamente los artes antes de dar el Visto Bueno. La solución más próxima sería realizar una nueva producción.",
      icono: "bi-exclamation-triangle-fill"
    },
    {
      id: 15,
      pregunta: "¿Debo de recoger el trabajo o ustedes lo entregan?",
      respuesta:
        "Recomendamos que cada cliente pueda recoger su trabajo, sin embargo podemos hacer repartos locales si el destino se encuentra en ruta o si previamente se acordó que la producción será distribuida según requerimiento. El uso de aplicativos de terceros o taxis no es recomendado por nuestra empresa.",
      icono: "bi-geo-alt-fill"
    },
    {
      id: 16,
      pregunta: "¿Qué tipos de impresión ofrecen y cuál es la mejor?",
      respuesta:
        "En Antares trabajamos con impresión láser, offset, serigrafía y gigantografía. No existen mejores o peores impresiones entre estas técnicas, sino cuál se acomoda mejor a su tipo de producto y presupuesto.",
      icono: "bi-printer-fill"
    }
  ];

  return (
    <section className="preguntas-section py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#1973B0" }}>
            PREGUNTAS FRECUENTES
          </h2>
          <p className="lead text-secondary">
            Resolvemos tus dudas sobre nuestros servicios en ANTARES IMPRESORES
          </p>
        </div>

        {/* Acordion */}
        <div className="accordion faq-accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <div key={faq.id} className="accordion-item faq-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${faq.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${faq.id}`}
                >
                  <i className={`${faq.icono} faq-icon me-3`}></i>
                  <span className="faq-question">{faq.pregunta}</span>
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{faq.respuesta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preguntas;