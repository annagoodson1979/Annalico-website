import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

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

      <main className="cinematic-experience">
        <section className="scene exterior-scene">
          <div className="film-grain" />
          <div className="lantern-haze" />

          <motion.div
            className="monolith"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: loading ? 0 : 1, scale: 1 }}
            transition={{ duration: 2.4, delay: 0.4 }}
          />

          <motion.div
            className="title-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loading ? 0 : 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.1 }}
          >
            <p>House of Jade</p>
            <h1>Duyên Ân</h1>

            <button onClick={() => setEntered(true)}>Enter</button>
          </motion.div>
        </section>

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
                <a className="destination-door salon-door" href="#">
                  <span>Salon Studio 21</span>
                  <small>Beauty Experience</small>
                </a>

                <a className="destination-door notary-door" href="#">
                  <span>YNX Notary</span>
                  <small>Private Notary Office</small>
                </a>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
