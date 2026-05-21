import { motion } from "framer-motion";

export default function ArrivalScene() {
  return (
    <section className="arrival-scene">
      <img
        src="/images/duyenan-arrival.jpeg"
        alt="Duyen An arrival entrance"
        className="arrival-image"
      />

      <div className="arrival-overlay" />
      <div className="arrival-glow" />

      <div className="petals">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <motion.div
        className="arrival-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.45 }}
      >
        <p>Welcome to</p>
        <h1>Duyên Ân</h1>
        <h2>Where elegance enters quietly.</h2>
      </motion.div>
    </section>
  );
}
