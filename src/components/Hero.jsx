import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import images from '../assets/images';

// Color variables
const colors = {
  primary: '#8B5CF6', // Purple-500
  primaryLight: '#A78BFA', // Purple-400
  primaryDark: '#7C3AED', // Purple-600
  secondary: '#F9FAFB', // Gray-50
  text: '#FFFFFF', // White
  textLight: '#E9D5FF', // Purple-100
  accent: '#FBBF24', // Yellow-400
  background: '#000000', // Black
  overlay: 'rgba(0, 0, 0, 0.5)', // Black with 70% opacity
};

const slides = [
  {
    id: 1,
    image: images.hero.slider1,
    title: 'Chicken Meal!',
    price: 'START FROM $5.99*',
    subtitle: 'Fresh Chicken, Mustard Sauce, Onion, Bread with 1 Liter Cold Drink',
  },
  {
    id: 2,
    image: images.hero.slider2,
    price: 'START FROM $0.99*',
    title: 'Fresh Juices!',
    subtitle: 'Banana, Apple, Strawberry, Mango in Large & Medium Sizes',
  },
  {
    id: 3,
    image: images.hero.slider3,
    price: 'START FROM $7.99*',
    title: 'Sea Food!',
    subtitle: 'Garlic Sauce, Mustard Sauce, Onion, Bread with 1 Liter Cold Drink',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const nextSlide = useCallback(() => {
    resetTimeout();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [resetTimeout]);

  const prevSlide = useCallback(() => {
    resetTimeout();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [resetTimeout]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, nextSlide, resetTimeout]);

  const handleOrder = () => {
    console.log('Order placed');
  };

  return (
    <section id="home-menu" className="relative h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ backgroundColor: colors.overlay }} aria-hidden="true" />
          <div className="relative flex flex-col justify-center h-full p-4 sm:p-6 md:p-8 lg:p-16" style={{ color: colors.text }}>
            <div className="w-full max-w-xl mx-auto md:mx-0 md:ml-8 lg:ml-16 xl:ml-24 text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide mb-2 sm:mb-3 md:mb-4"
                style={{ color: colors.textLight }}
              >
                {slides[currentIndex].price}
              </motion.h3>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight"
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 max-w-md mx-auto md:mx-0"
                style={{ color: colors.textLight }}
              >
                {slides[currentIndex].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center md:justify-start mb-4 sm:mb-5 md:mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: colors.accent }} />
                ))}
                <span className="ml-2 text-sm sm:text-base" style={{ color: colors.textLight }}>4.9 (1.5k+ Reviews)</span>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="py-3 px-8 rounded-full text-base bg-purple-300 sm:text-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-lg"
                style={{ 
                  // backgroundColor: colors.primary,
                  color: colors.text,
                  ':hover': { backgroundColor: colors.primaryDark },
                  ':focus': { ringColor: colors.primaryLight }
                }}
                onClick={handleOrder}
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
        style={{ 
          backgroundColor: `${colors.secondary}80`,
          ':hover': { backgroundColor: `${colors.secondary}BF` },
          ':focus': { ringColor: colors.secondary }
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" style={{ color: colors.primaryDark }} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
        style={{ 
          backgroundColor: `${colors.secondary}80`,
          ':hover': { backgroundColor: `${colors.secondary}BF` },
          ':focus': { ringColor: colors.secondary }
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" style={{ color: colors.primaryDark }} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: index === currentIndex ? colors.primary : `${colors.secondary}80`
            }}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;