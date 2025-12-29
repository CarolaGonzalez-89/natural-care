import { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext();

function CarritoProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const productoCargado = cart.find((item) => item.id === product.id);

    if (productoCargado) {
      const carritoModificado = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );

      setCart(carritoModificado);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const deleteProduct = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    setCart(filterCart);
  };
  const cleanCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <CarritoContext.Provider
      value={{
        cart,
        addToCart,
        totalQuantity,
        totalPrice,
        deleteProduct,
        cleanCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;
