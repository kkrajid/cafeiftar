import React from 'react';
import { Coffee, Utensils, Clock, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-purple-100 p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-purple-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-purple-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PopularItem = ({ name, price, image, description }) => (
    <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <span className="text-lg font-semibold text-yellow-400">${price}</span>
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold py-1 px-3 rounded-full">
          Popular
        </div>
      </div>
  
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{description}</p>
        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-3 rounded-full transition-all duration-500 hover:from-purple-500 hover:to-purple-700 shadow-lg hover:shadow-xl">
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7.5a1 1 0 001 1.5h12a1 1 0 001-1.5L17 13M7 13l-2-5h14l-2 5"
              />
            </svg>
            Add to Cart
          </span>
        </button>
      </div>
  
      <div className="absolute inset-0 bg-purple-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <h4 className="text-2xl font-bold mb-2">{name}</h4>
          <p className="text-sm mb-4">{description}</p>
          <button className="bg-yellow-400 text-purple-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
  


const FeaturesAndPopular = () => {
  const features = [
    { icon: Coffee, title: "Premium Quality", description: "We use only the finest ingredients in all our dishes." },
    { icon: Utensils, title: "Diverse Menu", description: "From local favorites to international cuisine, we have it all." },
    { icon: Clock, title: "Fast Service", description: "Quick preparation without compromising on quality." },
    { icon: Award, title: "Award Winning", description: "Recognized for our exceptional food and service." },
  ];

  const popularItems = [
    { name: "Spicy Chicken Burger", price: 8.99, image: "https://assets.unileversolutions.com/recipes-v2/250199.jpg?im=Resize,height=580;Crop,size=(932,580),gravity=Center", description: "Juicy chicken with our secret spicy sauce." },
    { name: "Vegetarian Pizza", price: 12.99, image: "https://img1.wsimg.com/isteam/ip/0bb42ef4-7b3c-462c-8e70-6712a50e84dc/B2C-JuneContent-VegetarianToppings-Cover.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280", description: "Loaded with fresh veggies and melted cheese." },
    { name: "Classic Beef Steak", price: 15.99, image: "/api/placeholder/400/300", description: "Tender beef cooked to perfection." },
    { name: "Mango Tango Smoothie", price: 4.99, image: "/api/placeholder/400/300", description: "Refreshing blend of mangoes and tropical fruits." },
  ];

  return (
    <section className="py-12 px-4 bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-8">Popular Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, index) => (
            <PopularItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndPopular;