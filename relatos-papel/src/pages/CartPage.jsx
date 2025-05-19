import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { FaArrowLeft, FaCreditCard } from 'react-icons/fa';
import '../styles/components/cart.css';

function CartPage({ cart }) {
  // Extraer las funciones del objeto cart
  const { items, removeFromCart, updateQuantity } = cart;

  // Calcular total
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 4.99 : 0;
  const tax = subtotal * 0.21;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1>Tu carrito</h1>
          <p>No hay productos en el carrito</p>
        </div>
        
        <div className="cart-empty">
          <p>Tu carrito está vacío. Encuentra grandes historias en nuestro catálogo.</p>
          <Link to="/catPage" className="cart-button-continue">Ver catálogo</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Tu carrito</h1>
        <p>{items.length} {items.length === 1 ? 'producto' : 'productos'}</p>
      </div>

      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}

      {/* <div className="cart-summary">
        <h2>Resumen del pedido</h2>
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} €</span>
        </div>
        <div className="cart-summary-row">
          <span>Gastos de envío</span>
          <span>{shipping.toFixed(2)} €</span>
        </div>
        <div className="cart-summary-row">
          <span>IVA (21%)</span>
          <span>{tax.toFixed(2)} €</span>
        </div>
        <div className="cart-summary-row">
          <span>Total</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      </div> */}

      <div className="cart-buttons">
        <Link to="/catPage" className="cart-button-continue">
          <FaArrowLeft style={{ marginRight: '8px' }} /> Seguir comprando
        </Link>
        <Link to="/checkout" className="cart-button-checkout">
          <FaCreditCard style={{ marginRight: '8px' }} /> Finalizar compra
        </Link>
      </div>
    </div>
  );
}

export default CartPage;