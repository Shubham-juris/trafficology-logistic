import React from "react";
import techImage from "../assets/services/img5.webp"; 

const TechnologySolutions = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 mt-20">
      {/* Image */}
      <img
        src={techImage}
        alt="Technology Solutions"
        className="w-full h-auto rounded-2xl shadow-md mb-8"
      />

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Versatile Technology Solutions
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        Trafficology Logistics INC leverages cutting-edge digital tools and automation to
        simplify logistics management. Our intuitive, user-friendly system provides complete
        visibility and control over every stage of your logistics operations. With access to
        real-time data, performance metrics, and predictive analytics, you can make smarter,
        faster, and more strategic decisions for your business.
      </p>

      <p className="text-gray-700 leading-relaxed mt-4">
        Through proactive risk identification and real-time monitoring, our technology-driven
        solutions help prevent potential disruptions — ensuring seamless operations and
        consistent delivery performance across your entire supply chain.
      </p>
    </section>
  );
};

export default TechnologySolutions;
