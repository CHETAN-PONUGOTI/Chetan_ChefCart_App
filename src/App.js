import React, { useState } from 'react';
import './App.css';
import { dishes as initialDishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

function App() {
  const [dishes] = useState(initialDishes);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  
  // --- MODIFIED STATE ---
  // Replaced the single state with two separate states for clarity.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleVegOnlyChange = (event) => {
    setVegOnly(event.target.checked);
  };

  const handleAddDish = (dishId) => {
    if (!selectedDishes.includes(dishId)) {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter(id => id !== dishId));
  };

  // --- MODIFIED FUNCTION ---
  // Now updates both states when ingredients are viewed.
  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  // --- MODIFIED FUNCTION ---
  // Now resets both states to close the modal.
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  const filteredDishes = dishes
    .filter(dish => selectedCategory === 'ALL' || dish.mealType === selectedCategory)
    .filter(dish => !vegOnly || dish.type === 'VEG')
    .filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="app-container">
      <header className="app-header">
          <div className='img-container'>
            <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_White_9fd26be901.webp&w=1920&q=75" alt="appLogo" className='logo' />
          </div>
          <div>
            <p className='para'>Selected Items: <strong>{selectedDishes.length}</strong></p>
          </div>
      </header>
      <main className='main-layout'>
        <Filters
          activeCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          vegOnly={vegOnly}
          onVegOnlyChange={handleVegOnlyChange}
        />
        <div className='content-area'>
          <DishList
            dishes={filteredDishes}
            onAddDish={handleAddDish}
            onRemoveDish={handleRemoveDish}
            selectedDishes={selectedDishes}
            onViewIngredients={handleViewIngredients}
          />
        </div>
      </main>
      
      {/* --- MODIFIED RENDER LOGIC --- */}
      {/* The modal is now rendered conditionally based on the isModalOpen state. */}
      {isModalOpen && <IngredientModal dish={currentDish} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;