/*import React, { useState } from 'react'

export default function Lista() {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const handleAgregar = () => {
    setTasks([...tasks, { id: Date.now(), tarea: task }])}

  const handleChange = (e) => {
    setTask(e.target.value)}

  return (
    <div>
      <input type="text" onChange={e => handleChange(e)}/>
      <button onClick={handleAgregar}>Agregar</button>{tasks.map(task => ( <p key={task.id}>{task.tarea}</p>))}  
    </div>
  )}*/


import React, { useState } from 'react'
import './Lista.css'

export default function Lista() { //datos dinamicos, actualiza
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const handleAgregar = () => { //maneja
    if (task.trim() === "") return

    setTasks([...tasks, {id: Date.now(), tarea: task, completada: false}])
    setTask("")
  }

  const handleChange = (e) => {setTask(e.target.value)} //cambios
  const eliminarTarea = (id) => {setTasks(tasks.filter(task => task.id !== id))}
  const completarTarea = (id) => {setTasks(tasks.map(task => task.id === id ? { ...task, completada: !task.completada }: task))}

  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <div className="inputContainer">
        <input type="text" value={task} onChange={handleChange} placeholder="Escribí una tarea"/>
        <button onClick={handleAgregar}>Agregar</button>
      </div>

      {tasks.map(task => (
          <div className="tarea" key={task.id}>
            <p className={task.completada ? "tachada" : ""}>{task.tarea}</p>
            <div>
              <button className="check" onClick={() => completarTarea(task.id)}>✔</button>
              <button className="delete" onClick={() => eliminarTarea(task.id)}>❌</button>
            </div>
          </div>
        ))}
    </div>
  )}