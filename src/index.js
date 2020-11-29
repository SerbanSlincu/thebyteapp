import React from 'react';
import ReactDOM from 'react-dom';
import { ByteProvider } from "./context/bytes";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';
import { UserProvider } from "./context/user";

ReactDOM.render(
  <UserProvider>
    <ByteProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </ByteProvider>
  </UserProvider>,
  document.getElementById('root')
);
