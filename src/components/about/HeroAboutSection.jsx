// eslint-disable-next-line
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/background-image.jpg";

export default function HeroAboutSection() {
  const backgroundStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover", // Agar gambar menutupi area
    backgroundPosition: "center", // Agar gambar terpusat
  };
  return (
    <div className="lg:px-20 px-6">
      <div className="grid grid-cols-1 lg:h-screen pt-30 lg:pt-22 ">
        <section className="flex items-center" style={backgroundStyle}>
          <div className="w-full lg:w-4/5 lg:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-5xl lg:text-6xl px-8 font-extrabold text-company-100"
            >
              About Afra Company
            </motion.h1>
          </div>
        </section>
        <section className="flex items-center mx-auto pt-10 lg:pt-0"></section>
      </div>
    </div>
  );
}
