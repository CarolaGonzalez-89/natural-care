import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components-common/Card";
import LinkCategory from "./LinkCategory";
import { app } from "../../firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Category() {
  const { category } = useParams();
  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const misProductos = collection(db, "productos");
    const consulta = getDocs(misProductos);
    consulta
      .then((resultado) => {
        const resultadoConFormato = resultado.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductCategory(resultadoConFormato);
      })
      .catch((error) => {
        console.log("Error al traer los documentos:", error);
      });
  }, []);

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
