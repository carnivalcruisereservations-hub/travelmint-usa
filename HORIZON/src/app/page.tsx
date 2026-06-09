'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Home.module.css';
import QuoteModal from '@/components/QuoteModal';
import AdvisorForm from '@/components/AdvisorForm';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Experience the Extraordinary</h1>
          <p>We don't just sell travel packages; we curate unforgettable journeys and lifelong memories. Let us design your perfect vacation from start to finish.</p>
          <div className={styles.heroButtons}>
            <button onClick={() => setIsModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary}`}>Get Vacation Ideas</button>
          </div>
        </div>
      </section>

      {/* 2. Advisor Form Widget */}
      <section className={styles.searchWidgetContainer}>
        <AdvisorForm />
      </section>

      {/* 3. Scenic Views Section (New) */}
      <section className={styles.scenicSection}>
        <h2 className={styles.sectionTitle}>Breathtaking Scenic Views</h2>
        <p className={styles.scenicDescription}>
          Experience the world from a new perspective. Our luxury cruises offer unparalleled access to majestic glaciers, untouched tropical islands, and endless ocean horizons. Wake up to a new masterpiece outside your window every single day.
        </p>
        <div className={styles.scenicGrid}>
          <div className={styles.scenicCard}>
            <div className={styles.scenicImage} style={{ backgroundImage: "url('/scenic_glacier.png')" }}></div>
            <div className={styles.scenicContent}>
              <h3>Alaskan Glaciers</h3>
              <p>Witness the raw power of nature as massive ice formations meet the sea. Enjoy front-row views from your private balcony.</p>
            </div>
          </div>
          <div className={styles.scenicCard}>
            <div className={styles.scenicImage} style={{ backgroundImage: "url('/scenic_tropical.png')" }}></div>
            <div className={styles.scenicContent}>
              <h3>Tropical Horizons</h3>
              <p>Crystal clear waters and lush island landscapes stretch as far as the eye can see in our exclusive Caribbean routes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Destinations */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore by Destination</h2>
        <div className={styles.grid}>
          <div className={styles.destCard}>
            <div className={styles.destImagePlaceholder} style={{ backgroundImage: "url('/alaska_cruise.png')" }}></div>
            <div className={styles.destContent}>
              <h3>United States (Alaska)</h3>
            </div>
          </div>
          <div className={styles.destCard}>
            <div className={styles.destImagePlaceholder} style={{ backgroundImage: "url('/hawaii_cruise.png')" }}></div>
            <div className={styles.destContent}>
              <h3>United States (Hawaii)</h3>
            </div>
          </div>
          <div className={styles.destCard}>
            <div className={styles.destImagePlaceholder} style={{ backgroundImage: "url('/caribbean_dest.png')" }}></div>
            <div className={styles.destContent}>
              <h3>Caribbean Islands</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Packages */}
      <section className={`${styles.section} ${styles.packages}`}>
        <h2 className={styles.sectionTitle}>Featured US Cruise Itineraries</h2>
        <div className={styles.grid}>
          <div className={styles.packageCard}>
            <div className={styles.pkgImagePlaceholder} style={{ backgroundImage: "url('/alaska_cruise.png')" }}></div>
            <div className={styles.pkgContent}>
              <h3>7-Night Glacier Bay Majesty</h3>
              <p>Departing from Seattle, WA • Premium Balcony Stateroom</p>
              <p className={styles.price}>From $1,499 / person</p>
              <button onClick={() => setIsModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary}`}>Inquire Now</button>
            </div>
          </div>
          <div className={styles.packageCard}>
            <div className={styles.pkgImagePlaceholder} style={{ backgroundImage: "url('/caribbean_dest.png')" }}></div>
            <div className={styles.pkgContent}>
              <h3>5-Night Western Caribbean</h3>
              <p>Departing from Miami, FL • Luxury Suite Experience</p>
              <p className={styles.price}>From $899 / person</p>
              <button onClick={() => setIsModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary}`}>Inquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>Ready to Set Sail?</h2>
        <button onClick={() => setIsModalOpen(true)} className={`${styles.btn} ${styles.btnOutline}`}>Contact Our Cruise Experts</button>
      </section>
    </main>
  );
}
