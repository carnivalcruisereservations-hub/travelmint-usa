"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Art of Slow Travel: Curation of the Private Villa Experience",
    excerpt: "Why discerning travelers are trading multi-destination checklists for immersive stays in private estate sanctuaries.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80",
    category: "Luxury Travel Trends",
    date: "May 18, 2026",
    readTime: "5 min read",
    href: "/blog/art-of-slow-travel",
  },
  {
    title: "Swiss Chalets: Top 5 Winter Hideaways For Private Helicopter Access",
    excerpt: "Explore alpine homes featuring ski-in access, personalized wellness therapists, and exclusive high-altitude helipads.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    category: "Alpine Escapes",
    date: "April 29, 2026",
    readTime: "7 min read",
    href: "/blog/swiss-chalets",
  },
  {
    title: "Sailing Santorini: An Insider Guide to the Caldera Coves",
    excerpt: "Ditch the crowded cliffs. Discover how chartering a yacht reveals Santorini's secret beaches, coves, and volcanic springs.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    category: "Yachting Guides",
    date: "April 12, 2026",
    readTime: "4 min read",
    href: "/blog/sailing-santorini",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 block">
              Travel Journals
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium">
              From Our Travel Designers
            </h2>
          </div>
          <p className="text-gray-400 max-w-md font-light leading-relaxed text-sm md:text-base">
            Gain inspiration for your next bespoke adventure with exclusive guides, travel trends, and styling recommendations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-[240px] rounded-3xl overflow-hidden mb-6 shadow-lg border border-white/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="glass-light py-1 px-3 rounded-full text-[10px] tracking-widest uppercase font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Date & Read Time metadata */}
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3 font-light font-sans">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-white font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More link */}
              <Link
                href={post.href}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-accent hover:text-white transition-colors duration-300 group/link"
              >
                Read Article
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
