import { createContext, useState } from "react";
import { products } from "../../pages/constants";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([products[0]]);

  const addToCart = (product, productQuantity) => {
    const isInCart = cartItems.find((item) => item.id === product.id);
    !isInCart
      ? productQuantity >= 1
        ? setCartItems([
            ...cartItems,
            { ...product, quantity: productQuantity },
          ])
        : console.log(
            `Please add a valid quantity. The quantity is: ${productQuantity}`
          )
      : console.log([...cartItems]);
  };

  const removeItem = (product) => {
    const isInCart = cartItems.find((index) => index.id === product.id);
    isInCart
      ? setCartItems(() => {
          return cartItems.filter((item) => item.id !== product.id);
        })
      : console.log([...cartItems]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
