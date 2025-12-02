import React from "react";
import "../css/ecologicos.css";

function Ecologicos() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>Diseño responsivo con ancho máximo 1440px</h1>
            <p>
              La página se adapta a cualquier dispositivo, limitando el
              contenido a un contenedor centrado con ancho máximo de 1440px.
            </p>
            <div className="actions">
              <button className="btn btn-primary">Comenzar</button>
              <button className="btn">Ver demo</button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="chip c1">Rendimiento</div>
            <div className="chip c2">Accesible</div>
            <div className="chip c3">UI moderna</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Sección de tarjetas</h2>
        <div className="grid">
          <article className="card">
            <h3>Layout fluido</h3>
            <p>Usa grid y flex para adaptarse sin romper en pantallas pequeñas.</p>
          </article>
          <article className="card">
            <h3>Tipografía clara</h3>
            <p>Escalas con clamp para mantener legibilidad en todo ancho.</p>
          </article>
          <article className="card">
            <h3>Estética cuidada</h3>
            <p>Gradientes sutiles, sombras y bordes para jerarquía visual.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Ecologicos;
