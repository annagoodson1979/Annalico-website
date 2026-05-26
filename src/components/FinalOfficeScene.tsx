import { motion } from "framer-motion";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const motes = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${6 + ((index * 29) % 88)}%`,
  delay: index * 0.22,
}));

export default function FinalOfficeScene() {
  return (
    <section className="officeScene" aria-label="House of Yen office">
      <motion.div
        className="officeImage"
        initial={{ scale: 1.02, x: 16, y: 8 }}
        animate={{ scale: 1.16, x: -24, y: -18 }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/office.mp4" />

      <div className="officeShade" />
      <div className="officeWarmth" />
      <div className="sceneDepth sceneDepthWarm" />
      <div className="sceneLightSweep" />

      <div className="officeMotes" aria-hidden="true">
        {motes.map((mote) => (
          <span
            key={mote.id}
            style={{
              left: mote.left,
              animationDelay: `${mote.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="officeContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.35 }}
      >
        <p className="officeKicker">Final Destination</p>
        <h1>House of Yen</h1>
        <p className="officeText">What do you need? I'm listening.</p>
      </motion.div>
    </section>
  );
}
