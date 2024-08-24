import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Phone, ChevronDown, Home, Tag, Image, Utensils } from 'lucide-react';
import image from '../assets/images'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (openDropdown && !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navItems = [
    {
      id: 'home-menu',
      label: 'Home',
      icon: Home,
      dropdown: [
        { id: 'about-us', label: 'About Us' },
        { id: 'our-story', label: 'Our Story' },
        { id: 'testimonials', label: 'Testimonials' },
      ],
    },
    {
      id: 'services-menu',
      label: 'Menu',
      icon: Utensils,
      dropdown: [
        { id: 'breakfast', label: 'Breakfast' },
        { id: 'lunch', label: 'Lunch' },
        { id: 'dinner', label: 'Dinner' },
        { id: 'desserts', label: 'Desserts' },
        { id: 'beverages', label: 'Beverages' },
      ],
    },
    {
      id: 'deal-menu',
      label: 'Deals',
      icon: Tag,
      dropdown: [
        { id: 'daily-specials', label: 'Daily Specials' },
        { id: 'combo-meals', label: 'Combo Meals' },
        { id: 'happy-hour', label: 'Happy Hour' },
        { id: 'seasonal-offers', label: 'Seasonal Offers' },
      ],
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: Image,
      dropdown: [
        { id: 'food-gallery', label: 'Food Gallery' },
        { id: 'restaurant-tour', label: 'Restaurant Tour' },
        { id: 'events', label: 'Events & Celebrations' },
      ],
    },
  ];

  const DesktopDropdownMenu = ({ item }) => (
    <div className="relative group" ref={el => dropdownRefs.current[item.id] = el}>
      <button
        onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
        className="flex items-center text-white hover:text-purple-300 transition-colors duration-200 text-sm uppercase tracking-wide"
      >
        <item.icon className="mr-1 h-4 w-4" />
        {item.label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      {openDropdown === item.id && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black bg-opacity-80 backdrop-blur-md z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {item.dropdown.map((subItem) => (
              <button
                key={subItem.id}
                onClick={() => scrollToSection(subItem.id)}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-900 hover:bg-opacity-50 hover:text-white w-full text-left"
                role="menuitem"
              >
                {subItem.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const MobileDropdownMenu = ({ item }) => (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
        className="flex justify-between items-center w-full py-4 px-5 text-white hover:bg-purple-900 hover:bg-opacity-50 transition-colors duration-200 text-base font-medium"
      >
        <span className="flex items-center">
          <item.icon className="mr-3 h-5 w-5" />
          {item.label}
        </span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openDropdown === item.id ? 'transform rotate-180' : ''}`} />
      </button>
      {openDropdown === item.id && (
        <div className="bg-black bg-opacity-80 backdrop-blur-md py-2">
          {item.dropdown.map((subItem) => (
            <button
              key={subItem.id}
              onClick={() => scrollToSection(subItem.id)}
              className="block w-full text-left py-3 px-10 text-gray-300 hover:bg-purple-900 hover:bg-opacity-50 hover:text-white transition-colors duration-200 text-sm"
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'
      } py-4 lg:py-2`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-purple-600 p-2 rounded-lg">
              <img src={image.logo} alt="Cafe Iftar Logo" className="h-8 w-auto" />
            </div>
            <span className="ml-3 text-xl font-bold text-white">Cafe Iftar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <DesktopDropdownMenu key={item.id} item={item} />
            ))}
            <button
              onClick={() => scrollToSection('order-now')}
              className="flex items-center bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-all duration-200 text-sm uppercase tracking-wide transform hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Now
            </button>
            <div className="flex items-center text-white hover:text-purple-300 transition-colors duration-200">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">+91 9895 896664</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full text-white hover:bg-purple-900 hover:bg-opacity-50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-black bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden absolute top-full left-0 right-0 border-t border-gray-700">
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item) => (
                <MobileDropdownMenu key={item.id} item={item} />
              ))}
              <div className="p-5 space-y-4">
                <button
                  onClick={() => scrollToSection('order-now')}
                  className="flex items-center justify-center w-full bg-purple-600 text-white py-3 px-4 rounded-full hover:bg-purple-700 transition-colors duration-200 text-base font-medium"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Order Now
                </button>
                <div className="flex items-center justify-center py-3 px-4 bg-purple-900 bg-opacity-50 rounded-full text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="text-base font-medium">+91 9895 896664</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;