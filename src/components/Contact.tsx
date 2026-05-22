"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-sec relative overflow-hidden">
      {/* Background design */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 block">
              Direct Inquiry
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium mb-4">
              Begin Your Journey
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
              Speak with our private travel designers. Outline your dream destination, preferred dates, and party size, and we will formulate a personalized proposal.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-brand-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm font-sans"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-brand-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm font-sans"
                    required
                  />
                </div>
              </div>

              {/* Phone (Optional) */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter your phone number (e.g. +1 (434) 439-8478)"
                  className="w-full bg-brand-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm font-sans"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">
                  Bespoke Travel Requirements
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about the trip you envision..."
                  rows={5}
                  className="w-full bg-brand-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold text-sm font-sans resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-fit px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  status === "success"
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-brand-gold hover:bg-brand-accent text-brand-bg hover:text-white hover:shadow-[0_0_25px_rgba(14,165,164,0.3)] shadow-lg shadow-brand-gold/15"
                }`}
              >
                {status === "sending" && "Submitting..."}
                {status === "success" && "Message Sent"}
                {status === "idle" && (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Cards & Dark Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Details */}
            <div className="glass p-8 rounded-3xl flex flex-col gap-6">
              <h3 className="text-xl font-serif text-white font-medium mb-2 border-b border-white/5 pb-4">
                Office Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 shrink-0">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium font-sans">
                    Call Direct
                  </span>
                  <a
                    href="tel:+14344398478"
                    className="text-white hover:text-brand-accent font-semibold transition-colors duration-300 tracking-wide text-sm font-sans"
                  >
                    +1 (434) 439-8478
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 shrink-0">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium font-sans">
                    Office Address
                  </span>
                  <p className="text-white text-sm font-light leading-relaxed font-sans">
                    7105 Meadowbrook Rd, <br />
                    Lynchburg, VA 24502, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 shrink-0">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium font-sans">
                    General Inquiries
                  </span>
                  <a
                    href="mailto:concierge@travelmintusa.com"
                    className="text-white hover:text-brand-accent transition-colors duration-300 text-sm font-sans"
                  >
                    concierge@TravelMintUSA.com
                  </a>
                </div>
              </div>

              {/* Chat on WhatsApp */}
              <a
                href="https://wa.me/14344398478"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-semibold text-xs tracking-wider uppercase hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Advisor
              </a>
            </div>

            {/* Google Map dark styled */}
            <div className="h-[250px] w-full rounded-3xl overflow-hidden border border-white/5 relative shadow-lg">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=7105%20Meadowbrook%20Rd,%20Lynchburg,%20VA%2024502&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter invert-[90%] hue-rotate-[180deg] brightness-[80%] contrast-[95%] grayscale-[40%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
