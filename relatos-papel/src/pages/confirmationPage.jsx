import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

function ConfirmationPage() {
  return (
    <div className="confirmation">
      <div className="confirmation__content">
        <div className="confirmation__icon">
          <FaCheckCircle size={64} color="#4CAF50" />
        </div>
        <h1 className="confirmation__title">¡Compra completada con éxito!</h1>
        <p className="confirmation__message">
          Gracias por tu compra. Hemos recibido tu pedido y lo estamos procesando.
          Recibirás un email de confirmación con los detalles de tu compra.
        </p>
        <p className="confirmation__order-number">
          Número de pedido: <strong>#{Math.floor(Math.random() * 10000).toString().padStart(5, '0')}</strong>
        </p>
        <div className="confirmation__actions">
          <Link to="/home" className="confirmation__button">
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;