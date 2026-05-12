import { motion } from "framer-motion";

function LivingHouse() {
  return (
    <section className="livinghouse-scene">
      <img
        src="/images/living-house.jpg"
        alt="Life inside House of Yen"
        className="livinghouse-image"
      />

      <div className="livinghouse-overlay" />
      <div className="livinghouse-lanternglow" />

      <motion.div
        className="livinghouse-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.45 }}
      >
        <p>Within the house</p>

        <h2>Warmth is carried through every generation.</h2>
      </motion.div>
    </section>
  );
}

export default LivingHouse;
