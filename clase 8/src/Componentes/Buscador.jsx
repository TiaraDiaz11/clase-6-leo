function Buscador({search, handleSearch}) {

  return (
    <div className="search-container">
      <input type="text" placeholder="Buscar perfume..." value={search} onChange={handleSearch}/>
    </div>
    )}

export default Buscador