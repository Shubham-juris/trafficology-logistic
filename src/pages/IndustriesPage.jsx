import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Box,
  Cpu,
  HeartPulse,
  Zap,
  Leaf,
  Globe,
  Building2,
} from "lucide-react";

const industries = [
  {
    key: "manufacturing",
    title: "Manufacturing & Industrial",
    desc:
      "Optimized transportation for raw materials and finished goods with real-time visibility and vendor coordination.",
    icon: Truck,
    color: "bg-indigo-100",
  },
  {
    key: "retail",
    title: "Retail & E-Commerce",
    desc:
      "End-to-end fulfillment, fast parcel delivery and returns management to keep your customers satisfied.",
    icon: Package,
    color: "bg-rose-100",
  },
  {
    key: "automotive",
    title: "Automotive",
    desc:
      "Specialist handling for parts and assemblies — JIT deliveries, secure packaging, and customs clearance.",
    icon: Box,
    color: "bg-sky-100",
  },
  {
    key: "healthcare",
    title: "Healthcare & Pharmaceuticals",
    desc:
      "Temperature-controlled storage and transport with strict compliance for sensitive shipments.",
    icon: HeartPulse,
    color: "bg-emerald-100",
  },
  {
    key: "energy",
    title: "Energy & Power",
    desc:
      "Heavy-lift, oversized cargo planning and on-site delivery coordination for energy projects.",
    icon: Zap,
    color: "bg-yellow-100",
  },
  {
    key: "agriculture",
    title: "Agriculture & Food",
    desc:
      "Cold-chain logistics and specialty handling to preserve freshness across long distances.",
    icon: Leaf,
    color: "bg-teal-100",
  },
];

const values = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Strong network of partners across continents to ensure your cargo moves seamlessly anywhere in the world.",
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    desc: "Decades of experience across sectors help us deliver efficient, secure, and innovative logistics solutions.",
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    desc: "Smart tracking, AI-based route optimization, and real-time analytics to give you total supply chain visibility.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

export default function IndustriesPage() {
  return (
    <section className="px-6 py-12 md:py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Trafficology Logistics INC provides tailored freight forwarding and supply
            chain solutions for a wide range of industries — from time-sensitive
            healthcare shipments to heavy-lift energy cargo.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.key}
                className="group relative rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-shadow duration-200 bg-white"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.color} ring-1 ring-inset ring-slate-100`}
                    aria-hidden
                  >
                    <Icon className="h-7 w-7 text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                   
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* New Component: Company Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl border border-slate-100 p-6 text-center hover:shadow-md transition-shadow bg-gradient-to-br from-white to-slate-50"
                  variants={cardVariants}
                >
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-slate-100 p-3">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <div>
            <h4 className="text-lg font-semibold">Need a custom logistics plan?</h4>
            <p className="text-sm text-slate-600">Tell us about your project and we'll create a tailored solution.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg px-4 py-2.5 bg-slate-900 text-white text-sm font-medium shadow-sm hover:opacity-95"
            >
              Get a quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center rounded-lg px-4 py-2.5 border border-slate-200 text-sm font-medium hover:bg-slate-100"
            >
              Our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}