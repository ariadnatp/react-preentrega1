import './App.css'
import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import flag from "./assets/flag.png"
import {Producto} from "./routes/Catalogo.jsx"
import { NavBar } from './components/navbar.jsx'
import { ItemListContainer } from './components/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className='estilo'>
        <img src={flag} alt="logo" />
      </div>
      <ItemListContainer  greeting="KIRIBATI"/>
      <Routes>
        <Route path="/Inicio" element={<ItemListContainer/>} />
        <Route path="/Catalogo" element={<Producto/>} />
        <Route path="/Edicion Space" element={<f/>}/>
        {/* ruta dinamica que muestra mi prod indv */}
        <Route path="/productos/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
