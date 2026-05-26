import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  ExternalLink,
  Heart,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import AutoJourney from "./components/AutoJourney";
import AmbientSound from "./components/AmbientSound";
import BookingRequest from "./components/BookingRequest";
import "./App.css";

const promoCode = "OG-POP";
const promoStorageKey = "ynxPromoUnlocked";

function SalonPage() {
  return (
    <main className="simple-route-page salon-route-page">
      <a className="route-back-link" href="/">
        Duyên Ân
      </a>

      <section className="simple-route-content">
        <p className="section-kicker">Salon Studio 21</p>
        <h1>Salon Studio 21</h1>
        <p>
          Personalized beauty services with polished results, warm care, and an
          easy request path.
        </p>

        <div className="route-actions">
          <a href="/appointments">Request Appointment</a>
          <a href="/notary">Notary Services</a>
        </div>
      </section>
    </main>
  );
}

function NotaryPage() {
  return (
    <main className="simple-route-page notary-route-page">
      <a className="route-back-link" href="/">
        Duyên Ân
      </a>

      <section className="simple-route-content">
        <p className="section-kicker">YNX Notary</p>
        <h1>Notary Services</h1>
        <p>Professional mobile and document services.</p>

        <div className="route-actions">
          <a href="https://ynxnotary.com" target="_blank" rel="noreferrer">
            Visit YNX Notary
          </a>
          <a href="/notary/book">Reserve Appointment</a>
          <a href="/notary/promo">Access Code</a>
        </div>
      </section>
    </main>
  );
}

function PromoPage() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const unlockPromo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.trim().toUpperCase() === promoCode) {
      sessionStorage.setItem(promoStorageKey, "true");
      setUnlocked(true);
      setError("");
      return;
    }

    setError("Invalid access code");
  };

  return (
    <main className="simple-route-page promo-route-page">
      <a className="route-back-link" href="/notary">
        YNX Notary
      </a>

      <section className="simple-route-content promo-route-content">
        <p className="section-kicker">Private Promo</p>
        <h1>Access Code</h1>
        <p>Use your private access code to open the Olivia booking landing page.</p>

        <form className="promo-code-form" onSubmit={unlockPromo}>
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter Access Code"
          />
          <button type="submit">Unlock</button>
        </form>

        {error ? <p className="promo-error">{error}</p> : null}

        {unlocked ? (
          <div className="promo-unlocked">
            <p>Access granted.</p>
            <a href="/notary/olivia">Continue to Olivia Experience</a>
          </div>
        ) : null}
      </section>
    </main>
  );
}

