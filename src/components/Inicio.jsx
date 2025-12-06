import fondo from "../assets/images/fondo-mar.jpg";

function Inicio() {
  return (
    <>
      <h1 className="h1-inicio">Natural Care</h1>
      <p className="p-inicio">Productos que Acarician</p>
      <img className="imagen-inicio" src={fondo} alt="" />{" "}
    </>
  );
}
export default Inicio;
