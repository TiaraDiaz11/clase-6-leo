/* import { useState, useEffect } from "react"
import "./App.css"

function App() {

  const API = "https://jsonplaceholder.typicode.com/todos/"
  const [data, setData] = useState([])
  const [loadData, setLoadData] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      const datos = await fetch(API)
      const res = await datos.json()
      setData(res)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setLoadData(!loadData)}>Cargar data</button>
      {loadData ? data.map(user => (<p key={user.id}>{user.title}</p>)) : <h1>Esperando...</h1>}
    </>
  )}

export default App */

import { useEffect, useState } from "react"
import Titulo from "./Componentes/Titulo"
import Buscador from "./Componentes/Buscador"
import FilterBoton from "./Componentes/FilterBoton"
import Perfume from "./Componentes/Perfume"
import "./App.css"

function App() {

  const [perfumes, setPerfumes] = useState([])
  const [search, setSearch] = useState("")
  const [filtro, setFiltro] = useState("Todos")
  const [loading, setLoading] = useState(true)
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {

    const fetchPerfumes = async () => {
      const res = await fetch("https://dummyjson.com/products?")
      const data = await res.json()
      const generos = ["Hombre", "Mujer", "Unisex"]
      const perfumesFiltradosApi = data.products.filter((perfume) => perfume.category === "fragrances")
      const perfumesNuevo = perfumesFiltradosApi.map((perfume, index) => {
        
        return {...perfume, gender: generos[index % 3]}})
        setPerfumes(perfumesNuevo)
        setLoading(false)}
        fetchPerfumes()
  }, [])
  
  const handleSearch = (e) => {setSearch(e.target.value)}
  const handleFilter = (gender) => {setFiltro(gender)}
  const agregarFavorito = (perfume) => {

    if (!favoritos.includes(perfume)) {setFavoritos([...favoritos, perfume])
  } else {

    const eliminarFavorito = favoritos.filter(fav => perfume.id !== fav.id)
    setFavoritos(eliminarFavorito)}}
    const productosFiltrados = perfumes.filter((perfume) => {

    if (filtro === "Todos") {
      return perfume.title.toLowerCase().includes(search.toLowerCase())}
      return (perfume.gender === filtro && perfume.title.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div>
      <Titulo/>
      <Buscador search={search} handleSearch={handleSearch}/>
      <FilterBoton handleFilter={handleFilter}/>
      <div className="cards-container">
        {loading ? <h2 className="loading">Cargando productos...</h2>
        :productosFiltrados.slice(0, 5).map((perfume) => (
        <Perfume key={perfume.id} perfume={perfume}/>
        ))}
      </div>
    </div>
    )}

export default App