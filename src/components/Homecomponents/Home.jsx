import React from "react";
import { motion } from "framer-motion";
import bgImg from "../../assets/home/hero.jpg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Trafficology Logistics INC
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
            Reliable logistics, freight forwarding & supply chain solutions
            worldwide.
          </p>
            <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/services"
        className="bg-blue-900 text-black/80 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-300 transition"
      >
        Explore Services
      </Link>
    </motion.div>
        </motion.div>
      </section>

    
    </div>
  );
}

export default Home;
