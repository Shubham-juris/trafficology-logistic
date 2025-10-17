import React from "react";
import img from "../../assets/services/main.jpg"

const CustomerValue = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center h-150"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative bg-white/90 max-w-5xl mx-auto p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          What We Give to Our Customers
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At GlobalEx Translines, we deliver integrated logistics and
          warehousing services that guarantee timely and cost-effective supply
          chain management. Our solutions are built to ensure your goods are
          stored, moved, and delivered with maximum efficiency and reliability.
          We value transparency, flexibility, and customer satisfaction in every
          step of our operations.
        </p>
      </div>
    </section>
  );
};

export default CustomerValue;
