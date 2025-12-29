import { useState } from "react";

function Contador({ onConfirm }) {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    setValue(isNaN(inputValue) ? 1 : inputValue);
  };

  const handleClick = () => {
    onConfirm(value);
  };

  return (
    <>
      <input
        type="number"
        max={10}
        min={0}
        value={value}
        onChange={handleChange}
      />
      <input
        className="boton"
        type="button"
        value="Agregar al carrito"
        onClick={handleClick}
      />
    </>
  );
}

export default Contador;
