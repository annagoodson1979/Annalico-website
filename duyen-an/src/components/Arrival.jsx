import { motion, useTransform } from "framer-motion";
import { pass } from "../motionRanges";

export default function Arrival({ progress, beats, brandName }) {
  const opacity = useTransform(progress, [beats.darkness[0], beats.darkness[1]], [1, 0]);
  const titleOpacity = pass(progress, 0, 0.055, 0.12);

  return (
    <motion.section style={{ opacity }} className="scene dark-arrival">
      <div className="windshield-vignette" />
      <div className="dash-glow" />
      <motion.div style={{ opacity: titleOpacity }} className="arrival-title">
        <span>Arrival</span>
        <strong>{brandName}</strong>
      </motion.div>
    </motion.section>
  );
}
