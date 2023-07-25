import React, { useState } from 'react';
import './CardWidget.css';
let contadorInicial = 0;
export const CardWidget = () => {
  const [contador, setContador] = useState(contadorInicial);
  const handleIncrementorContador = () => {
    setContador(contador + 1);
  };
  const borrar = () => {
    contadorInicial ("");
  }
  return (
    <div className='flexContador'>
      <button onClick={handleIncrementorContador} className="btn btn-secondary btnSumar">SUMAR</button>
      <p>Contador = {contador}</p>
    </div>
  );
};
