import { useEffect, useState } from "react";
import { CartContext } from "./cart-context";

const CART_STORAGE_KEY = "q-comemos-cart";
const LEGACY_CART_STORAGE_KEY = "miga-fuego-cart";

const getInitialCart = () => {
  try {
    const savedCart =
      localStorage.getItem(CART_STORAGE_KEY) ??
      localStorage.getItem(LEGACY_CART_STORAGE_KEY);
    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);
    if (!Array.isArray(parsedCart)) {
      throw new TypeError("El carrito guardado no tiene un formato válido.");
    }

    return parsedCart.filter(
      (item) =>
        Number.isInteger(item?.id) &&
        Number.isFinite(item?.precio) &&
        Number.isInteger(item?.quantity) &&
        item.quantity > 0
    );
  } catch (error) {
    console.error("No se pudo recuperar el carrito guardado.", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("No se pudo guardar el carrito.", error);
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    if (!product || !Number.isInteger(quantity) || quantity < 1) {
      return;
    }

    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (!Number.isInteger(quantity)) {
      return;
    }

    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);
  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.precio * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
