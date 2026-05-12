import { motion } from "framer-motion";

function RemembranceAlcove() {
  return (
    <section className="remembrance-scene">
      <img
        src="/images/remembrance-alcove.jpg"
        alt="House of Yen remembrance alcove"
        className="remembrance-image"
      />

      <div className="remembrance-overlay" />
      <div className="incense-smoke" />

      <motion.div
        className="remembrance-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.45 }}
      >
        <p>In remembrance</p>
        <h2>Those who came before us remain part of the house.</h2>
      </motion.div>
    </section>
  );
}

export default RemembranceAlcove;
