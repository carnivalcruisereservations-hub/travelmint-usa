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
        <div className="flex justify-center">
          {/* Left Column: Form */}
          <div className="w-full max-w-3xl flex flex-col justify-center">
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
                  placeholder="Enter your phone number (e.g. (888) 316-1789)"
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

      </div>
    </section>
  );
}
