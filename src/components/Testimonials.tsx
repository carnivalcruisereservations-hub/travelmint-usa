"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sir Alistair Thorne",
    rating: 5,
    text: "The level of personalization TravelMintUSA offers is unmatched. From the private helicopter transfers in Switzerland to securing a private dining slot at a Michelin-star villa, every detail was pristine.",
  },
  {
    name: "Victoria Rose-Sterling",
    rating: 5,
    text: "Our Maldivian escape was completely flawless. We didn't lift a finger. The 24/7 support was incredibly responsive, updating our flights in real-time when we decided to extend our stay.",
  },
  {
    name: "Marcus Aurelius Vance",
    rating: 5,
    text: "We chartered 'The Sovereign' superyacht for my wife's birthday. The Amalfi itinerary, the gourmet chef onboard, and the hidden cove anchoring made it the most memorable family trip we've ever taken.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-sec relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 block">
            Guest Reflections
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-4">
            Testimonials from the Discerning
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
            Read about the customized journeys, escapes, and expeditions crafted for our premium clientele.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass p-8 rounded-3xl relative flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-6 opacity-[0.05] pointer-events-none">
                <Quote className="w-16 h-16 text-white" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed italic mb-8">
                  "{test.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-sm font-semibold text-white font-serif tracking-wider">
                    {test.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
