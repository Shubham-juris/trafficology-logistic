import React from "react";
import hero from "../../assets/about/hero.jpg"

const AboutHome = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Trafficology Logistics INC
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Reliable logistics, freight forwarding & supply chain solutions
          worldwide. Delivering fast, efficient, and cost-effective services to
          businesses across the globe.
        </p>
      
      </div>
    </section>
  );
};

export default AboutHome;
