import Breadcrumbs from "../layout/Breadcrumbs";
import profileImage from "../../assets/images/hero-image.png";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function ProductDetailSection() {
  return (
    <section className="px-6 lg:px-20 grid grid-cols-1 pt-30 lg:pt-22">
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Product", href: "#" },
          { label: "Charcoal" },
        ]}
      />
      <div className="py-10 lg:py-20 pb-20">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 text-xl font-bold"
        >
          Charcoal
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1"
        >
          <img src={profileImage} className="w-120" />
        </motion.section>
        <section className="grid grid-cols-1">
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Charcoal has long been recognized as one of the most versatile
            natural materials used throughout human history. From water
            purification to food processing, charcoal has played an essential
            role in daily life. Modern charcoal products are now refined using
            cleaner and more efficient technology, resulting in high-quality
            charcoal that is stable, easy to use, and consistently reliable. Not
            only popular in culinary needs such as BBQ and smoking, charcoal is
            also used in industrial applications, health products, and even
            beauty care due to its strong ability to absorb impurities and
            toxins.
          </motion.p>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            As time progresses, the demand for high-quality charcoal continues
            to rise. Many manufacturers have shifted towards more
            environmentally friendly production methods to preserve natural
            resources. Premium charcoal products offer a denser texture, longer
            heat endurance, and cleaner combustion with minimal smoke. These
            features make it a preferred choice for both household users and
            businesses that prioritize performance and quality in every stage of
            heating or cooking.
          </motion.p>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Contrary to the belief that charcoal is just ordinary burnt wood, it
            actually carries unique characteristics derived from its production
            process. Through pyrolysis-where wood is heated at high temperatures
            without oxygen-charcoal forms a strong and efficient carbon
            structure. Continuous research and development aim to create
            charcoal that is more stable, easier to ignite, and more
            fuel-efficient. These advancements ensure that charcoal remains
            relevant and widely used, even in the age of modern technology. and
            efficiency.
          </motion.p>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            High-quality charcoal stands as a reliable solution for various
            purposes, from home BBQs and restaurant kitchens to industrial needs
            and specialized uses such as water filtration or cosmetic
            formulations. With steady heat distribution and consistent burning
            performance, charcoal serves as a dependable fuel source across
            traditional and modern applications. A well-crafted charcoal product
            not only delivers optimal results but also enhances the overall
            experience of cooking, processing, or purifying with greater comfort
            and efficiency.
          </motion.p>
        </section>
      </div>
    </section>
  );
}
