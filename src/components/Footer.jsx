import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Cafe Iftar
            </a>
            <p className="mt-4 text-gray-400">
              Experience the finest dining in the heart of the city.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end space-x-6">
            <a href="#" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.53 8.53 0 01-2.73 1.04 4.28 4.28 0 00-7.3 3.9 12.13 12.13 0 01-8.8-4.47 4.29 4.29 0 001.32 5.73 4.24 4.24 0 01-1.94-.54v.05c0 2.06 1.46 3.78 3.4 4.17a4.27 4.27 0 01-1.93.07c.54 1.67 2.1 2.88 3.95 2.92a8.57 8.57 0 01-5.3 1.83c-.34 0-.68-.02-1.02-.06a12.07 12.07 0 006.54 1.91c7.85 0 12.14-6.51 12.14-12.14v-.55a8.66 8.66 0 002.12-2.2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 100 24A12 12 0 0012 0zm3.29 9.52h-1.78v8.4h-3.06v-8.4H8.71V7.51h1.74V6.17c0-1.23.33-2.05 2.08-2.05h1.61v2.81h-1.17c-.52 0-.64.25-.64.62v1.05h2.12l-.28 2.01z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.99 3.66 9.12 8.43 9.87v-6.99H7.9v-2.88h2.57V9.89c0-2.55 1.52-3.95 3.84-3.95 1.11 0 2.27.2 2.27.2v2.5h-1.28c-1.26 0-1.65.78-1.65 1.57v1.9h2.8l-.45 2.88h-2.35v6.99c4.77-.75 8.43-4.88 8.43-9.87 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
