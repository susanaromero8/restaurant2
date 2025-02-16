import React, { createContext, useState, useContext } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [qualityTotal, setQualityTotal] = useState(0);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.title === product.title);
      if (!existingProduct) {
        return [...prev, product];
      }

      return prev.map((item) =>
        item.title === product.title && item.value < item.stock
          ? {
              ...item,
              value: item.value + product.value,
            }
          : item
      );
    });
  };

  const onQualityTotal = (e) => {
    setQualityTotal((prev) => parseInt(prev) + parseInt(e));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        qualityTotal,
        setCartItems,
        setQualityTotal,
        onQualityTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el contexto del carrito
export { CartProvider };

export default CartContext;
