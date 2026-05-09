import { motion, useTransform } from "framer-motion";

const labels = [
  "Darkness",
  "Exterior",
  "Driver",
  "Women",
  "Doors",
  "Foyer",
  "Jade",
  "Host",
  "Tealights",
  "Salon",
  "YNX",
  "Spotlight",
  "Yen Circle",
  "Office",
];

export default function SceneMarker({ progress }) {
  const label = useTransform(progress, (value) => {
    const index = Math.min(labels.length - 1, Math.floor(value * labels.length));
    return labels[index];
  });

  return (
    <motion.div className="scene-marker">
      <motion.span>{label}</motion.span>
    </motion.div>
  );
}
