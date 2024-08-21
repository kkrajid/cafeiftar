import React from 'react';

function Testimonials({ reviews }) {
  return (
    <section id='deal-menu' className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">What Our Guests Are Saying</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
            <p className="text-gray-700 mb-2">"{review.text}"</p>
            <p className="font-semibold text-gray-900">- {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
