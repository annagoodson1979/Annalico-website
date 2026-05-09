import { motion, useTransform } from "framer-motion";
import { pass } from "../motionRanges";

export function SalonReveal({ progress, beats }) {
  const opacity = pass(progress, beats.salon[0], beats.salon[1], beats.ynx[0]);
  const x = useTransform(progress, beats.salon, [-90, 0]);

  return (
    <motion.div style={{ opacity, x }} className="showcase-card salon-reveal">
      <span>Salon Studio</span>
      <strong>AG</strong>
      <p>Soft light, polished detail, reserved care.</p>
    </motion.div>
  );
}

export function YNXReveal({ progress, beats }) {
  const opacity = pass(progress, beats.ynx[0], beats.ynx[1], beats.spotlight[0]);
  const x = useTransform(progress, beats.ynx, [90, 0]);

  return (
    <motion.div style={{ opacity, x }} className="showcase-card ynx-reveal">
      <span>Notary</span>
      <strong>YNX</strong>
      <p>Documents, trust, and calm execution.</p>
    </motion.div>
  );
}

export default function BusinessReveal({ progress, beats }) {
  return (
    <>
      <SalonReveal progress={progress} beats={beats} />
      <YNXReveal progress={progress} beats={beats} />
    </>
  );
}
