import { motion, useTransform } from "framer-motion";

export default function Arrival({ progress, beats, brandName }) {
  const opacity = useTransform(progress, [beats.darkness[0], beats.darkness[1]], [1, 0]);

  return (
    <motion.section style={{ opacity }} className="scene dark-arrival">
      <div className="windshield-vignette" />
      <div className="dash-glow" />
    </motion.section>
  );
}
