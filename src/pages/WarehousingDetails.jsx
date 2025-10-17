import React from "react";

const details = [
  {
    title: "Streamlined Inventory Management",
    description:
      "Our warehousing solutions are designed for all kinds of distribution centres. This covers everything from large fulfilment centres to special in-house planting facilities. We create storage systems that match the speed of your inventory, making sure your products are stored safely and securely. Furthermore, our focus is on enabling fast processing time so your products move quickly.",
    bullets: [],
  },
  {
    title: "Customized Warehouses",
    description:
      "Our warehouses use advanced security systems to ensure everything stays safe. We control the temperature to suit all types of products, making sure nothing gets spoiled. The inside layout is set up to handle various items efficiently, allowing for easy management. We have strategically chosen key areas across India for our warehouses to maintain logistic centres. This smart placement helps goods move quickly, reducing travel time and preventing delays in inventory movement, high stock of locations, we can satisfy and reliably deliver products to the destinations.",
    bullets: [],
  },
  {
    title: "Post-Sale Support",
    description:
      "Post-sale customer support is logistic is the ongoing assistance activity that Eastern Transaction logistics provides to its customers after they have bought a product. We aim to offer seamless post-sales support to all our clients. Our continuous assistance makes a product's journey uncomplicated and the buyers' experience easy.",
    bullets: [
      "Handling shipments correctly so every operation is organized and ready to go.",
      "Systematically storing shipment/products, which means keeping them safe and easy to find.",
      "The transportation part, where shipment/products are moved smoothly from the factory all the way to the customer's home.",
      "Reverse logistics, where products that have been sold or delivered come back through the reverse logistics system. Lastmile not only delivers products to customers but also efficiently manages reverse logistics. We help with returning items, handling repairs, and recycling. So, we focus on dealing with returns or any redirection of items with the same attention and care.",
    ],
  },
];

const WarehousingDetails = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 space-y-10 mb-10">
      {details.map((section, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <p className="text-gray-700 mb-4">{section.description}</p>
          {section.bullets.length > 0 && (
            <ul className="list-disc list-inside space-y-2">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="text-gray-700">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default WarehousingDetails;
