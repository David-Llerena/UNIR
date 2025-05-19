// src/components/Footer.jsx
import React from 'react';
import '../styles/components/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Relatos de Papel</h3>
          <p className="footer-description">
            Tu librería online especializada en literatura en español. Encuentra los mejores títulos de autores hispanohablantes.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Enlaces</h3>
          <ul className="footer-links">
            <li><a href="/home" className="footer-link">Inicio</a></li>
            <li><a href="#" className="footer-link">Sobre nosotros</a></li>
            <li><a href="#" className="footer-link">Contacto</a></li>
            <li><a href="#" className="footer-link">Política de privacidad</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Contacto</h3>
          <address className="footer-description">
            <p>Email: info@relatosdepapel.com</p>
            <p>Teléfono: +593 963 244 569</p>
            <p>Dirección: Calle Librería, 123, Ecuador</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Relatos de Papel. Todos los derechos reservados.
        </p>
        <p>
          Proyecto desarrollado por David.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
