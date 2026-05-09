import { motion, useTransform } from "framer-motion";

export default function HostGreeting({ progress, beats }) {
  const opacity = useTransform(progress, beats.host, [0, 1]);
  const y = useTransform(progress, beats.host, [20, 0]);

  return (
    <motion.div style={{ opacity, y }} className="host">
      <div className="host-body">
        <div className="host-hair" />
        <div className="host-pants host-pants-left" />
        <div className="host-pants host-pants-right" />
        <div className="host-arm" />
      </div>
      <div className="host-greeting">Welcome to the House of Yen</div>
    </motion.div>
  );
}
