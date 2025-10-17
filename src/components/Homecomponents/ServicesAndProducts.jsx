import React from "react";
import img from "../../assets/home/img.jpg"
import img1 from "../../assets/home/img1.jpeg"
import img2 from "../../assets/home/img2.avif"
import img3 from "../../assets/home/img3.jpg"

export default function ServicesAndProducts() {
  const services = [
    {
      title: "WAREHOUSING SOLUTIONS",
      image:img,
      icon: "🏠",
    },
    {
      title: "TRANSPORTATION ASSISTANCE",
      image: img1,
      icon: "🚚",
    },
    {
      title: "DISTRIBUTION EXPERTISE",
      image: img2,
      icon: "📦",
    },
    {
      title: "MULTIFACETED TECHNOLOGY SOLUTIONS",
      image: img3,
      icon: "💻",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-10">
        <h3 className="text-red-600 uppercase tracking-wide">Our Services</h3>
        <h2 className="text-4xl font-bold">Services and Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group h-80"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-white">
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="text-lg font-semibold leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
