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
      <p class="text-lg leading-relaxed mb-6">The modern luxury traveler is undergoing a profound transformation. Gone are the days of frantic, multi-city itineraries designed to tick boxes. Today's most discerning individuals seek something much rarer: time, space, and absolute privacy. Welcome to the era of slow travel, where the focus shifts from seeing everything to truly experiencing one remarkable place.</p>
      
      <p class="mb-6">For decades, luxury travel was defined by how much one could fit into a single trip. Five countries in two weeks, countless flights, and a whirlwind of luxury hotels. While exciting, this approach often left travelers more exhausted than when they departed. The paradigm has shifted. High-net-worth individuals are now prioritizing deep immersion, seeking private estates where they can unpack once and let the destination unfold around them.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Rise of the Estate Sanctuary</h2>
      <p class="mb-6">We are seeing an unprecedented shift towards private villa rentals that operate more like personal hotels. These aren't just large houses; they are fully-staffed sanctuaries where every detail is curated to the client's exact specifications before they even arrive. From the thread count of the linens to the specific vintage of Bordeaux resting in the cellar, everything is tailored to personal preference.</p>
      
      <p class="mb-6">This level of customization requires an intricate web of invisible service. Before a guest's arrival, estate managers coordinate with personal assistants to understand dietary restrictions, preferred wellness routines, and even the favored temperature of the swimming pool. A dedicated team, often including a Michelin-trained chef, a sommelier, daily housekeeping, and a dedicated concierge, stands ready to fulfill any request seamlessly.</p>

      <div class="my-10 p-8 border-l-4 border-brand-gold bg-brand-gold/5 rounded-r-2xl">
        <p class="mb-2 font-medium text-brand-gold italic text-xl">"This is the art of slow travel: unpacking once, settling into a rhythm, and allowing the soul to truly rejuvenate without the friction of constant movement."</p>
      </div>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Immersion over Observation</h2>
      <p class="mb-6">Staying in a private estate allows guests to connect with a destination authentically and privately. Instead of sharing amenities with hundreds of others or adhering to a hotel's schedule, our clients dictate the rhythm of their days. They enjoy private olive oil tastings guided by local agronomists on their own terrace, cooking masterclasses focusing on regional cuisine in their professional kitchen, and exclusive access to local artisans brought directly to the estate.</p>

      <p class="mb-6">Imagine waking up in a restored 17th-century Tuscan farmhouse. The aroma of freshly baked schiacciata wafts through the halls. Your personal trainer is waiting by the infinity pool overlooking rolling hills of vineyards. Later, a local historian arrives to give a private lecture on Renaissance art before you head into Florence for an exclusive after-hours tour of the Uffizi Gallery. This is not a vacation; it is a curated life experience.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Psychological Benefits of Staying Put</h2>
      <p class="mb-6">Beyond the obvious logistical comforts, slow travel offers significant psychological benefits. The constant sensory overload and decision fatigue associated with fast-paced itineraries are eliminated. Guests report a profound sense of decompression, improved sleep, and a deeper connection with their travel companions.</p>

      <p class="mb-6">By slowing down, travelers allow themselves the luxury of serendipity—a long, unplanned afternoon reading under a centuries-old oak tree, a spontaneous decision to take the yacht out for a sunset cruise, or simply enjoying the profound silence of absolute privacy. In a hyper-connected, fast-paced world, the ultimate luxury is taking back control of your time.</p>
    `
  },
  "swiss-chalets": {
    title: "Swiss Chalets: Top 5 Winter Hideaways For Private Helicopter Access",
    category: "Alpine Escapes",
    date: "April 29, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg leading-relaxed mb-6">For those who value their time above all else, the journey from airport to alpine retreat can be the most tedious part of a winter holiday. Winding mountain roads, unpredictable weather, and seasonal traffic can turn a luxurious getaway into a stressful endeavor. This is precisely why our most requested properties in the Swiss Alps now feature private helipads, transforming the journey into an integral part of the luxury experience.</p>
      
      <p class="mb-6">The concept of the luxury ski chalet has evolved drastically over the last decade. It is no longer just about prime location or square footage. Today’s ultra-high-net-worth traveler demands total privacy, seamless logistics, and amenities that rival the world's finest boutique hotels, all set against the breathtaking backdrop of the snow-capped Alps.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Seamless Transitions from Sky to Slopes</h2>
      <p class="mb-6">Imagine touching down at your private jet terminal in Geneva or Zurich. Instead of facing a grueling three-hour drive, you transfer directly to a waiting twin-engine helicopter. Within minutes, you are soaring over dramatic peaks and ancient glaciers, sipping vintage champagne as the alpine landscape unfolds beneath you.</p>

      <p class="mb-6">You land directly at your chalet's private pad. Your dedicated staff is waiting with warm towels, your preferred apéritif, and a crackling fire. Your luggage has already been whisked away to your suite, unpacked, and organized. This frictionless transition is the new gold standard in winter travel.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Elite Five: Chalets That Redefine Luxury</h2>
      <p class="mb-6">Our curated list of the top five Swiss chalets represents the pinnacle of alpine architecture and service. These are not merely homes; they are private resorts.</p>

      <ul class="space-y-4 mb-8 text-gray-300">
        <li class="flex gap-4"><span class="text-brand-gold font-bold">1.</span> <div><strong>Chalet Zermatt Peak, Zermatt:</strong> Perched high above the village with uninterrupted views of the Matterhorn, this property features an indoor-outdoor jacuzzi, a private wellness center, and a glass-roofed observatory.</div></li>
        <li class="flex gap-4"><span class="text-brand-gold font-bold">2.</span> <div><strong>The Lodge, Verbier:</strong> Sir Richard Branson's mountain retreat offers an indoor pool, an indoor ice rink, and a dedicated team of 15 staff members for absolute bespoke service.</div></li>
        <li class="flex gap-4"><span class="text-brand-gold font-bold">3.</span> <div><strong>Chalet N, Oberlech:</strong> A sprawling estate where bulletproof glass, a private cinema, a colossal spa, and a wine cellar stocking over 2,000 bottles are standard.</div></li>
        <li class="flex gap-4"><span class="text-brand-gold font-bold">4.</span> <div><strong>Ultima Crans-Montana:</strong> Two ultra-luxurious chalets providing complete privacy, featuring a monumental spa, a private lake, and direct ski-in/ski-out access to the pristine slopes.</div></li>
        <li class="flex gap-4"><span class="text-brand-gold font-bold">5.</span> <div><strong>Chalet Marmottière, Verbier:</strong> A marvel of modern engineering featuring a bowling alley, a 3D cinema, an indoor swimming pool, and an unrivaled modern art collection.</div></li>
      </ul>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Beyond the Ski Run</h2>
      <p class="mb-6">While the skiing in these regions is world-class, the chalet experience extends far beyond the pistes. Guests can enjoy private subterranean spas featuring cryotherapy chambers and Himalayan salt rooms. Michelin-trained resident chefs craft daily menus based on local, seasonal ingredients, while dedicated ski concierges ensure your equipment is custom-fitted, warmed, and waiting the moment you step out the door.</p>

      <p class="mb-6">Whether it’s organizing a private moonlight snowshoeing expedition, booking an exclusive table at a high-altitude restaurant, or simply ensuring the hot tub is at the perfect temperature upon your return, the modern Swiss super-chalet leaves absolutely nothing to chance.</p>
    `
  },
  "sailing-santorini": {
    title: "Sailing Santorini: An Insider Guide to the Caldera Coves",
    category: "Yachting Guides",
    date: "April 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg leading-relaxed mb-6">Santorini is undeniably beautiful. Its stark white architecture clinging to dramatic volcanic cliffs set against the impossibly blue Aegean Sea creates a landscape that is instantly recognizable worldwide. However, navigating its narrow, winding paths during peak summer season can severely detract from the luxury experience. The true secret to enjoying this iconic island lies not on its crowded shores, but in the serene expanse of its surrounding waters.</p>
      
      <p class="mb-6">For the discerning traveler, the magic of Santorini is best unlocked from the deck of a privately chartered luxury yacht. By moving your base of operations from the land to the sea, you instantly bypass the logistical headaches of island traffic, crowded viewpoints, and overbooked restaurants.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">The Caldera from the Aft Deck</h2>
      <p class="mb-6">The Caldera—the submerged volcanic crater that gives Santorini its unique crescent shape—is best appreciated from the water. A yacht charter allows you to experience this geological marvel on your own terms. Imagine dropping anchor in the middle of the deep blue basin as the sun begins to dip below the horizon. Watch the famous Oia sunset from the privacy of your aft deck, a glass of chilled Assyrtiko in hand, far removed from the bustling viewing points on land.</p>
      
      <p class="mb-6">Your crew anticipates your every need. While you take an evening swim in the warm waters, your private chef prepares a multi-course dinner featuring freshly caught seafood and local organic produce, served under a canopy of stars. This level of exclusivity transforms a beautiful destination into a profound personal experience.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Secret Coves and Volcanic Springs</h2>
      <p class="mb-6">While the masses flock to the famous Red and Black beaches, your captain knows the island’s hidden treasures. Our tailored sailing itineraries grant you access to secluded coves that are completely inaccessible by land. Discover private bays where the water is crystal clear and you are the only souls for miles.</p>

      <p class="mb-6">A highlight of any Santorini charter is a visit to the Palea Kameni hot springs. The volcanic activity beneath the island heats the shallow waters to therapeutic temperatures, rich in sulfur and minerals. Your yacht can anchor just off the coast, allowing you to swim directly into the warm, rust-colored springs for a natural spa treatment before returning to the yacht for a refreshing outdoor shower.</p>

      <h2 class="text-2xl font-serif text-white mt-12 mb-4">Exclusive Shoreside Access</h2>
      <p class="mb-6">Chartering a yacht doesn't mean you can't experience the island itself; it means you experience it better. When you wish to dine on land, your tender can whisk you away to hidden seaside tavernas in Ammoudi Bay or Armeni, bypassing the crowds entirely. We can arrange for private cars to meet you at secluded docks, taking you to exclusive wine tastings at estate vineyards or private tours of the ancient ruins of Akrotiri.</p>

      <p class="mb-6">By experiencing Santorini from the water, you retain absolute control over your environment, blending the island's legendary beauty with the uncompromising luxury of a private floating villa.</p>
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

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
