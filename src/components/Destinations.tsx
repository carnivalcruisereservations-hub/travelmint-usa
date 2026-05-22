"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

const destinations = [
  {
    id: "dubai",
    title: "Dubai, UAE",
    subtitle: "Modern Luxury & Skylines",
    price: "From $8,500 / person",
    duration: "6 Days Bespoke Tour",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    tag: "Penthouse Suite & Private Yacht",
  },
  {
    id: "maldives",
    title: "Maldives",
    subtitle: "Overwater Seclusion",
    price: "From $12,000 / person",
    duration: "8 Days Paradise Retreat",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    tag: "Ultra-All-Inclusive Villa",
  },
  {
    id: "bali",
    title: "Bali, Indonesia",
    subtitle: "Tropical Sanctuary & Wellness",
    price: "From $5,200 / person",
    duration: "7 Days Holistic Journey",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    tag: "Private Infinity Pool Villa",
  },
  {
    id: "switzerland",
    title: "Swiss Alps, Switzerland",
    subtitle: "Snowy Peaks & Chalets",
    price: "From $9,800 / person",
    duration: "7 Days Alpine Escape",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tag: "Private Ski Chalet & Heli-Tour",
  },
  {
    id: "paris",
    title: "Paris, France",
    subtitle: "Classic Romance & Gastronomy",
    price: "From $7,500 / person",
    duration: "5 Days Couture Experience",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    tag: "Plaza Athénée Balcony Suite",
  },
  {
    id: "santorini",
    title: "Santorini, Greece",
    subtitle: "Caldera Views & Sunset",
    price: "From $6,900 / person",
    duration: "6 Days Cycladic Retreat",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    tag: "Cave Pool Villa & Sunset Yacht",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 block">
              Curated Escapes
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium">
              Featured Luxury Destinations
            </h2>
          </div>
          <p className="text-gray-400 max-w-md font-light leading-relaxed text-sm md:text-base">
            Every destination is chosen for its exceptional beauty, world-class luxury standard, and potential for unforgettable experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl shadow-black/20 border border-white/5"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.55]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-brand-bg/20 to-transparent" />
              </div>

              {/* Tag (Top Left) */}
              <div className="absolute top-5 left-5 z-10">
                <span className="glass-gold py-1.5 px-3 rounded-full text-[10px] tracking-widest uppercase font-semibold text-brand-gold">
                  {dest.tag}
                </span>
              </div>

              {/* Content (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                <div className="flex items-center gap-1.5 text-brand-accent mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs uppercase tracking-wider font-semibold font-sans">
                    {dest.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white font-medium mb-1">
                  {dest.title}
                </h3>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">
                      {dest.duration}
                    </span>
                    <span className="text-sm font-semibold text-brand-gold mt-0.5">
                      {dest.price}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="p-3 rounded-full bg-white/5 hover:bg-brand-accent text-white hover:shadow-[0_0_15px_rgba(14,165,164,0.3)] transition-all duration-300 border border-white/10"
                    aria-label={`Inquire about ${dest.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
