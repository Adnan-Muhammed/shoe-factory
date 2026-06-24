"use client";

import { motion } from "framer-motion";
import { Footprints, Zap, Sun, Trophy } from "lucide-react";

const CATEGORIES = [
  {
    icon: Footprints,
    name: "Sneakers",
    desc: "Everyday street style staples.",
  },
  {
    icon: Zap,
    name: "Running",
    desc: "Lightweight builds for the long haul.",
  },
  {
    icon: Sun,
    name: "Casual",
    desc: "Comfort-first, all-day wear.",
  },
  {
    icon: Trophy,
    name: "Sports",
    desc: "Performance-ready grip and support.",
  },
];

export default function ShopByCategory() {
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
            Shop By Category
          </h2>
          <p className="text-[#d1d5db] mt-4 max-w-xl mx-auto">
            Find the right fit for every part of your day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#07111f]/60 border border-white/10 rounded-2xl p-8 text-center hover:border-[#00ff3c]/50 hover:shadow-[0_20px_50px_rgba(0,255,60,0.18)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00ff3c]/10 border border-[#00ff3c]/30 mb-5">
                  <Icon size={28} className="text-[#00ff3c]" strokeWidth={1.8} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{cat.name}</h3>
                <p className="text-[#d1d5db] text-sm">{cat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}