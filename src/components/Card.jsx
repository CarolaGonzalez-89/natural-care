import { Link } from "react-router-dom";


function Card(product) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={product.image} alt="imagen producto" />
        <h3 className="card-title"> {product.name}</h3>
        <p className="card-price">Precio: ${product.price} </p>
        <Link className="link-detalle boton" to={`/productos/${product.id}`}>Ver Detalle </Link>
      </div>
    </>
  );
}
export default Card;
