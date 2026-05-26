import { motion } from "framer-motion";
import "../App.css";

const sparks = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${12 + ((index * 23) % 72)}%`,
  delay: index * 0.18,
}));

export default function FinalSpotlightScene() {
  return (
    <section className="spotlightScene" aria-label="Duyen An spotlight">
      <motion.div
        className="spotlightImage"
        initial={{ scale: 1.02, x: -20, y: 12 }}
        animate={{ scale: 1.17, x: 28, y: -20 }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="spotlightShade" />
      <div className="spotlightBeam" />
      <div className="sceneDepth sceneDepthGold" />

      <div className="spotlightSparks" aria-hidden="true">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            style={{
              left: spark.left,
              top: spark.top,
              animationDelay: `${spark.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="spotlightCard"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.45 }}
      >
        <p className="spotlightKicker">This Week's Spotlight</p>
        <h1>House of Yen</h1>
        <p>
          A place where every craft is honored, every house is seen, and the
          next chapter is chosen by light.
        </p>
        <a href="/business-directory">Click for Business Directory</a>
      </motion.div>
    </section>
  );
}
