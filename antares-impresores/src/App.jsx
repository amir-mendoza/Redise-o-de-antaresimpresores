import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encabezado from "./Paginas/Encabezado";
import Pie from "./Paginas/Pie";
import Nosotros from "./Paginas/Nosotros";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="El-Ancho-completo-100">

        <Encabezado />


        <main className="main-content" style={{backgroundColor: "#f0f0f0", padding: "20px"}}>
          <Routes>
            <Route path="/" element={<h1>Bienvenido</h1>} />
            <Route path="/Nosotros" element={<Nosotros />} />
          </Routes>
        </main>


        <Pie />
      </div>
    </Router>
  );
}

export default App;
