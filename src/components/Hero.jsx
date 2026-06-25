


// ///////////////////////////////////////
// ///////////////////////////////////////
// ///////////////CLAUDE /////////////////
// ///////////////////////////////////////


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import heroShoe from "@/assets/ChatGPT Image Hero section image update.png";

// const STATS = [
//   { value: "500+", label: "Happy Customers" },
//   { value: "100+", label: "Shoe Models" },
//   { value: "4.8★", label: "Customer Rating" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-32 lg:pt-28 pb-20 flex items-start lg:items-center"
//     >
//       {/* Background gradient + glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1c2e] to-[#111827]" />
//       <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00ff3c]/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[140px]" />

//       {/* Decorative particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(18)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[#00ff3c]"
//             style={{
//               width: `${2 + (i % 3)}px`,
//               height: `${2 + (i % 3)}px`,
//               top: `${(i * 37) % 100}%`,
//               left: `${(i * 53) % 100}%`,
//               opacity: 0.25 + (i % 4) * 0.1,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//         {/* LEFT */}
//         <div className="text-center lg:text-left order-2 lg:order-1">
//           <div
//             aria-hidden="true"
//             className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 invisible"
//           >
//             spacer
//           </div>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
//           >
//             Step Into Style,
//             <br />
//             <span className="text-[#00ff3c]">Stand Out</span> Every Day
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             className="text-[#d1d5db] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-9"
//           >
//             Discover premium men&apos;s sneakers designed for comfort, confidence,
//             and everyday fashion.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={3}
//             className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 justify-center lg:justify-start"
//           >
//             <a
//               href="#products"
//               className="w-full sm:w-auto text-center bg-[#00ff3c] text-[#07111f] font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
//             >
//               Shop Collection
//             </a>
//             <a
//               href="#contact"
//               className="w-full sm:w-auto text-center border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={4}
//             className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10"
//           >
//             {STATS.map((stat) => (
//               <div key={stat.label} className="text-center lg:text-left">
//                 <p className="text-2xl sm:text-3xl font-extrabold text-white">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs sm:text-sm text-[#d1d5db] mt-1">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* RIGHT - Shoe */}
//         <div className="relative order-1 lg:order-2 flex items-center justify-center">
//           {/* Glow behind shoe */}
//           <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-[#00ff3c]/30 rounded-full blur-[100px]" />

//           {/* Decorative abstract circles */}
//           <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-[#00ff3c]/20 rounded-full" />
//           <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border border-white/10 rounded-full" />
//           <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#00ff3c]/70" />
//           <div className="absolute bottom-[12%] left-[6%] w-2 h-2 rounded-full bg-white/50" />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
//             animate={{ opacity: 1, scale: 1, rotate: -15 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="relative z-10"
//           >
//             <motion.div
//               animate={{ y: [0, -22, 0] }}
//               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Image
//                 src={heroShoe}
//                 alt="Shoe Factory 3.0 premium sneaker"
//                 width={620}
//                 height={620}
//                 priority
//                 className="w-[280px] sm:w-[400px] lg:w-[560px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
//               />
//             </motion.div>
//             {/* Soft shadow ellipse below shoe */}
//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/50 rounded-full blur-xl" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// ///////////////////////////////////////
// ///////////////////////////////////////
// ///////////////CLAUDE /////////////////
// ///////////////////////////////////////














////////////////////////////////////////////////
/////////////////CLAUDE CODE CAROUSEL/////////////
////////////////////////SEPERATE////////////////////







// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import heroShoe1 from "@/assets/ChatGPT Image Hero section image update.png";
// import heroShoe2 from "@/assets/ChatGPT Image product-2.png";
// import heroShoe3 from "@/assets/ChatGPT Image product-3.png";
// import heroShoe4 from "@/assets/ChatGPT Image product-4.png";

// const STATS = [
//   { value: "500+", label: "Happy Customers" },
//   { value: "100+", label: "Shoe Models" },
//   { value: "4.8★", label: "Customer Rating" },
// ];

// const SHOES = [heroShoe1, heroShoe2, heroShoe3, heroShoe4];

