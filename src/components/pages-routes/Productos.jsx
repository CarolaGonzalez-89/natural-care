import { app } from "../../firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Card from "../components-common/Card";
import { useState, useEffect } from "react";
import LinkCategory from "../components-products/LinkCategory";

function Productos() {
  const [products, setProducts] = useState([]);

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

        setProducts(resultadoConFormato);
      })
      .catch((error) => {
        console.log("Error al traer los documentos:", error);
      });
  }, []);

  return (
    <>
      <h1 className="h1-productos">Nuestra Línea de Productos</h1>
      <LinkCategory />
      <div className="div_Productos">
        {products.map((product) => (
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
export default Productos;
