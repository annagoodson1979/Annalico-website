import { motion } from "framer-motion";

export default function AtmosphericHaze() {
  return (
    <div className="atmospheric-haze" aria-hidden="true">
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="atmospheric-haze-white"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="atmospheric-haze-red"
      />
    </div>
  );
}
