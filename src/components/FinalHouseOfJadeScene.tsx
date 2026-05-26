import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const lanterns = [
  { id: 1, x: "13%", y: "18%", scale: 0.72, delay: 0 },
  { id: 2, x: "24%", y: "28%", scale: 0.52, delay: 0.8 },
  { id: 3, x: "76%", y: "20%", scale: 0.66, delay: 0.4 },
  { id: 4, x: "86%", y: "34%", scale: 0.46, delay: 1.2 },
];

const mistBands = [
  { id: 1, top: "58%", delay: 0, duration: 18 },
  { id: 2, top: "68%", delay: 4, duration: 24 },
  { id: 3, top: "78%", delay: 8, duration: 21 },
];

export default function FinalHouseOfJadeScene() {
  return (
    <section className="jadeScene" aria-label="House of Jade">
      <motion.div
        className="jadeImage"
        initial={{ scale: 1.03, x: -22, y: 8 }}
        animate={{ scale: 1.18, x: 28, y: -18 }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/house-of-jade.mp4" />

      <div className="jadeShade" />
      <div className="jadeLight" />
      <div className="sceneDepth sceneDepthJade" />
      <div className="sceneLightSweep sceneLightSweepJade" />

      <div className="jadeLanternLayer" aria-hidden="true">
        {lanterns.map((lantern) => (
          <span
            key={lantern.id}
            className="jadeLantern"
            style={
              {
                left: lantern.x,
                top: lantern.y,
                "--scale": lantern.scale,
                "--delay": `${lantern.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="jadeMistLayer" aria-hidden="true">
        {mistBands.map((mist) => (
          <span
            key={mist.id}
            className="jadeMist"
            style={
              {
                top: mist.top,
                animationDelay: `${mist.delay}s`,
                animationDuration: `${mist.duration}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <motion.div
        className="jadeContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.35 }}
      >
        <p className="jadeKicker">House of Jade</p>
        <h1>Enter softly.</h1>
        <p className="jadeText">
          A hidden salon of beauty, stillness, and quiet ceremony.
        </p>
      </motion.div>
    </section>
  );
}
