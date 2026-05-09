import { motion, useTransform } from "framer-motion";
import { pass } from "../motionRanges";

export default function DriverGreeting({ progress, beats }) {
  const opacity = pass(progress, beats.driver[0], beats.driver[1], 0.42);
  const y = useTransform(progress, beats.driver, [34, 0]);

  return (
    <motion.section style={{ opacity, y }} className="scene driver-greeting">
      <div className="driver-figure">
        <div className="driver-head" />
        <div className="driver-hair" />
        <div className="driver-arm" />
        <div className="driver-trim" />
      </div>
    </motion.section>
  );
}
