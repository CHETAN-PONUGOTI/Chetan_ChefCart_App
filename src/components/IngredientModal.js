import React from 'react';
import '../App.css';

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <h4>Ingredients:</h4>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientModal;