import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 bg-black mt-20 mb-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Get in Touch
          </h2>
          <p className="text-slate-300 mb-6 max-w-md">
            We’re here to help you with any logistics or supply chain inquiries. Reach out to us for a quote, partnership, or support — our team will respond promptly.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl">
                <Phone className="h-5 w-5 text-white" />
              </div>
              {/* <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-sm text-slate-300">+1 (800) 555-1234</p>
              </div> */}
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-sm text-slate-300">support@trafficologylogistics.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Office</h4>
                <p className="text-sm text-slate-300">calgary,Canada</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
            <iframe
              title="Trafficology Logistics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5120863382693!2d-79.383184!3d43.653225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d27b1c5f47%3A0x8e2d2b6a3d6b3c!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1697040000000!5m2!1sen!2sca"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          className="bg-slate-800 rounded-2xl p-8 shadow-md border border-slate-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Logistics inquiry, partnership, etc."
                className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}