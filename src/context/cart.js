import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateByte } from '../api/mutations';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = [...cart].reduce((total, { price }) => {
      return (total += price);
    }, 0);
    setTotal(parseFloat(total.toFixed(2)));
  }, [cart]);

  const addToCart = (byte) => {
    const { id, index, price } = byte;
    const cartItems = [...cart, { id, index, price }];
    setCart(cartItems);
  };

  const removeFromCart = (id) => {
    let updatedCart = [...cart].filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const transferCartToOwner = (customer) => {
    cart.forEach((item) => {
      try {
        API.graphql(graphqlOperation(updateByte, { input: {id: item.id, index: item.index, content: "0", owner: customer} }));
        console.log("transfer is successful");
      } catch (err) {
        console.log(err);
      }
    })
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, clearCart, transferCartToOwner }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };