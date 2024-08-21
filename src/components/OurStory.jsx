import React from 'react';

function OurStory() {
  return (
    <section id="our-story" className="py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center  md:px-20 px-4">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col  items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-4">
            We combine taste and quality to serve you a delightful array of mouthwatering dishes, crafted with passion and made to perfection.
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            <li className="font-semibold">Fresh Food</li>
            <li className="font-semibold">Premium Services</li>
            <li className="font-semibold">Lorem Ipsum Dolor</li>
            <li className="font-semibold">Dining</li>
            <li className="font-semibold">Catering</li>
            <li className="font-semibold">Special Events Booking</li>
            <li className="font-semibold">Home Delivery</li>
            <li className="font-semibold">Lorem Ipsum</li>
            <li className="font-semibold">Wedding Services</li>
            <li className="font-semibold">Delightful Food</li>
          </ul>
        </div>

        {/* Right Side - Restaurant Menu Image */}
        <div className="w-full md:w-1/2 transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://zrtechsolutions.com/demo/html/dhaba/assets/images/s2.png"
              alt="Restaurant Menu"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
