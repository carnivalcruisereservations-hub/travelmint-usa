"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Why Us", href: "#why-us" },
  { name: "Cruises", href: "#cruises" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif tracking-[0.2em] font-bold text-white hover:text-brand-accent transition-colors duration-300">
              TRAVELMINT<span className="text-brand-gold">USA</span>
            </span>
            <span className="text-[9px] tracking-[0.4em] text-gray-400 uppercase">
              Bespoke Luxury Journeys
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-wider uppercase text-gray-300 hover:text-brand-gold transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+18883161789"
              className="flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span className="tracking-wide">(888) 316-1789</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 hover:bg-brand-accent hover:text-white transition-all duration-300 text-xs uppercase tracking-widest text-brand-accent shadow-[0_0_15px_rgba(14,165,164,0.15)] hover:shadow-[0_0_25px_rgba(14,165,164,0.3)] font-semibold"
            >
              Inquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:+18883161789"
              className="p-2.5 rounded-full glass-light text-brand-accent hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full glass-light text-white hover:text-brand-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 pt-28 px-8 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif tracking-widest text-white hover:text-brand-gold transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
              <a
                href="tel:+18883161789"
                className="flex items-center gap-3 text-lg text-brand-accent font-medium"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>(888) 316-1789</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 rounded-full bg-brand-gold hover:bg-white text-brand-bg font-semibold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-brand-gold/20"
              >
                Plan Your Trip
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
