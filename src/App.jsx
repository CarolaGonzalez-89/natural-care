import Footer from "./components/components-estructure/Footer";
import Header from "./components/components-estructure/Header";
import Inicio from "./components/pages-routes/Inicio";
import Contacto from "./components/pages-routes/Contacto";
import { Route, Routes } from "react-router-dom";
import Productos from "./components/pages-routes/Productos";
import Productdetail from "./components/components-products/Productdetail";
import Category from "./components/components-products/Category";
import Carrito from "./components/pages-routes/Carrito";


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
