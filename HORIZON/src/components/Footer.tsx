'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import PolicyModal from './PolicyModal';
import BusinessCardModal from './BusinessCardModal';

export default function Footer() {
  const [policyType, setPolicyType] = useState<'privacy' | 'refund' | 'disclaimer' | 'terms' | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Travelhorizonusa</h3>
          <p>Explore the World with Flights, Hotels, Cruises & Vacation Packages Across the Globe.</p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><button onClick={() => setIsCardOpen(true)} className={styles.linkBtn}>Contact Us</button></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Email: concierge@Travelhorizonusa.com</p>
          <p>Phone: (888) 316-1789</p>
          <p>Address: 7105 Meadowbrook Rd, Lynchburg, VA 24502</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Travelhorizonusa. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <button onClick={() => setPolicyType('privacy')} className={styles.linkBtn}>Privacy Policy</button>
          <span className={styles.linkDivider}>|</span>
          <button onClick={() => setPolicyType('refund')} className={styles.linkBtn}>Refund Policy</button>
          <span className={styles.linkDivider}>|</span>
          <button onClick={() => setPolicyType('disclaimer')} className={styles.linkBtn}>Disclaimer</button>
          <span className={styles.linkDivider}>|</span>
          <button onClick={() => setPolicyType('terms')} className={styles.linkBtn}>Terms & Conditions</button>
        </div>
      </div>

      {/* Modals */}
      <PolicyModal 
        isOpen={policyType !== null} 
        onClose={() => setPolicyType(null)} 
        type={policyType} 
      />
      <BusinessCardModal 
        isOpen={isCardOpen} 
        onClose={() => setIsCardOpen(false)} 
      />
    </footer>
  );
}
