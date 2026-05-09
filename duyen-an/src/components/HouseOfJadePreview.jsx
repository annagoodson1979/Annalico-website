import { motion } from "framer-motion";
import LuxuryButton from "./LuxuryButton";

export default function HouseOfJadePreview() {
  return (
    <div className="house-jade-preview">
      <div className="house-jade-visual" aria-hidden="true">
        <div className="amber-blur-wash" />
        <div className="house-jade-shade" />
        <div className="house-jade-bamboo">
          <span />
          <span />
          <span />
        </div>
        <div className="house-jade-water" />
        <div className="house-jade-line" />
        <motion.div
          className="house-jade-arch"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="house-jade-copy">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">Future Wing</p>
        <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
          A glimpse beyond the Yen circle.
        </h2>
        <span className="mt-6 text-lg leading-relaxed text-white/65">
          Beyond the separation wall, the House of Jade emerges softly through
          bamboo, cherry blossoms, flowing water, and illuminated pathways.
        </span>
        <span className="mt-6 text-lg leading-relaxed text-white/65">
          Designed as a future expansion of Duyen An, the House of Jade introduces
          a quieter atmosphere centered around reflection, elegance, and discovery.
        </span>
        <LuxuryButton href="#house-of-jade">Explore the Vision</LuxuryButton>
      </div>
    </div>
  );
}
