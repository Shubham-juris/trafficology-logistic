import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import WarehousingHeader from "../pages/WarehousingHeader";
import TransportImageSection from "../pages/TransportImageSection";
import DistributionExpertise from "../pages/DistributionExpertise";
import TechnologySolutions from "../pages/TechnologySolutions";
import IndustriesPage from "../pages/IndustriesPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="warehousing-solutions" element={<WarehousingHeader />} />
        <Route
          path="transportation-assistance"
          element={<TransportImageSection />}
        />
        <Route
          path="distribution-expertise"
          element={<DistributionExpertise />}
        />
        <Route path="technology-solutions" element={<TechnologySolutions />} />
        <Route path="industries" element={<IndustriesPage />} />
      </Routes>
    </>
  );
};

export default RouterPage;
