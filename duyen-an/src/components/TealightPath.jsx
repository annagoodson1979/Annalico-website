import { motion, useTransform } from "framer-motion";
import { appear } from "../motionRanges";

export default function TealightPath({ progress, beats, tealightImage }) {
  const opacity = appear(progress, beats.tealights[0], beats.tealights[1]);
  const y = useTransform(progress, beats.tealights, [32, 0]);

  return (
    <motion.div style={{ opacity, y }} className="tealight-scene">
      <img src={tealightImage} className="image-plate tealight-plate" alt="" />
      <div className="plate-debug hallway-debug">
        <span>Hallway Plate</span>
      </div>
      <div className="tealight-path">
        {[...Array(9)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5 + index * 0.15,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
