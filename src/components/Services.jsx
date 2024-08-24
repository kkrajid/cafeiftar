import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="service-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
  >
    <div className="w-24 h-24 mb-6 bg-[#570987]  rounded-full flex items-center justify-center">
      <img
        src={service.image}
        alt={service.title}
        className="w-16 h-16 "
        style={{ filter: "brightness(0) invert(1)" }} 
      />
    </div>
    <h3 className="text-2xl font-bold mb-3 text-[#570987]">
      {service.title}
    </h3>
    <p className="text-gray-600 text-center">
      {service.description}
    </p>
  </motion.div>
);

function Services() {
  // const serviceList = [
  //   {
  //     id: 1,
  //     image: "/api/placeholder/64/64",
  //     title: 'Dine In',
  //     description: 'Experience Flavorful Moments: Dine In and Savor Every Bite.',
  //   },
  //   {
  //     id: 2,
  //     image: "/api/placeholder/64/64",
  //     title: 'Take Away',
  //     description: 'Delight in Convenience: Grab Your Favorite Flavors To Go.',
  //   },
  //   {
  //     id: 3,
  //     image: "/api/placeholder/64/64",
  //     title: 'Home Delivery',
  //     description: 'Bringing Joy to Your Doorstep: Enjoy the Comfort of Home Delivery.',
  //   },
  // ];

  const serviceList = [
    {
      id: 1,
      image: "https://zrtechsolutions.com/demo/html/dhaba/assets/images/icons/dining.svg",
      title: 'Dine In',
      description: 'Experience Flavorful Moments: Dine In and Savor Every Bite.',
    },
    {
      id: 2,
      image: "https://zrtechsolutions.com/demo/html/dhaba/assets/images/icons/take-away.svg",
      title: 'Take Away',
      description: 'Delight in Convenience: Grab Your Favorite Flavors To Go.',
    },
    {
      id: 3,
      image: "https://zrtechsolutions.com/demo/html/dhaba/assets/images/icons/food-delivery.svg",
      title: 'Home Delivery',
      description: 'Bringing Joy to Your Doorstep: Enjoy the Comfort of Home Delivery.',
    },
  ];

  return (
    <section id="services-menu" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#570987]"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;