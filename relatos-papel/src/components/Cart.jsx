// src/components/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/components/cart.css';

function Cart({ cartItems, removeFromCart, updateQuantity, total }) {
  // Si el carrito está vacío, mostrar un mensaje
  if (cartItems.length === 0) {
    return (
      <div className="cart cart--empty">
        <h2 className="cart__title">Tu carrito</h2>
        <p className="cart__empty-message">
          Tu carrito está vacío. ¡Añade algunos libros!
        </p>
        <Link to="/home" className="cart__continue-button">
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Tu carrito</h2>
      
      <div className="cart__items">
        {cartItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      
      <div className="cart__summary">
        <div className="cart__total">
          <span>Total:</span>
          <span>{total.toFixed(2)} €</span>
        </div>
        
        <div className="cart__actions">
          <Link to="/home" className="cart__continue-button">
            Seguir comprando
          </Link>
          <Link to="/checkout" className="cart__checkout-button">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;