import ItemList from "./ItemList";
import useProductos from "../hooks/useProductos";

const ItemListContainer = ({ categoria = "Todos", busqueda = "" }) => {
  const { productos, cargando, error } = useProductos();
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = categoria === "Todos" || producto.categoria === categoria;
    const texto = `${producto.nombre} ${producto.descripcion} ${producto.categoria}`.toLocaleLowerCase("es");
    return coincideCategoria && texto.includes(busqueda.trim().toLocaleLowerCase("es"));
  });

  if (cargando) {
    return <p className="catalog-feedback" role="status">Cargando el menú...</p>;
  }

  if (error) {
    return <p className="catalog-feedback catalog-error" role="alert">{error}</p>;
  }

  return <ItemList productos={productosFiltrados} />;
};

export default ItemListContainer;
