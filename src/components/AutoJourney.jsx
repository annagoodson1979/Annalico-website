import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const scenes = [
  {
    image: "/images/duyenan-arrival.jpg",
    eyebrow: "Arrival",
    title: "Welcome to Duyên Ân.",
    text: "Where elegance enters quietly.",
    motion: {
      scale: 1.08,
      xStart: 0,
      xEnd: -30,
      yStart: 0,
      yEnd: -10,
      duration: 7,
    },
  },
  {
    image: "/images/house-of-jade-glimpse.jpg",
    eyebrow: "A passing glimpse",
    title: "House of Jade",
    text: "A quiet threshold within Duyên Ân.",
    motion: {
      scale: 1.06,
      xStart: -20,
      xEnd: 20,
      yStart: 0,
      yEnd: -12,
      duration: 6,
    },
  },
  {
    image: "/images/courtyard-tour.jpg",
    eyebrow: "Within the courtyard",
    title: "Stillness moves through the house.",
    text: "Water, lanterns, and soft conversation guide the path inward.",
    motion: {
      scale: 1.08,
      xStart: 10,
      xEnd: -20,
      yStart: 0,
      yEnd: -18,
      duration: 7,
    },
  },
  {
    image: "/images/monolith-path.jpg",
    eyebrow: "Guided by light",
    title: "Toward the monolith",
    text: "Tealights quietly lead the way deeper into the sanctuary.",
    motion: {
      scale: 1.12,
      xStart: 0,
      xEnd: 0,
      yStart: 20,
      yEnd: -40,
      duration: 8,
    },
  },
  {
    image: "/images/spotlight-scene.jpg",
    eyebrow: "This week's spotlight",
    title: "A place where every craft is honored.",
    text: "The house quietly highlights the people within it.",
    motion: {
      scale: 1.07,
      xStart: -15,
      xEnd: 18,
      yStart: 0,
      yEnd: -16,
      duration: 6,
    },
  },
  {
    image: "/images/yen-circle.jpg",
    eyebrow: "The final threshold",
    title: "Beyond the Yên Circle",
    text: "The journey settles into presence and purpose.",
    motion: {
      scale: 1.08,
      xStart: 0,
      xEnd: 0,
      yStart: 12,
      yEnd: -20,
      duration: 7,
    },
  },
  {
    image: "/images/final-office.jpg",
    eyebrow: "Final destination",
    title: "The office of House of Yên",
    text: "What do you need? I'm listening.",
    motion: {
      scale: 1.06,
      xStart: 0,
      xEnd: -12,
      yStart: 0,
      yEnd: -10,
      duration: 8,
    },
  },
];

export default function AutoJourney() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [entered, setEntered] = useState(false);
  const duration = 5200;

  useEffect(() => {
    if (finished) return undefined;

    const timer = setInterval(() => {
      setIndex((current) => {
        if (current >= scenes.length - 1) {
          clearInterval(timer);

          setTimeout(() => {
            setFinished(true);
          }, 5000);

          return current;
        }

        return current + 1;
      });
    }, duration);

    return () => clearInterval(timer);
  }, [finished]);

  const scene = scenes[index];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="auto-journey">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.image}
            className="auto-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.img
              src={scene.image}
              alt={scene.title}
              className="auto-image"
              initial={{
                scale: 1.03,
                x: scene.motion?.xStart || 0,
                y: scene.motion?.yStart || 0,
              }}
              animate={{
                scale: scene.motion?.scale || 1.08,
                x: scene.motion?.xEnd || 0,
                y: scene.motion?.yEnd || -20,
              }}
              transition={{
                duration: scene.motion?.duration || 6,
                ease: "easeInOut",
              }}
            />

            <div className="auto-overlay" />
            <div className="cinematic-mist" />
            <div className="cinematic-light" />
            <div className="cinematic-particles">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <motion.div
              className="auto-copy"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <p>{scene.eyebrow}</p>
              <h2>{scene.title}</h2>
              {scene.text && <span>{scene.text}</span>}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {finished && (
          <div className="main-navigation">
            <button onClick={() => setEntered(true)}>Enter Duyên Ân</button>
          </div>
        )}
      </section>

      {entered && (
        <div className="entered-world">
          <div className="world-overlay" />

          <div className="world-nav">
            <div className="world-logo">Duyên Ân</div>

            <div className="world-links">
              <button onClick={() => scrollToSection("salon")}>Salon</button>
              <button onClick={() => scrollToSection("notary")}>Notary</button>
              <button onClick={() => scrollToSection("spotlight")}>Spotlight</button>
              <button onClick={() => scrollToSection("office")}>Office</button>
            </div>
          </div>

          <div className="world-panel">
            <h1>House of Yên</h1>
            <p>What do you need? I'm listening.</p>
          </div>
        </div>
      )}

      <section id="spotlight" className="info-section">
        <h2>Business of the Week</h2>
      </section>

      <section id="salon" className="info-section">
        <h2>Salon</h2>
      </section>

      <section id="notary" className="info-section">
        <h2>Notary</h2>
      </section>

      <section id="office" className="info-section">
        <h2>Office</h2>
      </section>
    </>
  );
}
