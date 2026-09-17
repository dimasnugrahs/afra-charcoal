import { Helmet } from "react-helmet-async";
import ProductDetailSection from "../components/product/ProductDetailSection";

export default function ProductPage() {
  return (
    <>
      <Helmet>
        <title>Premium Wood Charcoal Products - Afra Charcoal</title>
        <meta
          name="description"
          content="Explore premium hardwood charcoal products by Afra Charcoal. Stable, clean-burning, and versatile for BBQs, industrial use, water purification, and export."
        />

        {/* Open Graph Tags untuk Halaman Products */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afra.co.id/products" />
        <meta
          property="og:title"
          content="Premium Wood Charcoal Products - Afra Charcoal"
        />
        <meta
          property="og:description"
          content="Discover our high-grade hardwood charcoal, featuring longer heat endurance, dense texture, and clean combustion for culinary and industrial applications."
        />
        <meta property="og:image" content="https://afra.co.id/og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium Wood Charcoal Products - Afra Charcoal"
        />
        <meta
          name="twitter:description"
          content="Discover our high-grade hardwood charcoal, featuring longer heat endurance, dense texture, and clean combustion for culinary and industrial applications."
        />
        <meta name="twitter:image" content="https://afra.co.id/og-image.jpg" />
      </Helmet>
      <ProductDetailSection />
    </>
  );
}
