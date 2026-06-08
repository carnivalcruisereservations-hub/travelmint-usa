'use client';

import { useState } from 'react';
import styles from './QuoteModal.module.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    guests: '1'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Using mailto to forward the quote request directly to the email
    const subject = encodeURIComponent(`New Quote Request: ${formData.destination}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nDestination: ${formData.destination}\nNumber of Guests: ${formData.guests}\n\nPlease provide a quote.`
    );
    window.location.href = `mailto:concierge@Travelhorizonusa.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2 className={styles.modalTitle}>Request a Quote</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="destination">Destination</label>
            <select 
              id="destination" 
              required
              value={formData.destination}
              onChange={e => setFormData({...formData, destination: e.target.value})}
            >
              <option value="" disabled>Select a destination...</option>
              <option value="United States (Alaska)">United States (Alaska)</option>
              <option value="United States (Hawaii)">United States (Hawaii)</option>
              <option value="United States (Florida/Caribbean)">United States (Florida/Caribbean)</option>
              <option value="Dubai">Dubai</option>
              <option value="Caribbean Islands">Caribbean Islands</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="guests">Number of Guests</label>
            <input 
              type="number" 
              id="guests" 
              min="1" 
              required 
              value={formData.guests}
              onChange={e => setFormData({...formData, guests: e.target.value})}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Get a Quote</button>
        </form>
      </div>
    </div>
  );
}
