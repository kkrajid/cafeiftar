import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    { id: 'services-menu', label: 'Our Menu' },
    { id: 'deal-menu', label: 'Deal' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      } ${
        isMobileMenuOpen ? 'bg-white' : '' // Ensures background is white when mobile menu is open
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-[#979870] p-2 rounded-md">
              <img src="https://zrtechsolutions.com/demo/html/dhaba/assets/images/logo.svg" alt="Dhaba Logo" className="h-8 w-auto" />
            </div>
            <span className="ml-3 text-xl font-bold text-[#979870]">Cafe Iftar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#abac7f] hover:text-[#979870] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order-now')}
              className="flex items-center bg-[#979870] text-white py-2 px-4 rounded-full hover:bg-[#7a7b5a] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              Order Now
            </button>
            <div className="flex items-center text-[#abac7f]">
              <FontAwesomeIcon icon={faPhone} className="text-2xl mr-2" />
              <div className="text-left">
                <span className="text-sm">Call Us</span>
                <br />
                <span className="text-sm font-semibold">+91 4365 769867</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-[#979870] hover:bg-[#979870] hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white"> {/* Ensure mobile menu background is white */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-[#abac7f] hover:bg-[#979870] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order-now')}
              className="flex items-center justify-center w-full bg-[#979870] text-white py-2 px-4 mt-2 rounded-full hover:bg-[#7a7b5a] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              Order Now
            </button>
            <div className="flex items-center justify-center mt-4 text-[#abac7f]">
              <FontAwesomeIcon icon={faPhone} className="text-2xl mr-2" />
              <div className="text-left">
                <span className="text-sm">Call Us</span>
                <br />
                <span className="text-sm font-semibold">+91 4365 769867</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
