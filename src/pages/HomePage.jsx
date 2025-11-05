import HeroSection from "../components/home/HeroSection";
import PhiloshopySection from "../components/home/PhilosophySection";
import ProductsSection from "../components/home/ProductsSection";
import ProfileSection from "../components/home/ProfileSection";
import StatSection from "../components/home/StatSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatSection />
      <ProfileSection />
      <ProductsSection />
      <PhiloshopySection />
    </div>
  );
}
