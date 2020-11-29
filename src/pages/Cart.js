import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const { cart, total, removeFromCart } = useContext(CartContext);

  if (!cart.length) {
    return <h3>Empty Cart</h3>
  }
  return (
    <section className="cart">
      <header>
        <h2>My Cart</h2>
      </header>
      <div className="cart-wrapper">
        {cart.map(({ id, index, size, price }) => (
          <article key={id} className="cart-item">
            <div className="details">
              <p>Bit at index {index}</p>
              <p>£ {price}</p>
              <button onClick={() => removeFromCart(id)}><FiChevronDown /></button>
            </div>
          </article>
        ))}
      </div>
      <div>
        <h3>Total: £ {total}</h3>
      </div>
      <div>
        <button className="btn" onClick={() => history.push("/checkout")}>Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
