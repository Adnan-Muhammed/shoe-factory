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
//       className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-32 pb-20 lg:pt-0 lg:min-h-screen flex items-center"
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
//           {/* <motion.span
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-[#00ff3c] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
//           >
//             🔥 Trend Setters
//           </motion.span> */}
//           {/* <div
//   aria-hidden="true"
//   className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-12 rounded-full mb-6 invisible"
// >
//   spacer
// </div> */}

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
//       className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-32 pb-20 lg:pt-0 lg:min-h-screen flex items-center"
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
//           {/* <motion.span
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-[#00ff3c] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
//           >
//             🔥 Trend Setters
//           </motion.span> */}
//           {/* <div
//   aria-hidden="true"
//   className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-12 rounded-full mb-6 invisible"
// >
//   spacer
// </div> */}

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





///////////////////////////////////////
///////////////////////////////////////
///////////////CLAUDE /////////////////
///////////////////////////////////////


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroShoe from "@/assets/ChatGPT Image Hero section image update.png";

const STATS = [
  { value: "500+", label: "Happy Customers" },
  { value: "100+", label: "Shoe Models" },
  { value: "4.8★", label: "Customer Rating" },
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
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#07111f] pt-32 lg:pt-28 pb-20 flex items-start lg:items-center"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
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
            className="text-[#d1d5db] text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-9"
          >
            Discover premium men&apos;s sneakers designed for comfort, confidence,
            and everyday fashion.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 justify-center lg:justify-start"
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

        {/* RIGHT - Shoe */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center">
          {/* Glow behind shoe */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-[#00ff3c]/30 rounded-full blur-[100px]" />

          {/* Decorative abstract circles */}
          <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-[#00ff3c]/20 rounded-full" />
          <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border border-white/10 rounded-full" />
          <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#00ff3c]/70" />
          <div className="absolute bottom-[12%] left-[6%] w-2 h-2 rounded-full bg-white/50" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -15 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -22, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={heroShoe}
                alt="Shoe Factory 3.0 premium sneaker"
                width={620}
                height={620}
                priority
                className="w-[280px] sm:w-[400px] lg:w-[560px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
            {/* Soft shadow ellipse below shoe */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/50 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


///////////////////////////////////////
///////////////////////////////////////
///////////////CLAUDE /////////////////
///////////////////////////////////////









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
//             <span className="text-[#00ff3c]">
//                 Stand Out
//                 </span>
//                  {/* Every Day */}
//                  {" "}
//                  With Confidence
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
       




// {/* RIGHT - Hero Shoe */}
// <div className="relative order-1 lg:order-2 flex items-center justify-center min-h-[500px]">
//   {/* Main Green Glow */}
//   <div className="absolute w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] lg:w-[650px] lg:h-[650px] bg-[#00ff3c]/25 rounded-full blur-[120px]" />

//   {/* Faded Brand Text */}
//   <div className="absolute select-none pointer-events-none">
//     <h2 className="text-[90px] sm:text-[140px] lg:text-[180px] font-black uppercase text-white/[0.03] tracking-widest">
//       SF
//     </h2>
//   </div>

//   {/* Rotating Circle */}
//   <motion.div
//     animate={{ rotate: 360 }}
//     transition={{
//       duration: 30,
//       repeat: Infinity,
//       ease: "linear",
//     }}
//     className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] border border-[#00ff3c]/20 rounded-full"
//   />

//   {/* Static Circle */}
//   <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] lg:w-[620px] lg:h-[620px] border border-white/10 rounded-full" />

//   {/* Decorative Dots */}
//   <div className="absolute top-[10%] right-[12%] w-4 h-4 rounded-full bg-[#00ff3c]" />
//   <div className="absolute bottom-[15%] left-[10%] w-3 h-3 rounded-full bg-white/60" />
//   <div className="absolute top-[30%] left-[8%] w-2 h-2 rounded-full bg-[#00ff3c]/80" />
//   <div className="absolute bottom-[25%] right-[8%] w-2 h-2 rounded-full bg-white/40" />

//   {/* Badge */}
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.8 }}
//     className="absolute top-[18%] right-[12%] z-20"
//   >
//     {/* <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-semibold">
//       🔥 Trend Setter
//     </div> */}
//   </motion.div>

//   {/* Shoe */}
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
//     animate={{ opacity: 1, scale: 1, rotate: -15 }}
//     transition={{ duration: 1 }}
//     className="relative z-10"
//   >
//     <motion.div
//       animate={{
//         y: [0, -20, 0],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       <Image
//         src={heroShoe}
//         alt="Shoe Factory Sneaker"
//         priority
//         width={800}
//         height={800}
//         className="
//           w-[340px]
//           sm:w-[480px]
//           lg:w-[700px]
//           h-auto
//           object-contain
//           drop-shadow-[0_60px_80px_rgba(0,0,0,0.7)]
//         "
//       />
//     </motion.div>

//     {/* Shadow */}
//     <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[65%] h-8 bg-black/60 rounded-full blur-2xl" />
//   </motion.div>
// </div>




//       </div>
//     </section>
//   );
// }



