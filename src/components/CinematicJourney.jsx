import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useRef } from "react";

const scenes = [
  {
    image: "/images/arrival.jpeg",
    eyebrow: "Arrival",
    title: "Welcome to Duyên Ân.",
    text: "Where elegance enters quietly.",
  },
  {
    image: "/images/houseofjade.jpeg",
    eyebrow: "A passing glimpse",
    title: "House of Jade",
    text: "A quiet threshold within Duyên Ân.",
  },
  {
    image: "/images/duyenanlobby.jpg",
    eyebrow: "Within the lobby",
    title: "Stillness moves through the house.",
    text: "Light, texture, and quiet conversation guide the path inward.",
  },
  {
    image: "/images/monolith.jpg",
    eyebrow: "Guided by light",
    title: "Toward the monolith",
    text: "Tealights quietly lead the way deeper into the sanctuary.",
  },
  {
    image: "/images/spotlight.jpg",
    eyebrow: "This week's spotlight",
    title: "A place where every craft is honored.",
    text: "The house quietly highlights the people within it.",
  },
  {
    image: "/images/courtyard.jpeg",
    eyebrow: "The final threshold",
    title: "Beyond the Yên Circle",
    text: "The journey settles into presence and purpose.",
  },
  {
    image: "/images/office.jpg",
    eyebrow: "Final destination",
    title: "The office of House of Yên",
    text: "What do you need? I'm listening.",
  },
];

function JourneyScene({ scene, index, scrollYProgress }) {
  const start = index / scenes.length;
  const mid = (index + 0.5) / scenes.length;
  const end = (index + 1) / scenes.length;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, mid, end - 0.08, end],
    [0, 1, 1, 1, 0]
  );
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

      <Parallax speed={-5} className="journey-glow-layer">
        <div className="arrival-glow" />
      </Parallax>

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
