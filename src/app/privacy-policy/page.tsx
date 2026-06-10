import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-bg py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <ShieldCheck className="w-8 h-8 text-brand-gold" />
          <h1 className="text-3xl md:text-5xl font-serif text-white font-medium">Privacy Policy</h1>
        </div>
        <p className="text-gray-400 text-sm mb-12 font-light">Last Updated: June 1, 2026</p>

        <div className="text-gray-300 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">1. Introduction</h2>
            <p className="mb-4">TravelMintUSA (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website travelmintusa.com (the &ldquo;Site&rdquo;) or use our travel concierge and booking services (the &ldquo;Services&rdquo;).</p>
            <p>By accessing or using our Site and Services, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access the Site or use our Services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg text-brand-accent mb-3">2.1 Personal Information You Provide</h3>
            <p className="mb-4">We collect personal information that you voluntarily provide to us when you express interest in obtaining information about our Services, participate in activities on the Site, or otherwise contact us. This includes:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-400">
              <li>Full name, email address, phone number, and mailing address</li>
              <li>Passport details, date of birth, and nationality (for travel bookings)</li>
              <li>Payment and billing information (credit card numbers, billing addresses)</li>
              <li>Travel preferences, dietary requirements, and special accommodation needs</li>
              <li>Emergency contact information</li>
              <li>Communication preferences and correspondence history</li>
            </ul>

            <h3 className="text-lg text-brand-accent mb-3">2.2 Information Automatically Collected</h3>
            <p className="mb-4">When you visit our Site, we automatically collect certain information about your device and your usage of the Site, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>IP address, browser type, operating system, and device identifiers</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>Referring URLs and search terms used to find our Site</li>
              <li>Cookies, pixel tags, and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>To process and manage your travel bookings, reservations, and itineraries</li>
              <li>To communicate with you regarding inquiries, booking confirmations, and travel updates</li>
              <li>To personalize your experience and deliver tailored travel recommendations</li>
              <li>To process payments and prevent fraudulent transactions</li>
              <li>To comply with legal obligations, including tax and regulatory requirements</li>
              <li>To improve our website, services, and customer experience</li>
              <li>To send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">We may share your personal information in the following situations:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">Travel Suppliers:</strong> Airlines, hotels, cruise lines, car rental companies, and other service providers necessary to fulfill your bookings</li>
              <li><strong className="text-white">Payment Processors:</strong> Secure third-party payment processors to handle financial transactions</li>
              <li><strong className="text-white">Legal Compliance:</strong> When required by law, regulation, or legal process</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong className="text-white">With Your Consent:</strong> When you have given us explicit permission to share your information</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="mb-4">We use cookies and similar tracking technologies to collect and track information about your activity on our Site. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some features of our Site.</p>
            <p>We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted) for purposes including authentication, analytics, and personalization.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">6. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit (SSL/TLS), secure server infrastructure, access controls, and regular security assessments.</p>
            <p className="mb-4">However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
            <div className="glass p-5 border border-brand-accent/20 rounded-2xl mt-4">
              <h4 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">Booking &amp; Booking Data Policy</h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The personal data provided during booking will be used for processing your reservation and to comply with relevant laws and regulations. Travel Mint USA takes reasonable measures to protect your data, but we are not responsible for any breach caused by external factors.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">8. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Right to access and obtain a copy of your personal data</li>
              <li>Right to rectify inaccurate or incomplete information</li>
              <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:info@travelmintusa.com" className="text-brand-gold hover:text-white transition-colors">info@travelmintusa.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">9. Children&apos;s Privacy</h2>
            <p>Our Site and Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">11. Contact Us</h2>
            <p className="mb-2">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="glass p-6 rounded-2xl mt-4">
              <p className="text-white font-semibold">TravelMintUSA</p>
              <p>7105 Meadowbrook Rd, Lynchburg, VA 24502, USA</p>
              <p>Email: <a href="mailto:info@travelmintusa.com" className="text-brand-gold hover:text-white transition-colors">info@travelmintusa.com</a></p>
              <p>Phone: <a href="tel:+18883161789" className="text-brand-gold hover:text-white transition-colors">(888) 316-1789</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
