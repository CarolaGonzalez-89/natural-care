import { useState } from "react";
import Contador from "./Contador";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAbrirPopup = () => {
    setIsOpen(true);
    setTimeout(() => {
      handleCerrarPopup();
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
            <p>Producto agregado con éxito</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
