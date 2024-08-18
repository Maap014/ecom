import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addItem, setAddItem] = useState(false);
  const [required, setRequired] = useState(false);
  const [existingItem, setExistingItem] = useState(false);
  const addedToCART = () => {
    setAddItem(true);
    setTimeout(() => setAddItem(false), 2000);
  };
  const quantityRequired = () => {
    setRequired(true);
    setTimeout(() => setRequired(false), 2000);
  };

  const itemExist = () => {
    setExistingItem(true);
    setTimeout(() => setExistingItem(false), 2000);
  };

  const addToCart = (product, productQuantity) => {
    const isInCart = cartItems.find((item) => item.id === product.id);
    if (!isInCart) {
      if (productQuantity >= 1) {
        setCartItems([...cartItems, { ...product, quantity: productQuantity }]);
        addedToCART();
      } else {
        quantityRequired();
      }
    } else {
      itemExist();
    }
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
      value={{
        cartItems,
        addToCart,
        removeItem,
        clearCart,
        addItem,
        required,
        existingItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
