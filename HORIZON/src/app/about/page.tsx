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

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.blogPost}>
              <p>
                Travelhorizonusa was founded with a simple vision: to make travel planning effortless, convenient, and enjoyable. In an industry where travelers often need to navigate multiple websites to book flights, hotels, cruises, rental cars, and vacation packages, the process can quickly become overwhelming and time-consuming.
              </p>
              <p>
                Recognizing this challenge, Travelhorizonusa was created to bring every aspect of travel planning under one roof. Built on extensive industry expertise and years of experience in the travel sector, the company was designed to provide travelers with a seamless, all-in-one booking experience tailored to their unique needs.
              </p>
              <p>
                As a full-service travel agency, Travelhorizonusa offers comprehensive travel solutions, including flights, luxury accommodations, cruises, transportation, and customized holiday packages. Our goal is to eliminate the stress of planning and provide customers with the convenience of managing their entire journey through a single trusted partner.
              </p>
              <p>
                Today, Travelhorizonusa continues to help travelers explore the world with confidence, delivering personalized service, exceptional value, and unforgettable travel experiences from the moment they begin planning until they return home.
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
