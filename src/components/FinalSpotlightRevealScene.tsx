import { motion } from "framer-motion";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const sand = Array.from({ length: 70 }, (_, index) => ({
  id: index,
  left: `${10 + ((index * 19) % 80)}%`,
  delay: index * 0.026,
  drift: -40 + ((index * 23) % 80),
}));

export default function FinalSpotlightRevealScene() {
  return (
    <section className="spotlightRevealScene" aria-label="Business spotlight reveal">
      <motion.div
        className="spotlightRevealImage"
        initial={{ scale: 1.04, y: 12 }}
        animate={{ scale: 1.16, y: -18 }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/spotlight-reveal.mp4" />

      <div className="spotlightRevealShade" />
      <div className="hourglassGlow" />

      <div className="hourglass" aria-hidden="true">
        <div className="hourglassTop" />
        <div className="hourglassNeck" />
        <div className="hourglassBottom" />
        {sand.map((grain) => (
          <span
            key={grain.id}
            style={{
              left: grain.left,
              "--drift": `${grain.drift}px`,
              animationDelay: `${grain.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="businessNameDust oldName"
        initial={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        animate={{ opacity: [1, 1, 0], filter: ["blur(0px)", "blur(3px)", "blur(14px)"], y: [0, 12, 90] }}
        transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      >
        YNX Notary
      </motion.div>

      <motion.div
        className="businessNameDust newName"
        initial={{ opacity: 0, filter: "blur(16px)", y: 80 }}
        animate={{ opacity: [0, 0, 1, 1], filter: ["blur(16px)", "blur(10px)", "blur(0px)", "blur(0px)"], y: [80, 48, 0, 0] }}
        transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      >
        House of Jade Salon
      </motion.div>
    </section>
  );
}
