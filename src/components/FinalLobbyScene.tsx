import { motion } from "framer-motion";
import CinematicVideoLayer from "./CinematicVideoLayer";
import "../App.css";

const shimmerLines = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  left: `${12 + index * 9}%`,
  delay: index * 0.35,
}));

export default function FinalLobbyScene() {
  return (
    <section className="lobbyScene" aria-label="Duyen An lobby">
      <motion.div
        className="lobbyImage"
        initial={{ scale: 1.02, x: 28, y: 10 }}
        animate={{ scale: 1.2, x: -40, y: -18 }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <CinematicVideoLayer src="/videos/lobby-passage.mp4" />

      <div className="lobbyShade" />
      <div className="lobbyReflection" />
      <div className="sceneDepth sceneDepthWarm" />
      <div className="sceneLightSweep" />

      <div className="lobbyShimmer" aria-hidden="true">
        {shimmerLines.map((line) => (
          <span
            key={line.id}
            style={{
              left: line.left,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="lobbyContent"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.35 }}
      >
        <p className="lobbyKicker">Within the Lobby</p>
        <h1>Stillness moves through the house.</h1>
        <p className="lobbyText">
          Light, texture, and quiet conversation guide the path inward.
        </p>
      </motion.div>
    </section>
  );
}
