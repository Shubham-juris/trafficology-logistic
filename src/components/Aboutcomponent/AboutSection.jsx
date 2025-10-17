import React from "react";
import aboutImg1 from "../../assets/about/img1.jpg"; 
import aboutVideo from "../../assets/about/video3.mov";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-10 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        <div className="lg:w-2/3 w-full">
          <h3 className="text-red-600 font-semibold uppercase mb-2">About Us</h3>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Reliable Partner in Global Supply Chain
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trafficology Logistics INC is a trusted name in logistics, freight forwarding,
            and supply chain solutions worldwide. Since our inception in 2015, we have focused
            on delivering efficiency, transparency, and reliability across every shipment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our strength lies in offering flexible and scalable logistics services, including
            freight forwarding, warehousing, and last-mile delivery. By combining
            technology-driven operations with expert customer support, we ensure
            supply chains run seamlessly and cost-effectively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, Trafficology Logistics INC continues to redefine logistics by adopting
            innovative solutions and ensuring that customer satisfaction remains
            our top priority. With a commitment to operational excellence, we
            are proud to be making significant progress in the logistics industry.
          </p>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide innovative & cost-effective solutions that improve
                efficiency and reduce costs for our customers — earning respect
                for the logisticians.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading logistics partner of our customers through
                continuous upgradation of people skills, technology,
                and operational excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image + Video */}
        <div className="lg:w-1/3 w-full grid gap-6 mt-10">
          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
          <img
            src={aboutImg1}
            alt="Logistics operations"
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
        
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
