// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/book-card.css';

function BookCard({ book, addToCart }) {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
    alert(`Añadido al carrito: ${book.title}`);
  };

  return (
    <div className="book-card">
      <div className="book-card-img">
        <img 
          src={book.coverImage} 
          alt={book.title}
        />
      </div>
      <div className="book-card-content">
        <Link to={`/book/${book.id}`}>
          <h3 className="book-card-title">{book.title}</h3>
        </Link>
        <p className="book-card-author">{book.author}</p>
        <div className="book-card-price">
          {book.price.toFixed(2)} €
        </div>
        <button 
          className="book-card-button"
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default BookCard;