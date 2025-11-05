import iconCompany from "../../assets/images/logo.png";

export default function Logo({ size = "text-xl" }) {
  const logoClasses = `${size} font-extrabold text-indigo-600`;
  return <img src={iconCompany} className={logoClasses} />;
}
