import { Helmet } from "react-helmet-async";
import CompanyPhilosophy from "../components/about/CompanyPhilosophy";
import CompanyProfileSection from "../components/about/CompanyProfileSection";
import CompanyWarehouseSection from "../components/about/CompanyWarehouseSection";
import HeroAboutSection from "../components/about/HeroAboutSection";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Us - Afra Charcoal | Wood Charcoal Exporter from Bali
        </title>
        <meta
          name="description"
          content="Learn more about CV Afra, established in 2007 in Tabanan, Bali. Hardwood charcoal exporter with 110 tons monthly capacity and direct market supply."
        />

        {/* Open Graph Tags untuk Halaman About */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afra.co.id/about" />
        <meta
          property="og:title"
          content="About Us - Afra Charcoal | Company Profile & Philosophy"
        />
        <meta
          property="og:description"
          content="Discover CV Afra's history, company profile, leadership, philosophy, and warehouse locations in Bali and Pontianak."
        />
        <meta property="og:image" content="https://afra.co.id/og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Afra Charcoal | Company Profile & Philosophy"
        />
        <meta
          name="twitter:description"
          content="Discover CV Afra's history, company profile, leadership, philosophy, and warehouse locations in Bali and Pontianak."
        />
        <meta name="twitter:image" content="https://afra.co.id/og-image.jpg" />
      </Helmet>
      <HeroAboutSection />
      <CompanyProfileSection />
      <CompanyPhilosophy />
      <CompanyWarehouseSection />
    </>
  );
}
