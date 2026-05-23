import { motion } from "framer-motion";

function SanctuaryCourtyard() {
  return (
    <section className="sanctuary-scene">
      <img
        src="/images/duyenanlobby.jpg"
        alt="House of Yen sanctuary courtyard"
        className="sanctuary-image"
      />

      <div className="sanctuary-overlay" />
      <div className="sanctuary-mist" />

      <motion.div
        className="sanctuary-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.45 }}
      >
        <p>Beyond the threshold</p>
        <h2>The house opens into stillness.</h2>
      </motion.div>
    </section>
  );
}

export default SanctuaryCourtyard;
