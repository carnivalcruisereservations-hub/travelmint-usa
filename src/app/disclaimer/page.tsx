import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-brand-bg py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <AlertTriangle className="w-8 h-8 text-brand-gold" />
          <h1 className="text-3xl md:text-5xl font-serif text-white font-medium">Disclaimer</h1>
        </div>
        <p className="text-gray-400 text-sm mb-12 font-light">Last Updated: June 1, 2026</p>

        <div className="text-gray-300 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">1. General Disclaimer</h2>
            <p className="mb-4">The information provided on the TravelMintUSA website (travelmintusa.com) is for general informational purposes only. While we strive to keep all information accurate, complete, and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
            <p>Any reliance you place on such information is therefore strictly at your own risk. In no event will TravelMintUSA be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">2. Travel Agency Role</h2>
            <p className="mb-4">TravelMintUSA acts as an intermediary between travelers and travel service providers, including but not limited to airlines, hotels, cruise lines, car rental agencies, tour operators, and insurance companies. We are not the direct provider of travel services.</p>
            <p className="mb-4">As such, TravelMintUSA:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Does not own, manage, or operate any airlines, hotels, resorts, cruise ships, or transportation services</li>
              <li>Does not guarantee the performance, safety, quality, or suitability of any third-party travel supplier</li>
              <li>Is not responsible for any injury, loss, damage, accident, delay, irregularity, or expense arising from the services provided by third-party suppliers</li>
              <li>Cannot be held liable for any acts, omissions, defaults, or negligence of any third-party travel supplier</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">3. Pricing and Availability</h2>
            <p className="mb-4">All prices displayed on our website or communicated through our consultants are subject to change without notice and are not guaranteed until a booking is confirmed and full payment is received. Prices may vary due to currency fluctuations, seasonal demand, supplier pricing changes, or promotional adjustments.</p>
            <p>We make every effort to ensure pricing accuracy but cannot be held responsible for typographical errors, technical glitches, or outdated information on the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">4. Travel Advisories and Health Warnings</h2>
            <p className="mb-4">It is the sole responsibility of the traveler to review and comply with all applicable travel advisories, health warnings, vaccination requirements, entry restrictions, and visa requirements for their chosen destinations. TravelMintUSA recommends consulting the following resources before traveling:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>U.S. Department of State Travel Advisories</li>
              <li>Centers for Disease Control and Prevention (CDC) Travel Health Notices</li>
              <li>World Health Organization (WHO) travel guidelines</li>
              <li>Relevant embassy or consulate websites for visa and entry requirements</li>
            </ul>
            <p className="mt-4">TravelMintUSA is not responsible for any consequences arising from a traveler&apos;s failure to comply with travel regulations, health requirements, or entry restrictions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">5. Travel Documents and Identification</h2>
            <p>Each traveler is solely responsible for ensuring they possess valid and current travel documents, including passports, visas, health certificates, and any other documentation required for their trip. TravelMintUSA shall not be liable for any costs, damages, or losses incurred as a result of missing, expired, or inadequate travel documentation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">6. Travel Insurance</h2>
            <p>TravelMintUSA strongly recommends that all travelers purchase comprehensive travel insurance prior to departure. Travel insurance should cover trip cancellation, trip interruption, medical emergencies, evacuation, lost or stolen baggage, and other unforeseen events. TravelMintUSA is not liable for any uninsured losses.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">7. External Links</h2>
            <p>Our website may contain links to external websites that are not operated by TravelMintUSA. We have no control over the content, privacy policies, or practices of any third-party websites and assume no responsibility for them. The inclusion of any link does not imply endorsement or approval of the linked website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">8. Photographs and Descriptions</h2>
            <p>Photographs, images, and descriptions of destinations, accommodations, and experiences displayed on our website are provided for illustrative purposes only. Actual conditions, facilities, and amenities may differ from those depicted. TravelMintUSA does not warrant that actual travel experiences will match website representations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by applicable law, TravelMintUSA, its directors, officers, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>The use or inability to use our website or services</li>
              <li>Any errors or omissions in content on the website</li>
              <li>Travel delays, cancellations, or disruptions caused by third parties</li>
              <li>Personal injury, property damage, or other harm during travel</li>
              <li>Natural disasters, pandemics, political unrest, or other force majeure events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">10. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Disclaimer, please contact us at:</p>
            <div className="glass p-6 rounded-2xl mt-4">
              <p className="text-white font-semibold">TravelMintUSA</p>
              <p>Email: <a href="mailto:info@travelmintusa.com" className="text-brand-gold hover:text-white transition-colors">info@travelmintusa.com</a></p>
              <p>Phone: <a href="tel:+18883161789" className="text-brand-gold hover:text-white transition-colors">(888) 316-1789</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
