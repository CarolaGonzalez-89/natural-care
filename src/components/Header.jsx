import { NavLink } from "react-router-dom";
import logo from "../assets/images/icono-header.png";

function Header() {
  return (
    <header className="header">
      <div className="div_headerContainer">
        <img className="logo-header" src={logo} alt="logo corazon crema" />
        <p className="parrafo_Header">
          Productos Pensados Para la Salud de Tu Piel{" "}
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
      </nav>
    </header>
  );
}
export default Header;
