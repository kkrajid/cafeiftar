import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assuming you have these images imported correctly
const images = [
  { id: 1, src: "https://assets.unileversolutions.com/recipes-v2/250199.jpg?im=Resize,height=580;Crop,size=(932,580),gravity=Center", alt: "Signature Dish", category: "Food" },
  { id: 2, src: "https://ansainteriors.com/wp-content/uploads/2019/01/3-13-1400x787.jpg", alt: "Restaurant Interior", category: "Ambiance" },
  { id: 3, src: "https://img1.wsimg.com/isteam/ip/0bb42ef4-7b3c-462c-8e70-6712a50e84dc/B2C-JuneContent-VegetarianToppings-Cover.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280", alt: "Chef's Special", category: "Food" },
  { id: 4, src: "https://www.designatak.com/ATAKDesign/media/static-files/7bd4814a-6b20-4ad4-881d-d023f42f4506@w800.webp", alt: "Bar Area", category: "Ambiance" },
  { id: 5, src: "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg", alt: "Dessert Platter", category: "Food" },
  { id: 6, src: "https://interiorlover.in/wp-content/uploads/2021/02/Daler-14.jpg", alt: "Outdoor Seating", category: "Ambiance" },
];



const categories = ["All", ...new Set(images.map(img => img.category))];

const ImageCard = ({ image, onClick }) => (
  <motion.div
    layout
    whileHover={{ y: -5 }}
    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
  >
    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
      <p className="text-gray-300 text-sm">{image.category}</p>
    </div>
  </motion.div>
);

const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const RestaurantImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    setFilteredImages(
      filter === "All"
        ? images
        : images.filter(img => img.category === filter)
    );
  }, [filter]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage, filteredImages]);

  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-amber-900">
        Saveur Showcase
      </h2>
      <p className="text-xl text-center mb-8 text-amber-700">
        A Visual Feast of Our Culinary Delights
      </p>
      
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              filter === category
                ? 'bg-amber-600 text-white'
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ImageCard image={image} onClick={() => openModal(image)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>



      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={selectedImage?.id}
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{selectedImage?.alt}</h3>
            <p className="text-gray-300">{selectedImage?.category}</p>
          </div>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default RestaurantImageGallery;