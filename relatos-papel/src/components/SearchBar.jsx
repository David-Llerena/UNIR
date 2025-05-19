// src/components/SearchBar.jsx
import React, { useState } from 'react';
import '../styles/components/search-bar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-bar-container">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Buscar por título, autor o género..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-bar-button">
          Buscar
        </button>
      </form>
      
      {/* Opcional: Sugerencias de búsqueda */}
      {/*
      <div className="search-suggestions">
        {suggestions.map((item, index) => (
          <div key={index} className="suggestion-item">
            {item}
          </div>
        ))}
      </div>
      */}
    </div>
  );
}

export default SearchBar;