import React from 'react'
import ReactDOM from 'react-dom/client'
import Producto from "./routes/Catalogo.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Catalogo" element={<Producto/>} />
        {/* <Route path="/productos/:productId" element={<Product />} />
        <Route path="/categorias/:categoriaId" element={<Categoria />} />
        <Route exact path="/carrito" element={<Cart />} />
        <Route exact path="/item" element={<Item />} /> */}
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
)
