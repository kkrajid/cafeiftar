import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Restaurant Name</p>
        <ul className="flex justify-center space-x-4 mb-4">
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
        </ul>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com/restaurant" className="hover:text-orange-500">Facebook</a>
          <a href="https://twitter.com/restaurant" className="hover:text-orange-500">Twitter</a>
          <a href="https://instagram.com/restaurant" className="hover:text-orange-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
