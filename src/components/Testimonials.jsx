"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    review:
      "The comfort level is unreal for the price. I've worn mine almost every day for two months and they still look brand new.",
  },
  {
    name: "Rahul Verma",
    initials: "RV",
    review:
      "Style and fit were spot on. Delivery was fast and the packaging felt genuinely premium.",
  },
  {
    name: "Karthik Nair",
    initials: "KN",
    review:
      "Best value sneakers I've bought this year. Support team was quick to help when I needed a size swap.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#07111f] py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#00ff3c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 hover:border-[#00ff3c]/30 transition-colors duration-300"
            >
              <Quote className="text-[#00ff3c]/40 mb-4" size={28} />
              <p className="text-[#d1d5db] text-sm leading-relaxed mb-6">
                {t.review}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#00ff3c]/15 border border-[#00ff3c]/40 flex items-center justify-center text-[#00ff3c] font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={12} className="fill-[#00ff3c] text-[#00ff3c]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}