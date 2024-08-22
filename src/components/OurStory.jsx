import React from 'react';
import { motion } from 'framer-motion';

const FeatureItem = ({ icon, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
  >
    {icon}
    <span className="mt-2 text-center text-gray-700">{text}</span>
  </motion.div>
);

const OurStory = () => {
  const features = [
    { icon: "🍽️", text: "Fresh Food" },
    { icon: "👨‍🍳", text: "Premium Services" },
    { icon: "🍷", text: "Delightful Dining" },
    { icon: "🎉", text: "Catering" },
    { icon: "📅", text: "Special Events Booking" },
    { icon: "🚚", text: "Home Delivery" },
    { icon: "💍", text: "Wedding Services" },
    { icon: "🍝", text: "Mouthwatering Dishes" }
  ];

  return (
    <section id="our-story" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-yellow-600">Culinary</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a gastronomic adventure with us, where every dish tells a story and every meal is a celebration of flavors.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://zrtechsolutions.com/demo/html/dhaba/assets/images/s2.png"
                alt="Chef in action"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg">
                <span className="text-2xl font-bold">6+</span>
                <br />
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Crafting Culinary Memories
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From our humble beginnings to becoming a culinary landmark, we've always stayed true to our passion: serving unforgettable meals and creating lasting memories for our guests.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} icon={feature.icon} text={feature.text} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;