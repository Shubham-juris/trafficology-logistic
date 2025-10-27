import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Trafficology Logistics INC
          </h2>
          <p className="text-gray-400">
            Reliable logistics, freight forwarding & supply chain solutions
            worldwide. Delivering excellence through technology and
            customer-focused services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">📍11919 149 Ave SE, Calgary, AB T3S 0A7, Canada</p>
          <p className="text-gray-400">
            📧{" "}
            <a
              href="mailto:trafficologylogisticsinc@gmail.com"
              className="text-gray-400 hover:text-blue-400 underline transition-colors duration-200"
            >
              trafficologylogisticsinc@gmail.com
            </a>
          </p>
          <p className="text-gray-400">📞 +1 825-883-1328</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://facebook.com/profile.php?id=61579724252934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com/trafiicology_logistics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-pink-500 transition-colors duration-200"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Trafficology Logistics INC. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
