import { useState } from "react";
import ItemListContainer from "../components/ItemListContainer";

const Productos = () => {
  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const categorias = [
    "Todos",
    "Hamburguesas",
    "Pizzas",
    "Papas fritas",
    "Empanadas",
    "Bebidas",
  ];

  return (
    <section className="products-section">
      <div className="section-header">
        <span className="eyebrow">LA CARTA DE Q´ COMEMOS</span>
        <h1>La carta</h1>
        <p>Elegí entre hamburguesas, pizzas, papas fritas, empanadas y bebidas embotelladas.</p>
      </div>
      <div className="menu-toolbar">
        <div className="category-filters" aria-label="Filtrar por categoría">
          {categorias.map((nombre) => (
            <button
              className={`filter-chip${categoria === nombre ? " active" : ""}`}
              key={nombre}
              onClick={() => setCategoria(nombre)}
              aria-pressed={categoria === nombre}
            >
              {nombre}
            </button>
          ))}
        </div>
        <label className="search-field">
          <span className="visually-hidden">Buscar en el menú</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></svg>
          <input value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="¿Qué tenés ganas de comer?" />
        </label>
      </div>
      <ItemListContainer categoria={categoria} busqueda={busqueda} />
    </section>
  );
};

export default Productos;
