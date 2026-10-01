import iconCompany from "../../assets/images/logo.png";

export default function Logo({ size = "text-xl", alt = "Afra Charcoal Logo" }) {
  const logoClasses = `${size} font-extrabold text-indigo-600`;
  return <img src={iconCompany} className={logoClasses} alt={alt} />;
}
