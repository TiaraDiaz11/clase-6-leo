function Perfume({perfume}) {

  const {title, brand, thumbnail, price, gender} = perfume

  return (
    <div className="card">
      <img src={thumbnail} alt={title}/>
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <p>{gender}</p>
      <span>${price}</span>
    </div>
  )}

export default Perfume