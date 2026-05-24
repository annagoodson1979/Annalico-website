import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);
  const [arrivalPhase, setArrivalPhase] = useState("opening");
  const [activeDoor, setActiveDoor] = useState(null);
  const [transitionDoor, setTransitionDoor] = useState(null);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || currentPath !== "/") return undefined;

    const approachTimer = setTimeout(() => setArrivalPhase("approach"), 900);
    const thresholdTimer = setTimeout(() => setArrivalPhase("threshold"), 2900);
    const enterTimer = setTimeout(() => setEntered(true), 5200);

    return () => {
      clearTimeout(approachTimer);
      clearTimeout(thresholdTimer);
      clearTimeout(enterTimer);
    };
  }, [currentPath, loading]);

  const enterDoor = (door, path) => {
    setTransitionDoor(door);

    setTimeout(() => {
      window.location.href = path;
    }, 1600);
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="loader-mark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Duyên Ân
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPath === "/salon" && (
        <main className="destination-experience salon-experience">
          <a className="return-home" href="/">
            return
          </a>

          <motion.div
            className="salon-reveal"
            initial={{ opacity: 0, y: 80, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/images/studio21.jpg"
              alt="Salon Studio 21"
              className="salon-destination-logo"
            />

            <div className="salon-light-line" />
          </motion.div>
        </main>
      )}

      {currentPath === "/" && (
        <main className={`cinematic-experience phase-${arrivalPhase}`}>
          <motion.section
            className="arrival-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: loading || arrivalPhase === "threshold" ? 0 : 1,
              y: loading ? 40 : 0,
            }}
            transition={{ duration: 1.8 }}
          >
            <img
              src="/images/arrival.jpeg"
              alt="Duyen An arrival entrance"
              className="arrival-image animate-slowZoom"
            />

            <div className="arrival-overlay" />

            <div className="arrival-copy-wrap">
              <div className="arrival-copy">
                <p>Welcome to</p>
                <h1>Duyên Ân</h1>
                <span>
                  A cinematic arrival into elegance, heritage, and quiet luxury.
                </span>
              </div>
            </div>

            <motion.div
              className="title-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: loading || arrivalPhase === "threshold" ? 0 : 1,
                y: arrivalPhase === "approach" ? -18 : 0,
              }}
              transition={{ duration: 1.6, delay: 1.1 }}
            >
              <h1>Duyên Ân</h1>

              <button onClick={() => setEntered(true)}>Enter</button>
            </motion.div>
          </motion.section>

          <AnimatePresence>
            {entered && (
              <motion.section
                className="scene interior-scene"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="spotlight" />
                <div className="jade-bridge-scene">
                  <div className="jade-bridge" />
                  <div className="candle-path">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="jade-attendant jade-attendant-left" />
                  <div className="jade-attendant jade-attendant-right" />
                </div>
                <div className="yen-circle-glimpse">
                  <div className="yen-circle-doorway-frame">
                    <img
                      src="/images/courtyard.jpeg"
                      alt="Yen Circle Entrance"
                      className="yen-circle-doorway"
                    />

                    <div className="yen-circle-overlay">
                      <img
                        src="/images/courtyard.jpeg"
                        alt="Yen Circle"
                        className="yen-circle-image"
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="interior-title"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                >
                  <p>Inside the House of Jade</p>
                </motion.div>

                <motion.div
                  className="door-stage"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 1 }}
                >
                  <a
                    className={`destination-door salon-door ${
                      activeDoor === "salon" ? "active" : ""
                    }`}
                    href="/salon"
                    onMouseEnter={() => setActiveDoor("salon")}
                    onMouseLeave={() => setActiveDoor(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      enterDoor("salon", "/salon");
                    }}
                  >
                    <span>Salon Studio 21</span>
                    <small>Beauty Experience</small>
                  </a>

                  <a
                    className={`destination-door notary-door ${
                      activeDoor === "notary" ? "active" : ""
                    }`}
                    href="/notary"
                    onMouseEnter={() => setActiveDoor("notary")}
                    onMouseLeave={() => setActiveDoor(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      enterDoor("notary", "/notary");
                    }}
                  >
                    <span>YNX Notary</span>
                    <small>Private Notary Office</small>
                  </a>
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {transitionDoor && (
              <motion.div
                className={`door-transition ${transitionDoor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4 }}
              />
            )}
          </AnimatePresence>
        </main>
      )}
    </>
  );
}

export default App;
