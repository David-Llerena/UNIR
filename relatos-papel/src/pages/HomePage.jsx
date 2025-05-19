import React from 'react';
import { Link } from 'react-router-dom';
import books from '../data/books.js'; // Ajusta la ruta si es necesario
import '../styles/components/homePage.css';
import storeImg from '../img/store.png';

function HomePage({ cart }) {
  // Selecciona los primeros 3 libros como destacados (puedes cambiar la lógica si tienes un campo "featured")
  const featuredBooks = books.slice(0, 3);

  const handleAddFeatured = (book) => {
    cart.addToCart(book);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1>Bienvenido a <strong>Relatos de Papel</strong></h1>
          <p>Donde cada libro cuenta una historia, y cada historia encuentra su lector</p>
          <p>Únete a miles de lectores que descubren nuevos mundos cada día. Explora nuestras recomendaciones, reseñas y colecciones personalizadas.</p>

        </div>
        <div className="hero__image">
          <div>
            <img
              src={storeImg}  
              alt="Personas comprando libros en línea"
              style={{ maxWidth: '90%', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <div className="about__content">
            <div className="about__text">
              <p>
                Relatos de Papel nació de la pasión por la literatura y la creencia de que los libros 
                son puentes hacia mundos infinitos. Nuestra librería está dedicada a ofrecer una 
                cuidadosa selección de títulos que inspiran, entretienen y transforman.
              </p>
              <p>
                Desde clásicos atemporales hasta las últimas novedades editoriales, cada obra en 
                nuestro catálogo ha sido elegida con dedicación para enriquecer tu biblioteca personal.
              </p>
              <Link to="/nosotros" className="btn btn-secondary">Conoce nuestra historia</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured">
        <div className="container">
          <h2>Libros Destacados</h2>
          <div className="featured__grid">
            {featuredBooks.map(book => (
              <Link to={`/book/${book.id}`} key={book.id} className="book-card-link">
                <div className="book-card">
                  <div className="book-card__image">
                    {book.coverImage ? (
                      <img src={book.coverImage} alt={book.title} />
                    ) : (
                      <div className="placeholder-book">
                        <span>{book.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="book-card__info">
                    <h3>{book.title}</h3>
                    <p className="book-card__author">{book.author}</p>
                    <p className="book-card__price">${book.price}</p>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        e.preventDefault(); // Evitar navegación al hacer clic en el botón
                        handleAddFeatured(book);
                      }}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="featured__cta">
            <Link to="/catPage" className="btn btn-secondary">Ver todo el catálogo</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>Lo que dicen nuestros lectores</h2>
          <div className="testimonials__grid">
            <div className="testimonial-card">
              <p className="testimonial-card__text">
                "Relatos de Papel ha transformado mi experiencia de compra de libros. Su selección es exquisita y el servicio, excepcional."
              </p>
              <p className="testimonial-card__author">— María González</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-card__text">
                "Siempre encuentro joyas literarias que no había visto en otras librerías. Su catálogo es verdaderamente único."
              </p>
              <p className="testimonial-card__author">— Javier Rodríguez</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-card__text">
                "La atención personalizada y las recomendaciones hacen que cada visita a la web sea una experiencia enriquecedora."
              </p>
              <p className="testimonial-card__author">— Ana Martínez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__content">
            <h2>Únete a nuestra comunidad de lectores</h2>
            <p>Recibe recomendaciones personalizadas, noticias sobre lanzamientos y ofertas exclusivas.</p>
            <form className="newsletter__form">
              <input type="email" placeholder="Tu correo electrónico" required />
              <button type="submit" className="btn btn-primary">Suscribirme</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
