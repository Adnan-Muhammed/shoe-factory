"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/ChatGPT Image logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07111f]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <Image
            src={logo}
            alt="Shoe Factory 3.0"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          {/* <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-extrabold text-lg tracking-tight">
              Shoe Factory <span className="text-[#00ff3c]">3.0</span>
            </span>
            <span className="text-[#d1d5db] text-[10px] uppercase tracking-[0.2em]">
              Trend Setters
            </span>
          </span> */}

          <span className="flex flex-col leading-tight">
  <span className="text-white font-extrabold text-lg tracking-tight">
    Shoe Factory <span className="text-[#00ff3c]">3.0</span>
  </span>
  <span className="text-[#d1d5db] text-[10px] uppercase tracking-[0.2em]">
    Trend Setters
  </span>
</span>
        </a>

        {/* Center links - desktop */}
        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#d1d5db] hover:text-[#00ff3c] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#00ff3c] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Shop Now */}
        <div className="hidden md:block">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-[#00ff3c] text-[#07111f] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white hover:shadow-[0_0_24px_rgba(0,255,60,0.6)] transition-all duration-300"
          >
            <ShoppingBag size={16} strokeWidth={2.5} />
            Shop Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-white p-2 -mr-2"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#07111f]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[#d1d5db] hover:text-[#00ff3c] text-base font-medium py-1.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#products"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#00ff3c] text-[#07111f] font-bold text-sm px-5 py-3 rounded-full mt-1"
              >
                <ShoppingBag size={16} strokeWidth={2.5} />
                Shop Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}