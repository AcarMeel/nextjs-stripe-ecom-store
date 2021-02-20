import { useState } from "react";
import { initiateCheckouts } from "../lib/payments";
import products from "../products.json";

const defaultCart = {
  products: {},
};

export default function useCart() {
  const [cart, setCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find((p) => p.id === key);
    return {
      ...cart.products[key],
      pricePerItem: product.price,
    };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id } = {}) {
    setCart((prev) => {
      let cartState = { ...prev };
      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1,
        };
      }
      return cartState;
    });
  }

  function checkout() {
    initiateCheckouts({
      lineItems: cartItems.map((cart) => ({
        price: cart.id,
        quantity: cart.quantity,
      })),
    });
  }

  return {
    subtotal,
    totalItems,
    addToCart,
    checkout,
  };
}
