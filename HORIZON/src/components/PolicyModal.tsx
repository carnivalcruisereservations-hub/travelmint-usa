'use client';

import styles from './PolicyModal.module.css';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'refund' | 'disclaimer' | 'terms' | null;
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen || !type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <>
              <p>At Travel Horizon, we respect your privacy and are committed to protecting the personal data you share with us. This policy describes how we collect, use, and protect your information.</p>
              <h3>1. Information We Collect</h3>
              <p>We collect personal information that you provide to us directly through our website forms, emails, or phone calls. This includes your name, email address, telephone number, mailing address, billing details, passport information, and travel preferences.</p>
              <h3>2. How We Use Your Information</h3>
              <p>We use your personal data to facilitate travel bookings, provide custom travel advice, process payments, and communicate itineraries. We share your information with travel suppliers (airlines, hotels, cruise lines, and rental car agencies) only as necessary to secure your bookings.</p>
              <h3>3. Data Security</h3>
              <p>We implement industry-standard administrative, technical, and physical security measures to protect your personal information against unauthorized access, loss, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
              <h3>4. Third-Party Links</h3>
              <p>Our website may contain links to third-party travel supplier sites. Travel Horizon is not responsible for the privacy practices or content of these external websites.</p>
              <h3>5. Updates to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. The latest version will always be posted on our website with the effective date.</p>
            </>
          ),
        };
      case 'refund':
        return {
          title: 'Refund Policy',
          content: (
            <>
              <p>All bookings made through Travel Horizon are subject to the specific refund and cancellation policies of the respective travel suppliers (airlines, hotels, cruise lines, tour operators, and rental agencies) handling your reservation.</p>
              <h3>1. Supplier Policies Rule</h3>
              <p>Travel Horizon acts as an intermediary agent. Therefore, any refunds, cancellations, credits, or change fees are determined entirely by the travel suppliers. Many promotional cruise fares, vacation packages, and international flight tickets are completely non-refundable.</p>
              <h3>2. Service Fees</h3>
              <p>Any service planning fees, consulting fees, or booking charges processed directly by Travel Horizon are non-refundable under any circumstances, as they cover the time spent structuring and managing your travel itineraries.</p>
              <h3>3. Refund Processing Time</h3>
              <p>If a supplier approves a refund, it will be credited back to the original form of payment. Processing times depend entirely on the supplier and the credit card issuer, often taking between 2 to 8 weeks to reflect.</p>
              <h3>4. Travel Protection Recommend</h3>
              <p>Because unexpected events can disrupt your plans, we strongly recommend purchasing comprehensive travel insurance (Travel Protection) at the time of booking to safeguard your financial investment against unforeseen cancellations, medical emergencies, and travel delays.</p>
            </>
          ),
        };
      case 'disclaimer':
        return {
          title: 'Disclaimer',
          content: (
            <>
              <p>Please read this disclaimer carefully before using the services of Travel Horizon. By booking with us, you acknowledge and agree to the limitations of liability outlined below.</p>
              <h3>1. Intermediary Role</h3>
              <p>Travel Horizon acts solely as an sales agent for independent travel suppliers (including but not limited to airlines, hotels, cruise lines, tour operators, and ground transportation providers). We do not own, manage, control, or operate any of these travel service providers.</p>
              <h3>2. Limitation of Liability</h3>
              <p>Travel Horizon is not liable for any acts, errors, omissions, representations, warranties, breaches, or negligence of any third-party travel suppliers, nor for any personal injuries, death, property damage, or other damages or expenses resulting from their services.</p>
              <h3>3. Delays and Cancellations</h3>
              <p>We are not responsible for, and will not provide refunds or compensation for, any travel disruptions, cancellations, overbookings, delays, strikes, weather events, natural disasters, epidemics, wars, government actions, or any other causes beyond our direct control.</p>
              <h3>4. Accuracy of Information</h3>
              <p>While we make every effort to display accurate pricing, itineraries, and descriptions, travel suppliers reserve the right to modify their schedules, routes, and pricing without notice. Travel Horizon does not guarantee the absolute accuracy of supplier-provided details.</p>
            </>
          ),
        };
      case 'terms':
        return {
          title: 'Terms & Conditions',
          content: (
            <>
              <p>Welcome to Travel Horizon. By booking travel services with us, you agree to be bound by the terms and conditions set forth below. Please ensure you read them thoroughly.</p>
              <h3>1. Bookings & Payments</h3>
              <p>To secure a booking, a deposit or full payment is required as specified in your quote. Payments are processed in USD. Failure to meet deposit or final payment deadlines may result in automatic cancellation of your reservations and forfeiture of all paid deposits.</p>
              <h3>2. Travel Documents</h3>
              <p>It is the traveler's sole responsibility to obtain and carry all necessary travel documents, including valid passports, entry visas, transit visas, vaccination certificates, and authorization letters. Passports must be valid for at least six (6) months beyond your scheduled return date.</p>
              <h3>3. Cancellations & Changes</h3>
              <p>If you wish to cancel or modify your itinerary, you must submit a request in writing. All changes and cancellations are subject to supplier penalties and Travel Horizon administrative processing fees.</p>
              <h3>4. Health & Safety</h3>
              <p>Travelers are responsible for researching and adhering to any travel warnings, health advisories, customs laws, and entry requirements for their destination. Travel Horizon is not liable for clients denied entry due to immigration policies or health issues.</p>
              <h3>5. Governing Law</h3>
              <p>These Terms & Conditions are governed by the laws of the Commonwealth of Virginia, United States. Any legal actions or disputes must be settled in the appropriate courts located in Virginia.</p>
            </>
          ),
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2 className={styles.modalTitle}>{title}</h2>
        <div className={styles.modalBody}>
          {content}
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.dismissBtn} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
