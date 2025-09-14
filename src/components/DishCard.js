import React from 'react';

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-details">
        <h3>{dish.name} <span className={`type-indicator ${dish.type.toLowerCase()}`}>●</span></h3>
        <p>{dish.description}</p>
      </div>
      <div className="dish-actions">
        <button className="ingredients-btn" onClick={() => onViewIngredients(dish)}>
          Ingredients
        </button>
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
            Remove
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default DishCard;