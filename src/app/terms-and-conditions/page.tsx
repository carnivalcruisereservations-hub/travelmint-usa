import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-brand-bg py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <FileText className="w-8 h-8 text-brand-gold" />
          <h1 className="text-3xl md:text-5xl font-serif text-white font-medium">Terms &amp; Conditions</h1>
        </div>
        <p className="text-gray-400 text-sm mb-12 font-light">Last Updated: June 1, 2026</p>

        <div className="text-gray-300 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using the TravelMintUSA website (travelmintusa.com) and our travel planning and booking services (collectively, the &ldquo;Services&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you must not use our website or Services.</p>
            <p>These Terms constitute a legally binding agreement between you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and TravelMintUSA (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">2. Eligibility</h2>
            <p>You must be at least 18 years of age and have the legal capacity to enter into binding contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements. If you are booking travel on behalf of other individuals, you confirm that you have the authority to accept these Terms on their behalf.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">3. Services Provided</h2>
            <p className="mb-4">TravelMintUSA provides luxury travel planning, consultation, and booking services, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Customized travel itinerary design and planning</li>
              <li>Flight, hotel, resort, and cruise reservations</li>
              <li>Private yacht charters and luxury transportation arrangements</li>
              <li>Exclusive tour and experience coordination</li>
              <li>Travel concierge and 24/7 support services</li>
              <li>Visa assistance and travel documentation guidance</li>
              <li>Travel insurance referrals</li>
            </ul>
            <p className="mt-4">TravelMintUSA acts as an agent and intermediary between you and third-party travel suppliers. We are not the direct provider of transportation, accommodation, or tour services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">4. Booking and Payment</h2>
            <h3 className="text-lg text-brand-accent mb-3">4.1 Booking Process</h3>
            <p className="mb-4">All bookings are subject to availability and confirmation by the respective travel supplier. A booking is not confirmed until you receive a written confirmation from TravelMintUSA, and full payment (or the required deposit) has been received.</p>

            <h3 className="text-lg text-brand-accent mb-3">4.2 Pricing</h3>
            <p className="mb-4">All prices quoted are in U.S. Dollars (USD) unless otherwise stated. Prices are subject to change without notice until a booking is confirmed. Additional taxes, fees, surcharges, and gratuities may apply and will be communicated at the time of booking.</p>

            <h3 className="text-lg text-brand-accent mb-3">4.3 Payment Methods</h3>
            <p className="mb-4">We accept major credit cards (Visa, MasterCard, American Express), wire transfers, and other payment methods as specified. Full payment is typically required at the time of booking unless a deposit arrangement has been agreed upon.</p>

            <h3 className="text-lg text-brand-accent mb-3">4.4 Deposits</h3>
            <p>Certain bookings may require a non-refundable deposit to secure reservations. The deposit amount and terms will be communicated prior to booking confirmation. The remaining balance is due as specified in the booking confirmation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">5. Cancellations and Modifications</h2>
            <p className="mb-4">Cancellation and modification policies vary depending on the travel supplier, type of booking, and fare class. Please refer to our <Link href="/refund-policy" className="text-brand-gold hover:text-white transition-colors">Refund Policy</Link> for detailed cancellation terms.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>All cancellation and modification requests must be submitted in writing via email to info@travelmintusa.com</li>
              <li>Cancellation fees imposed by travel suppliers will be passed on to the client</li>
              <li>TravelMintUSA service fees are non-refundable</li>
              <li>Modifications are subject to availability and may incur additional charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">6. Travel Documents and Requirements</h2>
            <p className="mb-4">It is the sole responsibility of the traveler to obtain and maintain all necessary travel documents, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Valid passport with at least six months validity beyond the return date</li>
              <li>Appropriate visas for all destinations and transit countries</li>
              <li>Required vaccinations and health certificates</li>
              <li>Travel insurance documentation</li>
              <li>Any other documents required by airlines, immigration authorities, or other entities</li>
            </ul>
            <p className="mt-4">TravelMintUSA is not responsible for any costs, penalties, or denied boarding resulting from inadequate travel documentation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">7. Client Responsibilities</h2>
            <p className="mb-4">As a client of TravelMintUSA, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Provide accurate and complete personal information for all travelers</li>
              <li>Review all booking confirmations, itineraries, and travel documents for accuracy</li>
              <li>Notify us immediately of any errors or discrepancies in travel documents</li>
              <li>Comply with all applicable laws, regulations, and customs of the destination countries</li>
              <li>Behave responsibly and respectfully during travel experiences</li>
              <li>Maintain adequate travel and health insurance coverage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">TravelMintUSA acts solely as an intermediary and is not liable for any loss, injury, damage, accident, delay, or irregularity that may occur during travel. Our liability is limited to the service fees paid directly to TravelMintUSA.</p>
            <p>We shall not be held responsible for:</p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-400">
              <li>Acts, omissions, or defaults of any travel supplier or third party</li>
              <li>Flight delays, cancellations, or schedule changes by airlines</li>
              <li>Overbooking or unavailability of accommodations</li>
              <li>Loss or damage to luggage or personal belongings</li>
              <li>Illness, injury, or death during travel</li>
              <li>Force majeure events including natural disasters, pandemics, wars, or government actions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">9. Intellectual Property</h2>
            <p>All content on the TravelMintUSA website, including but not limited to text, graphics, logos, images, videos, software, and design, is the property of TravelMintUSA or its content suppliers and is protected by United States and international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless TravelMintUSA, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney&apos;s fees) arising from your use of our Services, your violation of these Terms, or your violation of any rights of a third party.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">11. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, United States, without regard to its conflict of law principles.</p>
            <p>Any dispute arising out of or relating to these Terms or our Services shall first be attempted to be resolved through good faith negotiation. If the dispute cannot be resolved through negotiation, it shall be submitted to binding arbitration in Lynchburg, Virginia, in accordance with the rules of the American Arbitration Association.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">12. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">13. Changes to Terms</h2>
            <p>TravelMintUSA reserves the right to modify or replace these Terms at any time. Material changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued use of our Services after any changes constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">14. Contact Us</h2>
            <p className="mb-2">If you have any questions about these Terms &amp; Conditions, please contact us at:</p>
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
