// src/components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';
import '../styles/components/book-list.css';

function BookList({ books, addToCart }) {
  if (!books || books.length === 0) {
    return (
      <div className="book-list-container">
        <h2 className="book-list-title">Catálogo de libros</h2>
        <div className="book-list-empty">
          No hay libros disponibles en este momento.
        </div>
      </div>
    );
  }

  return (
    <div className="book-list-container">
      {/* <h2 className="book-list-title">Catálogo de libros</h2> */}
      <div className="book-list">
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;