import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Popup from "../components.cart/Popup";
import { app } from "../../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CarritoContext } from "../context.jsx/Context";

function Productdetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
const { addToCart } = useContext(CarritoContext);

  const confirmQuantity = (quantity) => {
    addToCart(detail, quantity);
  };

  useEffect(() => {
    const uniqueProduct = async () => {
      try {
        const db = getFirestore(app);
        const miProducto = doc(db, "productos", id);
        const resultado = await getDoc(miProducto);

        setDetail({
          id: resultado.id,
          ...resultado.data(),
        });
      } catch (error) {
        console.log("Error al traer los documentos:", error);
      }
    };
    uniqueProduct();
  }, [id]);

  return (
    <>
      <div className="box-detail">
        <img className="detail-img" src={detail.img} alt="imagen producto" />
        <h1 className="detail-title"> Detalle del Producto</h1>
        <h2 className="detail-name"> {detail.name}</h2>
        <p className="detail-price">Precio: ${detail.price} </p>
        <p className="detail-description">Descripcion:{detail.description}</p>
        <Popup
          className="detail-button"
          nombre={detail.name}
          onConfirm={confirmQuantity}
        />
      </div>
    </>
  );
}

export default Productdetail;
