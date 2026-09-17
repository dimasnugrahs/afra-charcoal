import { Helmet } from "react-helmet-async";
import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactSection from "../components/contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Afra Charcoal | Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Contact CV Afra in Tabanan, Bali. Reach out for wood charcoal export inquiries, direct market supply, phone, email, and warehouse locations."
        />

        {/* Open Graph Tags untuk Halaman Contact */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afra.co.id/contact" />
        <meta
          property="og:title"
          content="Contact Us - Afra Charcoal | Export Inquiries & Locations"
        />
        <meta
          property="og:description"
          content="Get in touch with CV Afra. Office in Tabanan, Bali and warehouse in Pontianak. Phone: +62 821 4884 2070, Email: acuscharcoal@hotmail.com"
        />
        <meta property="og:image" content="https://afra.co.id/og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us - Afra Charcoal | Export Inquiries & Locations"
        />
        <meta
          name="twitter:description"
          content="Get in touch with CV Afra. Office in Tabanan, Bali and warehouse in Pontianak. Phone: +62 821 4884 2070, Email: acuscharcoal@hotmail.com"
        />
        <meta name="twitter:image" content="https://afra.co.id/og-image.jpg" />
      </Helmet>
      <ContactHeroSection />
      <ContactSection />
    </>
  );
}
