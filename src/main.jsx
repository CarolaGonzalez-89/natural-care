import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CarritoProvider from "./components/context.jsx/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </StrictMode>
  </BrowserRouter>
);
