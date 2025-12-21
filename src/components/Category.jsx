import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../back.js/productosback";
import Card from "./Card";
import LinkCategory from "./LinkCategory";

function Category() {
  const { category } = useParams();
  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProductCategory(data));
  }, [category]);

  const filterProducts = productCategory.filter(
    (product) => product.category === category
  );

  return (
    <>
    
      <h1 className="h1-productos">Nuestra Línea de Productos</h1>
      <LinkCategory />
      <div className="div_Productos">
        {filterProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.img}
          />
        ))}
      </div>
    </>
  );
}
export default Category;
