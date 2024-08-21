import React from 'react';

function MenuHighlights({ dishes }) {
/**
 * A React component that displays a list of highlighted menu dishes.
 *
 * @param {object[]} dishes - An array of objects containing dish information (id, name, image, description, price)
 * @return {JSX.Element} A JSX element representing the menu highlights section
*/
  return (
    <section id="menu-highlights" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Signature Dishes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {dishes.map(dish => (
          <div key={dish.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-700 mb-2">{dish.description}</p>
              <p className="text-orange-500 font-bold">${dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuHighlights;

