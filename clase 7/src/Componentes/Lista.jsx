import React, { useState } from 'react'

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
  )}