// // Orbit slots relative to the active (prime) shoe, in order around the ellipse.
// // index 0 = prime (front/center), 1 = right, 2 = back/top, 3 = left
// const ORBIT_SLOTS = [
//   { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
//   { x: 230, y: 30, scale: 0.42, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
//   { x: 0, y: -90, scale: 0.3, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
//   { x: -230, y: 30, scale: 0.42, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// export default function Hero() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % SHOES.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   const goTo = (slotPosition) => {
//     setActiveIndex((prev) => (prev + slotPosition) % SHOES.length);
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-32 lg:pt-28 pb-20 flex items-start lg:items-center"
//     >
//       {/* Background gradient + glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1c2e] to-[#111827]" />
//       <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00ff3c]/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[140px]" />

//       {/* Decorative particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(18)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[#00ff3c]"
//             style={{
//               width: `${2 + (i % 3)}px`,
//               height: `${2 + (i % 3)}px`,
//               top: `${(i * 37) % 100}%`,
//               left: `${(i * 53) % 100}%`,
//               opacity: 0.25 + (i % 4) * 0.1,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//         {/* LEFT */}
//         <div className="text-center lg:text-left order-2 lg:order-1">
//           <div
//             aria-hidden="true"
//             className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 invisible"
//           >
//             spacer
//           </div>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
//           >
//             Step Into Style,
//             <br />
//             <span className="text-[#00ff3c]">Stand Out</span> Every Day
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             className="text-[#d1d5db] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-9"
//           >
//             Discover premium men&apos;s sneakers designed for comfort, confidence,
//             and everyday fashion.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={3}
//             className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 justify-center lg:justify-start"
//           >
//             <a
//               href="#products"
//               className="w-full sm:w-auto text-center bg-[#00ff3c] text-[#07111f] font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
//             >
//               Shop Collection
//             </a>
//             <a
//               href="#contact"
//               className="w-full sm:w-auto text-center border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={4}
//             className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10"
//           >
//             {STATS.map((stat) => (
//               <div key={stat.label} className="text-center lg:text-left">
//                 <p className="text-2xl sm:text-3xl font-extrabold text-white">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs sm:text-sm text-[#d1d5db] mt-1">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* RIGHT - Shoe Orbit Carousel */}
//         <div className="relative order-1 lg:order-2 flex items-center justify-center">
//           {/* Glow behind shoe */}
//           <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-[#00ff3c]/30 rounded-full blur-[100px]" />

//           {/* Decorative abstract circles */}
//           <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-[#00ff3c]/20 rounded-full" />
//           <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border border-white/10 rounded-full" />
//           <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#00ff3c]/70" />
//           <div className="absolute bottom-[12%] left-[6%] w-2 h-2 rounded-full bg-white/50" />

//           {/* Orbit stage */}
//           <div className="relative z-10 w-[280px] sm:w-[400px] lg:w-[560px] h-[280px] sm:h-[400px] lg:h-[420px] flex items-center justify-center">
//             {SHOES.map((shoeSrc, shoeIndex) => {
//               // Determine this shoe's position in the orbit relative to the active shoe
//               const slotPosition = (shoeIndex - activeIndex + SHOES.length) % SHOES.length;
//               const slot = ORBIT_SLOTS[slotPosition];
//               const isPrime = slotPosition === 0;

//               return (
//                 <motion.div
//                   key={shoeIndex}
//                   className="absolute"
//                   style={{ zIndex: slot.zIndex }}
//                   animate={{
//                     x: slot.x,
//                     y: slot.y,
//                     scale: slot.scale,
//                     rotate: slot.rotate,
//                     opacity: slot.opacity,
//                     filter: `blur(${slot.blur}px)`,
//                   }}
//                   initial={false}
//                   transition={{ duration: 0.9, ease: "easeInOut" }}
//                   onClick={() => !isPrime && goTo(slotPosition)}
//                 >
//                   <motion.div
//                     animate={
//                       isPrime
//                         ? { y: [0, -22, 0] }
//                         : { y: 0 }
//                     }
//                     transition={
//                       isPrime
//                         ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
//                         : { duration: 0.3 }
//                     }
//                     className={!isPrime ? "cursor-pointer" : ""}
//                   >
//                     <Image
//                       src={shoeSrc}
//                       alt="Shoe Factory 3.0 premium sneaker"
//                       width={620}
//                       height={620}
//                       priority={isPrime}
//                       className="w-[280px] sm:w-[400px] lg:w-[560px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
//                     />
//                   </motion.div>
//                   {isPrime && (
//                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/50 rounded-full blur-xl" />
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






