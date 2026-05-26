import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const pathLights = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  side: index % 2 === 0 ? "left" : "right",
  depth: Math.floor(index / 2),
  delay: 4.2 + Math.floor(index / 2) * 0.28 + (index % 2) * 0.1,
}));

export default function FinalMonolithScene() {
  return (
    <section className="monolithScene" aria-label="Duyen An Monolith">
      <motion.div
        className="monolithImage"
        initial={{ scale: 1.06, x: -8, y: 16 }}
        animate={{ scale: 1.58, x: 2, y: -48 }}
        transition={{
          duration: 8.5,
          ease: [0.22, 0.8, 0.22, 1],
        }}
      />
      <CinematicVideoLayer src="/videos/monolith.mp4" />

      <div className="monolithShade" />
      <div className="monolithWater" />
      <div className="monolithMist" />
      <div className="monolithFocusGlow" />

      <div className="monolithPathLights" aria-hidden="true">
        {pathLights.map((light) => (
          <span
            key={light.id}
            className={`pathLight pathLight-${light.side}`}
            style={
              {
                "--depth": light.depth,
                "--delay": `${light.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <motion.div
        className="monolithContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.35 }}
      >
        <p className="monolithKicker">The Chamber Awaits</p>
        <h1>Enter the Monolith</h1>
        <p className="monolithText">
          A quiet passage into beauty, presence, and belonging.
        </p>
      </motion.div>
    </section>
  );
}
