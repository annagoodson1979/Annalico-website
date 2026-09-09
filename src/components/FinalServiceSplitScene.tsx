import { motion } from "framer-motion";
import "../App.css";

export default function FinalServiceSplitScene() {
  return (
    <section className="serviceSplitScene" aria-label="Salon and notary passage">
      <motion.div
        className="serviceSplitImage"
        initial={{ scale: 1.03, y: 12 }}
        animate={{ scale: 1.16, y: -18 }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="serviceSplitShade" />
      <div className="sceneDepth sceneDepthWarm" />
      <div className="sceneLightSweep" />

      <motion.div
        className="serviceSplitContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.25 }}
      >
        <p className="serviceSplitKicker">Two Doors Within The House</p>
        <h1>Salon and Notary</h1>

        <div className="serviceSplitCards">
          <motion.article
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.55 }}
          >
            <span>Salon</span>
            <h2>House of Yen</h2>
            <p>Beauty, polish, and care move through the left passage.</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.72 }}
          >
            <span>Notary</span>
            <h2>House of Jade</h2>
            <p>Documents, trust, and precision wait through the right passage.</p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
