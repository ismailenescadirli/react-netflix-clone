import React, { useState } from 'react';
import './styles/Search.css'; 
import searchIcon from '../assets/img/search.png'; 

const Search = () => {
  const [searchFilm, setSearchFilm] = useState(''); 
  
  const handleSearchChange = (e) => {
    setSearchFilm(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchFilm.trim()) { 
      console.log(`Arama yapılıyor: ${searchFilm}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <img 
          src={searchIcon} 
          alt="Search" 
          className="search-icon" 
        />
        <input
          type="text"
          value={searchFilm}
          onChange={handleSearchChange}
          placeholder="Search for TV series"
          className="search-input"
        />
      </form>
    </div>
  );
};

export default Search;
