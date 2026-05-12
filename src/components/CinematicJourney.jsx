import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useRef } from "react";

const scenes = [
  {
    image: "/images/duyenan.jpg",
    eyebrow: "Welcome to",
    title: "Duyên Ân",
    text: "Where elegance enters quietly.",
    glow: true,
  },
  {
    image: "/images/sanctuary-courtyard.jpg",
    eyebrow: "Beyond the threshold",
    title: "The house opens into stillness.",
  },
  {
    image: "/images/remembrance-alcove.jpg",
    eyebrow: "In remembrance",
    title: "Those who came before us remain part of the house.",
  },
  {
    image: "/images/living-house.jpg",
    eyebrow: "Within the house",
    title: "Warmth is carried through every generation.",
  },
  {
    image: "/images/zen-retreat.jpg",
    eyebrow: "A quiet place to pause",
    title: "Some spaces exist simply to let you breathe.",
  },
  {
    image: "/images/heart-of-house.jpg",
    eyebrow: "The heart of the house",
    title: "Light passes through what remains timeless.",
  },
];

function JourneyScene({ scene, index, scrollYProgress }) {
  const start = index / scenes.length;
  const mid = (index + 0.5) / scenes.length;
  const end = (index + 1) / scenes.length;

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1.04, 1.1]);
  const y = useTransform(scrollYProgress, [start, end], [30, -30]);

  return (
    <motion.div className="journey-scene" style={{ opacity }}>
      <Parallax speed={-12} className="journey-parallax-layer">
        <motion.img
          src={scene.image}
          alt={scene.title}
          className="journey-image"
          style={{ scale, y }}
        />
      </Parallax>

      <div className="journey-overlay" />

      {scene.glow && (
        <Parallax speed={-5} className="journey-glow-layer">
          <div className="arrival-glow" />
        </Parallax>
      )}

      <motion.div className="journey-copy" style={{ y }}>
        <p>{scene.eyebrow}</p>
        <h2>{scene.title}</h2>
        {scene.text && <span>{scene.text}</span>}
      </motion.div>
    </motion.div>
  );
}

export default function CinematicJourney() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="journey-wrap">
      <div className="journey-sticky">
        {scenes.map((scene, index) => (
          <JourneyScene
            scene={scene}
            index={index}
            scrollYProgress={scrollYProgress}
            key={scene.image}
          />
        ))}
      </div>
    </section>
  );
}
