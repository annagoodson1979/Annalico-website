import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="loader-mark"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Duyên Ân
            </motion.div>

            <motion.div
              className="loader-line"
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 1.6, delay: 0.5 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              House of Jade
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={cursorRef} className="luxury-cursor" />

      <main className="app">
        <nav className="nav">
          <a href="#" className="nav-logo">
            Duyên Ân
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(true)}>
            Menu
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fullscreen-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Close
              </motion.button>

              <motion.div
                className="menu-content"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>

                <a href="#salon" onClick={() => setMenuOpen(false)}>
                  House of Jade
                </a>

                <a href="#booking" onClick={() => setMenuOpen(false)}>
                  Booking
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="hero">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay" />

          <div className="lanterns">
            <span className="lantern lantern-1" />
            <span className="lantern lantern-2" />
            <span className="lantern lantern-3" />
            <span className="lantern lantern-4" />
            <span className="lantern lantern-5" />
          </div>

          <motion.div
            className="floating-glow glow-1"
            animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.div
            className="floating-glow glow-2"
            animate={{ y: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 80 : 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          >
            <div className="kicker">Salon Studio 21 Presents</div>
            <h1>Duyên Ân</h1>
            <p>
              A cinematic luxury beauty destination inspired by lantern light,
              jade pathways, warm interiors, ritual, and arrival.
            </p>

            <div className="hero-actions">
              <a href="#experience" className="btn primary">
                Enter the Experience
              </a>
              <a href="#salon" className="btn">
                House of Jade
              </a>
            </div>
          </motion.div>
        </section>

        <section className="section">
          <div className="section-inner arrival-grid">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="kicker">The Arrival</div>
              <h2 className="section-title">A private cinematic entrance.</h2>
              <p className="section-copy">
                Guests arrive along reflective water and jade stone pathways.
                Bamboo bends softly in the evening light while warm red lanterns
                illuminate the House of Jade.
              </p>
            </motion.div>

            <motion.div
              className="cinematic-card"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-inner">
            <div className="kicker">House of Jade</div>
            <h2 className="section-title">Luxury designed like a film.</h2>
            <p className="section-copy">
              Every visual moment feels intentional: the car arrival, the
              attendants, the warm interior glow, and the atmosphere before the
              service even begins.
            </p>

            <div className="experience-grid">
              <motion.div className="experience-card" whileHover={{ y: -10 }}>
                <h3>Jade Walkway</h3>
                <p>
                  Reflective water, stone pathways, bamboo, and layered
                  lighting.
                </p>
              </motion.div>

              <motion.div className="experience-card" whileHover={{ y: -10 }}>
                <h3>Lantern Interior</h3>
                <p>Warm red interiors inspired by cinematic luxury hospitality.</p>
              </motion.div>

              <motion.div className="experience-card" whileHover={{ y: -10 }}>
                <h3>Private Ritual</h3>
                <p>Beauty becomes emotional atmosphere and unforgettable arrival.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="salon" className="section red-interior">
          <motion.div
            className="section-inner salon-panel"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="kicker">Salon Studio 21</div>
            <h2 className="section-title">Where beauty becomes atmosphere.</h2>
            <p className="section-copy">
              The House of Jade experience blends modern luxury, cinematic
              storytelling, and elevated salon ritual into one unforgettable
              destination.
            </p>
          </motion.div>
        </section>

        <section id="booking" className="section booking-section">
          <div className="booking-glow" />

          <motion.div
            className="booking-panel"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="kicker">Private Appointment</div>

            <h2 className="section-title">
              Begin your House of Jade experience.
            </h2>

            <p className="section-copy">
              Luxury beauty appointments designed with cinematic atmosphere,
              elevated hospitality, and unforgettable presentation.
            </p>

            <div className="booking-actions">
              <a href="#" className="btn primary">
                Book Appointment
              </a>

              <a href="#" className="btn">
                Concierge Inquiry
              </a>
            </div>
          </motion.div>
        </section>

        <section className="reflection">
          <div className="water-layer water-1" />
          <div className="water-layer water-2" />
          <div className="water-glow" />
        </section>

        <footer id="contact" className="footer">
          <div className="footer-logo">Duyên Ân</div>
          <p>House of Jade - Salon Studio 21 - theyenan.com</p>
        </footer>
      </main>
    </>
  );
}

export default App;
