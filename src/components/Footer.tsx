"use client";

import { Compass } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-white/5 pt-20 pb-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex flex-col mb-6">
              <span className="text-xl font-serif tracking-[0.2em] font-bold text-white">
                TRAVELMINT<span className="text-brand-gold">USA</span>
              </span>
              <span className="text-[8px] tracking-[0.4em] text-gray-400 uppercase">
                Bespoke Luxury Journeys
              </span>
            </a>
            <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-sm mb-6">
              Crafting highly customized luxury itineraries, private island getaways, and elite ocean voyages for our premium clients worldwide.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Quick */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-6">
              Destinations
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Dubai</a>
              <a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Maldives</a>
              <a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Bali</a>
              <a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Switzerland</a>
            </div>
          </div>

          {/* Links Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#why-us" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Why Us</a>
              <a href="#cruises" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Luxury Cruises</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Testimonials</a>
              <a href="#blog" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light">Designer Blog</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-6">
              Concierge Desk
            </h4>
            <div className="flex flex-col gap-4 text-xs md:text-sm font-light text-gray-400">
              <p className="leading-relaxed">
                7105 Meadowbrook Rd, <br />
                Lynchburg, VA 24502, USA
              </p>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-brand-accent font-semibold mb-1">
                  General Desk
                </span>
                <a
                  href="tel:+18883161789"
                  className="text-white hover:text-brand-gold transition-colors font-semibold tracking-wide"
                >
                  (888) 316-1789
                </a>
              </div>
              <p>info@travelmintusa.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs font-light text-center md:text-left">
            © {currentYear} TRAVELMINTUSA. All rights reserved. •
            <a href="#" className="hover:text-white ml-1">Privacy Policy</a> •
            <a href="#" className="hover:text-white ml-1">Terms of Service</a>
          </p>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-brand-gold animate-spin-slow" />
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              TravelMintUSA.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
