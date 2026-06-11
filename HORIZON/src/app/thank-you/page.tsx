import Link from 'next/link';
import styles from './ThankYou.module.css';

export const metadata = {
  title: 'Thank You - Travel Horizon USA',
  description: 'Thank you for your submission. Our travel experts will contact you soon.',
};

export default function ThankYouPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <div className={styles.successIcon}>✓</div>
        </div>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>
          Your request has been successfully submitted. Our travel experts are already crafting the perfect plan for you and will get in touch soon.
        </p>
        <Link href="/" className={styles.homeBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
