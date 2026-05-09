import { motion, useTransform } from "framer-motion";
import { pass } from "../motionRanges";

export default function Spotlight({ progress, beats }) {
  const opacity = pass(progress, beats.spotlight[0], beats.spotlight[1], beats.yenCircle[0]);
  const scale = useTransform(progress, beats.spotlight, [0.94, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="spotlight-showcase">
      <div className="spotlight-beam" />
      <div className="spotlight-dais">
        <span>This Week's Spotlight</span>
        <strong>Beauty, Business, and Trust</strong>
      </div>
    </motion.div>
  );
}
