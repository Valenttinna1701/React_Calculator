import React, { useState } from 'react';
import './App.css';

function App() {
  const [vista, setVista] = useState("0");
  const [historial, setHistorial] = useState([]); 
  const manejarClick = (boton) => {
    if (boton === "C") {
      setVista("0");
    } else if (boton === "←") {
      setVista(vista.slice(0, -1) || "0");
    } else if (boton === "=") {
      calcularResultado();
    } else {
      setVista(vista === "0" ? boton : vista + boton);
    }
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(vista.replace(/[^-()\d/*+.]/g, ''));
      setHistorial([...historial, `${vista} = ${resultado}`]); 
    } catch {
      setVista("¡Error!");
    }
  };

  return (
    <div className="Calculadora">
      <div className="Vista">{vista}</div>
      <button id="limpiar" className="boton" onClick={() => manejarClick("C")}><i>C</i></button>
      <button id="borrar" className="boton" onClick={() => manejarClick("←")}><i className="fas fa-backspace"></i></button>
      <button className="boton" onClick={() => manejarClick("/")}><i className="fas fa-divide"></i></button>
      <button className="boton" onClick={() => manejarClick("*")}>x</button>
      <button className="boton" onClick={() => manejarClick("7")}>7</button>
      <button className="boton" onClick={() => manejarClick("8")}>8</button>
      <button className="boton" onClick={() => manejarClick("9")}>9</button>
      <button className="boton" onClick={() => manejarClick("-")}><i className="fas fa-minus"></i></button>
      <button className="boton" onClick={() => manejarClick("4")}>4</button>
      <button className="boton" onClick={() => manejarClick("5")}>5</button>
      <button className="boton" onClick={() => manejarClick("6")}>6</button>
      <button className="boton" onClick={() => manejarClick("+")}><i className="fas fa-plus"></i></button>
      <button className="boton" onClick={() => manejarClick("1")}>1</button>
      <button className="boton" onClick={() => manejarClick("2")}>2</button>
      <button className="boton" onClick={() => manejarClick("3")}>3</button>
      <button id="igual" className="boton" onClick={() => manejarClick("=")}><i className="fas fa-equals"></i></button>
      <button id="cero" className="boton" onClick={() => manejarClick("0")}>0</button>
      <button className="boton" onClick={() => manejarClick(".")}><i className="fas fa-circle"></i></button>
      
      
      <div className="Historial">
        <h3>Historial</h3>
        <ul>
          {historial.map((operacion, index) => (
            <li key={index}>{operacion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
