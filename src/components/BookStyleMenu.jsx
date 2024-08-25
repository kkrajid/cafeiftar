import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuData = [
  {
    category: "Appetizers",
    items: [
      { name: "Hummus", description: "Creamy chickpea dip with tahini and olive oil", price: "$8" },
      { name: "Falafel", description: "Deep-fried chickpea balls served with tahini sauce", price: "$7" },
      { name: "Stuffed Grape Leaves", description: "Rice and herbs wrapped in vine leaves", price: "$9" },
    ]
  },
  {
    category: "Turkish Kebap",
    items: [
      { name: "Adana Kebap", description: "Spicy minced meat kebab", price: "Single $239 / Double $429" },
      { name: "Sultana Adana Kebap", description: "Enhanced spice flavored minced kebab", price: "Single $249 / Double $439" },
      { name: "Iskender Kebap", description: "Sliced döner meat over pita with tomato sauce and yogurt", price: "$409" },
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Chicken Shawarma", description: "Marinated chicken wrapped in pita with vegetables", price: "$14" },
      { name: "Lamb Moussaka", description: "Layered eggplant and ground lamb casserole", price: "$16" },
      { name: "Vegetarian Dolma", description: "Stuffed bell peppers with rice and vegetables", price: "$13" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Baklava", description: "Layered pastry with nuts and honey syrup", price: "$6" },
      { name: "Kunafa", description: "Cheese pastry soaked in sweet syrup", price: "$7" },
      { name: "Turkish Delight", description: "Gel-based confection with various flavors", price: "$5" },
    ]
  }
];

const BookStyleMenu = () => {
  const flipBookRef = useRef();

  const MenuPage = ({ pageData }) => (
    <div className="flex flex-col justify-between h-full p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">{pageData.category}</h2>
      <ul>
        {pageData.items.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="font-semibold text-lg">{item.name} - {item.price}</div>
            <div className="text-gray-600">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <HTMLFlipBook 
        width={400} 
        height={600} 
        size="stretch"
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        showCover={true}
        className="shadow-2xl rounded-lg overflow-hidden menu-book"
        ref={flipBookRef}
      >
        {/* Cover Page */}
        <div className="flex items-center justify-center h-full p-6 bg-purple-800 text-white text-4xl font-bold">
          Our Menu
        </div>

        {/* Menu Pages */}
        {menuData.map((category, index) => (
          <MenuPage key={index} pageData={category} />
        ))}

        {/* Back Cover */}
        <div className="flex items-center justify-center h-full p-6 bg-purple-800 text-white text-xl font-bold">
          Thank you for dining with us!
        </div>
      </HTMLFlipBook>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => flipBookRef.current.pageFlip().flipPrev()}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => flipBookRef.current.pageFlip().flipNext()}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default BookStyleMenu;
