import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import BookingRequest from "./BookingRequest";
import FinalArrivalScene from "./FinalArrivalScene";
import FinalHouseOfJadeScene from "./FinalHouseOfJadeScene";
import FinalLobbyScene from "./FinalLobbyScene";
import FinalMonolithScene from "./FinalMonolithScene";
import FinalOfficeScene from "./FinalOfficeScene";
import FinalPaiSystemScene from "./FinalPaiSystemScene";
import FinalSpotlightRevealScene from "./FinalSpotlightRevealScene";
import FinalSpotlightScene from "./FinalSpotlightScene";
import FinalYenCircleScene from "./FinalYenCircleScene";

const scenes = [
  {
    cue: "arrival",
    component: FinalArrivalScene,
    image: "/images/arrival.jpeg",
    title: "Arrival",
  },
  {
    cue: "yen",
    component: FinalLobbyScene,
    image: "/images/duyenanlobby.jpg",
    title: "House of Yen",
  },
  {
    cue: "jade-glimpse",
    component: FinalHouseOfJadeScene,
    image: "/images/houseofjade.jpeg",
    title: "House of Jade",
  },
  {
    cue: "monolith",
    component: FinalMonolithScene,
    image: "/images/monolith.jpg",
    title: "Monolith",
  },
  {
    cue: "candles",
    component: FinalMonolithScene,
    image: "/images/monolith.jpg",
    title: "Candles",
  },
  {
    cue: "yen-chamber",
    component: FinalYenCircleScene,
    image: "/images/courtyard.jpeg",
    title: "Yen Circle",
  },
  {
    cue: "spotlight",
    component: FinalSpotlightRevealScene,
    image: "/images/spotlight.jpg",
    title: "Spotlight",
  },
  {
    cue: "water-recedes",
    component: FinalPaiSystemScene,
    image: "/images/PAI.jpeg",
    title: "Water Recedes",
  },
  {
    cue: "mechanics",
    component: FinalPaiSystemScene,
    image: "/images/PAI.jpeg",
    title: "Mechanics",
  },
  {
    cue: "awakening",
    component: FinalPaiSystemScene,
    image: "/images/PAI.jpeg",
    title: "Awakening",
  },
  {
    cue: "athena-nod",
    component: FinalPaiSystemScene,
    image: "/images/PAI.jpeg",
    title: "Athena Nod",
  },
  {
    cue: "dust-transition",
    component: FinalSpotlightRevealScene,
    image: "/images/spotlight.jpg",
    title: "Dust Transition",
  },
  {
    cue: "final-bell",
    component: FinalOfficeScene,
    image: "/images/office.jpg",
    title: "Final Bell",
  },
];

const sceneCues = [
  { time: 0, scene: "arrival" },
  { time: 18, scene: "yen" },
  { time: 38, scene: "jade-glimpse" },
  { time: 55, scene: "monolith" },
  { time: 78, scene: "candles" },
  { time: 96, scene: "yen-chamber" },
  { time: 112, scene: "spotlight" },
  { time: 122, scene: "water-recedes" },
  { time: 138, scene: "mechanics" },
  { time: 155, scene: "awakening" },
  { time: 170, scene: "athena-nod" },
  { time: 182, scene: "dust-transition" },
  { time: 196, scene: "final-bell" },
];

const soundtrackSrc = "/audio/duyen-an-awakening.mp3";
const endingDelaySeconds = 10;

function getSceneIndexForTime(time) {
  const activeCue = [...sceneCues].reverse().find((cue) => time >= cue.time);
  const sceneIndex = scenes.findIndex((scene) => scene.cue === activeCue?.scene);

  return sceneIndex >= 0 ? sceneIndex : 0;
}

export default function AutoJourney() {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioError, setAudioError] = useState("");

  const scene = scenes[index];
  const SceneComponent = scene.component;

  const updateFromAudioTime = (time) => {
    setCurrentTime(time);
    setIndex(getSceneIndexForTime(time));

    const finalCue = sceneCues[sceneCues.length - 1];
    if (time >= finalCue.time + endingDelaySeconds) {
      setFinished(true);
      setPlaying(false);
    }
  };

  const startIntro = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    setAudioError("");
    setFinished(false);
    setEntered(false);
    setIndex(0);
    setCurrentTime(0);

    try {
      audio.currentTime = 0;
      await audio.play();
      setPlaying(true);
    } catch {
      setAudioError(
        "Add public/audio/duyen-an-awakening.mp3 to play and sync the intro."
      );
      setPlaying(false);
    }
  };

  const pauseIntro = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

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
        <audio
          ref={audioRef}
          src={soundtrackSrc}
          preload="auto"
          onTimeUpdate={(event) => updateFromAudioTime(event.currentTarget.currentTime)}
          onEnded={() => {
            setFinished(true);
            setPlaying(false);
          }}
          onError={() => {
            setAudioError(
              "Add public/audio/duyen-an-awakening.mp3 to play and sync the intro."
            );
            setPlaying(false);
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={scene.cue}
            className="auto-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            {SceneComponent ? (
              <SceneComponent />
            ) : (
              <>
                <motion.img
                  src={scene.image}
                  alt={scene.title}
                  className="auto-image"
                  initial={{ scale: 1.03, x: 0, y: 0 }}
                  animate={{ scale: 1.08, x: 0, y: -20 }}
                  transition={{ duration: 6, ease: "easeInOut" }}
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
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {!playing && !finished && (
          <div className="intro-controls">
            <button onClick={startIntro}>Start Experience</button>
            {audioError && <p>{audioError}</p>}
          </div>
        )}

        {playing && (
          <div className="intro-status">
            <button onClick={pauseIntro}>Pause</button>
            <span>{Math.floor(currentTime)}s</span>
          </div>
        )}

        {finished && (
          <div className="main-navigation">
            <button onClick={enterWorld}>Enter Duyen An</button>
          </div>
        )}
      </section>

      {entered && (
        <div id="world" className="entered-world">
          <div className="world-overlay" />

          <div className="world-nav">
            <div className="world-logo">Duyen An</div>

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
            <h1>House of Yen</h1>
            <p>What do you need? I'm listening.</p>
          </div>
        </div>
      )}

      <section id="spotlight" className="info-section">
        <h2>Business of the Week</h2>
        <a className="directory-link" href="/business-directory">
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
