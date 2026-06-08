import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const articles = {
  "art-of-slow-travel": {
    title: "The Art of Slow Travel: Curation of the Private Villa Experience",
    category: "Luxury Travel Trends",
    date: "May 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg leading-relaxed mb-6">The modern luxury traveler is undergoing a profound transformation. Gone are the days of frantic, multi-city itineraries designed to tick boxes. Today's most discerning individuals seek something much rarer: time, space, and absolute privacy.</p>
      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Rise of the Estate Sanctuary</h2>
      <p class="mb-6">We are seeing an unprecedented shift towards private villa rentals that operate more like personal hotels. These aren't just large houses; they are fully-staffed sanctuaries where every detail is curated to the client's exact specifications before they even arrive.</p>
      <p class="mb-6">From pre-stocking the wine cellar with specific vintages to flying in a preferred wellness practitioner, the estate experience is about removing all friction from travel.</p>
      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Immersion over Observation</h2>
      <p class="mb-6">Staying in a private estate allows guests to connect with a destination authentically. Instead of sharing amenities with hundreds of others, our clients enjoy private olive oil tastings on their own terrace, cooking masterclasses in their own professional kitchen, and exclusive access to local artisans.</p>
      <p class="mb-6 font-medium text-brand-gold italic">"This is the art of slow travel: unpacking once, settling into a rhythm, and allowing the soul to truly rejuvenate."</p>
    `
  },
  "swiss-chalets": {
    title: "Swiss Chalets: Top 5 Winter Hideaways For Private Helicopter Access",
    category: "Alpine Escapes",
    date: "April 29, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg leading-relaxed mb-6">For those who value their time above all else, the journey from airport to alpine retreat can be the most tedious part of a winter holiday. This is why our most requested properties in the Swiss Alps now feature private helipads.</p>
      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Seamless Transitions</h2>
      <p class="mb-6">Imagine touching down at Geneva or Zurich and transferring directly to a twin-engine helicopter. Within minutes, you are soaring over snow-capped peaks, landing directly at your chalet's private pad where your staff is waiting with warm towels and vintage champagne.</p>
      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Elite Five</h2>
      <p class="mb-6">Our curated list of the top five Swiss chalets offers more than just ski-in, ski-out access. These properties feature private subterranean spas, Michelin-trained resident chefs, and dedicated ski concierges who ensure your equipment is warmed and ready the moment you wish to hit the pristine slopes.</p>
    `
  },
  "sailing-santorini": {
    title: "Sailing Santorini: An Insider Guide to the Caldera Coves",
    category: "Yachting Guides",
    date: "April 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg leading-relaxed mb-6">Santorini is undeniably beautiful, but navigating its cliffside paths during peak season can detract from the luxury experience. The true secret to enjoying this iconic island lies not on its shores, but in its surrounding waters.</p>
      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Caldera from the Deck</h2>
      <p class="mb-6">Chartering a luxury yacht allows you to experience the majesty of the Caldera without the crowds. Watch the famous Oia sunset from the privacy of your aft deck, champagne in hand, far removed from the bustling viewing points on land.</p>
      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Secret Coves and Volcanic Springs</h2>
      <p class="mb-6">Our tailored sailing itineraries grant you access to hidden coves inaccessible by land, private swimming spots in volcanic hot springs, and exclusive reservations at seaside tavernas that can only be reached by tender.</p>
    `
  }
};

export function generateStaticParams() {
  return [
    { slug: 'art-of-slow-travel' },
    { slug: 'swiss-chalets' },
    { slug: 'sailing-santorini' }
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white font-serif mb-4">Article Not Found</h1>
          <Link href="/" className="text-brand-gold hover:text-white transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-4 block">
          {article.category}
        </span>
        
        <h1 className="text-3xl md:text-5xl font-serif text-white font-medium mb-6">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-6 text-gray-400 text-sm mb-10 font-light font-sans">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-gold" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover filter brightness-90"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-gray-300 font-light leading-relaxed space-y-6">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      
      {/* Call to Action at the bottom of article */}
      <div className="max-w-3xl mx-auto px-6 mt-20">
         <div className="glass p-10 rounded-3xl text-center border border-brand-gold/20">
            <h3 className="text-2xl font-serif text-white mb-4">Inspired to Travel?</h3>
            <p className="text-gray-400 mb-8 font-light">Let our expert designers craft your next bespoke journey.</p>
            <Link href="/#contact" className="inline-block px-8 py-4 rounded-full bg-brand-gold hover:bg-white text-brand-bg font-semibold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-brand-gold/20">
              Start Planning
            </Link>
         </div>
      </div>
    </div>
  );
}
