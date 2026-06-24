"use client";

import { motion } from "framer-motion";
import { Truck, BadgeCheck, Sparkle, Headset } from "lucide-react";

const REASONS = [
  { icon: Truck, title: "Fast Delivery", desc: "Quick dispatch, doorstep in days." },
  { icon: BadgeCheck, title: "Quality Checked", desc: "Every pair inspected before it ships." },
  { icon: Sparkle, title: "Modern Styles", desc: "Fresh drops inspired by current trends." },
  { icon: Headset, title: "Customer Support", desc: "Real help, whenever you need it." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#111827] py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-7 text-center hover:border-[#00ff3c]/40 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 8 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00ff3c] text-[#07111f] mb-5"
                >
                  <Icon size={26} strokeWidth={2} />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-[#d1d5db] text-sm">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}