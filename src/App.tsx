import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  BadgePercent,
  CalendarDays,
  Heart,
  PawPrint,
  PenLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import IntroLoader from "./components/IntroLoader";
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
          <a href="/notary/book">Reserve Appointment</a>
          <a href="/notary/promo">Promo Code Access</a>
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
        <h1>Enter Promo Code</h1>
        <p>Use your private access code to open the Olivia booking landing page.</p>

        <form className="promo-code-form" onSubmit={unlockPromo}>
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter Promo Code"
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
  const bookingLinks = {
    requestForm: "https://forms.gle/YOUR-OLIVIA-REQUEST-FORM",
  };

  const funNotaries = [
    {
      title: "Love Notes & Letters",
      icon: Heart,
      description:
        "Write an I love you note, a thank-you letter, or a sweet message to someone special and make the date feel official.",
      link: "#love-notes",
    },
    {
      title: "Family Promises",
      icon: Users,
      description:
        "A meaningful keepsake for families who want to write promises, encouragement, or little vows to each other.",
      link: "#family-promises",
    },
    {
      title: "Pet Paw Promise",
      icon: PawPrint,
      description:
        "A playful certificate for kids and their pets, complete with a paw print, picture, or family keepsake moment.",
      link: "#pet-paw-promise",
    },
    {
      title: "Kid CEO Certificate",
      icon: Baby,
      description:
        "A fun confidence-building certificate for lemonade stands, chores, goals, pretend businesses, or big kid milestones.",
      link: "#kid-ceo-certificate",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="olivia-landing olivia-playful">
      <section className="olivia-hero">
        <div className="olivia-hero-bg" />

        <motion.div
          aria-hidden="true"
          className="olivia-float olivia-float-heart"
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="olivia-float olivia-float-sparkle"
          animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles />
        </motion.div>

        <div className="olivia-container olivia-hero-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="olivia-card olivia-hero-card"
          >
            <p className="olivia-pill">
              <Heart className="olivia-pill-icon" />
              Olivia's little thank-you experience
            </p>

            <h1>Something sweet for Olivia's friends & families.</h1>

            <p>
              This page was made as a thank you to the people who are part of
              Olivia's school life. Instead of a regular discount page, this is
              a place to choose a fun family notary experience: love notes,
              promises, keepsakes, pet memories, and little moments you may have
              never thought to make official.
            </p>

            <div className="olivia-hero-actions">
              <a href="#fun-notaries">
                Pick a family notary
                <ArrowRight />
              </a>

              <div>
                Use code <span>OG-POP</span> for 15% off
              </div>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="olivia-card olivia-note-card"
          >
            <p>Small note</p>
            <h2>Need a regular notary too?</h2>
            <p>
              You are welcome to look around the main notary services anytime,
              but this page is mainly for Olivia's friends and families to enjoy
              something more personal and fun.
            </p>
            <a href="/notary">View regular notary services</a>
          </motion.aside>
        </div>
      </section>

      <section className="olivia-grownup-note">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="olivia-warning-card"
        >
          <ShieldCheck />
          <div>
            <h2>Quick grown-up note</h2>
            <p>
              Children can enjoy the keepsake experience, but anyone signing a
              document for notarization must be 18 or older and able to provide
              valid identification. A parent, guardian, or grown adult will need
              to be present for anything that requires an official notarization.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="fun-notaries" className="olivia-fun-section">
        <div className="olivia-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="olivia-section-heading"
          >
            <p className="olivia-pill emerald-pill">
              <Sparkles className="olivia-pill-icon" />
              The fun part
            </p>
            <h2>Pick a memory your family can turn into a keepsake.</h2>
            <p>
              These are playful, heartfelt signings made for families, kids,
              friends, and pets. They are meant to be lighthearted, cute, and
              memorable.
            </p>
          </motion.div>

          <div className="olivia-fun-grid">
            {funNotaries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  className="olivia-card olivia-fun-card"
                >
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>
                    See this idea
                    <ArrowRight />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="olivia-discount-section">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="olivia-discount-card"
        >
          <BadgePercent />
          <h2>Olivia's request form</h2>
          <p>
            Use code <span>OG-POP</span> to send a request for your family
            notary experience and receive 15% off after your appointment is
            confirmed. The form lets you share your idea, preferred time, backup
            time, and whether you prefer in-person or online/remote.
          </p>

          <div className="olivia-request-actions">
            <a href={bookingLinks.requestForm} target="_blank" rel="noreferrer">
              <CalendarDays />
              Send my Olivia request
            </a>
          </div>
        </motion.div>
      </section>

      <section className="olivia-detail-section">
        <div className="olivia-detail-grid">
          <motion.div
            id="love-notes"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="olivia-detail-card"
          >
            <PenLine />
            <h3>Love Notes & Letters</h3>
            <p>
              A sweet way to write an I love you note, a thank-you letter, or
              words of encouragement to someone special. It can be for a parent,
              child, grandparent, teacher, friend, or anyone your family cares
              about.
            </p>
          </motion.div>

          <motion.div
            id="family-promises"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="olivia-detail-card"
          >
            <Users />
            <h3>Family Promises</h3>
            <p>
              A meaningful keepsake for family vows, promises, encouragement, or
              memory-making. This can be silly, heartfelt, or sentimental,
              whatever feels like your family.
            </p>
          </motion.div>

          <motion.div
            id="pet-paw-promise"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="olivia-detail-card"
          >
            <PawPrint />
            <h3>Pet Paw Promise</h3>
            <p>
              A playful memory for kids and their pets. Add a paw print, photo,
              or little promise about walks, treats, snuggles, and forever
              friendship.
            </p>
          </motion.div>

          <motion.div
            id="kid-ceo-certificate"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
            className="olivia-detail-card"
          >
            <Baby />
            <h3>Kid CEO Certificate</h3>
            <p>
              Perfect for lemonade stands, pretend shops, chore goals, big kid
              milestones, or any little dream that deserves a fun official
              moment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="olivia-thanks">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="olivia-thanks-card"
        >
          <h2>A little thank you from us</h2>
          <p>
            Thank you for being part of Olivia's world. This page is simply a
            fun way to share something sweet, creative, and a little unexpected
            with the families around her.
          </p>
          <p className="olivia-signoff">- Olivia & Mom</p>
        </motion.div>
      </section>
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
          <h1>Promo Code Required</h1>
          <p>This private landing page opens after entering the promo code.</p>

          <div className="route-actions">
            <a href="/notary/promo">Enter Promo Code</a>
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
      <IntroLoader />
      <AutoJourney />
      <AmbientSound />
    </>
  );
}

export default App;
