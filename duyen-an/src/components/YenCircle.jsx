import { motion, useTransform } from "framer-motion";

export default function YenCircle({ progress, beats }) {
  const opacity = useTransform(
    progress,
    [beats.yenCircle[0], beats.yenCircle[1], beats.office[0]],
    [0, 1, 0.35]
  );
  const x = useTransform(progress, [beats.yenCircle[0], 1], [0, -180]);

  return (
    <motion.div style={{ opacity, x }} className="yen-wall">
      {[...Array(6)].map((_, index) => <div key={index} className="yen-circle" />)}
    </motion.div>
  );
}
