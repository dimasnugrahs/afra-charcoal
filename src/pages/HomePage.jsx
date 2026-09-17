import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import PhiloshopySection from "../components/home/PhilosophySection";
import ProductsSection from "../components/home/ProductsSection";
import ProfileSection from "../components/home/ProfileSection";
import StatSection from "../components/home/StatSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>
          Afra Charcoal - Premium Wood Charcoal Export from Bali, Indonesia
        </title>
        <meta
          name="description"
          content="Indonesian wood charcoal exporter based in Tabanan, Bali. Supplying premium charcoal production with direct market connections, especially for Japan."
        />

        {/* Open Graph Tags untuk WhatsApp, Facebook, dll */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afra.co.id" />
        <meta
          property="og:title"
          content="Afra Charcoal | Premium Wood Charcoal Export from Bali"
        />
        <meta
          property="og:description"
          content="Indonesian family company in Tabanan, Bali, specializing in high-quality wood charcoal export and direct market supply for Japan."
        />
        <meta property="og:image" content="https://afra.co.id/og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Afra Charcoal | Premium Wood Charcoal Export from Bali"
        />
        <meta
          name="twitter:description"
          content="Indonesian family company in Tabanan, Bali, specializing in high-quality wood charcoal export and direct market supply for Japan."
        />
        <meta name="twitter:image" content="https://afra.co.id/og-image.jpg" />
      </Helmet>
      <HeroSection />
      <StatSection />
      <ProfileSection />
      <ProductsSection />
      <PhiloshopySection />
    </div>
  );
}
