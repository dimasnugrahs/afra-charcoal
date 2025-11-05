import CompanyPhilosophy from "../components/about/CompanyPhilosophy";
import CompanyProfileSection from "../components/about/CompanyProfileSection";
import CompanyWarehouseSection from "../components/about/CompanyWarehouseSection";
import HeroAboutSection from "../components/about/HeroAboutSection";

export default function AboutPage() {
  return (
    <>
      <HeroAboutSection />
      <CompanyProfileSection />
      <CompanyPhilosophy />
      <CompanyWarehouseSection />
    </>
  );
}
