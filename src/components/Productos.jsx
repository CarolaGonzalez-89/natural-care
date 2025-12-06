import cremareparadora from "../assets/images/crema1.png";
import cremahidratante from "../assets/images/crema2.png";
import tonicolimpiador from "../assets/images/crema3.png";
import cremahumectantedemanos from "../assets/images/crema4.png";
import Card from "./Card";
import { useState } from "react";

function Productos() {
  const [products, setProducts] = useState([
    { id: 1, name: "Crema Reparadora", price: 15000, img: cremareparadora },
    { id: 2, name: "Crema Hidratante", price: 10000, img: cremahidratante },
    { id: 3, name: "Tónico Limpiador", price: 14000, img: tonicolimpiador },
    { id: 4, name: "Crema Humectante de Manos", price: 6000, img: cremahumectantedemanos,},
  ]);

  return (
    <>
      <h1 className="h1-productos">Nuestra Línea de Productos</h1>
      <div className="div_Productos">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
}
export default Productos;
