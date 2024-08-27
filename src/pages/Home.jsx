import React from 'react';
import Hero from '../components/Hero';
import MenuHighlights from '../components/MenuHighlights';
import TestimonialsSection from '../components/TestimonialsSection';
import OurDelicious from '../components/OurDelicious'; // Import the OurDelicious component
import Services from '../components/Services';
import OurStory from '../components/OurStory';
import FeaturesAndPopular from '../components/FeaturesAndPopular';
import ImageGallery from '../components/ImageGallery';
import RestaurantImageGallery from '../components/RestaurantImageGallery';

function Home() {
  // Sample data for demonstration
  const dishes = [
    { id: 1, name: 'Dish 1', image: '/assets/images/dish1.jpg', description: 'Delicious dish 1', price: '12.99' },
    { id: 2, name: 'Dish 2', image: '/assets/images/dish2.jpg', description: 'Delicious dish 2', price: '15.99' },
    // Add more dishes
  ];

  const reviews = [
    { id: 1, text: 'Amazing food and great service!', author: 'dssds' },
    { id: 2, text: 'The best restaurant in town.', author: 'Jdsds' },
    // Add more reviews
  ];

  return (
    <div>
      <Hero />
      <FeaturesAndPopular/>
      {/* <Services/> */}
      <OurStory/>
      {/* <MenuHighlights dishes={dishes} /> */}
      <ImageGallery/>
      <RestaurantImageGallery/>
      {/* <OurDelicious dishes={dishes} />  */}
      <TestimonialsSection />
    </div>
  );
}

export default Home;
