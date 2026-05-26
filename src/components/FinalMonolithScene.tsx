import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const pathLights = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  side: index % 2 === 0 ? "left" : "right",
  depth: Math.floor(index / 2),
  delay: Math.floor(index / 2) * 0.34 + (index % 2) * 0.12,
}));

export default function FinalMonolithScene() {
  return (
    <section className="monolithScene" aria-label="Duyen An Monolith">
      <motion.div
        className="monolithImage"
        initial={{ scale: 1.08, x: -10, y: 18 }}
        animate={{ scale: 1.42, x: 4, y: -38 }}
        transition={{
          duration: 18,
          ease: "easeInOut",
        }}
      />
      <CinematicVideoLayer src="/videos/monolith.mp4" />

      <div className="monolithShade" />
      <div className="monolithWater" />
      <div className="monolithMist" />
      <div className="sceneDepth sceneDepthWarm" />
      <div className="sceneLightSweep" />

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