//////////////////////////////////////
//////////////MOBILE VIEW UPDATE//////////
////////////////////////////////////////



// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import heroShoe1 from "@/assets/ChatGPT Image Hero section image update.png";
// import heroShoe2 from "@/assets/ChatGPT Image product-2.png";
// import heroShoe3 from "@/assets/ChatGPT Image product-3.png";
// import heroShoe4 from "@/assets/ChatGPT Image product-4.png";

// const STATS = [
//   { value: "500+", label: "Happy Customers" },
//   { value: "100+", label: "Shoe Models" },
//   { value: "4.8★", label: "Customer Rating" },
// ];

// const SHOES = [heroShoe1, heroShoe2, heroShoe3, heroShoe4];

// // Orbit slots relative to the active (prime) shoe, in order around the ellipse.
// // index 0 = prime (front/center), 1 = right, 2 = back/top, 3 = left
// // Separate offset sets per breakpoint so the orbit stays compact on mobile
// // (prevents side/back shoes from overflowing the stage and pushing content down)
// const ORBIT_SLOTS_MOBILE = [
//   { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
//   { x: 95, y: 14, scale: 0.4, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
//   { x: 0, y: -40, scale: 0.28, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
//   { x: -95, y: 14, scale: 0.4, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
// ];

// const ORBIT_SLOTS_DESKTOP = [
//   { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
//   { x: 230, y: 30, scale: 0.42, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
//   { x: 0, y: -90, scale: 0.3, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
//   { x: -230, y: 30, scale: 0.42, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// export default function Hero() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 640);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const ORBIT_SLOTS = isMobile ? ORBIT_SLOTS_MOBILE : ORBIT_SLOTS_DESKTOP;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % SHOES.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   const goTo = (slotPosition) => {
//     setActiveIndex((prev) => (prev + slotPosition) % SHOES.length);
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-32 lg:pt-28 pb-20 flex items-start lg:items-center"
//     >
//       {/* Background gradient + glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1c2e] to-[#111827]" />
//       <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00ff3c]/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[140px]" />

//       {/* Decorative particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(18)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[#00ff3c]"
//             style={{
//               width: `${2 + (i % 3)}px`,
//               height: `${2 + (i % 3)}px`,
//               top: `${(i * 37) % 100}%`,
//               left: `${(i * 53) % 100}%`,
//               opacity: 0.25 + (i % 4) * 0.1,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//         {/* LEFT */}
//         <div className="text-center lg:text-left order-2 lg:order-1">
//           <div
//             aria-hidden="true"
//             className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 invisible"
//           >
//             spacer
//           </div>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
//           >
//             Step Into Style,
//             <br />
//             <span className="text-[#00ff3c]">Stand Out</span> Every Day
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             className="text-[#d1d5db] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-9"
//           >
//             Discover premium men&apos;s sneakers designed for comfort, confidence,
//             and everyday fashion.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={3}
//             className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 justify-center lg:justify-start"
//           >
//             <a
//               href="#products"
//               className="w-full sm:w-auto text-center bg-[#00ff3c] text-[#07111f] font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
//             >
//               Shop Collection
//             </a>
//             <a
//               href="#contact"
//               className="w-full sm:w-auto text-center border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={4}
//             className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10"
//           >
//             {STATS.map((stat) => (
//               <div key={stat.label} className="text-center lg:text-left">
//                 <p className="text-2xl sm:text-3xl font-extrabold text-white">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs sm:text-sm text-[#d1d5db] mt-1">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* RIGHT - Shoe Orbit Carousel */}
//         <div className="relative order-1 lg:order-2 flex items-center justify-center">
//           {/* Glow behind shoe */}
//           <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-[#00ff3c]/30 rounded-full blur-[100px]" />

//           {/* Decorative abstract circles */}
//           <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-[#00ff3c]/20 rounded-full" />
//           <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border border-white/10 rounded-full" />
//           <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#00ff3c]/70" />
//           <div className="absolute bottom-[12%] left-[6%] w-2 h-2 rounded-full bg-white/50" />

