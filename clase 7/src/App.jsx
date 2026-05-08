/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [luz, setLuz] = useState(true)

  const handleClick = () => {
  }

  return (
    <>
      <h1>{contador}</h1>
      <button className='counter' onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button className='counter' onClick={() => setContador(contador - 1)}>Descontar</button>
      <button className='counter' onClick={() => setContador(contador + 5)}>Incrementar de 5 en 5</button>
      <h2> {luz ? "Luz Encendida" : "Luz Apagada"} </h2>
      <button className='counter' onClick={() => setLuz(!luz)} > {luz ? "Apagar Luz" : "Encender Luz"} </button>
    </>
  )
}

export default App */

import { useState } from 'react'
import Lista from './Componentes/Lista'
import './App.css'

function App() {

  return (
    <>
    <Lista></Lista>
    </>
  )
}

export default App