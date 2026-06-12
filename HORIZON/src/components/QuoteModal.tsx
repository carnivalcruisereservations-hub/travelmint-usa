'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './QuoteModal.module.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    guests: '1',
    email: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send quote request to PHP backend
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'quote',
          data: formData
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          onClose();
          router.push('/thank-you');
          return;
        }
      }
      throw new Error('Server email sending failed');
    } catch (error) {
      console.warn('Backend email failed, falling back to client mailto:', error);
      
      // Fallback: mailto
      const subject = encodeURIComponent(`New Quote Request: ${formData.destination}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Destination: ${formData.destination}\n` +
        `Number of Guests: ${formData.guests}\n` +
        `Email: ${formData.email}\n` +
        `Contact: ${formData.contact}\n\n` +
        `Please provide a quote.`
      );
      window.location.href = `mailto:concierge@travelhorizonusa.com?subject=${subject}&body=${body}`;
      
      onClose();
      router.push('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
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
              placeholder="Enter your name"
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

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required 
              placeholder="your@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact">Contact Number</label>
            <input 
              type="tel" 
              id="contact" 
              required 
              placeholder="Phone number"
              value={formData.contact}
              onChange={e => setFormData({...formData, contact: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Pushing...' : 'Get a Quote'}
          </button>
        </form>
      </div>
    </div>
  );
}
