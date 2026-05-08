# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

primero el get y luego el set
ej:
const usuario, setUsuario

dos botones, uno para sumar y otro para restar

un boton como si fuera un interruptor que si esta la luz encendida que se apague y si esta apagada que se encienda

una lista con buscador y boton

PRIMER TAREA:
import { useState } from 'react'
import Lista from './Componentes/Lista'
import './App.css' function App() 
const [contador, setContador] = useState(0)
const [luz, setLuz] = useState(true)
return ( 
    <>
     <Lista></Lista>
     {<h1>{contador}</h1>
     <button className='counter' onClick={() => setContador(contador + 1)}>Incrementar</button>
     <button className='counter' onClick={() => setContador(contador - 1)}>Decrementar</button>
     <button className='counter' onClick={() => setContador(contador + 5)}>+5</button>
     <h2> {luz ? "Luz encendida" : "Luz apagada"} </h2>
     <button onClick={() => setLuz(!luz)>Interruptor</button>
      </> )
    export default App

import React, {useState} from 'react' export default function App() { const {tasks, setTasks} = useState([]) const {task, setTask} =useState("") const handleAgregar = () => { setTasks([...tasks, {id: Date.now(),tarea: task}]) console.log(tasks) } const handleChange = (e) => { setTask(e.target.value) } return ( <div> <input type="text" onChange= {e => handleChange(e)} /> <button onClick={handleAgregar}>Agregar</button> { tasks.map(task => <p key={(task.id)>(task.tarea)}></p>) } </div> ) }


tarea: CSS dinamico, que pueda tachar lo que busque con una cruz, 