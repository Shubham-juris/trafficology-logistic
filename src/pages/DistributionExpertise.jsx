import React from "react";
import truckImage from "../assets/services/img3.jpg"; 

const DistributionExpertise = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 mt-20">
      {/* Image */}
      <img
        src={truckImage}
        alt="Distribution Center"
        className="w-full h-auto rounded-2xl shadow-md mb-8"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Distribution Expertise
      </h2>

      {/* Content */}
      <div className="space-y-6">
        {/* Intelligent Distribution System */}
        <div>
          <h3 className="text-red-600 font-semibold">
            ▶ Intelligent Distribution System
          </h3>
          <p className="text-gray-700 mt-2">
            Trafficology Logistics INC offers comprehensive distribution services that
            cover the full spectrum of primary, secondary, and tertiary distribution.
            We collaborate closely with our clients to design and implement efficient,
            scalable, and data-driven distribution models that enhance operational
            performance and strengthen brand reliability.
          </p>
        </div>

        {/* Uniform Network Coordination */}
        <div>
          <h3 className="text-red-600 font-semibold">
            ▶ Uniform Network Coordination
          </h3>
          <p className="text-gray-700 mt-2">
            Through our technology-powered systems, we enable real-time shipment tracking,
            route optimization, and transparent coordination across the supply chain.
            This seamless integration ensures visibility, efficiency, and continuous
            improvement in every phase of your logistics operation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DistributionExpertise;
