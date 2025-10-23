import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/navbar/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];
  ``;

  const servicePages = [
    { name: "Warehousing Solutions", path: "warehousing-solutions" },
    { name: "Transportation Assistance", path: "transportation-assistance" },
    { name: "Distribution Expertise", path: "distribution-expertise" },
    {
      name: " Multilateral Technology Solutions",
      path: "technology-solutions",
    },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Trafficology Logistics INC"
              className="h-14 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 hover:text-blue-600 transition ${
                        isActive ? "text-blue-700 font-semibold" : ""
                      }`
                    }
                  >
                    {item.name} ▾
                  </NavLink>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-30 animate-fadeIn">
                      {servicePages.map((service) => (
                        <NavLink
                          key={service.name}
                          to={service.path}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm hover:bg-blue-50 transition ${
                              isActive ? "text-blue-700 font-semibold" : ""
                            }`
                          }
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-blue-600 transition ${
                      isActive ? "text-blue-700 font-semibold underline" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-2xl text-blue-900"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2 shadow-inner">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left font-medium flex justify-between items-center hover:text-blue-600"
                >
                  {item.name}
                  <span>{servicesOpen ? "▴" : "▾"}</span>
                </button>

                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {servicePages.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className={({ isActive }) =>
                          `block hover:text-blue-600 ${
                            isActive ? "text-blue-700 font-semibold" : ""
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-blue-600 ${
                    isActive ? "text-blue-700 font-semibold underline" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
