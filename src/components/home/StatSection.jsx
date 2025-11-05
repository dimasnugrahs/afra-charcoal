// eslint-disable-next-line
import { motion } from "framer-motion";

export default function StatSection() {
  return (
    <>
      <section className="grid grid-cols-1 px-6 lg:px-20 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-2 rounded bg-company-400/20 py-6 lg:py-8 lg:px-10"
        >
          <div className="py-10 lg:py-0 px-8 border-b-2 lg:border-b-0 lg:border-r-2 border-company-700">
            <div className=" text-xl font-medium mb-2">
              Authentic Taste Starts with Choice Ingredients.
            </div>
            <div className="font-light pb-6 lg:pb-0">
              Made from 100% hand-selected natural wood. no chemicals, no
              additives. Resulting heat and an authentic, smoky aroma that
              perfectly permeates every dish.
            </div>
          </div>
          <div className="py-10 lg:py-0 px-8 border-b-2 lg:border-b-0 lg:border-r-2 border-company-700">
            <div className=" text-xl font-medium mb-2">
              9999+
              <div>Customer Guarantee</div>
            </div>
            <div className="font-light pb-6 lg:pb-0">
              We offer a flawless delivery guarantee and responsive customer
              support. We ensure that our premium quality products arrive in
              perfect condition.
            </div>
          </div>
          <div className="py-10 lg:py-0 px-8">
            <div className=" text-xl font-medium mb-2">
              Commitment to
              <div>Sustainable Resources</div>
            </div>
            <div className="font-light">
              We operate our business based on sustainability principles. All of
              our hardwood raw materials are sourced from legally and
              sustainably managed forests with full certification..
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
