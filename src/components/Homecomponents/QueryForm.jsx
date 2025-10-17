import React from "react";
import contactImg from "../../assets/home/form.jpg";

const QueryForm = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h3 className="text-red-600 font-semibold uppercase">Have a Query?</h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Ask Your Query</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-black rounded-2xl overflow-hidden shadow-lg">
        {/* Left - Form */}
        <div className="p-8">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-500 bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-gray-500 bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-500 bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-500 bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-500 bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>

            {/* File Upload */}
            <input type="file" className="text-white" />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="hidden lg:block">
          <img
            src={contactImg}
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QueryForm;
