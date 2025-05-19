import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import CatPage from './pages/CatPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useCart from './hooks/useCart';
import './styles/main.css';

function App() {
  // Usando nuestro custom hook useCart
  const cart = useCart();

  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} />
        <main className="app__main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage cart={cart} />} />
          <Route path="/catPage" element={<CatPage cart={cart} />} />
          <Route path="/book/:id" element={<BookPage cart={cart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} /> 
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          {/* <Route path="/confirmation" element={<ConfirmationPage />} /> */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;