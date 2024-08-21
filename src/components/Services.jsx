import React from 'react';

function Services() {
  const serviceList = [
    {
      id: 1,
      image: "https://zrtechsolutions.com/demo/html/dhaba/assets/images/icons/dining.svg",
      title: 'Dine In',
      description: 'Experience Flavorful Moments: Dine In and Savor Every Bite.',
    },
    {
      id: 2,
      image: "https://zrtechsolutions.com/demo/html/dhaba/assets/images/icons/take-away.svg",
      title: 'Take Away',
      description: 'Delight in Convenience: Grab Your Favorite Flavors To Go.',
    },
    {
      id: 3,
      image: "https://zrtechsolutions.com/demo/html/dhaba/assets/images/icons/food-delivery.svg",
      title: 'Home Delivery',
      description: 'Bringing Joy to Your Doorstep: Enjoy the Comfort of Home Delivery.',
    },
  ];

  return (
    <section id="services-menu" className="pt-16">
      <div className="container mx-auto md:px-24 px-4">
        {/* <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Services</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="service-card text-center bg-white p-6 rounded-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 w-24 h-24"
              />
              <h3 className="text-xl font-bold mb-2 text-[#abac7f]">
                {service.title}
              </h3>
              <p className="text-[#abac7f]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
