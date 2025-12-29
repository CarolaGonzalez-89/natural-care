import { useState } from "react";
import Contador from "./Contador";

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAbrirPopup = (value) => {
    setIsOpen(true);
    setQuantity(value);

    setTimeout(() => {
      handleCerrarPopup();
      props.onConfirm(value);
    }, 2000);
  };

  const handleCerrarPopup = () => {
    setIsOpen(false);
  };

  if (isOpen === false) {
    return (
      <div>
        <Contador onConfirm={handleAbrirPopup}></Contador>
      </div>
    );
  } else {
    return (
      <div>
        <Contador onConfirm={handleAbrirPopup}></Contador>

        <div className="popup">
          <div className="popup__container">
            <p>
              <b>
                {quantity} {props.nombre}
              </b>
              <br /> Agregado/s con éxito al carrito
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
