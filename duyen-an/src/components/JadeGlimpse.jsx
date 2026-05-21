import { motion, useTransform } from "framer-motion";

export default function JadeGlimpse({ progress, beats, houseOfJadeImage }) {
  const opacity = useTransform(progress, [0.7, 0.88], [0, 1]);
  const x = useTransform(progress, [0.7, 1], [120, 0]);

  return (
    <motion.div style={{ opacity, x }} className="jade-courtyard">
      <motion.img
        src={houseOfJadeImage}
        style={{ opacity, x }}
        className="image-plate jade-glimpse-plate"
        alt=""
      />
      <div className="courtyard-glow" />
      <div className="courtyard-sign">House of Jade</div>
    </motion.div>
  );
}
