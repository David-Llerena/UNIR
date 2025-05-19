import React, { useState, useEffect } from 'react';
import books from '../data/books.js';
import '../styles/components/catalogo.css';
import { Link } from 'react-router-dom';

function CatPage({ cart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  // Filtra libros cuando cambia el término de búsqueda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBooks(books);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(searchTermLower) || 
      book.author.toLowerCase().includes(searchTermLower) ||
      (book.category && book.category.toLowerCase().includes(searchTermLower))
    );
    setFilteredBooks(filtered);
  }, [searchTerm]);

  return (
    <div className="catalogo-page">
      <section className="catalogo-hero">
        <h1>Catálogo</h1>
        <p>
          <strong>
            Aquí podrás encontrar todos los títulos que tenemos en existencia.
          </strong>
        </p>
        
        {/* Barra de búsqueda */}
        <div className="catalogo-search">
          <input
            type="text"
            placeholder="Buscar por título, autor o categoría..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="catalogo-search__input"
          />
        </div>
      </section>
      
      <section className="catalogo-grid-container">
        <div className="catalogo-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <Link to={`/book/${book.id}`} className="catalogo-card-link" key={book.id}>
                <div className="catalogo-card">
                  <div className="catalogo-card__image">
                    {book.coverImage ? (
                      <img src={book.coverImage} alt={book.title} />
                    ) : (
                      <div className="catalogo-placeholder">
                        <span>{book.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="catalogo-card__info">
                    <h3 className="catalogo-card__title">{book.title}</h3>
                    <p className="catalogo-card__author">{book.author}</p>
                    <p className="catalogo-card__price">${book.price}</p>
                    <button
                      className="btn btn-secondary"
                      onClick={e => {
                        e.preventDefault(); // Evita navegar al detalle si solo quieres agregar al carrito
                        cart.addToCart(book);
                      }}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="catalogo-no-results">
              <p>No se encontraron libros que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>
      
      <div className="catalogo-volver">
        <Link to="/home" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default CatPage;