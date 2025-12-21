import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import { Route, Routes } from "react-router-dom";
import Productos from "./components/Productos";
import Productdetail from "./components/Productdetail";
import Category from "./components/Category";
import Carrito from "./components/Carrito";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Productdetail />} />
        <Route path="/productos/categorias/:category" element={<Category/>} />
        <Route path="/carrito-compras" element={<Carrito/>} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
