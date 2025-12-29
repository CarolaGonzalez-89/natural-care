import { useContext } from "react";
import carrito from "../../assets/myimages/carrito.png";
import { CarritoContext } from "../context.jsx/Context";

function CartWidget() {
  const { totalQuantity } = useContext(CarritoContext);

  return (
    <>
      <img
        className="carrito"
        src={carrito}
        alt="imagen de carrito de compras"
      />
      <span> {totalQuantity} </span>
    </>
  );
}

export default CartWidget;
