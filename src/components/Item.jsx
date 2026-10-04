import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const Item = ({ producto }) => {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/producto/${producto.id}`} className="product-image-link" aria-label={`Ver ${producto.nombre}`}>
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
        {producto.destacada && <span className="product-tag">Favorito</span>}
      </Link>
      {producto.imagenCredito && (
        <a
          className="image-credit"
          href={producto.imagenCredito.url}
          target="_blank"
          rel="noreferrer"
        >
          Foto: {producto.imagenCredito.autor} · {producto.imagenCredito.licencia}
        </a>
      )}
      <div className="product-info">
        <span className="product-category">
          {producto.categoria}
        </span>
        <h3>{producto.nombre}</h3>
        <p className="product-description">{producto.descripcion}</p>
        <div className="product-meta">
          <span>◷ {producto.tiempo}</span>
          <strong>${producto.precio.toLocaleString("es-AR")}</strong>
        </div>
        <div className="product-actions">
          <Link to={`/producto/${producto.id}`} className="btn btn-outline">
            Ver más
          </Link>
          <button className="btn add-card-button" onClick={() => addToCart(producto, 1)} aria-label={`Agregar ${producto.nombre} al pedido`}>
            <span aria-hidden="true">+</span> Al pedido
          </button>
        </div>
      </div>
    </article>
  );
};

export default Item;
