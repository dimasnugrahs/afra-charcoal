import { products } from "../../data/data";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function ProductsSection() {
  return (
    <section className="grid grid-cols-1 px-6 lg:px-20 py-20 mt-20 bg-company-400/20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold"
      >
        Our Product
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <motion.img
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5 }}
            src={product.image}
            className="w-full rounded-md h-36 object-cover shadow hover:shadow-xl hover:-translate-y-2.5 duration-300"
          />
        ))}
      </div>
    </section>
  );
}
