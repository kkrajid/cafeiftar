import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';
import image from '../assets/images'; // Ensure this import is correct

const images = [
  {
    id: 1,
    src: image.imageGalleryImages.image1,
    alt: "Interior 1",
  },
  {
    id: 2,
    src: image.imageGalleryImages.image2,
    alt: "Interior 2",
  },
  {
    id: 3,
    src: image.imageGalleryImages.image3,
    alt: "Exterior 1",
  },
 
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 5000);
    } else {
      clearInterval(interval); // Ensure interval is cleared when paused
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 leading-tight">
          Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Stunning Spaces</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          <div className="lg:w-2/3 relative overflow-hidden rounded-2xl shadow-2xl mb-8 lg:mb-0">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-64 sm:h-80 lg:h-[600px] object-cover"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }, // Ensure the opacity transition matches the timing of the slide
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={togglePlayPause}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Explore Our Collection</h3>
            <p className="text-base sm:text-lg text-gray-300">Immerse yourself in our carefully curated spaces, designed to inspire and delight.</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`aspect-w-16 aspect-h-9 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === currentIndex ? 'ring-4 ring-pink-500' : 'hover:opacity-75'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                >
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-6 rounded-lg font-semibold text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 flex items-center justify-center">
              View All Spaces
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
