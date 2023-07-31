import './App.css'
import './components/navbar.jsx'
import './components/ItemListConteiner.jsx'
import flag from "./assets/flag.png"

import { NavBar } from './components/navbar.jsx'
import { ItemListContainer } from './components/ItemListConteiner'
function App() {
  return (
    <>
      <NavBar/>
      <div className='estilo'>
        <img src={flag} alt="logo" />
      </div>
      <ItemListContainer  greeting="KIRIBATI"/>
    </>
  )
}
export default App
