'use client';

import { useState } from 'react';
import styles from './BusinessCardModal.module.css';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessCardModal({ isOpen, onClose }: BusinessCardModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const details = `Travel Horizon
Phone: (888) 316-1789
Email: concierge@Travelhorizonusa.com
Address: 7105 Meadowbrook Rd, Lynchburg, VA 24502`;

    navigator.clipboard.writeText(details)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.cardContainer} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <div className={styles.businessCard}>
          {/* Top Gold Foil Accent Bar */}
          <div className={styles.topBar}></div>
          
          <div className={styles.cardContent}>
            {/* Logo Section */}
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <span className={styles.logoT}>T</span>RAVEL<span className={styles.logoH}>H</span>ORIZON<span className={styles.logoUSA}>USA</span>
              </div>
              <div className={styles.tagline}>ONE STOP TRAVEL SOLUTIONS</div>
            </div>

            {/* Divider */}
            <div className={styles.divider}></div>

            {/* Info Section */}
            <div className={styles.infoSection}>
              <div className={styles.infoRow}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:(888)316-1789" className={styles.infoText}>(888) 316-1789</a>
              </div>

              <div className={styles.infoRow}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:concierge@Travelhorizonusa.com" className={styles.infoText}>concierge@Travelhorizonusa.com</a>
              </div>

              <div className={styles.infoRow}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className={styles.infoTextAddress}>7105 Meadowbrook Rd,<br />Lynchburg, VA 24502</span>
              </div>
            </div>
          </div>
          
          {/* Card Back / Base Gold Accents */}
          <div className={styles.bottomBar}></div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <a href="tel:(888)316-1789" className={`${styles.actionBtn} ${styles.btnPrimary}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call Now
          </a>
          <a href="mailto:concierge@Travelhorizonusa.com" className={`${styles.actionBtn} ${styles.btnPrimary}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email Us
          </a>
          <button onClick={handleCopy} className={`${styles.actionBtn} ${styles.btnSecondary}`}>
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Copied!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Info
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
