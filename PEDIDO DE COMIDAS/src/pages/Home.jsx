import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import useProductos from "../hooks/useProductos";

const Home = () => {
  const { productos, cargando, error } = useProductos();
  const destacados = productos.filter((producto) => producto.destacada);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow"><i /> COMÉ RICO, COMÉ COMO EN CASA</span>
          <h1>¿Qué<br />comemos<span>?</span></h1>
          <p>Hamburguesas, pizzas, papas y empanadas. Todo recién hecho y con sabor bien nuestro.</p>
          <div className="hero-actions">
            <Link to="/productos" className="btn hero-btn">Ver qué pinta <span aria-hidden="true">↗</span></Link>
            <span className="hero-note">Retirá o pedí delivery</span>
          </div>
          <div className="hero-rating"><span>★</span><strong>Hecho en el momento</strong><small>con ingredientes frescos</small></div>
        </div>
        <div className="hero-art" role="img" aria-label="Hamburguesa casera con papas fritas">
          <div className="hero-food-label">
            <svg className="argentina-badge" viewBox="0 0 60 44" role="img" aria-label="Bandera argentina con tres estrellas">
              <path d="M11 17h38v8H11z" fill="#fff" />
              <path d="M11 12a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v5H11zM11 25h38v5a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4z" fill="#75bde8" />
              <circle cx="30" cy="21" r="2.5" fill="#f4bd44" />
              <path d="m15 1 .9 2h2.2l-1.8 1.3.7 2.1-2-1.3-1.9 1.3.7-2.1L12 3h2.2zm15 0 .9 2h2.2l-1.8 1.3.7 2.1-2-1.3-1.9 1.3.7-2.1L27 3h2.2zm15 0 .9 2h2.2l-1.8 1.3.7 2.1-2-1.3-1.9 1.3.7-2.1L42 3h2.2z" fill="#f4bd44" />
            </svg>
            <span className="hero-food-copy">Algo rico<strong>para compartir</strong></span>
          </div>
        </div>
      </section>
      <section className="benefits" aria-label="Lo que tenemos para vos">
        <div><span>🍔</span><p><strong>Hamburguesas</strong><small>Con pan de papa y mucho sabor</small></p></div>
        <div><span>🍕</span><p><strong>Pizzas</strong><small>Masa casera, muzza abundante</small></p></div>
        <div><span>🥟</span><p><strong>Empanadas</strong><small>Bien rellenas, como tienen que ser</small></p></div>
        <div><span>🥤</span><p><strong>Bebidas</strong><small>Embotelladas y bien frescas</small></p></div>
      </section>
      <section className="featured-section">
        <div className="section-heading">
          <div><span className="eyebrow">PARA ARRANCAR</span><h2>¿Antojo de que tenes hoy?</h2></div>
          <Link to="/productos" className="text-link">Ver toda la carta <span aria-hidden="true">→</span></Link>
        </div>
        {cargando ? (
          <p className="catalog-feedback" role="status">Cargando el menú...</p>
        ) : error ? (
          <p className="catalog-feedback catalog-error" role="alert">{error}</p>
        ) : (
          <ItemList productos={destacados} />
        )}
      </section>
      <section className="delivery-banner">
        <div><span className="eyebrow">HAY PARA TODOS LOS GUSTOS</span><h2>¿Ya sabés qué vas a pedir?</h2></div>
        <Link to="/productos" className="btn btn-light">Dale, elegí <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
};

export default Home;
