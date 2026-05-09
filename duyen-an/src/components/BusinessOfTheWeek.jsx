import { motion } from "framer-motion";
import LuxuryButton from "./LuxuryButton";
import LuxuryPanel from "./LuxuryPanel";

export default function BusinessOfTheWeek() {
  return (
    <div className="business-week">
      <div className="business-week-top-glow" />

      <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">Spotlight Feature</p>
      <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
        Business of the Week
      </h2>
      <span className="mt-6 text-lg leading-relaxed text-white/65">
        Suspended like a jewel beneath a focused spotlight, each featured business
        becomes part of the living story of Duyen An.
      </span>

      <div className="business-week-stage">
        <div className="business-week-halo" />
        <LuxuryPanel className="business-week-card">
          <div className="amber-blur-wash" />
          <motion.div
            className="business-week-orb"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <h3>Featured Brand</h3>
          <p>
            A rotating showcase celebrating creativity, elegance, and visionary
            businesses within the House of Yen.
          </p>
          <LuxuryButton href="#featured-businesses">Discover This Week's Feature</LuxuryButton>
        </LuxuryPanel>
      </div>
    </div>
  );
}
