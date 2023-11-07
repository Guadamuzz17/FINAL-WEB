import React, { useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tarjeta from "./Tarjeta";
import "./App.css";


function App() {
  const [datos, setDatos] = useState(null);

  const handleFormSubmit = (nuevosDatos) => {
    setDatos(nuevosDatos);
  };

  return (
    <div className="App">
      <h1>Crea tu propia tarjeta de presentacion</h1>
      <Formulario onFormSubmit={handleFormSubmit} />
      {datos && <Tarjeta datos={datos} />}
    </div>
  );
}

export default App;
