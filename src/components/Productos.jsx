import { fetchProducts } from "../../back.js/productosback";
import Card from "./Card";
import { useState, useEffect } from "react";
import LinkCategory from "./LinkCategory";


function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="h1-productos">Nuestra Línea de Productos</h1>
      <LinkCategory />
      <div className="div_Productos">
        {products.map((product) => (
          <>
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.img}
            />
          </>
        ))}
      </div>
    </>
  );
}
export default Productos;
