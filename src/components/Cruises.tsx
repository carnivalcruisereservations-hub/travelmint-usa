"use client";

import { motion } from "framer-motion";
import { Anchor, ArrowRight, Ship, Wind } from "lucide-react";

const cruisePackages = [
  {
    title: "Mediterranean Odyssey",
    route: "Amalfi Coast, Santorini & Monaco",
    days: "10 Days Bespoke Charter",
    price: "From $24,500 / cabin",
  },
  {
    title: "Caribbean Sanctuary",
    route: "St. Barts, Anguilla & Exuma Cays",
    days: "8 Days Island Yachting",
    price: "From $18,900 / cabin",
  },
  {
    title: "Antarctic Expedition",
    route: "Drake Passage & South Shetland Islands",
    days: "12 Days Premium Polar Explorer",
    price: "From $32,000 / cabin",
  },
];

export default function Cruises() {
  return (
    <section id="cruises" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Absolute glow design elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Left Column: Info & Packages */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 flex items-center gap-1.5">
              <Ship className="w-3.5 h-3.5" />
              Ocean Expeditions
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-6">
              Luxury Cruises & Private Yacht Charters
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
              Sail the world's most prestigious waters on elite megayachts, luxury ocean liners, and private catamarans. Indulge in bespoke dining, private deck jacuzzis, and personalized ocean excursions.
            </p>

            {/* Cruise Packages Checklist */}
            <div className="w-full flex flex-col gap-4 mb-8">
              {cruisePackages.map((pkg, idx) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between hover:border-brand-accent/35 transition-all duration-300 gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-accent/20">
                      <Anchor className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{pkg.title}</h4>
                      <p className="text-xs text-gray-400 font-light mt-0.5">{pkg.route}</p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold font-medium">
                      {pkg.days}
                    </span>
                    <span className="text-xs font-semibold text-white sm:mt-1">
                      {pkg.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white hover:shadow-[0_0_30px_rgba(14,165,164,0.3)] transition-all duration-500 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group"
            >
              Request Cruise Brochure
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Asymmetric Right Column: Giant Yacht Card */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Yacht Experience"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.6]"
              />

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-transparent to-brand-bg/25" />

              {/* Top Glass Badge */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 glass py-2 px-4 rounded-full border border-white/10">
                <Wind className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                  Private Charter Fleet
                </span>
              </div>

              {/* Bottom Overlapping Info Box */}
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10 z-10">
                <h3 className="text-xl font-serif text-white font-medium mb-2">
                  The Sovereign Superyacht
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                  Fully crewed with private chef, dive guides, and custom tenders. Sails out of Monaco, Portofino, and St. Tropez.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-brand-gold font-semibold">
                    12 Guests Max • 6 En-Suite Cabins
                  </span>
                  <span className="text-sm font-semibold text-brand-accent">
                    $120,000 / week
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
