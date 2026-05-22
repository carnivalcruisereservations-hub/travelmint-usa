import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Cruises from "@/components/Cruises";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Featured Destinations */}
        <Destinations />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Luxury Cruises Section */}
        <Cruises />

        {/* Animated Statistics */}
        <Stats />

        {/* Testimonials */}
        <Testimonials />

        {/* Travel Blog Preview */}
        <Blog />

        {/* Contact & Map Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </>
  );
}
