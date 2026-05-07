function Ficha({ nombre, edad, ciudad }) {
  return (
    <div>
      <img src="/mujer1.jpg" alt="foto"/>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad}</p>
    </div>
  );
}
export default Ficha;