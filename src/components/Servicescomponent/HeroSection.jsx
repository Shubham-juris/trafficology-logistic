import React from "react";
import img from "../../assets/services/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative h-130 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: ` url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <h1 className="relative text-white text-3xl md:text-4xl font-semibold z-10">
        SERVICES
      </h1>
    </section>
  );
};

export default HeroSection;
