"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href="https://wa.me/14344398478"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/20 relative group transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing outer ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 scale-100 group-hover:animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10" />
      </motion.a>
    </div>
  );
}
