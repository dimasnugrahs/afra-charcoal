import { philosophy } from "../../data/data";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function CompanyPhilosophy() {
  return (
    <section className="grid grid-cols-1 px-6 lg:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold"
      >
        Our Philosophy
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {philosophy.map((philosophy) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded bg-linear-to-br from-company-200 to-company-50 h-36 px-8 py-4"
            key={philosophy.id}
          >
            <div className="font-semibold text-lg">{philosophy.title}</div>
            <div className="font-light">{philosophy.subtitle}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
