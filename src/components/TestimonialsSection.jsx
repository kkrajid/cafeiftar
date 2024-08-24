import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Amazing food and great service! The atmosphere was wonderful and I will definitely be back.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "A delightful experience from start to finish. The dishes were delicious and the staff was friendly.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "One of the best dining experiences I've had. The food was fantastic and the service was top-notch.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bob Brown",
    text: "The ambiance was perfect, and the food was out of this world!",
    rating: 4,
  },
  {
    id: 5,
    name: "Sara White",
    text: "Loved the experience! Will recommend it to everyone.",
    rating: 5,
  },
  {
    id: 6,
    name: "Tom Black",
    text: "The best restaurant in town. The staff was excellent and the food was superb.",
    rating: 5,
  },
];

const Testimonial = ({ name, text, rating }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {name.charAt(0)}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 flex-grow">{text}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        {isMobile ? (
          <div className="relative">
            <AnimatePresence mode="wait">
              <Testimonial key={currentIndex} {...testimonials[currentIndex]} />
            </AnimatePresence>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;