import React, { useEffect, useState } from 'react';
// import {BrowserRouter, Link} from "react-router-dom";

export const Producto = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error fetching productos:', error));
  }, []);

  return (
    <div>
      {productos.map((producto) => {
        return (
          <div className="card col-md-4 center card border-light mb-3" key={producto.id}>
            <img
              className="card-img-top rounded mx-auto d-block"
              src={producto.foto}
              alt={producto.nombre}
              style={{ width: 300 }}
            />
            <div className="card-body">
            <h3 class="card-title">{producto.nombre}</h3>
            <p class="card-text text-primary">{producto.edicion}</p>
            <p class="card-text">$ {producto.precio}</p>
            <p class="card-text">Color: {producto.color}</p>
            <p class="card-text">Talle: {producto.talle}</p>
          <button id="${producto.id}" class="btn btn-primary compra">Comprar</button>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Producto;