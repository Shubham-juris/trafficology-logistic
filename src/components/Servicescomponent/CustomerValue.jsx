import React from "react";
import img from "../../assets/services/main.jpg";

const CustomerValue = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center h-[600px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative bg-white/90 max-w-3xl mx-auto p-10 rounded-2xl shadow-lg h-[380px] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          What We Give to Our Customers
        </h2>
        <p className="text-gray-700 leading-relaxed text-center">
          At <span className="font-semibold">Trafficology Logistics Inc.</span>, we deliver integrated logistics and
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
