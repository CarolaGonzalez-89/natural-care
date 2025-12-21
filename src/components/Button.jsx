import React from "react";

function Button(props) {
  return (
    <button className="boton">
      {props.verdetalle}
      {props.carrito}
    </button>
  );
}

export default Button;
