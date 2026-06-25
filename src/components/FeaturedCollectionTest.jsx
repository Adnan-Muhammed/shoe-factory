// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Star } from "lucide-react";
// import product1 from "@/assets/ChatGPT Image product-1.png";
// import product2 from "@/assets/ChatGPT Image product-2.png";
// import product3 from "@/assets/ChatGPT Image product-3.png";
// import product4 from "@/assets/ChatGPT Image product-4.png";

// const PRODUCTS = [
//     {
//         image: product1,
//         name: "Velocity Runner",
//         category: "Running",
//         price: "₹2,499",
//         rating: 4.8,
//     },
//     {
//         image: product2,
//         name: "Urban Glide",
//         category: "Casual",
//         price: "₹2,199",
//         rating: 4.7,
//     },
//     {
//         image: product3,
//         name: "Apex Trainer",
//         category: "Sports",
//         price: "₹2,799",
//         rating: 4.9,
//     },
//     {
//         image: product4,
//         name: "Street Edge",
//         category: "Sneakers",
//         price: "₹2,349",
//         rating: 4.6,
//     },
// ];

// export default function FeaturedCollection() {
//     return (
//         <section id="products" className="relative bg-[#07111f] py-24 px-5 sm:px-8 overflow-hidden">
//             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[150px] pointer-events-none" />

//             <div className="relative max-w-7xl mx-auto">
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-14"
//                 >
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
//                         Trending This Week
//                     </h2>
//                     <p className="text-[#d1d5db] mt-4 max-w-xl mx-auto">
//                         Explore our most popular footwear collections.
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {PRODUCTS.map((p, i) => (
//                         <motion.div
//                             key={p.name}
//                             // initial={{ opacity: 0, y: 30 }}
//                             // whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 30 }}
//                             whileInView={{ opacity: 1, x: 0, y: 0 }}
//                             viewport={{ once: true, amount: 0.2 }}
//                             // transition={{ duration: 0.5, delay: i * 0.1 }}
//                             transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
//                             whileHover={{ y: -8, scale: 1.02 }}
//                             whileTap={{ scale: 0.96 }}
//                             className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-[#00ff3c]/40 hover:shadow-[0_20px_50px_rgba(0,255,60,0.15)] active:border-[#00ff3c]/60 active:bg-white/10 transition-all duration-300 cursor-pointer"
//                         >
//                             <div className="relative bg-[#111827] rounded-xl overflow-hidden mb-5 h-48 flex items-center justify-center">
//                                 <Image
//                                     src={p.image}
//                                     alt={p.name}
//                                     width={240}
//                                     height={200}
//                                     className="object-contain h-full w-auto transition-transform duration-500 group-hover:scale-110"
//                                 />
//                             </div>

//                             <p className="text-[#00ff3c] text-xs font-semibold uppercase tracking-wide mb-1">
//                                 {p.category}
//                             </p>
//                             <h3 className="text-white font-bold text-lg mb-2">{p.name}</h3>

//                             <div className="flex items-center gap-1 mb-3">
//                                 {[...Array(5)].map((_, idx) => (
//                                     <Star
//                                         key={idx}
//                                         size={14}
//                                         className={
//                                             idx < Math.round(p.rating)
//                                                 ? "fill-[#00ff3c] text-[#00ff3c]"
//                                                 : "text-white/20"
//                                         }
//                                     />
//                                 ))}
//                                 <span className="text-[#d1d5db] text-xs ml-1">{p.rating}</span>
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <span className="text-white font-extrabold text-lg">{p.price}</span>
//                             </div>

//                             <button className="w-full mt-4 bg-white/5 border border-white/15 text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#00ff3c] hover:text-[#07111f] hover:border-[#00ff3c] active:bg-[#00cc30] active:scale-95 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,60,0.3)]">
//                                 View Details
//                             </button>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
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
    <section
      id="products"
      className="relative bg-[#07111f] py-20 sm:py-24 px-4 sm:px-8 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-[#00ff3c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block text-[#00ff3c] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            New Drops
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trending This Week
          </h2>
          <p className="text-[#d1d5db] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Explore our most popular footwear collections.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-3.5 sm:p-5 hover:border-[#00ff3c]/40 hover:shadow-[0_20px_50px_rgba(0,255,60,0.15)] transition-all duration-300"
            >
              {/* rating badge */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 flex items-center gap-1 bg-[#07111f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1">
                <Star size={11} className="fill-[#00ff3c] text-[#00ff3c]" />
                <span className="text-white text-[11px] font-semibold">{p.rating}</span>
              </div>

              <div className="relative bg-[#111827] rounded-xl overflow-hidden mb-4 sm:mb-5 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#00ff3c]/0 group-hover:bg-[#00ff3c]/5 transition-colors duration-300" />
                <Image
                  src={p.image}
                  alt={p.name}
                  width={240}
                  height={200}
                  className="relative object-contain h-[70%] w-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              <p className="text-[#00ff3c] text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-1">
                {p.category}
              </p>
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 leading-snug">
                {p.name}
              </h3>

              <div className="mt-auto flex items-center justify-between mb-4">
                <span className="text-white font-extrabold text-lg sm:text-xl">{p.price}</span>
              </div>

              <button className="w-full flex items-center justify-center gap-1.5 bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 rounded-full hover:bg-[#00ff3c] hover:text-[#07111f] hover:border-[#00ff3c] transition-all duration-300">
                View Details
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}