import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUniqueProduct } from "../../back.js/productosback";
import Popup from "./Popup";

export default Productdetail;

function Productdetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetchUniqueProduct(id).then((product) => setDetail(product));
  }, [id]);

  return (
    <>
      <div className="box-detail">
        <img className="detail-img" src={detail.img} alt="imagen producto" />
        <h1 className="detail-title"> Detalle del Producto</h1>
        <h2 className="detail-name"> {detail.name}</h2>
        <p className="detail-price">Precio: ${detail.price} </p>
        <p className="detail-description">Descripcion:{detail.description}</p>
        <Popup className="detail-button" />
      </div>
    </>
  );
}
