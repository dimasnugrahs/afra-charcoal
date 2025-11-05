import profileImage from "../../assets/images/profile-image.png";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div
      className="px-6 lg:px-20 py-6 lg:py-20"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mb-4 text-xl font-bold"
      >
        Contact Us
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <img src={profileImage} className="w-120" />
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 bg-company-200/20 px-8">
          <div className="title-company w-4/5 font-bold">Name of Company</div>
          <div className="mb-2 lg:mb-0 subtitle">CV AFRA</div>
          <div className="title-company w-4/5 font-bold">Director</div>
          <div className="mb-2 lg:mb-0 subtitle">AGUS SUGIANTO</div>
          <div className="title-company w-4/5 font-bold">
            Operational & Production manager
          </div>
          <div className="mb-2 lg:mb-0 subtitle">PUJUT PURNAMA</div>
          <div className="title-company w-4/5 font-bold">Office address</div>
          <div className="mb-2 lg:mb-0 subtitle">
            BTN SURYA GRAHA LESTARI BLOK N2 TABANAN - BALI
          </div>
          <div className="title-company w-4/5 font-bold">Telp and Fax</div>
          <div className="mb-2 lg:mb-0 subtitle">+62 821 4884 2070 </div>
          <div className="title-company w-4/5 font-bold">Email</div>
          <div className="mb-2 lg:mb-0 subtitle">AGUSCHARCO@HOTMAIL.COM</div>
          <div className="title-company w-4/5 font-bold">
            Warehouse and Storage location
          </div>
          <div className="subtitle">
            KOMPLEK GUDANG ARANG, JL. 28 OKTOBER SIANTAN HULU, PONTIANAK -
            KALBAR
          </div>
        </div>
      </motion.section>
    </div>
  );
}
