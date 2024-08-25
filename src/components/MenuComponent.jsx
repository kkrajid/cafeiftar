import React, { useState } from 'react';
import { X, ShoppingCart, Plus } from 'lucide-react';

const menuCategories = [
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'lunch', name: 'Lunch' },
  { id: 'dinner', name: 'Dinner' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' },
];

const menuItems = {
  breakfast: [
    { id: 'b1', name: 'Eggs Benedict', price: 12.99, description: 'Poached eggs on English muffin with hollandaise sauce', image: '/api/placeholder/400/300' },
    { id: 'b2', name: 'Avocado Toast', price: 9.99, description: 'Smashed avocado on artisan bread with cherry tomatoes', image: '/api/placeholder/400/300' },
    { id: 'b3', name: 'Pancake Stack', price: 8.99, description: 'Fluffy pancakes served with maple syrup and butter', image: '/api/placeholder/400/300' },
    { id: 'b4', name: 'Breakfast Burrito', price: 10.99, description: 'Scrambled eggs, cheese, and bacon wrapped in a flour tortilla', image: '/api/placeholder/400/300' },
    { id: 'b5', name: 'Greek Yogurt Parfait', price: 7.99, description: 'Layers of Greek yogurt, granola, and fresh berries', image: '/api/placeholder/400/300' },
  ],
  lunch: [
    { id: 'l1', name: 'Chicken Caesar Salad', price: 11.99, description: 'Grilled chicken breast on romaine lettuce with Caesar dressing', image: '/api/placeholder/400/300' },
    { id: 'l2', name: 'Veggie Burger', price: 10.99, description: 'Plant-based patty with lettuce, tomato, and vegan mayo', image: '/api/placeholder/400/300' },
    { id: 'l3', name: 'Margherita Pizza', price: 13.99, description: 'Classic pizza with tomato sauce, mozzarella, and basil', image: '/api/placeholder/400/300' },
    { id: 'l4', name: 'Grilled Cheese Sandwich', price: 8.99, description: 'Melted cheddar and swiss cheese on sourdough bread', image: '/api/placeholder/400/300' },
    { id: 'l5', name: 'Quinoa Bowl', price: 12.99, description: 'Quinoa with roasted vegetables, avocado, and tahini dressing', image: '/api/placeholder/400/300' },
  ],
  dinner: [
    { id: 'd1', name: 'Grilled Salmon', price: 18.99, description: 'Fresh salmon fillet with lemon butter sauce and asparagus', image: '/api/placeholder/400/300' },
    { id: 'd2', name: 'Beef Tenderloin', price: 24.99, description: 'Prime cut beef served with mashed potatoes and seasonal vegetables', image: '/api/placeholder/400/300' },
    { id: 'd3', name: 'Vegetable Stir Fry', price: 14.99, description: 'Assorted vegetables stir-fried in a savory sauce with steamed rice', image: '/api/placeholder/400/300' },
    { id: 'd4', name: 'Eggplant Parmesan', price: 16.99, description: 'Breaded eggplant slices layered with marinara sauce and mozzarella', image: '/api/placeholder/400/300' },
    { id: 'd5', name: 'Seafood Pasta', price: 19.99, description: 'Linguine with mixed seafood in a white wine garlic sauce', image: '/api/placeholder/400/300' },
  ],
  desserts: [
    { id: 'ds1', name: 'Chocolate Lava Cake', price: 7.99, description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream', image: '/api/placeholder/400/300' },
    { id: 'ds2', name: 'New York Cheesecake', price: 6.99, description: 'Creamy cheesecake with a graham cracker crust', image: '/api/placeholder/400/300' },
    { id: 'ds3', name: 'Fruit Tart', price: 5.99, description: 'Buttery tart shell filled with custard and topped with fresh fruits', image: '/api/placeholder/400/300' },
    { id: 'ds4', name: 'Tiramisu', price: 6.99, description: 'Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream', image: '/api/placeholder/400/300' },
    { id: 'ds5', name: 'Apple Pie', price: 5.99, description: 'Classic apple pie with a flaky crust, served with whipped cream', image: '/api/placeholder/400/300' },
  ],
  beverages: [
    { id: 'bv1', name: 'Fresh Lemonade', price: 3.99, description: 'Freshly squeezed lemonade with mint leaves', image: '/api/placeholder/400/300' },
    { id: 'bv2', name: 'Iced Coffee', price: 4.99, description: 'Cold brew coffee served over ice', image: '/api/placeholder/400/300' },
    { id: 'bv3', name: 'Fruit Smoothie', price: 5.99, description: 'Blend of seasonal fruits with yogurt', image: '/api/placeholder/400/300' },
    { id: 'bv4', name: 'Green Tea', price: 3.99, description: 'Premium Japanese green tea, hot or iced', image: '/api/placeholder/400/300' },
    { id: 'bv5', name: 'Sparkling Water', price: 2.99, description: 'Chilled sparkling water with a slice of lemon', image: '/api/placeholder/400/300' },
  ],
};

const MenuComponent = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Our Menu</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory].map((item) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-lg font-semibold text-yellow-400">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-2 rounded-full transition-all duration-500 hover:from-purple-500 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="mt-8 bg-purple-100 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Your Cart</h3>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <div>
                    <span className="mr-4">${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold text-purple-900">${getTotalPrice()}</span>
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;