//           {/* Orbit stage */}
//           <div className="relative z-10 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] lg:w-[560px] lg:h-[420px] flex items-center justify-center">
//             {SHOES.map((shoeSrc, shoeIndex) => {
//               // Determine this shoe's position in the orbit relative to the active shoe
//               const slotPosition = (shoeIndex - activeIndex + SHOES.length) % SHOES.length;
//               const slot = ORBIT_SLOTS[slotPosition];
//               const isPrime = slotPosition === 0;

//               return (
//                 <motion.div
//                   key={shoeIndex}
//                   className="absolute"
//                   style={{ zIndex: slot.zIndex }}
//                   animate={{
//                     x: slot.x,
//                     y: slot.y,
//                     scale: slot.scale,
//                     rotate: slot.rotate,
//                     opacity: slot.opacity,
//                     filter: `blur(${slot.blur}px)`,
//                   }}
//                   initial={false}
//                   transition={{ duration: 0.9, ease: "easeInOut" }}
//                   onClick={() => !isPrime && goTo(slotPosition)}
//                 >
//                   <motion.div
//                     animate={
//                       isPrime
//                         ? { y: [0, -22, 0] }
//                         : { y: 0 }
//                     }
//                     transition={
//                       isPrime
//                         ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
//                         : { duration: 0.3 }
//                     }
//                     className={!isPrime ? "cursor-pointer" : ""}
//                   >
//                     <Image
//                       src={shoeSrc}
//                       alt="Shoe Factory 3.0 premium sneaker"
//                       width={620}
//                       height={620}
//                       priority={isPrime}
//                       className="w-[280px] sm:w-[400px] lg:w-[560px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
//                     />
//                   </motion.div>
//                   {isPrime && (
//                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/50 rounded-full blur-xl" />
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import heroShoe1 from "@/assets/ChatGPT Image Hero section image update.png";
// import heroShoe2 from "@/assets/ChatGPT Image product-2.png";
// import heroShoe3 from "@/assets/ChatGPT Image product-3.png";
// import heroShoe4 from "@/assets/ChatGPT Image product-4.png";

// const STATS = [
//   { value: "500+", label: "Happy Customers" },
//   { value: "100+", label: "Shoe Models" },
//   { value: "4.8★", label: "Customer Rating" },
// ];

// const SHOES = [heroShoe1, heroShoe2, heroShoe3, heroShoe4];

// // Orbit slots relative to the active (prime) shoe, in order around the ellipse.
// // index 0 = prime (front/center), 1 = right, 2 = back/top, 3 = left
// // Separate offset sets per breakpoint so the orbit stays compact on mobile
// // (prevents side/back shoes from overflowing the stage and pushing content down)
// const ORBIT_SLOTS_MOBILE = [
//   { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
//   { x: 68, y: 10, scale: 0.4, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
//   { x: 0, y: -28, scale: 0.28, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
//   { x: -68, y: 10, scale: 0.4, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
// ];

// const ORBIT_SLOTS_DESKTOP = [
//   { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
//   { x: 230, y: 30, scale: 0.42, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
//   { x: 0, y: -90, scale: 0.3, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
//   { x: -230, y: 30, scale: 0.42, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// export default function Hero() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 640);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const ORBIT_SLOTS = isMobile ? ORBIT_SLOTS_MOBILE : ORBIT_SLOTS_DESKTOP;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % SHOES.length);
//     }, 3200);
//     return () => clearInterval(interval);
//   }, []);

//   const goTo = (slotPosition) => {
//     setActiveIndex((prev) => (prev + slotPosition) % SHOES.length);
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-20 sm:pt-32 lg:pt-28 pb-20 flex items-start lg:items-center"
//     >
//       {/* Background gradient + glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1c2e] to-[#111827]" />
//       <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00ff3c]/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[140px]" />

