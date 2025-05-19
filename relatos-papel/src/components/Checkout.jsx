// src/components/Checkout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/checkout.css';

function Checkout({ cartItems, total, onCompletePurchase }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validaciones simples
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es obligatoria';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'El código postal es obligatorio';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'El número de tarjeta es obligatorio';
    if (!formData.cardName.trim()) newErrors.cardName = 'El nombre en la tarjeta es obligatorio';
    if (!formData.cardExpiry.trim()) newErrors.cardExpiry = 'La fecha de expiración es obligatoria';
    if (!formData.cardCvc.trim()) newErrors.cardCvc = 'El CVC es obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCompletePurchase();
    }
  };

  // Si no hay elementos en el carrito, mostrar mensaje y redireccionar
  if (cartItems.length === 0) {
    return (
      <div className="checkout checkout--empty">
        <p className="checkout__empty-message">
          No hay productos en tu carrito para completar la compra.
        </p>
        <Link to="/home" className="checkout__continue-button">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout__summary">
        <h2 className="checkout__summary-title">Resumen del pedido</h2>
        
        <div className="checkout__items">
          {cartItems.map(item => (
            <div key={item.id} className="checkout__item">
              <div className="checkout__item-info">
                <h3>{item.title}</h3>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <p className="checkout__item-price">
                {(item.price * item.quantity).toFixed(2)} €
              </p>
            </div>
          ))}
        </div>
        
        <div className="checkout__total">
          <span>Total:</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      </div>

      <form className="checkout__form" onSubmit={handleSubmit}>
        <h2 className="checkout__form-title">Información de envío</h2>
        
        <div className="checkout__form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'checkout__input--error' : ''}
          />
          {errors.name && <span className="checkout__error">{errors.name}</span>}
        </div>

        <div className="checkout__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'checkout__input--error' : ''}
          />
          {errors.email && <span className="checkout__error">{errors.email}</span>}
        </div>

        <div className="checkout__form-group">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'checkout__input--error' : ''}
          />
          {errors.address && <span className="checkout__error">{errors.address}</span>}
        </div>

        <div className="checkout__form-row">
          <div className="checkout__form-group">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? 'checkout__input--error' : ''}
            />
            {errors.city && <span className="checkout__error">{errors.city}</span>}
          </div>

          <div className="checkout__form-group">
            <label htmlFor="postalCode">Código Postal</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className={errors.postalCode ? 'checkout__input--error' : ''}
            />
            {errors.postalCode && <span className="checkout__error">{errors.postalCode}</span>}
          </div>
        </div>

        <h2 className="checkout__form-title">Información de pago</h2>

        <div className="checkout__form-group">
          <label htmlFor="cardNumber">Número de tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className={errors.cardNumber ? 'checkout__input--error' : ''}
          />
          {errors.cardNumber && <span className="checkout__error">{errors.cardNumber}</span>}
        </div>

        <div className="checkout__form-group">
          <label htmlFor="cardName">Nombre en la tarjeta</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className={errors.cardName ? 'checkout__input--error' : ''}
          />
          {errors.cardName && <span className="checkout__error">{errors.cardName}</span>}
        </div>

        <div className="checkout__form-row">
          <div className="checkout__form-group">
            <label htmlFor="cardExpiry">Fecha de expiración</label>
            <input
              type="text"
              id="cardExpiry"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleChange}
              placeholder="MM/AA"
              className={errors.cardExpiry ? 'checkout__input--error' : ''}
            />
            {errors.cardExpiry && <span className="checkout__error">{errors.cardExpiry}</span>}
          </div>

          <div className="checkout__form-group">
            <label htmlFor="cardCvc">CVC</label>
            <input
              type="text"
              id="cardCvc"
              name="cardCvc"
              value={formData.cardCvc}
              onChange={handleChange}
              placeholder="123"
              className={errors.cardCvc ? 'checkout__input--error' : ''}
            />
            {errors.cardCvc && <span className="checkout__error">{errors.cardCvc}</span>}
          </div>
        </div>

        <div className="checkout__actions">
          <Link to="/home" className="checkout__cancel-button">
            Cancelar
          </Link>
          <button type="submit" className="checkout__submit-button">
            Completar compra ({total.toFixed(2)} €)
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;