import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const Carrito = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice
  } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const subtotal = getTotalPrice();
  const envio = deliveryMethod === "delivery" && subtotal < 20000 ? 1800 : 0;
  const total = subtotal + envio;

  const handleCheckout = (event) => {
    event.preventDefault();
    setOrderNumber(`QC-${Date.now().toString().slice(-6)}`);
    clearCart();
  };

  if (orderNumber) {
    return (
      <section className="order-success">
        <span className="success-icon">✓</span>
        <span className="eyebrow">¡PEDIDO CONFIRMADO!</span>
        <h1>¡Ya nos ponemos con eso!</h1>
        <p>
          Recibimos tu pedido <strong>{orderNumber}</strong>.{" "}
          {deliveryMethod === "pickup"
            ? "Elegiste retirarlo personalmente."
            : "En breve nos comunicamos para coordinar el delivery."}
        </p>
        <Link to="/productos" className="btn">Volver a la carta</Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="cart-empty">
        <span aria-hidden="true">🛍️</span>
        <h1>Tu pedido está vacío</h1>
        <p>Fijate en la carta y elegí algo rico para compartir.</p>
        <Link to="/productos" className="btn">Ver la carta</Link>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <div className="section-header">
        <span className="eyebrow">YA CASI ESTÁ</span>
        <h1>Tu pedido</h1>
      </div>
      <div className="cart-layout">
        <div className="cart-list">
          {cart.map((producto) => (
            <article className="cart-item" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="cart-item-info">
                <span className="product-category">{producto.categoria}</span>
                <h2>{producto.nombre}</h2>
                <strong>${producto.precio.toLocaleString("es-AR")}</strong>
                <div className="cart-quantity">
                  <button type="button" onClick={() => updateQuantity(producto.id, producto.quantity - 1)} aria-label={`Restar ${producto.nombre}`}>−</button>
                  <span>{producto.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(producto.id, producto.quantity + 1)} aria-label={`Sumar ${producto.nombre}`}>+</button>
                </div>
              </div>
              <div className="cart-item-end">
                <strong>${(producto.precio * producto.quantity).toLocaleString("es-AR")}</strong>
                <button className="remove-button" onClick={() => removeFromCart(producto.id)}>Quitar</button>
              </div>
            </article>
          ))}
          <button className="clear-button" onClick={clearCart}>Vaciar pedido</button>
        </div>
        <aside className="cart-summary">
          <h2>Resumen</h2>
          <div><span>Subtotal</span><span>${subtotal.toLocaleString("es-AR")}</span></div>
          <div>
            <span>{deliveryMethod === "pickup" ? "Retiro personal" : "Delivery"}</span>
            <span>
              {deliveryMethod === "pickup"
                ? "Sin cargo"
                : envio === 0
                  ? "¡Gratis!"
                  : `$${envio.toLocaleString("es-AR")}`}
            </span>
          </div>
          {deliveryMethod === "delivery" && envio > 0 && (
            <p className="free-delivery-note">Sumá ${(20000 - subtotal).toLocaleString("es-AR")} para tener el delivery gratis.</p>
          )}
          <div className="summary-total"><strong>Total</strong><strong>${total.toLocaleString("es-AR")}</strong></div>
          {!checkoutOpen ? (
            <button className="btn checkout-button" onClick={() => setCheckoutOpen(true)}>Continuar con el pedido <span aria-hidden="true">→</span></button>
          ) : (
            <form className="checkout-form" onSubmit={handleCheckout}>
              <h3>¿Cómo querés recibirlo?</h3>
              <label>Modalidad
                <select
                  name="modalidad"
                  value={deliveryMethod}
                  onChange={(event) => setDeliveryMethod(event.target.value)}
                >
                  <option value="pickup">Retiro personal en el local</option>
                  <option value="delivery">Delivery a domicilio</option>
                </select>
              </label>
              <label>Tu nombre<input name="nombre" autoComplete="name" required /></label>
              <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" required /></label>
              {deliveryMethod === "delivery" && (
                <label>Dirección de entrega<input name="direccion" autoComplete="street-address" required /></label>
              )}
              <label>Forma de pago
                <select name="pago" defaultValue="Efectivo">
                  <option>Efectivo</option>
                  <option>Transferencia</option>
                  <option>Tarjeta al recibir</option>
                </select>
              </label>
              <button className="btn checkout-button" type="submit">Confirmar pedido · ${total.toLocaleString("es-AR")}</button>
              <button className="checkout-cancel" type="button" onClick={() => setCheckoutOpen(false)}>Volver al resumen</button>
            </form>
          )}
          <p className="secure-note">Retiro personal o delivery a pedido · pago al recibir</p>
        </aside>
      </div>
    </section>
  );
};

export default Carrito;
