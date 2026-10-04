import Item from "./Item";

const ItemList = ({ productos }) => {
  if (productos.length === 0) {
    return (
      <div className="empty-results">
        <span aria-hidden="true">🍽️</span>
        <h2>No encontramos platos</h2>
        <p>Probá con otra búsqueda o elegí una categoría diferente.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">

      {productos.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
        />
      ))}

    </div>
  );
};

export default ItemList;
