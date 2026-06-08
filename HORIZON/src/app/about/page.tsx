'use client';

import { useState } from 'react';
import styles from './About.module.css';
import QuoteModal from '@/components/QuoteModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>About Us</h1>
          <p>Everything you need for the perfect journey, all under one roof.</p>
        </div>
      </section>

      {/* The Founder's Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>The Founder's Story</h2>
            <div className={styles.blogPost}>
              <p>
                The founder of Travelhorizonusa recognized a recurring frustration among travelers: the exhausting process of piecing together a holiday. From hunting down the perfect flights and luxury hotels to organizing rental cars and complex cruise itineraries across dozens of different websites, planning a trip often felt like a chore rather than the start of an adventure.
              </p>
              <p>
                Having previously worked extensively with top-tier travel companies—initially specializing exclusively in cruises and flights—the founder saw firsthand the unnecessary trouble travelers went through just to book a seamless holiday trip. He knew there had to be a better, more unified approach.
              </p>
              <p>
                As his third highly successful venture in the travel domain, the founder established <strong>Travelhorizonusa</strong> to solve this exact problem. His goal was simple: build a premier agency that helps travelers get absolutely everything they need under one roof, in one call.
              </p>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.storyImage} style={{ backgroundImage: "url('/founder_vision.png')" }}></div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section className={styles.visionSection}>
        <div className={styles.visionContent}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the industry's best, most comprehensive travel agency—a place where a customer can call and get everything done in one place. We believe that booking your dream vacation should be as relaxing as the trip itself. 
          </p>
          <p>
            Whether you need round-trip flights, a luxury hotel suite, a rental car waiting at the airport, and a breathtaking cruise excursion all wrapped into one itinerary, Travelhorizonusa handles it all. We eliminate the stress of travel planning so you can focus entirely on the memories you're about to make.
          </p>
          <button onClick={() => setIsModalOpen(true)} className={styles.ctaBtn}>
            Let Us Plan Your Next Trip
          </button>
        </div>
      </section>
    </main>
  );
}
