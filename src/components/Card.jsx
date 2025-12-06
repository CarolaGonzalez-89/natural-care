function Card(product) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={product.img} alt="imagen producto" />
        <h3 className="card-title"> {product.name}</h3>
        <p className="card-price">Precio: ${product.price} </p>
      </div>
    </>
  );
}
export default Card;
