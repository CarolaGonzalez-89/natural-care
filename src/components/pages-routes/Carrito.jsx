import { useContext, useState } from "react";
import { CarritoContext } from "../context.jsx/Context";
import Button from "../components-common/Button";

function Carrito() {
  const { cart, totalQuantity, totalPrice, deleteProduct, cleanCart } =
    useContext(CarritoContext);

  const [showPopup, setShowPopup] = useState(false);
  const handleFinishBuy = () => {
    if (cart.length === 0) return;
    setShowPopup(true);
  };
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  return (
    <>
    <div className="carrito-page">
      <h1 className="cart">Carrito de Compras</h1>
      <div className="cart-container">
        {cart.map((item) => (
          <div className="box-cart" key={item.id}>
            <img className="item-img" src={item.img} alt={item.name} />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">Precio: ${item.price}</p>
            <p className="item-quantity">Total de productos: {totalQuantity}</p>
            <p className="item-total">Total a pagar: ${totalPrice}</p>
            <Button
              className="item-button"
              onClick={() => {
                deleteProduct(item.id);
                setShowDeletePopup(true);
              }}
            >
              Eliminar Producto
            </Button>
          </div>
        ))}

        <div className="box-cart-buttons">
          <h2 className="cart-resume">Resúmen de Compra</h2>
          <p className="item-quantity-2">
            <span>Total de productos:</span>
            <strong>{totalQuantity}</strong>
          </p>

          <p className="item-total-2">
            <span>Total a pagar:</span>
            <strong>${totalPrice}</strong>
          </p>
          {cart.length > 0 && (
            <Button className="item-button-2" onClick={cleanCart}>
              Vaciar Carrito
            </Button>
          )}

          <Button className="item-button-3" onClick={handleFinishBuy}>
            Confirmar Compra
          </Button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-compra">
              <h2>🎉 Compra realizada con éxito</h2>
              <p>Gracias por tu compra</p>
              <p>
                Total abonado: <strong>${totalPrice}</strong>
              </p>

              <Button
                onClick={() => {
                  setShowPopup(false);
                  cleanCart();
                }}
              >
                Aceptar
              </Button>
            </div>
          </div>
        )}
        {showDeletePopup && (
          <div className="popup-overlay">
            <div className="popup-compra">
              <p>🗑 Producto eliminado del carrito</p>

              <Button onClick={() => setShowDeletePopup(false)}>Aceptar</Button>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default Carrito;
