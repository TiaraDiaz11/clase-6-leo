function FilterBoton({handleFilter}) {

  return (

    <div className="filters">
      <button onClick={() => handleFilter("Todos")}>Todos</button>
      <button onClick={() => handleFilter("Hombre")}>Hombre</button>
      <button onClick={() => handleFilter("Mujer")}>Mujer</button>
      <button onClick={() => handleFilter("Unisex")}>Unisex</button>
    </div>
    
  )}

export default FilterBoton