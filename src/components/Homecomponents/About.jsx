import React from "react";
import { Link } from "react-router-dom";

import aboutImg from "../../assets/home/about.jpeg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-700 mb-4">
              Trafficology Logistics INC is a reliable partner in logistics,
              freight forwarding, and supply chain solutions worldwide. We
              embarked on our journey in 2015 with a focus on providing seamless
              and efficient logistics services across India and beyond. Over the
              years, we have built a strong presence by implementing advanced
              IT-driven operations and maintaining excellent customer support,
              ensuring that our clients’ supply chains are managed with
              precision and care. <Link
              to="/about"
              className="inline-block px-2 py-2 text-blue-600 font-medium rounded-lg shadow-md transition duration-300"
            >
              Read More..
            </Link>
            </p>

           
          </div>

          {/* Vision & Mission Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Vision</h2>
              <p className="text-gray-700">
                To Provide Innovative & Cost-Effective Solutions which increase
                efficiency and reduce cost for our customers – Earning Respect
                for the Logisticians.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Mission</h2>
              <p className="text-gray-700">
                To be a Lead Logistics Partner of our Customers through constant
                upgradation of People Skills, Technology, and Operational
                Excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mx-auto flex justify-center">
          <img
            src={aboutImg}
            alt="About Trafficology Logistics"
            className="rounded-xl shadow-lg object-contain max-w-sm w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
