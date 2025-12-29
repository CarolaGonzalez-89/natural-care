import { Link } from "react-router-dom";

function LinkCategory() {
  return (
    <>
      <h2 className="h2-category">Categorias</h2>
      <div className="linkContainer-category">
        <Link className="link-category" to="/productos">
          Todos
        </Link>
        <Link
          className="link-category"
          to="/productos/categorias/cuidado-facial"
        >
          Cuidado Facial
        </Link>
        <Link
          className="link-category"
          to="/productos/categorias/cuidado-corporal"
        >
          Cuidado Corporal
        </Link>
      </div>
    </>
  );
}

export default LinkCategory;
