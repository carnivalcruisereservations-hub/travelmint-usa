"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Best Price Guarantee",
    desc: "Luxury doesn't mean paying over value. We guarantee the most competitive rates for elite accommodations and transfers globally.",
    color: "from-amber-500/10 to-amber-500/2",
  },
  {
    icon: Award,
    title: "Luxury Experiences",
    desc: "Gain VIP access to Michelin-starred dining, private galleries, closed-door archaeological tours, and chartered voyages.",
    color: "from-brand-accent/10 to-brand-accent/2",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Concierge Support",
    desc: "A dedicated personal travel advisor is at your side from departure to return, managing flight shifts, bookings, and desires.",
    color: "from-brand-gold/10 to-brand-gold/2",
  },
  {
    icon: Users,
    title: "Trusted Travel Experts",
    desc: "With decades of combined experience, our specialists visit every villa, cruise, and island to curate only the exceptional.",
    color: "from-emerald-500/10 to-emerald-500/2",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-sec relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-bg rounded-full border border-white/5 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 block">
            Why Travel With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-4">
            Uncompromising Excellence
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
            We transcend standard travel planning, crafting bespoke moments defined by comfort, convenience, and unparalleled luxury.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass p-8 rounded-3xl relative overflow-hidden transition-all duration-300 group hover:border-brand-gold/30 hover:shadow-xl hover:shadow-black/35"
              >
                {/* Background light gradient */}
                <div
                  className={`absolute inset-0 z-0 bg-gradient-to-br ${feat.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors duration-300 border border-white/10">
                    <Icon className="w-6 h-6 text-white group-hover:text-brand-gold transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {feat.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 text-xs md:text-sm leading-relaxed font-light transition-colors duration-300">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
