import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter A Song, Album, or Artist" 
        className="SearchBar-input"
      />
      <button className="SearchBar-button">SEARCH</button>
    </div>
  );
}

export default SearchBar;