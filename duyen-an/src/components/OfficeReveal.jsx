import { motion, useTransform } from "framer-motion";
import { appear } from "../motionRanges";

export default function OfficeReveal({ progress, beats, officeImage }) {
  const opacity = appear(progress, beats.office[0], beats.office[1]);
  const y = useTransform(progress, beats.office, [42, 0]);

  return (
    <motion.div style={{ opacity, y }} className="office-arrival">
      <img src={officeImage} className="image-plate office-plate" alt="" />
      <div className="office-copy">
        <span>Office Arrival</span>
        <strong>The Yen Circle</strong>
      </div>
    </motion.div>
  );
}
