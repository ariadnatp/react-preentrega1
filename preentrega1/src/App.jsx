import './App.css'
import './components/navbar.jsx'
import flag from "./assets/flag.png"

import { NavBar } from './components/navbar.jsx'
import { CardWidget } from './components/CardWidget'
function App() {
  return (
    <>
      <NavBar/>
      <div className='estilo'>
        <img src={flag} alt="logo" />
        <h1>KIRIBATI</h1>
        <h2>buzos con estilo</h2>
      </div>
      <CardWidget/>
    </>
  )
}
export default App
