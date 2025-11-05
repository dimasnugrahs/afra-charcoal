// eslint-disable-next-line
import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile-image.png";

export default function ProfileSection() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-20 lg:pt-20 my-0 lg:mt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-6xl font-bold"
          >
            Afra
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-xl mt-4 lg:pr-16"
          >
            We are an Indonesian Companies Set up in Tabanan, Bali – Indonesia.
            Our main business are Wood Charcoal export. We are a small
            Indonesian family company and have a large catalogue of Charcoal
            production with direct contacts for Charcoal Market specially in
            Japan.
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex justify-center mt-8 lg:mt-0"
        >
          <img className="w-120" src={profileImage} />
        </motion.div>
      </section>
    </>
  );
}
