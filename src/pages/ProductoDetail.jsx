import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import useProductos from "../hooks/useProductos";

const ProductoDetail = () => {
  const { id } = useParams();
  const { productos, cargando, error } = useProductos();
  const producto = productos.find((item) => item.id === Number(id));
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const { addToCart } = useCart();

  if (cargando) {
    return <p className="catalog-feedback" role="status">Cargando el producto...</p>;
  }

  if (error) {
    return (
      <div className="not-found">
        <p className="catalog-error" role="alert">{error}</p>
        <Link to="/productos" className="btn">Volver al menú</Link>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="not-found">
        <span aria-hidden="true">🍽️</span>
        <h1>No encontramos ese plato</h1>
        <Link to="/productos" className="btn">Volver al menú</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <section className="detail-section">
      <div className="detail-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      {producto.imagenCredito && (
        <a
          className="image-credit detail-image-credit"
          href={producto.imagenCredito.url}
          target="_blank"
          rel="noreferrer"
        >
          Foto: {producto.imagenCredito.autor} · {producto.imagenCredito.licencia}
        </a>
      )}
      <div className="detail-info">
        <Link to="/productos" className="back-link">← Volver al menú</Link>
        <span className="product-category">{producto.categoria}</span>
        <h1>{producto.nombre}</h1>
        <p className="detail-price">${producto.precio.toLocaleString("es-AR")}</p>
        <p className="description">{producto.descripcion}</p>
        <div className="detail-meta"><span>◷ Listo en {producto.tiempo}</span><span>✦ Preparado al momento</span></div>
        <div className="quantity-selector">
          <span>Cantidad</span>
          <div>
            <button type="button" onClick={() => setCantidad((actual) => Math.max(1, actual - 1))} aria-label="Quitar una unidad">−</button>
            <strong>{cantidad}</strong>
            <button type="button" onClick={() => setCantidad((actual) => actual + 1)} aria-label="Agregar una unidad">+</button>
          </div>
        </div>
        <button className="btn add-button" onClick={handleAddToCart}>
          {agregado ? "¡Agregado a tu pedido!" : `Agregar · $${(producto.precio * cantidad).toLocaleString("es-AR")}`}
        </button>
        {agregado && <Link to="/carrito" className="text-link detail-cart-link">Ir a mi pedido →</Link>}
        <p className="detail-delivery">📍 Retirá personalmente o elegí delivery al hacer tu pedido</p>
      </div>
    </section>
  );
};

export default ProductoDetail;
