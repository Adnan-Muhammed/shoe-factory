// "use client";

// import { motion } from "framer-motion";
// import { MessageCircle, Instagram, Phone } from "lucide-react";

// export default function Contact() {
//   return (
//     <section id="contact" className="relative bg-[#111827] py-24 px-5 sm:px-8 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#111827] to-[#07111f]" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00ff3c]/15 rounded-full blur-[140px]" />

//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6 }}
//         className="relative max-w-3xl mx-auto text-center"
//       >
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
//           Ready To Upgrade Your Style?
//         </h2>
//         <p className="text-[#d1d5db] text-base sm:text-lg mb-10 max-w-xl mx-auto">
//           Get in touch and discover the latest footwear collections.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <a
//             href="https://wa.me/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00ff3c] text-[#07111f] font-bold px-7 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
//           >
//             <MessageCircle size={18} />
//             WhatsApp
//           </a>
//           <a
//             href="https://instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
//           >
//             <Instagram size={18} />
//             Instagram
//           </a>
//           <a
//             href="tel:+910000000000"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
//           >
//             <Phone size={18} />
//             Call Now
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { MessageCircle, Camera, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#111827] py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#111827] to-[#07111f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00ff3c]/15 rounded-full blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
          Ready To Upgrade Your Style?
        </h2>
        <p className="text-[#d1d5db] text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Get in touch and discover the latest footwear collections.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00ff3c] text-[#07111f] font-bold px-7 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,60,0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
          >
            <Camera size={18} />
            Instagram
          </a>
          <a
            href="tel:+910000000000"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-md hover:border-[#00ff3c] hover:text-[#00ff3c] transition-all duration-300"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}