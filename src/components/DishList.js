import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  if (dishes.length === 0) {
    return <p className="no-dishes-message">No dishes match your criteria. Try changing the filters!</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.includes(dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;