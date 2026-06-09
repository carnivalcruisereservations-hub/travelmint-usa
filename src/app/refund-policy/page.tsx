import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-brand-bg py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <RotateCcw className="w-8 h-8 text-brand-gold" />
          <h1 className="text-3xl md:text-5xl font-serif text-white font-medium">Refund Policy</h1>
        </div>
        <p className="text-gray-400 text-sm mb-12 font-light">Last Updated: June 1, 2026</p>

        <div className="text-gray-300 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-white mb-4">1. Overview</h2>
            <p className="mb-4">At TravelMintUSA, we understand that travel plans can change unexpectedly. This Refund Policy outlines the terms and conditions under which refunds may be issued for travel services booked through our platform. Please read this policy carefully before making any reservations.</p>
            <p>All bookings made through TravelMintUSA are subject to this Refund Policy as well as the specific cancellation policies of the individual travel suppliers (airlines, hotels, cruise lines, tour operators, etc.).</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">2. Service Fees</h2>
            <p className="mb-4">TravelMintUSA charges service and consultation fees for itinerary planning, concierge coordination, and booking management. These fees are as follows:</p>
            <div className="glass p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white font-medium">Consultation & Planning Fee</span>
                <span className="text-brand-gold font-semibold">Non-Refundable</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white font-medium">Booking Management Fee</span>
                <span className="text-brand-gold font-semibold">Non-Refundable</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Concierge Service Fee</span>
                <span className="text-brand-gold font-semibold">Non-Refundable</span>
              </div>
            </div>
            <p className="mt-4">Service fees are earned upon commencement of work and are non-refundable regardless of whether the booking is completed or cancelled.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">3. Flight Bookings</h2>
            <p className="mb-4">Refund eligibility for flight bookings depends on the fare type and airline policy:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">Refundable Tickets:</strong> Full refund of the ticket price (minus applicable service fees) if cancelled before the departure date. Refunds are processed within 7–14 business days.</li>
              <li><strong className="text-white">Non-Refundable Tickets:</strong> No cash refund is available. Depending on the airline, a credit for future travel (minus change fees) may be issued.</li>
              <li><strong className="text-white">24-Hour Cancellation:</strong> In compliance with U.S. Department of Transportation regulations, most airline tickets booked at least 7 days before departure may be cancelled within 24 hours of booking for a full refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">4. Hotel & Resort Reservations</h2>
            <p className="mb-4">Hotel refund policies vary by property and rate type:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">Free Cancellation Rates:</strong> Full refund if cancelled before the specified deadline (typically 24–72 hours before check-in).</li>
              <li><strong className="text-white">Non-Refundable Rates:</strong> No refund is available for non-refundable reservations once confirmed.</li>
              <li><strong className="text-white">Early Departure:</strong> Departing earlier than the reserved checkout date does not guarantee a refund for unused nights.</li>
              <li><strong className="text-white">No-Shows:</strong> Failure to check in on the reserved date typically results in a charge for the first night or the full stay, depending on hotel policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">5. Cruise Bookings</h2>
            <p className="mb-4">Cruise line cancellation and refund policies are determined by the cruise operator. General guidelines include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">90+ days before sailing:</strong> Full refund of cruise fare minus deposit (if non-refundable)</li>
              <li><strong className="text-white">60–89 days before sailing:</strong> 50%–75% refund of cruise fare</li>
              <li><strong className="text-white">30–59 days before sailing:</strong> 25%–50% refund of cruise fare</li>
              <li><strong className="text-white">Less than 30 days before sailing:</strong> No refund available</li>
            </ul>
            <p className="mt-4">Specific refund amounts vary by cruise line, cabin category, and promotional terms. We recommend purchasing travel insurance to protect your investment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">6. Private Tours & Experiences</h2>
            <p className="mb-4">Custom-designed private tours, yacht charters, and bespoke experiences are subject to the following cancellation terms:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">60+ days before the experience:</strong> Full refund minus a 15% administrative fee</li>
              <li><strong className="text-white">30–59 days before the experience:</strong> 50% refund</li>
              <li><strong className="text-white">14–29 days before the experience:</strong> 25% refund</li>
              <li><strong className="text-white">Less than 14 days before the experience:</strong> No refund available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">7. Travel Insurance</h2>
            <p className="mb-4">TravelMintUSA strongly recommends that all clients purchase comprehensive travel insurance at the time of booking. Travel insurance can cover trip cancellations, medical emergencies, trip interruptions, lost baggage, and other unforeseen circumstances.</p>
            <p>Travel insurance premiums are non-refundable once the policy has been issued. Claims must be filed directly with the insurance provider.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">8. Force Majeure</h2>
            <p>In the event of circumstances beyond our control, including but not limited to natural disasters, pandemics, government travel restrictions, political instability, or acts of terrorism, refund policies may be adjusted at the discretion of the travel suppliers. TravelMintUSA will work diligently on your behalf to secure the best possible outcome, whether that be a full refund, travel credit, or rescheduled itinerary.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">9. How to Request a Refund</h2>
            <p className="mb-4">To initiate a refund request, please contact our concierge team:</p>
            <div className="glass p-6 rounded-2xl mt-4">
              <p className="text-white font-semibold mb-2">TravelMintUSA Refund Department</p>
              <p>Email: <a href="mailto:info@travelmintusa.com" className="text-brand-gold hover:text-white transition-colors">info@travelmintusa.com</a></p>
              <p>Phone: <a href="tel:+18883161789" className="text-brand-gold hover:text-white transition-colors">(888) 316-1789</a></p>
              <p className="mt-3 text-sm text-gray-400">Please include your booking reference number, the reason for cancellation, and your preferred refund method.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4">10. Refund Processing</h2>
            <p>Approved refunds will be processed to the original method of payment within 7–21 business days, depending on the travel supplier and your financial institution. Credit card refunds may take an additional billing cycle to appear on your statement.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
