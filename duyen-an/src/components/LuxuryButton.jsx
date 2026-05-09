import { motion } from "framer-motion";

export default function LuxuryButton({ children, href = "#" }) {
  return (
    <motion.a
      href={href}
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="luxury-button"
    >
      <span className="luxury-button-glow" />
      <span className="luxury-button-text">{children}</span>
    </motion.a>
  );
}
