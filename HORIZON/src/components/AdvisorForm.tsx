'use client';

import { useState } from 'react';
import styles from './AdvisorForm.module.css';

export default function AdvisorForm() {
  const [formData, setFormData] = useState({
    spot: '',
    guests: '1',
    date: '',
    days: '7'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Advisor Request: ${formData.spot}`);
    const body = encodeURIComponent(
      `Vacation Spot: ${formData.spot}\nNumber of Guests: ${formData.guests}\nDate of Travel: ${formData.date}\nNumber of Days: ${formData.days}\n\nPlease contact me with options.`
    );
    window.location.href = `mailto:concierge@Travelhorizonusa.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.advisorWidget}>
      <div className={styles.widgetHeader}>
        <h2>Get Your Advisor</h2>
        <p>Let our experts craft the perfect itinerary for you</p>
      </div>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
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
        
        <div className={styles.inputGroup}>
          <label>Number of Guests</label>
          <input 
            type="number" 
            min="1" 
            required 
            value={formData.guests}
            onChange={e => setFormData({...formData, guests: e.target.value})}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Date of Travel</label>
          <input 
            type="date" 
            required 
            value={formData.date}
            onChange={e => setFormData({...formData, date: e.target.value})}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>How Many Days</label>
          <input 
            type="number" 
            min="1" 
            required 
            value={formData.days}
            onChange={e => setFormData({...formData, days: e.target.value})}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>Push Query</button>
      </form>
    </div>
  );
}
