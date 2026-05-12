import { motion } from "framer-motion";

function HeartOfHouse() {
  return (
    <section className="heart-scene">
      <img
        src="/images/heart-of-house.jpg"
        alt="The Heart of House of Yen"
        className="heart-image"
      />

      <div className="heart-overlay" />
      <div className="heart-refraction" />
      <div className="heart-light" />

      <motion.div
        className="heart-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.45 }}
      >
        <p>The heart of the house</p>

        <h2>Light passes through what remains timeless.</h2>
      </motion.div>
    </section>
  );
}

export default HeartOfHouse;
