import React from "react";
import img from "../assets/services/img1.jpg";
import TransportContentSection from "./TransportContentSection";

const TransportImageSection = () => {
  return (
    <>
      <div className="w-full mt-20">
        <img
          src={img}
          alt="Truck on road during sunset"
          className="w-full h-100 object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Transportation Assistance
          </h2>
        </div>
      </div>
      <TransportContentSection />
    </>
  );
};

export default TransportImageSection;
