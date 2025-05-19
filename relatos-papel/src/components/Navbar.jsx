import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/components/navbar.css';
import logo from '/src/img/logo.png';

function Navbar({ cart }) {
  // Añade estas verificaciones de seguridad
  const cartItemsCount = cart?.items?.length || 0;
  
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/home" className="navbar__logo">
          <img src={logo} alt="Relatos de Papel" className="navbar__logo-image" />
        </Link>
        
        <div className="navbar__links">
          <Link to="/home" className="navbar__link">Inicio</Link>
          <Link to="/catPage" className="navbar__link">Catálogo</Link>
          <Link to="/cart" className="navbar__cart-link">
            <FaShoppingCart className="navbar__cart-icon" />
            {cartItemsCount > 0 && (
              <span className="navbar__cart-badge">{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;