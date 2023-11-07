import React from "react";

function Tarjeta({ datos }) {
  return (
    <div className="tarjeta">
      <h2>Tarjeta de Presentación</h2>
      <p>Nombre: {datos.nombre}</p>
      <p>Apellido: {datos.apellido}</p>
      <p>Correo: {datos.correo}</p>
    </div>
  );
}

export default Tarjeta;
