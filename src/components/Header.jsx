import { NavLink } from "react-router-dom";
import logo from "../assets/myimages/icono-header.png";
import carrito from "../assets/myimages/carrito.png";

function Header() {
  return (
    <header className="header">
      <div className="div_headerContainer">
        <img className="logo-header" src={logo} alt="logo corazon crema" />
        <p className="parrafo_Header">
          Productos Pensados Para la Salud de Tu Piel
        </p>
      </div>

      <nav>
        <NavLink className="nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/productos">
          Productos
        </NavLink>
        <NavLink className="nav-link" to="/contacto">
          Contacto
        </NavLink>
        <NavLink className="nav-link" to="/carrito-compras">
          <img
            className="carrito"
            src={carrito}
            alt="imagen de carrito de compras"
          />
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
