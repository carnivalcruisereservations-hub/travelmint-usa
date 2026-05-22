import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRAVELMINTUSA | Luxury Journeys Crafted for Modern Travelers",
  description: "Experience the world's most exclusive destinations with TravelMintUSA. Bespoke travel itineraries, luxury private island resorts, elite cruises, and 24/7 personal travel experts.",
  keywords: ["Luxury travel agency", "Bespoke itineraries", "Elite cruises", "TravelMintUSA", "Aman resorts style", "Dubai Maldives Santori Swiss Alps"],
  authors: [{ name: "TRAVELMINTUSA" }],
  openGraph: {
    title: "TRAVELMINTUSA | Luxury Journeys",
    description: "Bespoke luxury itineraries and private island escapes.",
    url: "https://travelmintusa.com",
    siteName: "TRAVELMINTUSA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-brand-bg text-white font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
