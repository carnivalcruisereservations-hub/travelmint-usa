import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
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
            <li><Link href="/contact">Contact</Link></li>
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
      </div>
    </footer>
  );
}
