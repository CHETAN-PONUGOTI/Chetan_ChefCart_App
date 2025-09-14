import React from 'react';
import '../App.css';

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Added an image container */}
        <div className="modal-image-container">
          <img src={dish.image.replace('300x200', '600x300')} alt={dish.name} />
        </div>

        <div className="modal-body">
          <div className="modal-header">
            <h2>{dish.name}</h2>
            <button className="modal-close-btn" onClick={onClose}>×</button>
          </div>
          <p className="modal-description">{dish.description}</p>
          
          <h4>Ingredients:</h4>
          <ul className="modal-ingredients-list">
            {dish.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>{ingredient.name}</span>
                <span>{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IngredientModal;