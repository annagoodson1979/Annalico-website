import { motion } from "framer-motion";

export default function FloatingJadeCore({ className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`floating-jade-core ${className}`}
    >
      <div className="floating-jade-inner" />
      <div className="floating-jade-atmosphere" />
    </motion.div>
  );
}
