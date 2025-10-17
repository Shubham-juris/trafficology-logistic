import React from "react";
import techImage from "../assets/services/img5.webp"; 

const TechnologySolutions = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 mt-20">
      <img
        src={techImage}
        alt="Technology Solutions"
        className="w-full h-100 rounded-2xl shadow-md mb-8"
      />

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Multilateral (or Comprehensive or Multifaceted or Versatile) Technology Solutions
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Our current automated system has an easy-to-use interface which gives you complete
        control over your logistics activities. You can check performance metrics and trends
        and make an informed decision that suits your needs. Additionally, by using predictive
        analytics and real-time monitoring, we can spot potential risks early. It enables us
        to take actions to avoid any big problems even if they arise.
      </p>
    </section>
  );
};

export default TechnologySolutions;
