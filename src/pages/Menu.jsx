import React from 'react';

function Menu() {
  // Sample data for demonstration
  const dishes = [
    { id: 1, name: 'Dish 1', image: '/assets/images/dish1.jpg', description: 'Delicious dish 1', price: '12.99' },
    { id: 2, name: 'Dish 2', image: '/assets/images/dish2.jpg', description: 'Delicious dish 2', price: '15.99' },
    // Add more dishes
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Menu</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {dishes.map(dish => (
          <div key={dish.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-700 mb-2">{dish.description}</p>
              <p className="text-orange-500 font-bold">${dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
