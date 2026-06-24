// import Image from "next/image";
// import { Instagram, Facebook, MessageCircle, Twitter } from "lucide-react";
// import logo from "@/assets/ChatGPT Image logo.png";

// const QUICK_LINKS = ["Home", "Products", "About", "Testimonials", "Contact"];
// const CATEGORIES = ["Sneakers", "Running", "Casual", "Sports"];

// export default function Footer() {
//   return (
//     <footer className="bg-[#07111f] border-t border-white/10 pt-16 pb-8 px-5 sm:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div className="col-span-2 sm:col-span-1">
//           <div className="flex items-center gap-2 mb-4">
//             <Image src={logo} alt="Shoe Factory 3.0" width={36} height={36} className="rounded-full" />
//             <span className="text-white font-bold text-base">
//               Shoe Factory <span className="text-[#00ff3c]">3.0</span>
//             </span>
//           </div>
//           <p className="text-[#d1d5db] text-sm leading-relaxed">
//             Affordable, trend-led men&apos;s footwear for every step of your day.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
//             Quick Links
//           </h4>
//           <ul className="space-y-2.5">
//             {QUICK_LINKS.map((l) => (
//               <li key={l}>
//                 <a
//                   href={`#${l.toLowerCase()}`}
//                   className="text-[#d1d5db] text-sm hover:text-[#00ff3c] transition-colors duration-200"
//                 >
//                   {l}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
//             Categories
//           </h4>
//           <ul className="space-y-2.5">
//             {CATEGORIES.map((c) => (
//               <li key={c}>
//                 <span className="text-[#d1d5db] text-sm hover:text-[#00ff3c] transition-colors duration-200 cursor-pointer">
//                   {c}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact + Social */}
//         <div>
//           <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
//             Contact
//           </h4>
//           <ul className="space-y-2.5 mb-5">
//             <li className="text-[#d1d5db] text-sm">+91 00000 00000</li>
//             <li className="text-[#d1d5db] text-sm">hello@shoefactory3.com</li>
//           </ul>
//           <div className="flex items-center gap-3">
//             {[Instagram, Facebook, MessageCircle, Twitter].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d1d5db] hover:text-[#00ff3c] hover:border-[#00ff3c]/50 transition-colors duration-200"
//               >
//                 <Icon size={16} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-center">
//         <p className="text-[#d1d5db] text-xs">
//           © 2026 Shoe Factory 3.0. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }


import Image from "next/image";
import { Camera, Users, MessageCircle, AtSign } from "lucide-react";
import logo from "@/assets/ChatGPT Image logo.png";

const QUICK_LINKS = ["Home", "Products", "About", "Testimonials", "Contact"];
const CATEGORIES = ["Sneakers", "Running", "Casual", "Sports"];

export default function Footer() {
  return (
    <footer className="bg-[#07111f] border-t border-white/10 pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src={logo} alt="Shoe Factory 3.0" width={36} height={36} className="rounded-full" />
            <span className="text-white font-bold text-base">
              Shoe Factory <span className="text-[#00ff3c]">3.0</span>
            </span>
          </div>
          <p className="text-[#d1d5db] text-sm leading-relaxed">
            Affordable, trend-led men&apos;s footwear for every step of your day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-[#d1d5db] text-sm hover:text-[#00ff3c] transition-colors duration-200"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Categories
          </h4>
          <ul className="space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <span className="text-[#d1d5db] text-sm hover:text-[#00ff3c] transition-colors duration-200 cursor-pointer">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-2.5 mb-5">
            <li className="text-[#d1d5db] text-sm">+91 00000 00000</li>
            <li className="text-[#d1d5db] text-sm">hello@shoefactory3.com</li>
          </ul>
          <div className="flex items-center gap-3">
            {[Camera, Users, MessageCircle, AtSign].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d1d5db] hover:text-[#00ff3c] hover:border-[#00ff3c]/50 transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-center">
        <p className="text-[#d1d5db] text-xs">
          © 2026 Shoe Factory 3.0. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}