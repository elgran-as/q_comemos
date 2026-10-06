# Q´ Comemos

Aplicación de pedidos de comida argentina desarrollada con React y Vite. Tiene cuatro opciones por categoría: hamburguesas, pizzas, papas fritas, empanadas y bebidas embotelladas. Se puede explorar la carta, filtrar por categoría, buscar platos, consultar sus detalles y elegir entre retiro personal o delivery a pedido.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Desarrollo

```sh
npm install
npm run dev
```

## Verificaciones

```sh
npm run lint
npm run build
```

## Cómo funciona

- El catálogo está en `public/productos.json`; `useProductos` lo carga con `fetch` dentro de `useEffect`.
- `ItemListContainer` filtra el catálogo y renderiza tarjetas reutilizables con `Item`.
- `Layout` comparte `Header`, navegación y `Footer` entre las rutas `/`, `/productos`, `/producto/:id` y `/carrito`.
- El logo del sitio se encuentra en `src/assets/logo.png`.
- El carrito permite sumar, restar y quitar productos; el retiro no tiene costo y el delivery se cobra solo si se selecciona. El delivery es gratis desde $20.000.
- Al confirmar, se solicitan nombre, teléfono, modalidad y forma de pago; la dirección se pide solo para delivery.
- El proyecto es una demo de frontend: la confirmación no envía el pedido a un servidor ni procesa pagos.

## Estado de la pre-entrega

- **Estructura y layout:** implementados; el pie incluye propiedad intelectual, privacidad, contacto/sede de ejemplo y tres tarjetas de integrantes con ilustraciones.
- **Catálogo local:** implementado con `fetch` y `useEffect`, con estados de carga y error.
- **Ruteo:** implementado con `react-router-dom` y enlaces `Link`/`NavLink`.
- **Carrito con Context API:** está implementado, aunque queda fuera del alcance evaluado en esta pre-entrega.
- **Publicación y repositorio:** opcionales; agregá aquí los enlaces de Netlify/Vercel/GitHub cuando publiques el proyecto.

Antes de publicar, reemplazá los nombres de ejemplo del equipo y los datos de contacto/sede por información real.


## GitHub Pages

This project is configured for `https://elgran-as.github.io/q_comemos/` using Vite `base` and React Router `basename`. Deployment is handled by `.github/workflows/deploy.yml`.
