import React from 'react';

function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="4"></textarea>
        </label>
        <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
