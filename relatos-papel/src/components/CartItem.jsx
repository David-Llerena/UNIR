import React from 'react';
import '../styles/components/cart.css';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

function CartItem({ item, removeFromCart, updateQuantity }) {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      handleQuantityChange(item.quantity - 1);
    }
  };

  const incrementQuantity = () => {
    handleQuantityChange(item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img 
          src={item.coverImage} 
          alt={item.title} 
          className="cart-item__image" 
        />
      </div>
      
      <div className="cart-item__details">
        <div className="cart-item__info">
          <h3 className="cart-item__title">{item.title}</h3>
          <p className="cart-item__author">por {item.author}</p>
          <p className="cart-item__price">{item.price.toFixed(2)} €</p>
        </div>
        
        <div className="cart-item__actions">
          <div className="cart-item__quantity-controls">
            <button 
              className="cart-item__quantity-btn"
              onClick={decrementQuantity}
              disabled={item.quantity <= 1}
            >
              <FaMinus size={12} />
            </button>
            
            <input 
              type="text" 
              value={item.quantity} 
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 1) {
                  handleQuantityChange(value);
                }
              }}
              className="cart-item__quantity-input"
              aria-label={`Cantidad de ${item.title}`}
            />
            
            <button 
              className="cart-item__quantity-btn"
              onClick={incrementQuantity}
            >
              <FaPlus size={12} />
            </button>
          </div>
          
          <div className="cart-item__subtotal">
            <span className="cart-item__subtotal-label">Subtotal:</span>
            <span className="cart-item__subtotal-value">{(item.price * item.quantity).toFixed(2)} €</span>
          </div>
          
          <button 
            className="cart-item__remove-button"
            onClick={() => removeFromCart(item.id)}
            aria-label={`Eliminar ${item.title} del carrito`}
          >
            <FaTrash size={14} /> <span>Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;