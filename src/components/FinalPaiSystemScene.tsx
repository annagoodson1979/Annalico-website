import { motion } from "framer-motion";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const gears = Array.from({ length: 4 }, (_, index) => ({
  id: index,
  size: 180 + index * 70,
  duration: 22 + index * 8,
}));

const waterLines = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  delay: index * 0.35,
}));

export default function FinalPaiSystemScene() {
  return (
    <section className="paiSystemScene" aria-label="House of Yen chamber">
      <motion.div
        className="paiSystemImage"
        initial={{ scale: 1.03, x: -14, y: 10 }}
        animate={{ scale: 1.16, x: 18, y: -18 }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/pai-system.mp4" />

      <div className="paiSystemShade" />
      <div className="paiSystemWater" />
      <div className="paiSystemMist" />

      <div className="paiWaterLines" aria-hidden="true">
        {waterLines.map((line) => (
          <span key={line.id} style={{ animationDelay: `${line.delay}s` }} />
        ))}
      </div>

      <div className="paiGearField" aria-hidden="true">
        {gears.map((gear, index) => (
          <motion.span
            key={gear.id}
            style={{ width: gear.size, height: gear.size }}
            animate={{ rotate: index % 2 ? -360 : 360 }}
            transition={{
              duration: gear.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="paiStatuePulse"
        animate={{ opacity: [0.18, 0.44, 0.18], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
