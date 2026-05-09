import { useTransform } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export function appear(progress, start, end) {
  return useTransform(progress, [start, end], [0, 1]);
}

export function pass(progress, start, peak, end) {
  return useTransform(progress, [start, peak, end], [0, 1, 0]);
}