//       {/* Decorative particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(18)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[#00ff3c]"
//             style={{
//               width: `${2 + (i % 3)}px`,
//               height: `${2 + (i % 3)}px`,
//               top: `${(i * 37) % 100}%`,
//               left: `${(i * 53) % 100}%`,
//               opacity: 0.25 + (i % 4) * 0.1,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//         {/* LEFT */}
//         <div className="text-center lg:text-left order-2 lg:order-1">
//           <div
//             aria-hidden="true"
//             className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 invisible"
//           >
//             spacer
//           </div>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-3 sm:mb-6"
//           >
//             Step Into Style,
//             <br />
//             <span className="text-[#00ff3c]">Stand Out</span> Every Day
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             className="text-[#d1d5db] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-5 sm:mb-9"
//           >
//             Discover premium men&apos;s sneakers designed for comfort, confidence,
//             and everyday fashion.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={3}
//             className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mb-6 sm:mb-12 justify-center lg:justify-start"
//           >
//             <a
//               href="#products"
//               className="w-full sm:w-auto text-center bg-[#00ff3c] text-[#07111f] font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
//             >
//               Shop Collection
//             </a>
//             <a
//               href="#contact"
//               className="w-full sm:w-auto text-center border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={4}
//             className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10"
//           >
//             {STATS.map((stat) => (
//               <div key={stat.label} className="text-center lg:text-left">
//                 <p className="text-2xl sm:text-3xl font-extrabold text-white">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs sm:text-sm text-[#d1d5db] mt-1">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* RIGHT - Shoe Orbit Carousel */}
//         <div className="relative order-1 lg:order-2 flex items-center justify-center">
//           {/* Glow behind shoe */}
//           <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-[#00ff3c]/30 rounded-full blur-[100px]" />

//           {/* Decorative abstract circles */}
//           <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-[#00ff3c]/20 rounded-full" />
//           <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border border-white/10 rounded-full" />
//           <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#00ff3c]/70" />
//           <div className="absolute bottom-[12%] left-[6%] w-2 h-2 rounded-full bg-white/50" />

//           {/* Orbit stage */}
//           <div className="relative z-10 w-[180px] h-[180px] sm:w-[400px] sm:h-[400px] lg:w-[560px] lg:h-[420px] flex items-center justify-center">
//             {SHOES.map((shoeSrc, shoeIndex) => {
//               // Determine this shoe's position in the orbit relative to the active shoe
//               const slotPosition = (shoeIndex - activeIndex + SHOES.length) % SHOES.length;
//               const slot = ORBIT_SLOTS[slotPosition];
//               const isPrime = slotPosition === 0;

//               return (
//                 <motion.div
//                   key={shoeIndex}
//                   className="absolute"
//                   style={{ zIndex: slot.zIndex }}
//                   animate={{
//                     x: slot.x,
//                     y: slot.y,
//                     scale: slot.scale,
//                     rotate: slot.rotate,
//                     opacity: slot.opacity,
//                     filter: `blur(${slot.blur}px)`,
//                   }}
//                   initial={false}
//                   transition={{ duration: 0.9, ease: "easeInOut" }}
//                   onClick={() => !isPrime && goTo(slotPosition)}
//                 >
//                   <motion.div
//                     animate={
//                       isPrime
//                         ? { y: [0, -22, 0] }
//                         : { y: 0 }
//                     }
//                     transition={
//                       isPrime
//                         ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
//                         : { duration: 0.3 }
//                     }
//                     className={!isPrime ? "cursor-pointer" : ""}
//                   >
//                     <Image
//                       src={shoeSrc}
//                       alt="Shoe Factory 3.0 premium sneaker"
//                       width={620}
//                       height={620}
//                       priority={isPrime}
//                       className="w-[180px] sm:w-[400px] lg:w-[560px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
//                     />
//                   </motion.div>
//                   {isPrime && (
//                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/50 rounded-full blur-xl" />
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import heroShoe1 from "@/assets/ChatGPT Image Hero section image update.png";
import heroShoe2 from "@/assets/ChatGPT Image product-2.png";
import heroShoe3 from "@/assets/ChatGPT Image product-3.png";
import heroShoe4 from "@/assets/ChatGPT Image product-4.png";

const STATS = [
  { value: "500+", label: "Happy Customers" },
  { value: "100+", label: "Shoe Models" },
  { value: "4.8★", label: "Customer Rating" },
];

const SHOES = [heroShoe1, heroShoe2, heroShoe3, heroShoe4];

