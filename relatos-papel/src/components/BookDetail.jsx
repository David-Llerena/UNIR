import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/book-detail.css';
import pagoSeguroImg from '../img/pagoseguro.png';

function BookDetail({ book, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  // Definir las funciones para aumentar y disminuir cantidad
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Si tienes una función addToCart en las props, úsala
    if (addToCart) {
      addToCart(book, quantity);
    }
  };

  const handleBuyNow = () => {
    // Lógica para compra directa
    handleAddToCart();
    // Aquí podrías redirigir al checkout
    alert(`Comprando ahora: ${quantity} unidades de "${book.title}"`);
  };

  return (
    <div className="book-detail-container">
      <div className="book-detail-gallery">
        <div className="book-detail-main-image">
          <img src={book.coverImage} alt={book.title} />
        </div>
        {book.images && book.images.length > 0 && (
          <div className="book-detail-thumbnails">
            {book.images.map((image, idx) => (
              <div key={idx} className="book-thumbnail">
                <img src={image} alt={`${book.title} - vista ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="book-detail-info">
        <h1 className="book-detail-title">{book.title}</h1>
        <div className="book-detail-author">
          <strong>Autor:</strong> <span>{book.author}</span>
        </div>
        {book.editorial && (
          <div className="book-detail-publisher">
            <strong>Editorial:</strong> {book.editorial}
          </div>
        )}
        <div className="book-detail-price">
          ${book.price?.toFixed(2)}
        </div>
        <div className="book-detail-tax-info">
          Impuesto incluido. Los <Link to="/shipping" className="book-detail-link">gastos de envío</Link> se calculan en la pantalla de pago.
        </div>


        <div className="book-detail-pago-img">
          <img
            src={pagoSeguroImg}
            alt="Pago seguro"
          />
        </div>


      <div className="book-detail-quantity">
        <label>Cantidad</label>
        <div className="quantity-selector">
          <button
            type="button"
            className="quantity-btn"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="quantity-input"
          />
          <button
            type="button"
            className="quantity-btn"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
        <div className="book-detail-actions">
          <button
            className="btn-add-to-cart"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
          <button
            className="btn-buy-now"
            onClick={handleBuyNow}
          >
            Comprar ahora
          </button>
        </div>

        <div className="book-detail-synopsis book-detail-ficha">
          <h3>Sinopsis:</h3>
          <div className="book-detail-description">
            {book.description || book.synopsis}
          </div>
        </div>

        {/* Ficha Técnica */}
        <div className="book-detail-ficha">
          <h3>Ficha técnica</h3>
          <div className="book-detail-ficha-table">
            {book.isbn && (
              <div><strong>ISBN:</strong> {book.isbn}</div>
            )}
            {book.year && (
              <div><strong>Año de publicación:</strong> {book.year}</div>
            )}
            {book.language && (
              <div><strong>Idioma:</strong> {book.language}</div>
            )}
            {book.pages && (
              <div><strong>Páginas:</strong> {book.pages}</div>
            )}
            {book.editorial && (
              <div><strong>Editorial:</strong> {book.editorial}</div>
            )}
            {book.category && (
              <div><strong>Categoría:</strong> {book.category}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;