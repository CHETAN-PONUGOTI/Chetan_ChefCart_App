import React from 'react';
import '../App.css';

const categories = ['ALL', 'STARTER', 'MAIN COURSE', 'SIDES', 'DESSERT'];

function Filters({ activeCategory, onCategoryChange, searchTerm, onSearchChange, vegOnly, onVegOnlyChange }) {
  return (
    <div className="filters-container">
      <div className="search-veg-filters">
        <input
          type="text"
          placeholder="Search for a dish..."
          className="search-bar"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <div className="veg-toggle">
          <label>
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={onVegOnlyChange}
            />
            Veg Only
          </label>
        </div>
      </div>
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;