import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/landing.css';

function Landing({ secondsLeft = 5 }) {
  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__title">Relatos de Papel</h1>
        <p className="landing__subtitle">Tu librería online especializada en literatura en español</p>
        
        <div className="landing__info">
          <p>Descubre historias increíbles en tu idioma</p>
          <div className="landing__countdown">
            <p>Serás redirigido a la tienda en</p>
            <div className="landing__timer">
              {secondsLeft}
            </div>
            <p>segundos</p>
          </div>
        </div>
        
        <Link to="/home" className="landing__button">
          Entrar ahora
        </Link>
      </div>
    </div>
  );
}

export default Landing;