import './App.css'
import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import flag from "./assets/flag.png"
import {Producto} from "./routes/Catalogo.jsx"
import { NavBar } from './components/navbar.jsx'
import { ItemListContainer } from './components/ItemListConteiner'
import ItemDetailContainer from './routes/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className='estilo'>
        <img src={flag} alt="logo" />
        <h1>KIRIBATI</h1>
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/Catalogo" element={<Producto/>} />
        <Route path="/Edicion Space" element={<f/>}/>
        <Route path="/Producto/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
