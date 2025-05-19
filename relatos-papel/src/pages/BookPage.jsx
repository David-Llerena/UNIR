import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import Cart from '../components/Cart';
import books from '../data/books.js';
import '../styles/components/book-detail.css';

function BookPage({ cart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [cartVisible, setCartVisible] = useState(false);
  
  // Buscar el libro por ID
  useEffect(() => {
    const bookId = parseInt(id, 10);
    const foundBook = books.find(book => book.id === bookId);
    
    if (foundBook) {
      setBook(foundBook);
    } else {
      // Si no se encuentra el libro, redirigir a la página principal
      navigate('/home');
    }
  }, [id, navigate]);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  // Calcular el número de items en el carrito
  const itemCount = cart.items ? cart.items.reduce((count, item) => count + item.quantity, 0) : 0;

  // Mostrar mensaje de carga mientras se busca el libro
  if (!book) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="book-page">
      <BookDetail 
        book={book} 
        addToCart={cart.addToCart} 
      />
      
      <button 
        className="cart-toggle-button"
        onClick={toggleCart}
      >
        {cartVisible ? 'Ocultar Carrito' : `Ver Carrito (${itemCount})`}
      </button>
      
      {cartVisible && (
        <Cart 
          cartItems={cart.items || []}
          removeFromCart={cart.removeFromCart}
          updateQuantity={cart.updateQuantity}
          total={cart.items ? cart.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2) : '0.00'}
        />
      )}
    </div>
  );
}

export default BookPage;