function OliviaLanding() {
  const [showExperiences, setShowExperiences] = useState(false);

  const bookingLinks = {
    requestForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSfZ5uxjapGjtHG3SMHbF23beryvVwdPW5wbE8ibilQrp7PGhQ/viewform?usp=header",
    notaryWebsite: "https://ynxnotary.com",
  };

  const funNotaries = [
    {
      title: "Love Notes & Letters",
      icon: Heart,
      description:
        "I love you notes, thank-you letters, encouragement, or sweet words to someone special.",
    },
    {
      title: "Family Promises",
      icon: Users,
      description:
        "Family vows, promises, memory notes, or heartfelt words you want to keep.",
    },
    {
      title: "Pet Paw Promise",
      icon: PawPrint,
      description:
        "A playful keepsake with your pet, a paw print, photo, or forever-friend promise.",
    },
    {
      title: "Kid CEO Certificate",
      icon: Baby,
      description:
        "A fun official-feeling certificate for goals, chores, little dreams, or milestones.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const glitter = Array.from({ length: 96 });
  const fairyDust = Array.from({ length: 45 });
  const modalGlitter = Array.from({ length: 28 });

  return (
    <main className="olivia-landing olivia-glitter-bomb">
      <div aria-hidden="true" className="olivia-glitter-field">
        <motion.div
          className="fairy-dust-sweep"
          initial={{ opacity: 0, x: "-28vw", y: "32vh", rotate: -18 }}
          animate={{ opacity: [0, 1, 1, 0], x: "118vw", y: "-18vh", rotate: 10 }}
          transition={{ duration: 3.4, delay: 0.12, ease: "easeInOut" }}
        >
          <Sparkles />
        </motion.div>

        {fairyDust.map((_, index) => (
          <motion.span
            key={`dust-${index}`}
            className="fairy-dust-particle"
            initial={{
              opacity: 0,
              x: "-12vw",
              y: `${62 - index * 0.8}vh`,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0.85, 0],
              x: `${18 + index * 2.8}vw`,
              y: `${18 + Math.sin(index * 0.6) * 38}vh`,
              scale: [0, 1.6, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3.2,
              delay: 0.18 + index * 0.025,
              ease: "easeOut",
            }}
          />
        ))}

        {glitter.map((_, index) => (
          <motion.span
            key={`glitter-${index}`}
            className={`screen-glitter sparkle-${index % 5}`}
            initial={{
              opacity: 0,
              x: "50vw",
              y: "52vh",
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0.75, 0],
              x: `${50 + Math.cos(index * 0.67) * (24 + index * 0.62)}vw`,
              y: `${52 + Math.sin(index * 0.67) * (24 + index * 0.44)}vh`,
              scale: [0, 1.8, 0.85, 0],
              rotate: [0, 160, 340],
            }}
            transition={{
              duration: 2.7,
              delay: 0.22 + index * 0.012,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <motion.div
        aria-hidden="true"
        className="olivia-soft-icon olivia-soft-heart"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="olivia-soft-icon olivia-soft-sparkle"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles />
      </motion.div>

      <section className="olivia-one-screen">
        <div className="olivia-hero-bg" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="olivia-main-card"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="olivia-pill"
          >
            <Heart className="olivia-pill-icon" />
            Olivia's little thank-you experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65, ease: "easeOut" }}
          >
            A sweet family keepsake made just for Olivia's friends & families.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.58, duration: 0.65, ease: "easeOut" }}
            className="olivia-main-copy"
          >
            Choose a fun memory to make official: love notes, family promises,
            pet keepsakes, or fun milestone certificates. Use code{" "}
            <span>OG-POP</span> for 15% off after approval.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.65, ease: "easeOut" }}
            className="olivia-main-actions"
          >
            <button type="button" onClick={() => setShowExperiences(true)}>
              See Olivia's experience ideas
              <Sparkles />
            </button>

            <a href={bookingLinks.notaryWebsite} target="_blank" rel="noreferrer">
              Need regular notary services?
              <ExternalLink />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.65, ease: "easeOut" }}
            className="olivia-quick-note"
          >
            <ShieldCheck />
            <p>
              Official notarizations require a signer who is 18 or older with
              valid ID. A parent or guardian must be present for minors when
              applicable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showExperiences && (
          <motion.div
            className="olivia-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="olivia-experience-modal"
            >
              <div aria-hidden="true" className="modal-glitter-field">
                {modalGlitter.map((_, index) => (
                  <motion.span
                    key={`modal-glitter-${index}`}
                    className={`modal-glitter sparkle-${index % 5}`}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: Math.cos(index * 1.4) * (70 + index * 6),
                      y: Math.sin(index * 1.4) * (45 + index * 4),
                      scale: [0, 1.2, 0],
                    }}
                    transition={{ duration: 1.4, delay: index * 0.04, ease: "easeOut" }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowExperiences(false)}
                className="olivia-modal-close"
                aria-label="Close experience ideas"
              >
                <X />
              </button>

              <div className="olivia-modal-content">
                <p className="olivia-pill emerald-pill">
                  <Sparkles className="olivia-pill-icon" />
                  Choose your Olivia idea
                </p>

                <h2>Pick the kind of memory you want to create.</h2>

                <p>
                  These are examples to help you choose. When you are ready, the
                  request form will let you tell me which idea you want and share
                  any details.
                </p>

                <div className="olivia-modal-grid">
                  {funNotaries.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                        className="olivia-modal-card"
                      >
                        <Icon />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="olivia-modal-actions">
                  <a href={bookingLinks.requestForm} target="_blank" rel="noreferrer">
                    Open Olivia request form
                    <ArrowRight />
                  </a>

                  <p>
                    Payment is not collected here. You'll receive confirmation
                    details after your request is reviewed.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function OliviaPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(promoStorageKey) === "true");
  }, []);

  if (!unlocked) {
    return (
      <main className="simple-route-page olivia-route-page">
        <a className="route-back-link" href="/notary">
          YNX Notary
        </a>

        <section className="simple-route-content">
          <p className="section-kicker">Private Booking</p>
          <h1>Access Code Required</h1>
          <p>This private landing page opens after entering the access code.</p>

          <div className="route-actions">
            <a href="/notary/promo">Access Code</a>
          </div>
        </section>
      </main>
    );
  }

  return <OliviaLanding />;
}

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/salon") {
    return <SalonPage />;
  }

  if (currentPath === "/notary") {
    return <NotaryPage />;
  }

  if (currentPath === "/notary/promo") {
    return <PromoPage />;
  }

  if (currentPath === "/notary/olivia") {
    return <OliviaPage />;
  }

  if (currentPath === "/appointments" || currentPath === "/book" || currentPath === "/notary/book") {
    return (
      <>
        <BookingRequest />
        <AmbientSound />
      </>
    );
  }

  return (
    <>
      <AutoJourney />
      <AmbientSound />
    </>
  );
}

export default App;
