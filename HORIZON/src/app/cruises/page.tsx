'use client';

import { useState } from 'react';
import styles from './Cruises.module.css';
import QuoteModal from '@/components/QuoteModal';

interface CruiseRoute {
  id: number;
  title: string;
  line: string;
  image: string;
  duration: string;
  departure: string;
  ports: string[];
  price: string;
}

const CRUISE_ROUTES: CruiseRoute[] = [
  {
    id: 1,
    title: "7-Night Inside Passage Glacier Viewing",
    line: "Princess Cruises",
    image: "/alaska_cruise.png",
    duration: "7 Nights",
    departure: "Seattle, WA",
    ports: ["Ketchikan, AK", "Juneau, AK", "Skagway, AK", "Glacier Bay National Park (Scenic Cruising)"],
    price: "$1,149"
  },
  {
    id: 2,
    title: "7-Night Eastern Caribbean Oasis",
    line: "Royal Caribbean International",
    image: "/caribbean_dest.png",
    duration: "7 Nights",
    departure: "Miami, FL",
    ports: ["Perfect Day at CocoCay, Bahamas", "Charlotte Amalie, St. Thomas", "Philipsburg, St. Maarten"],
    price: "$949"
  },
  {
    id: 3,
    title: "7-Night Western Caribbean Excursion",
    line: "Norwegian Cruise Line",
    image: "/scenic_tropical.png",
    duration: "7 Nights",
    departure: "Galveston, TX",
    ports: ["Cozumel, Mexico", "Roatan, Honduras", "Harvest Caye, Belize (Private Island)", "Costa Maya, Mexico"],
    price: "$899"
  },
  {
    id: 4,
    title: "4-Night Bahamas Family Getaway",
    line: "Disney Cruise Line",
    image: "/scenic_tropical.png",
    duration: "4 Nights",
    departure: "Port Canaveral, FL",
    ports: ["Nassau, Bahamas", "Castaway Cay, Bahamas (Disney Private Island)", "At Sea Relaxation"],
    price: "$1,299"
  },
  {
    id: 5,
    title: "7-Night Inter-Island Hawaii Loop",
    line: "Norwegian Cruise Line",
    image: "/hawaii_cruise.png",
    duration: "7 Nights",
    departure: "Honolulu, Oahu",
    ports: ["Kahului, Maui (Overnight)", "Hilo, Hawaii", "Kona, Hawaii", "Nawiliwili, Kauai (Overnight)"],
    price: "$1,799"
  },
  {
    id: 6,
    title: "7-Night Autumn Foliage & Maritime Heritage",
    line: "Holland America Line",
    image: "/new_england_cruise.png",
    duration: "7 Nights",
    departure: "Boston, MA",
    ports: ["Bar Harbor, ME", "Halifax, Nova Scotia", "Sydney, Nova Scotia", "Charlottetown, PEI"],
    price: "$1,349"
  },
  {
    id: 7,
    title: "7-Night Bermuda Dockyard Escape",
    line: "Celebrity Cruises",
    image: "/bermuda_cruise.png",
    duration: "7 Nights",
    departure: "New York, NY",
    ports: ["Royal Naval Dockyard, Bermuda (2 Overnight Stays)", "Scenic Ocean Sailing"],
    price: "$1,099"
  },
  {
    id: 8,
    title: "7-Night Mexican Riviera Archway Tour",
    line: "Carnival Cruise Line",
    image: "/mexico_cruise.png",
    duration: "7 Nights",
    departure: "Los Angeles, CA",
    ports: ["Cabo San Lucas, Mexico (Overnight)", "Mazatlan, Mexico", "Puerto Vallarta, Mexico"],
    price: "$749"
  },
  {
    id: 9,
    title: "11-Night Panama Canal Partial Transit",
    line: "Princess Cruises",
    image: "/panama_canal_cruise.png",
    duration: "11 Nights",
    departure: "Fort Lauderdale, FL",
    ports: ["Cartagena, Colombia", "Panama Canal Lock Transit (Scenic)", "Colon, Panama", "Limon, Costa Rica", "Grand Cayman"],
    price: "$1,999"
  },
  {
    id: 10,
    title: "10-Night Southern Caribbean Islands",
    line: "Celebrity Cruises",
    image: "/scenic_tropical.png",
    duration: "10 Nights",
    departure: "San Juan, PR",
    ports: ["Oranjestad, Aruba", "Willemstad, Curacao", "Kralendijk, Bonaire", "Bridgetown, Barbados", "Castries, St. Lucia"],
    price: "$1,499"
  }
];

export default function Cruises() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>US Cruise Destinations</h1>
          <p className={styles.heroTagline}>Unforgettable voyages departing directly from America's premier coastlines.</p>
          
          <div className={styles.introBox}>
            <h2>Embark on Your Perfect Voyage</h2>
            <p>
              At Travel Horizon, we curate the absolute best cruise experiences from the nation's top homeports. Whether you want to witness the glacial majesty of Alaska, lounge on the pristine pink sands of Bermuda, or transit the legendary Panama Canal, we have the perfect itinerary. We work directly with leading cruise lines to lock in exclusive rates and premium stateroom bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {CRUISE_ROUTES.map((route) => (
            <div key={route.id} className={styles.card}>
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url('${route.image}')` }}
              >
                <div className={styles.badgeRow}>
                  <span className={`${styles.badge} ${styles.badgeRed}`}>{route.duration}</span>
                  <span className={styles.badge}>Departs: {route.departure}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.lineName}>{route.line}</span>
                  <h3>{route.title}</h3>
                </div>
                <div className={styles.itineraryDetails}>
                  <h4 className={styles.portsTitle}>Featured Ports of Call:</h4>
                  <ul className={styles.portsList}>
                    {route.ports.map((port, idx) => (
                      <li key={idx}>
                        <span className={styles.bullet}>•</span> {port}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.footerRow}>
                  <div className={styles.priceCol}>
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.price}>
                      {route.price} <span className={styles.priceSpan}>/ person</span>
                    </span>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className={styles.inquireBtn}
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
