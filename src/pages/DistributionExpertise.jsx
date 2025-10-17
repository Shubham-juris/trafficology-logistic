import React from "react";
import truckImage from "../assets/services/img3.jpg"; 

const DistributionExpertise = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 mt-20">
      <img
        src={truckImage}
        alt="Distribution Center"
        className="w-full h-auto rounded-2xl shadow-md mb-8"
      />

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Distribution Expertise
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-red-600 font-semibold">
            ▶ Intelligent Distribution System
          </h3>
          <p className="text-gray-700 mt-2">
            Our distribution services encompass the entire spectrum of primary, secondary,
            and tertiary distribution. We work closely with you to design and implement
            distribution models that enhance operational efficiency and boost brand delivery.
          </p>
        </div>

        <div>
          <h3 className="text-red-600 font-semibold">
            ▶ Uniform Network Coordination
          </h3>
          <p className="text-gray-700 mt-2">
            We use the latest technology to manage your shipments and allow for real-time tracking.
            Our technology-based systems make everything clearer for you and provide the information
            you need to keep making your supply chain better over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DistributionExpertise;
