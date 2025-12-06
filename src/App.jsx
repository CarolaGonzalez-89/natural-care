import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import { Route, Routes } from "react-router-dom";
import Productos from "./components/Productos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
