import { useEffect, useState } from "react";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const cargarProductos = async () => {
      try {
        const respuesta = await fetch(
          `${import.meta.env.BASE_URL}productos.json`,
          { signal: controller.signal },
        );

        if (!respuesta.ok) {
          throw new Error(`La solicitud respondió con estado ${respuesta.status}.`);
        }

        const datos = await respuesta.json();
        if (!Array.isArray(datos)) {
          throw new Error("El archivo de productos no tiene el formato esperado.");
        }

        setProductos(datos);
      } catch (errorCarga) {
        if (errorCarga.name === "AbortError") return;

        console.error("No se pudo cargar el catálogo de productos:", errorCarga);
        setError("No pudimos cargar el menú. Probá recargar la página.");
      } finally {
        if (!controller.signal.aborted) setCargando(false);
      }
    };

    cargarProductos();
    return () => controller.abort();
  }, []);

  return { productos, cargando, error };
};

export default useProductos;
