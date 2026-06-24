"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Tag, ShieldCheck, Gem } from "lucide-react";
import product1 from "@/assets/ChatGPT Image product-1.png";
import product2 from "@/assets/ChatGPT Image product-2.png";
import product3 from "@/assets/ChatGPT Image product-3.png";

const FEATURES = [
  { icon: Sparkles, label: "Latest Designs" },
  { icon: Tag, label: "Affordable Pricing" },
  { icon: ShieldCheck, label: "Comfort Fit" },
  { icon: Gem, label: "Premium Finish" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#07111f] py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00ff3c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: collage */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center h-44 sm:h-56 col-span-1 row-span-2">
            <Image src={product1} alt="Sneaker style" width={180} height={180} className="object-contain w-full h-auto" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center h-32 sm:h-40">
            <Image src={product2} alt="Sneaker style" width={140} height={140} className="object-contain w-full h-auto" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center h-32 sm:h-40">
            <Image src={product3} alt="Sneaker style" width={140} height={140} className="object-contain w-full h-auto" />
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00ff3c]/20 rounded-full blur-2xl pointer-events-none" />
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Who We Are
          </h2>
          <p className="text-[#d1d5db] text-base sm:text-lg leading-relaxed mb-9">
            At Shoe Factory 3.0, we bring fashion-forward men&apos;s footwear
            inspired by the latest trends. Our goal is to deliver stylish,
            comfortable, and affordable shoes for every lifestyle.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 hover:border-[#00ff3c]/40 transition-colors duration-300"
                >
                  <Icon size={20} className="text-[#00ff3c] shrink-0" strokeWidth={2} />
                  <span className="text-white text-sm font-semibold">{f.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}