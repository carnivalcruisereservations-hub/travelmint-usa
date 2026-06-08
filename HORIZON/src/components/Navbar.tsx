'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navTop}>
          {/* Removed contactInfo from here, moved to actions */}
        </div>
        <div className={styles.navMain}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Link href="/">
                <span className={styles.logoT}>T</span>RAVEL<span className={styles.logoH}>H</span>ORIZON<span className={styles.logoUSA}>USA</span>
              </Link>
            </div>
            <div className={styles.tagline}>ONE STOP TRAVEL SOLUTIONS</div>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/cruises">US Cruises</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className={styles.actions}>
            <div className={styles.contactInfo}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.phoneIcon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (888) 316-1789
            </div>
            <button onClick={() => setIsModalOpen(true)} className={styles.quoteBtn}>Get a Quote</button>
          </div>
        </div>
      </nav>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
