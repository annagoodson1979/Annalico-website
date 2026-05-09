import { motion, useTransform } from "framer-motion";
import { appear } from "../motionRanges";

export default function FoyerReveal({ progress, beats, foyerImage, children }) {
  const foyerOpacity = appear(progress, beats.foyer[0], beats.foyer[1]);
  const foyerScale = useTransform(progress, [0.5, 1], [1.04, 1]);
  const atmosphereOpacity = useTransform(progress, [0.55, 0.9], [0, 1]);

  return (
    <motion.section style={{ opacity: foyerOpacity }} className="scene foyer">
      <motion.img
        src={foyerImage}
        style={{
          opacity: foyerOpacity,
          scale: foyerScale,
        }}
        className="image-plate foyer-plate"
        alt=""
      />
      <div className="plate-debug foyer-debug">
        <span>Foyer Jade Plate</span>
      </div>
      <div className="lantern-glow" />
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="lantern"
          style={{ left: `${12 + index * 11}%` }}
        />
      ))}
      <div className="foyer-pillar pillar-left" />
      <div className="foyer-pillar pillar-right" />
      <motion.div style={{ opacity: atmosphereOpacity }} className="atmospheric-overlay">
        <div className="red-lantern-glow" />
        <div className="emerald-reflection" />
        {[...Array(18)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + index * 0.2,
              repeat: Infinity,
            }}
            className="floating-particle"
            style={{
              left: `${(index * 13) % 100}%`,
              top: `${(index * 17) % 100}%`,
            }}
          />
        ))}
      </motion.div>
      {children}
    </motion.section>
  );
}
