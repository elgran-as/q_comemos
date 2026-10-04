import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();

  const totalQuantity = getTotalQuantity();

  return (
    <Link
      to="/carrito"
      className="cart-widget"
      aria-label={`Ver carrito, ${totalQuantity} productos`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      <span className="cart-label">Tu pedido</span>
      <span className="cart-badge">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
