import { motion } from "framer-motion";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const ripples = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  delay: index * 0.9,
}));

export default function FinalYenCircleScene() {
  return (
    <section className="yenCircleScene" aria-label="Yen Circle courtyard">
      <motion.div
        className="yenCircleImage"
        initial={{ scale: 1.03, x: 12, y: 18 }}
        animate={{ scale: 1.18, x: -20, y: -18 }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/yen-circle.mp4" />

      <div className="yenCircleShade" />
      <div className="yenCircleMoon" />
      <div className="sceneDepth sceneDepthRose" />
      <div className="sceneLightSweep" />

      <div className="yenCircleRipples" aria-hidden="true">
        {ripples.map((ripple) => (
          <span key={ripple.id} style={{ animationDelay: `${ripple.delay}s` }} />
        ))}
      </div>

      <motion.div
        className="yenCircleContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.35 }}
      >
        <p className="yenCircleKicker">The Final Threshold</p>
        <h1>Beyond the Yen Circle</h1>
        <p className="yenCircleText">
          The journey settles into presence, memory, and purpose.
        </p>
      </motion.div>
    </section>
  );
}
