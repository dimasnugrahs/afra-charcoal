import profileImage from "../../assets/images/warehouse-image.jpg";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function CompanyWarehouseSection() {
  return (
    <div className="px-6 lg:px-20 py-6 lg:py-20 mb-20">
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-4 text-xl font-bold"
      >
        Warehouse
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-1"
      >
        <img src={profileImage} className="w-120 rounded-xl" />
      </motion.section>
    </div>
  );
}
