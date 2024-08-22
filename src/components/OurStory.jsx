import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FeatureItem = ({ icon, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
  >
    <span className="text-3xl">{icon}</span>
    <span className="mt-2 text-center text-gray-700 text-sm md:text-base">{text}</span>
  </motion.div>
);

const ImageSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://zrtechsolutions.com/demo/html/dhaba/assets/images/s2.png",
    "https://www.collinsdictionary.com/images/full/restaurant_135621509_1000.jpg?version=6.0.28",
    "https://media.cntraveler.com/photos/654bd5e13892537a8ded0947/16:9/w_2560%2Cc_limit/phy2023.din.oss.restaurant-lr.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-60 md:h-80 lg:h-[440px]">
  <div className="w-full h-full overflow-hidden rounded-lg shadow-2xl p-4 relative">
    {images.map((src, index) => (
      <motion.img
        key={src}
        src={src}
        alt={`Slideshow image ${index + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: index === currentImage ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    ))}
  </div>
  <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-4 md:p-6 rounded-full shadow-2xl z-10">
    <span className="text-xl md:text-2xl font-bold">6+</span>
    <br />
    <span className="text-xs md:text-sm">Years of Excellence</span>
  </div>
</div>

  );
};

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
    <section id="our-story" className="py-20 bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-yellow-600">Culinary</span> Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a gastronomic adventure with us, where every dish tells a story and every meal is a celebration of flavors.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <ImageSlideshow />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Crafting Culinary Memories
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              From our humble beginnings to becoming a culinary landmark, we've always stayed true to our passion: serving unforgettable meals and creating lasting memories for our guests.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
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