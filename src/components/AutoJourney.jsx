import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BookingRequest from "./BookingRequest";

const scenes = [
  {
    image: "/images/arrival.jpeg",
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
    image: "/images/houseofjade.jpeg",
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
    image: "/images/duyenanlobby.jpg",
    eyebrow: "Within the lobby",
    title: "Stillness moves through the house.",
    text: "Light, texture, and quiet conversation guide the path inward.",
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
    image: "/images/monolith.jpg",
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
    image: "/images/spotlight.jpg",
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
    image: "/images/courtyard.jpeg",
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
    image: "/images/office.jpg",
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

  const enterWorld = () => {
    setEntered(true);

    setTimeout(() => {
      scrollToSection("world");
    }, 80);
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
            {index === 0 && (
              <div className="wind-petal-field" aria-hidden="true">
                {Array.from({ length: 64 }, (_, petalIndex) => (
                  <span key={petalIndex} />
                ))}
              </div>
            )}
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
            <button onClick={enterWorld}>Enter Duyên Ân</button>
          </div>
        )}
      </section>

      {entered && (
        <div id="world" className="entered-world">
          <div className="world-overlay" />

          <div className="world-nav">
            <div className="world-logo">Duyên Ân</div>

            <div className="world-links">
              <button onClick={() => scrollToSection("salon")}>Salon</button>
              <a href="https://ynxnotary.com" target="_blank" rel="noreferrer">
                Notary
              </a>
              <button onClick={() => scrollToSection("appointments")}>Book</button>
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
        <a className="directory-link" href="/business-directory.html">
          Click for Business Directory
        </a>
      </section>

      <section id="salon" className="info-section salon-booking-section">
        <div className="booking-copy">
          <p className="section-kicker">Salon Studio 21</p>
          <h2>Book your beauty appointment.</h2>
          <p>
            Personalized hair and beauty services with polished results, warm care,
            and a simple booking path.
          </p>

          <div className="booking-actions">
            <button onClick={() => scrollToSection("appointments")}>
              Book Salon Studio 21
            </button>
            <a href="https://ynxnotary.com" target="_blank" rel="noreferrer">
              Next: Notary
            </a>
          </div>
        </div>

        <div className="booking-visual salon-booking-visual">
          <img src="/images/studio21.jpg" alt="Salon Studio 21" />
        </div>
      </section>

      <BookingRequest />

      <section id="office" className="info-section">
        <h2>Office</h2>
      </section>
    </>
  );
}
