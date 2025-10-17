import React from "react";
import img from "../../assets/home/why.jpeg";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        <div className="lg:w-1/3 w-10/10 mx-auto">
          <img
            src={img}
            alt="Why Choose Us"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>
        {/* TEXT CONTENT */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-red-600 uppercase tracking-wide mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-3xl font-bold mb-6">
            Trafficology Logistics INC
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Trafficology Logistics INC is known for its reliability in last-mile
            delivery and logistics services. Over the years, we have earned this
            reputation by blending innovation with consistent service. We always
            put our customers first. Here’s why you can confidently choose us as
            your ideal logistics partner:
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              ✅ <span className="font-semibold">Tech-Driven Logistics:</span>
              When you choose us, you choose cutting-edge AI technologies that
              optimize routes in real-time. Our advanced tracking systems
              provide live updates throughout the delivery process, keeping both
              businesses and end consumers fully informed at every stage.
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold">
                Nationwide Network and Scalability
              </span>
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold">Customer-Focused Approach</span>
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold">Focused on Green Solutions</span>
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold">Innovation and Prosperity</span>
            </li>
          </ul>
        </div>

       
      </div>
    </section>
  );
}
