'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdvisorForm.module.css';

export default function AdvisorForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    spot: '',
    guests: '1',
    date: '',
    days: '7',
    email: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via PHP endpoint
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          router.push('/thank-you');
          return;
        }
      }
      throw new Error('Server email sending failed or returned error');
    } catch (error) {
      console.warn('Backend email failed, using client-side mailto fallback:', error);
      
      // Fallback: Open client mail client
      const subject = encodeURIComponent(`Advisor Request: ${formData.spot}`);
      const body = encodeURIComponent(
        `Vacation Spot: ${formData.spot}\n` +
        `Number of Guests: ${formData.guests}\n` +
        `Date of Travel: ${formData.date}\n` +
        `Number of Days: ${formData.days}\n` +
        `Email Address: ${formData.email}\n` +
        `Contact Number: ${formData.contact}\n\n` +
        `Please contact me with options.`
      );
      
      window.location.href = `mailto:concierge@travelhorizonusa.com?subject=${subject}&body=${body}`;
      
      // Redirect to Thank You page
      router.push('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.advisorWidget}>
      <div className={styles.widgetHeader}>
        <h2>Get Your Advisor</h2>
        <p>Let our experts craft the perfect itinerary for you</p>
      </div>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={`${styles.inputGroup} ${styles.col3}`}>
          <label>Vacation Spot</label>
          <select 
            required 
            value={formData.spot} 
            onChange={e => setFormData({...formData, spot: e.target.value})}
          >
            <option value="" disabled>Select destination...</option>
            <option value="United States">United States</option>
            <option value="Dubai">Dubai</option>
            <option value="Maldives">Maldives</option>
            <option value="Caribbean">Caribbean Islands</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
        
        <div className={`${styles.inputGroup} ${styles.col3}`}>
          <label>Number of Guests</label>
          <input 
            type="number" 
            min="1" 
            required 
            value={formData.guests}
            onChange={e => setFormData({...formData, guests: e.target.value})}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.col3}`}>
          <label>Date of Travel</label>
          <input 
            type="date" 
            required 
            value={formData.date}
            onChange={e => setFormData({...formData, date: e.target.value})}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.col3}`}>
          <label>How Many Days</label>
          <input 
            type="number" 
            min="1" 
            required 
            value={formData.days}
            onChange={e => setFormData({...formData, days: e.target.value})}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.col5}`}>
          <label>Email Address</label>
          <input 
            type="email" 
            required 
            placeholder="Enter your email address"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.col4}`}>
          <label>Contact Number</label>
          <input 
            type="tel" 
            required 
            placeholder="Enter phone number"
            value={formData.contact}
            onChange={e => setFormData({...formData, contact: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Pushing...' : 'Push Query'}
        </button>
      </form>
    </div>
  );
}
