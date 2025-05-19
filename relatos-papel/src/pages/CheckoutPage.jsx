import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/components/checkout.css';

function CheckoutPage({ cart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    identificacion: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    telefono: '',
    email: '',
    notasAdicionales: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calcular el total del carrito
  const calculateTotal = () => {
    if (!cart.items || cart.items.length === 0) return 0;
    
    const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 4.99;
    const tax = subtotal * 0.21;
    return (subtotal + shipping + tax).toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['nombre', 'apellidos', 'identificacion', 'direccion', 'ciudad', 'codigoPostal', 'email'];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'Este campo es obligatorio';
      }
    });
    
    // Validación básica de email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (validateForm()) {
      // Mostrar alerta de compra completada
      alert('¡Compra realizada con éxito! Gracias por tu pedido.');
      
      // Vaciar el carrito
      cart.clearCart();
      
      // Redirigir a la página principal
      navigate('/home');
    } else {
      // Scroll al primer error
      const firstErrorField = document.querySelector('.checkout__input--error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Si no hay elementos en el carrito, mostrar mensaje
  if (!cart.items || cart.items.length === 0) {
    return (
      <div className="checkout-empty">
        <FaExclamationTriangle className="checkout-empty__icon" />
        <h2 className="checkout-empty__title">Tu carrito está vacío</h2>
        <p className="checkout-empty__text">Agrega algunos productos antes de proceder al pago.</p>
        <Link to="/catPage" className="checkout-empty__button">
          <FaArrowLeft /> Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="checkout__title">Finalizar Compra</h1>
      
      <div className="checkout__container">
        <div className="checkout__form-container">
          <h2 className="checkout__section-title">Información de Envío</h2>
          <form className="checkout__form" onSubmit={handleSubmit}>
            <div className="checkout__form-row">
              <div className="checkout__form-group">
                <label htmlFor="nombre" className="checkout__label">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className={`checkout__input ${errors.nombre && formSubmitted ? 'checkout__input--error' : ''}`}
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                {errors.nombre && formSubmitted && <p className="checkout__error">{errors.nombre}</p>}
              </div>
              
              <div className="checkout__form-group">
                <label htmlFor="apellidos" className="checkout__label">Apellidos *</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  className={`checkout__input ${errors.apellidos && formSubmitted ? 'checkout__input--error' : ''}`}
                  value={formData.apellidos}
                  onChange={handleChange}
                  placeholder="Tus apellidos"
                />
                {errors.apellidos && formSubmitted && <p className="checkout__error">{errors.apellidos}</p>}
              </div>
            </div>
            
            <div className="checkout__form-group">
              <label htmlFor="identificacion" className="checkout__label">DNI/NIE/Pasaporte *</label>
              <input
                type="text"
                id="identificacion"
                name="identificacion"
                className={`checkout__input ${errors.identificacion && formSubmitted ? 'checkout__input--error' : ''}`}
                value={formData.identificacion}
                onChange={handleChange}
                placeholder="Tu documento de identidad"
              />
              {errors.identificacion && formSubmitted && <p className="checkout__error">{errors.identificacion}</p>}
            </div>
            
            <div className="checkout__form-group">
              <label htmlFor="direccion" className="checkout__label">Dirección de envío *</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                className={`checkout__input ${errors.direccion && formSubmitted ? 'checkout__input--error' : ''}`}
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle, número, piso..."
              />
              {errors.direccion && formSubmitted && <p className="checkout__error">{errors.direccion}</p>}
            </div>
            
            <div className="checkout__form-row">
              <div className="checkout__form-group">
                <label htmlFor="ciudad" className="checkout__label">Ciudad *</label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  className={`checkout__input ${errors.ciudad && formSubmitted ? 'checkout__input--error' : ''}`}
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Tu ciudad"
                />
                {errors.ciudad && formSubmitted && <p className="checkout__error">{errors.ciudad}</p>}
              </div>
              
              <div className="checkout__form-group">
                <label htmlFor="codigoPostal" className="checkout__label">Código Postal *</label>
                <input
                  type="text"
                  id="codigoPostal"
                  name="codigoPostal"
                  className={`checkout__input ${errors.codigoPostal && formSubmitted ? 'checkout__input--error' : ''}`}
                  value={formData.codigoPostal}
                  onChange={handleChange}
                  placeholder="Código postal"
                />
                {errors.codigoPostal && formSubmitted && <p className="checkout__error">{errors.codigoPostal}</p>}
              </div>
            </div>
            
            <div className="checkout__form-row">
              <div className="checkout__form-group">
                <label htmlFor="telefono" className="checkout__label">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="checkout__input"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div className="checkout__form-group">
                <label htmlFor="email" className="checkout__label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`checkout__input ${errors.email && formSubmitted ? 'checkout__input--error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu correo electrónico"
                />
                {errors.email && formSubmitted && <p className="checkout__error">{errors.email}</p>}
              </div>
            </div>
            
            <div className="checkout__form-group">
              <label htmlFor="notasAdicionales" className="checkout__label">Notas adicionales</label>
              <textarea
                id="notasAdicionales"
                name="notasAdicionales"
                className="checkout__textarea"
                value={formData.notasAdicionales}
                onChange={handleChange}
                placeholder="Instrucciones especiales para la entrega..."
                rows={3}
              />
            </div>
          </form>
        </div>
        
        <div className="checkout__summary">
          <h2 className="checkout__section-title">Resumen del Pedido</h2>
          
          <div className="checkout__items">
            {cart.items.map(item => (
              <div key={item.id} className="checkout__item">
                <img 
                  src={item.coverImage} 
                  alt={item.title} 
                  className="checkout__item-image" 
                />
                <div className="checkout__item-details">
                  <h3 className="checkout__item-title">{item.title}</h3>
                  <p className="checkout__item-author">por {item.author}</p>
                  <div className="checkout__item-price-row">
                    <span>{item.quantity} x {item.price.toFixed(2)} €</span>
                    <strong>{(item.price * item.quantity).toFixed(2)} €</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="checkout__totals">
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span>
                {cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} €
              </span>
            </div>
            <div className="checkout__total-row">
              <span>Gastos de envío</span>
              <span>4.99 €</span>
            </div>
            <div className="checkout__total-row">
              <span>IVA (21%)</span>
              <span>
                {(cart.items.reduce((total, item) => total + item.price * item.quantity, 0) * 0.21).toFixed(2)} €
              </span>
            </div>
            <div className="checkout__total-row checkout__total-row--final">
              <span>Total</span>
              <span>{calculateTotal()} €</span>
            </div>
          </div>
          
          <div className="checkout__actions">
            <Link to="/cart" className="checkout__back-button">
              <FaArrowLeft /> Volver al carrito
            </Link>
            <button 
              type="button" 
              className="checkout__submit-button"
              onClick={handleSubmit}
            >
              <FaCheck /> Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;