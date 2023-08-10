import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ productos }) => {
  const { productId } = useParams();

  useEffect(() => {
    const product = productos.find((producto) => producto.id === parseInt(productId));
    setSelectProd(product);
  }, [productos, productId]);

  return (
    <div className="container">
    <div className="row">{setSelectProd(producto => (
    <div key={producto.id} className="col-md-6 mb-3">
        <div className="card border-light">
            <img className="card-img-top rounded mx-auto d-block" src={producto.foto} alt={producto.nombre} style={{ width: 300 }}/>
            <div className="card-body">
                <h3 className="card-title">{producto.nombre}</h3>
                <p className="card-text text-primary">{producto.edicion}</p>
                <p class="card-text">$ {producto.precio}</p>
                <p class="card-text">Color: {producto.color}</p>
                <p class="card-text">Talle: {producto.talle}</p>
            </div>
        </div>
    </div>
))}
</div>
</div>
);};
export default ItemDetailContainer;
