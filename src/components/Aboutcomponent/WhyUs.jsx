import React from "react";
import whyUsImg from "../../assets/about/img2.webp"; 

const WhyUs = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-red-600 font-semibold uppercase">Why Us</h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Why Choose Trafficology Logistics INC
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Regional Expertise, Global Standards
            </h2>
            <p className="text-gray-700 mt-2">
              Decades of experience in the Middle East, backed by a global
              network & strong infrastructure.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Customized, Reliable & Efficient Solutions
            </h2>
            <p className="text-gray-700 mt-2">
              Logistics as flexible and ambitious as your business, tailored to
              adapt and scale.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Speed In Every Delivery
            </h2>
            <p className="text-gray-700 mt-2">
              Fast deliveries with short SLAs that reach their destination
              on-time, every-time.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Technology Driven Innovation & Experience
            </h2>
            <p className="text-gray-700 mt-2">
              Proprietary cutting-edge technology for end-to-end shipment control
              & visibility.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={whyUsImg}
            alt="Why Us"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
