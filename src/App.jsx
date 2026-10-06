import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetail from "./pages/ProductoDetail";
import Carrito from "./pages/Carrito";

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
=======
    <BrowserRouter basename="/q_comemos">
>>>>>>> d1f52a4 (reparacion)
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;