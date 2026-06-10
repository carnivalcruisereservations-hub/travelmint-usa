"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, MapPin, Compass, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [inquiry, setInquiry] = useState({
    destination: "",
    date: "",
    guests: "2 Guests (Couple)",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.destination || !inquiry.date || !inquiry.email || !inquiry.phone) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_background.png"
          alt="Luxury Resort Sunset"
          className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/85 via-transparent to-brand-bg/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-6 border border-brand-accent/20"
          >
            <Compass className="w-4 h-4 text-brand-gold animate-spin-slow" />
            <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold font-sans">
              Welcome to Elite Travel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 font-semibold"
          >
            Luxury Journeys <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-brand-accent">
              Crafted for Modern
            </span>{" "}
            Travelers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-8"
          >
            Experience the world's most exclusive destinations with bespoke itineraries, elite accommodations, private yacht charters, and unmatched personal travel services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#destinations"
              className="px-8 py-4 rounded-full bg-brand-accent text-white font-medium uppercase tracking-wider text-xs hover:bg-white hover:text-brand-bg hover:shadow-[0_0_30px_rgba(14,165,164,0.4)] transition-all duration-500 flex items-center gap-2 group"
            >
              Explore Destinations
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-brand-gold bg-transparent text-white hover:text-brand-gold font-medium uppercase tracking-wider text-xs transition-all duration-300"
            >
              Plan Your Trip
            </a>
          </motion.div>
        </div>

        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="glass-gold p-8 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Subtle glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />

            <h3 className="text-2xl font-serif text-white mb-2 tracking-wide font-medium">
              Start Planning
            </h3>
            <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider font-light">
              Bespoke travel curation starts here
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-8 h-8 text-brand-gold animate-spin-slow" />
                </div>
                <h4 className="text-xl text-white font-serif mb-2">Request Received</h4>
                <p className="text-sm text-gray-400">
                  Our private travel designer will reach out to you within the hour.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Destination Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    Where To?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                    <select
                      value={inquiry.destination}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, destination: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-sec/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select Destination
                      </option>
                      <option value="Dubai">Dubai, UAE</option>
                      <option value="Maldives">Maldives, Indian Ocean</option>
                      <option value="Bali">Bali, Indonesia</option>
                      <option value="Switzerland">Swiss Alps, Switzerland</option>
                      <option value="Paris">Paris, France</option>
                      <option value="Santorini">Santorini, Greece</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>

                {/* Travel Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    Departure Date
                  </label>
                  <div className="relative font-sans">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                    <input
                      type="date"
                      value={inquiry.date}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, date: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-sec/80 border border-white/10 text-white focus:outline-none focus:border-brand-gold text-sm cursor-pointer"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    Travel Party
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                    <select
                      value={inquiry.guests}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, guests: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-sec/80 border border-white/10 text-white focus:outline-none focus:border-brand-gold text-sm appearance-none cursor-pointer"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="3-5 Guests">3-5 Guests (Family)</option>
                      <option value="6+ Guests">6+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                    <input
                      type="email"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-sec/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                    <input
                      type="tel"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-brand-sec/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-red-400 text-xs text-center">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold/80 hover:from-brand-accent hover:to-brand-accent/80 text-brand-bg hover:text-white font-semibold uppercase tracking-widest text-xs transition-all duration-500 shadow-lg shadow-brand-gold/15 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Request Consultation"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
