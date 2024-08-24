
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import image from '../assets/images'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home-menu', label: 'Home' },
    { id: 'services-menu', label: 'Menu' },
    { id: 'deal-menu', label: 'Deals' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      } ${
        isMobileMenuOpen ? 'bg-white' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-purple-600 p-2 rounded-lg">
              <img src={image.logo} alt="Cafe Iftar Logo" className="h-8 w-auto" />
            </div>
            <span className="ml-3 text-xl font-bold text-purple-900">Cafe Iftar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-purple-700 hover:text-purple-500 transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order-now')}
              className="flex items-center bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-all duration-200 text-sm uppercase tracking-wide transform hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Now
            </button>
            <div className="flex items-center text-purple-700 hover:text-purple-500 transition-colors duration-200">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">+91 9895 896664</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full text-purple-700 hover:bg-purple-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-purple-700 hover:bg-purple-50 hover:text-purple-500 transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order-now')}
              className="flex items-center justify-center w-full bg-purple-600 text-white py-3 px-4 hover:bg-purple-700 transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Now
            </button>
            <div className="flex items-center justify-center p-4 text-purple-700 bg-purple-50">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">+91 9895 896664</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;