// Orbit slots relative to the active (prime) shoe, in order around the ellipse.
// index 0 = prime (front/center), 1 = right, 2 = back/top, 3 = left
// Separate offset sets per breakpoint so the orbit stays compact on mobile
// (prevents side/back shoes from overflowing the stage and pushing content down)
const ORBIT_SLOTS_MOBILE = [
  { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
  { x: 100, y: 16, scale: 0.4, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
  { x: 0, y: -44, scale: 0.28, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
  { x: -100, y: 16, scale: 0.4, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
];

const ORBIT_SLOTS_DESKTOP = [
  { x: 0, y: 0, scale: 1, rotate: -15, opacity: 1, zIndex: 30, blur: 0 }, // prime
  { x: 230, y: 30, scale: 0.42, rotate: 8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // right
  { x: 0, y: -90, scale: 0.3, rotate: -5, opacity: 0.55, zIndex: 10, blur: 1 }, // back/top
  { x: -230, y: 30, scale: 0.42, rotate: -8, opacity: 0.85, zIndex: 20, blur: 0.5 }, // left
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const ORBIT_SLOTS = isMobile ? ORBIT_SLOTS_MOBILE : ORBIT_SLOTS_DESKTOP;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SHOES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const goTo = (slotPosition) => {
    setActiveIndex((prev) => (prev + slotPosition) % SHOES.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-20 sm:pt-32 lg:pt-28 pb-20 flex items-start lg:items-center"
    >
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1c2e] to-[#111827]" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00ff3c]/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#00ff3c]/10 rounded-full blur-[140px]" />

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#00ff3c]"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.25 + (i % 4) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 invisible"
          >
            spacer
          </div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-3 sm:mb-6"
          >
            Step Into Style,
            <br />
            <span className="text-[#00ff3c]">Stand Out</span> Every Day
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-[#d1d5db] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-5 sm:mb-9"
          >
            Discover premium men&apos;s sneakers designed for comfort, confidence,
            and everyday fashion.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mb-6 sm:mb-12 justify-center lg:justify-start"
          >
            <a
              href="#products"
              className="w-full sm:w-auto text-center bg-[#00ff3c] text-[#07111f] font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
            >
              Shop Collection
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-[#d1d5db] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Shoe Orbit Carousel */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center">
          {/* Glow behind shoe */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-[#00ff3c]/30 rounded-full blur-[100px]" />

          {/* Decorative abstract circles */}
          <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-[#00ff3c]/20 rounded-full" />
          <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border border-white/10 rounded-full" />
          <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#00ff3c]/70" />
          <div className="absolute bottom-[12%] left-[6%] w-2 h-2 rounded-full bg-white/50" />

          {/* Orbit stage */}
          <div className="relative z-10 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[560px] lg:h-[420px] flex items-center justify-center">
            {SHOES.map((shoeSrc, shoeIndex) => {
              // Determine this shoe's position in the orbit relative to the active shoe
              const slotPosition = (shoeIndex - activeIndex + SHOES.length) % SHOES.length;
              const slot = ORBIT_SLOTS[slotPosition];
              const isPrime = slotPosition === 0;

              return (
                <motion.div
                  key={shoeIndex}
                  className="absolute"
                  style={{ zIndex: slot.zIndex }}
                  animate={{
                    x: slot.x,
                    y: slot.y,
                    scale: slot.scale,
                    rotate: slot.rotate,
                    opacity: slot.opacity,
                    filter: `blur(${slot.blur}px)`,
                  }}
                  initial={false}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  onClick={() => !isPrime && goTo(slotPosition)}
                >
                  <motion.div
                    animate={
                      isPrime
                        ? { y: [0, -22, 0] }
                        : { y: 0 }
                    }
                    transition={
                      isPrime
                        ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.3 }
                    }
                    className={!isPrime ? "cursor-pointer" : ""}
                  >
                    <Image
                      src={shoeSrc}
                      alt="Shoe Factory 3.0 premium sneaker"
                      width={620}
                      height={620}
                      priority={isPrime}
                      className="w-[280px] sm:w-[400px] lg:w-[560px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>
                  {isPrime && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/50 rounded-full blur-xl" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}