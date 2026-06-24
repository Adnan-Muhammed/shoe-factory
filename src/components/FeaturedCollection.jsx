"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import product1 from "@/assets/ChatGPT Image product-1.png";
import product2 from "@/assets/ChatGPT Image product-2.png";
import product3 from "@/assets/ChatGPT Image product-3.png";
import product4 from "@/assets/ChatGPT Image product-4.png";

const PRODUCTS = [
  {
    image: product1,
    name: "Velocity Runner",
    category: "Running",
    price: "₹2,499",
    rating: 4.8,
  },
  {
    image: product2,
    name: "Urban Glide",
    category: "Casual",
    price: "₹2,199",
    rating: 4.7,
  },
  {
    image: product3,
    name: "Apex Trainer",
    category: "Sports",
    price: "₹2,799",
    rating: 4.9,
  },
  {
    image: product4,
    name: "Street Edge",
    category: "Sneakers",
    price: "₹2,349",
    rating: 4.6,
  },
];

export default function FeaturedCollection() {
  return (
    <section id="products" className="relative bg-[#07111f] py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trending This Week
          </h2>
          <p className="text-[#d1d5db] mt-4 max-w-xl mx-auto">
            Explore our most popular footwear collections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-[#00ff3c]/40 hover:shadow-[0_20px_50px_rgba(0,255,60,0.15)] transition-all duration-300"
            >
              <div className="relative bg-[#111827] rounded-xl overflow-hidden mb-5 h-48 flex items-center justify-center">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={240}
                  height={200}
                  className="object-contain h-full w-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <p className="text-[#00ff3c] text-xs font-semibold uppercase tracking-wide mb-1">
                {p.category}
              </p>
              <h3 className="text-white font-bold text-lg mb-2">{p.name}</h3>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={
                      idx < Math.round(p.rating)
                        ? "fill-[#00ff3c] text-[#00ff3c]"
                        : "text-white/20"
                    }
                  />
                ))}
                <span className="text-[#d1d5db] text-xs ml-1">{p.rating}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white font-extrabold text-lg">{p.price}</span>
              </div>

              <button className="w-full mt-4 bg-white/5 border border-white/15 text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#00ff3c] hover:text-[#07111f] hover:border-[#00ff3c] transition-all duration-300">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}