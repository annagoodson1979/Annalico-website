import { motion } from "framer-motion";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

export default function FinalArrivalScene() {
  return (
    <section className="arrivalScene" aria-label="Arrival at Duyen An">
      <motion.div
        className="arrivalImage"
        initial={{ scale: 1.03, x: 18, y: 8 }}
        animate={{ scale: 1.22, x: -42, y: -18 }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/arrival.mp4" />

      <div className="arrivalShade" />
      <div className="arrivalGlow" />

      <motion.div
        className="arrivalContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
      >
        <p className="arrivalKicker">Private Arrival</p>
        <h1>Welcome to Duyen An</h1>
        <p className="arrivalText">
          A curated chamber for presence, beauty, and connection.
        </p>
      </motion.div>
    </section>
  );
}
