"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import foyerImage from "./assets/images/foyer.jpg";
import houseOfJadeImage from "./assets/images/house-of-jade-courtyard.jpg";

const SALON_URL = "https://salonstudio21.glossgenius.com";
const YNX_URL = "https://ynxnotary.com";
const CONTACT_EMAIL = "info@theyenan.com";
const CONTACT_PHONE = "(972) 900-7147";

export default function HomePage() {
  const audioRef = useRef(null);
  const [audioOn, setAudioOn] = useState(false);
  const [introLoading, setIntroLoading] = useState(true);

  function toggleAudio() {
    if (!audioRef.current) return;

    if (audioOn) {
      audioRef.current.pause();
      setAudioOn(false);
    } else {
      audioRef.current.play();
      setAudioOn(true);
    }
  }

  return (
    <main className="relative overflow-hidden bg-[#050505] text-white/92">
      <audio ref={audioRef} loop>
        <source src="/audio/ambient.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-[200] rounded-full border border-white/10 bg-black/50 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl hover:text-amber-200"
      >
        {audioOn ? "Audio On" : "Audio"}
      </button>

      <ScrollProgress />
      <MovingLightRays />
      <FilmGrain />
      <div className="pointer-events-none fixed inset-0 z-[190] bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

      <nav className="fixed left-1/2 top-6 z-[220] hidden -translate-x-1/2 rounded-full border border-white/[0.07] bg-black/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl md:flex gap-6">
        <a href="#arrival" className="hover:text-amber-200 transition">Arrival</a>
        <a href="#interior" className="hover:text-amber-200 transition">House</a>
        <a href="#businesses" className="hover:text-amber-200 transition">Presence</a>
        <a href="#future-wing" className="hover:text-amber-200 transition">Future</a>
        <a href="#visit" className="hover:text-amber-200 transition">Visit</a>
      </nav>

      <LoadingScreen
        loading={introLoading}
        onDone={() => setIntroLoading(false)}
      />
      {!introLoading && <CinematicArrival />}
      <InteriorWorld />
      <FeaturedBusinesses />
      <BusinessOfTheWeek />
      <LockedHouseOfJade />
      <BookingContact />
      <Footer />
    </main>
  );
}

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function onScroll() {
      const total = document.body.scrollHeight - window.innerHeight;
      setScroll(total > 0 ? (window.scrollY / total) * 100 : 0);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[300] h-[2px] w-full bg-white/5">
      <div
        className="h-full bg-amber-200 shadow-[0_0_20px_rgba(253,230,138,0.8)]"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}

function MovingLightRays() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-[-20%] h-[140vh] w-32 rotate-12 bg-gradient-to-b from-amber-100/0 via-amber-100/10 to-amber-100/0 blur-3xl"
        animate={{ x: [-300, 300, -300], opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/3 top-[-20%] h-[140vh] w-24 -rotate-12 bg-gradient-to-b from-red-200/0 via-red-200/10 to-red-200/0 blur-3xl"
        animate={{ x: [250, -250, 250], opacity: [0.05, 0.25, 0.05] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FilmGrain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[250] opacity-[0.035] mix-blend-soft-light">
      <div className="h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:6px_6px]" />
    </div>
  );
}

function CinematicSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative ${className}`}
    >
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

function LoadingScreen({ loading, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0, transition: { duration: 1.4 } }}
        >
          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full bg-red-900/20 blur-[140px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <SmartImage
            src="/images/yencircle.jpeg"
            alt=""
            className="h-40 w-40 rounded-full object-cover opacity-60"
          />

          <motion.div
            className="absolute h-36 w-20 rounded-full bg-gradient-to-b from-emerald-100 to-emerald-600 shadow-[0_0_90px_rgba(110,231,183,0.8)]"
            animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.h1
            className="mt-52 font-rosella text-6xl md:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
          >
            {"Duy\u00ean \u00c2n"}
          </motion.h1>

          <button
            type="button"
            onClick={onDone}
            className="absolute bottom-8 right-6 rounded-full border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-xs uppercase tracking-[0.35em] text-white/55 backdrop-blur-xl transition hover:text-amber-200 md:right-8"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CinematicArrival() {
  return (
    <section id="arrival" className="relative h-screen overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/70 to-amber-100/25" />
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-emerald-950/80 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-emerald-950/80 to-transparent" />
      <div className="absolute left-1/2 top-[45%] h-[420px] w-[92vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-t-[5rem] border border-amber-100/25 bg-red-950/40 shadow-[0_0_170px_rgba(253,230,138,0.28)] md:h-[540px]" />
      <div className="absolute bottom-0 left-1/2 h-44 w-[80vw] max-w-[1000px] -translate-x-1/2 bg-gradient-to-t from-emerald-200/25 via-stone-200/15 to-transparent blur-sm" />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04, x: 0, y: 0 }}
        animate={{
          scale: [1.04, 1.12, 1.08],
          x: [0, -28, 18],
          y: [0, -18, -8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <SmartImage
          src="/images/duyenan-arrival.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[18] bg-[linear-gradient(115deg,transparent_18%,rgba(255,235,190,0.18)_42%,transparent_60%)] mix-blend-screen"
        animate={{ x: ["-28vw", "28vw"], opacity: [0.14, 0.36, 0.14] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-0 z-[19] overflow-hidden">
        {Array.from({ length: 28 }, (_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-amber-100/80 shadow-[0_0_18px_rgba(253,230,138,0.85)]"
            initial={{
              x: `${(i * 17) % 100}vw`,
              y: "-8vh",
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              y: "112vh",
              x: `${((i * 17) % 100) + (i % 2 ? 12 : -12)}vw`,
              opacity: [0, 1, 0],
              scale: [0.4, 1.25, 0.5],
            }}
            transition={{
              duration: 9 + (i % 7),
              delay: i * 0.22,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.62))]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-black/75" />
      <div className="absolute inset-0 backdrop-blur-[1.2px]" />

      <motion.div
        className="absolute left-1/2 top-1/3 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-amber-200/25 blur-[150px]"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-emerald-950/70 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-emerald-950/70 to-transparent" />

      <motion.div
        className="absolute bottom-0 left-1/2 h-44 w-[80vw] max-w-[1000px] -translate-x-1/2 bg-gradient-to-t from-emerald-200/25 via-stone-200/15 to-transparent blur-sm"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.2 }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 z-[5] h-24 w-[80vw] max-w-[900px] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-100/20 to-transparent blur-2xl"
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scaleX: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[45%] h-[420px] w-[92vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-t-[5rem] border border-amber-100/30 bg-stone-200/10 shadow-[0_0_170px_rgba(253,230,138,0.35)] md:h-[540px]"
        initial={{ opacity: 0, y: 70, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute top-[22%] left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-100/20 blur-[80px]"
        animate={{
          opacity: [0.25, 0.55, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 z-20 h-[430px] w-[220px] -translate-x-1/2 overflow-visible bg-black/60 shadow-[0_0_120px_rgba(0,0,0,0.8)] md:w-[300px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-black to-black" />
        <FloatingJadeCore />
      </motion.div>

      {Array.from({ length: 36 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute z-50 text-pink-100/75"
          initial={{ x: `${(i * 11) % 100}vw`, y: "-10vh", rotate: 0 }}
          animate={{
            y: "110vh",
            x: `${((i * 11) % 100) - 10}vw`,
            rotate: 360,
          }}
          transition={{
            duration: 10 + (i % 8),
            delay: i * 0.28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {"\u2740"}
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0 z-[25]"
        animate={{
          scale: [1.08, 1],
          x: [20, 0],
        }}
        transition={{
          duration: 7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="absolute inset-0 bg-transparent" />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[60] flex flex-col items-center justify-end px-6 pb-16 text-center md:pb-20"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.7, duration: 1.8 }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.55em] text-amber-100/85">
          Welcome to
        </p>

        <h1 className="font-rosella text-5xl leading-none tracking-[0.02em] text-white drop-shadow-[0_0_30px_rgba(255,240,220,0.2)] sm:text-6xl md:text-[9rem]">
          {"Duy\u00ean \u00c2n"}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          A hidden garden arrival into warmth, ceremony, and the House of Yen.
        </p>
      </motion.div>

      <a
        href="#interior"
        className="absolute bottom-6 right-6 z-[90] rounded-full border border-white/[0.08] bg-black/40 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl transition hover:text-amber-200 md:bottom-8 md:right-8"
      >
        Skip Arrival
      </a>

      <div className="pointer-events-none absolute inset-0 z-[70] bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.82)_100%)]" />
    </section>
  );
}

function InteriorWorld() {
  return (
    <section id="interior" className="relative min-h-screen overflow-hidden px-6 py-32 bg-gradient-to-b from-black via-red-950/50 to-black">
      <SmartImage
        src="/images/halo.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">
            House of Yen
          </p>

          <h2 className="font-rosella text-5xl leading-[0.95] md:text-7xl">
            Presence before promotion.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
            {"Duy\u00ean \u00c2n"} is the umbrella. House of Yen is the strategy,
            rebrand, and business-building space that shapes how each presence
            enters the world.
          </p>
        </div>

        <LuxuryPanel className="min-h-[560px] p-10">
          <div className="relative flex h-[480px] items-center justify-center overflow-hidden rounded-[2rem] bg-black/40">
            <SmartImage
              src={foyerImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black/40 to-black" />

            <FloatingJadeCore />
          </div>
        </LuxuryPanel>
      </div>
    </section>
  );
}

function FeaturedBusinesses() {
  const businesses = [
    {
      name: "Salon Studio 21",
      description:
        "A separate beauty destination with its own booking site, connected through the Yen rebrand language.",
      href: SALON_URL,
      action: "Visit Salon Studio 21",
    },
    {
      name: "YNX Notary",
      description:
        "A separate notary business with its own website, carried as a quiet Duy\u00ean \u00c2n presence.",
      href: YNX_URL,
      action: "Visit YNX Notary",
    },
  ];

  return (
    <section id="businesses" className="px-6 py-32 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">
            Inside the House
          </p>
          <h2 className="font-rosella text-5xl md:text-7xl">
            Featured Businesses
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {businesses.map((business) => (
            <motion.a
              key={business.name}
              href={business.href}
              target="_blank"
              rel="noreferrer"
              className="block text-current no-underline"
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <LuxuryPanel className="min-h-[360px] p-8 flex flex-col justify-end">
                <div className="mb-10 h-40 rounded-3xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center p-6">
                  {business.name === "Salon Studio 21" ? (
                    <SmartImage
                      src="/images/studio21.jpg"
                      alt="Salon Studio 21"
                      className="max-h-full max-w-full object-contain invert"
                    />
                  ) : (
                    <span className="font-rosella text-4xl text-white/70">YNX</span>
                  )}
                </div>
                <h3 className="font-rosella text-4xl">{business.name}</h3>
                <p className="mt-4 text-white/65">{business.description}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-amber-200/60">
                  {business.action}
                </p>
              </LuxuryPanel>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessOfTheWeek() {
  return (
    <section className="relative px-6 py-32 bg-gradient-to-b from-black via-red-950/30 to-black text-center">
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-200/70">
        House of Yen
      </p>

      <h2 className="font-rosella text-5xl md:text-7xl">
        Built on precision.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65">
        Leading with strength and grace. Authority without noise.
      </p>

      <LuxuryPanel className="mx-auto mt-20 max-w-3xl p-12">
        <motion.div
          className="mx-auto mb-10 h-52 w-52 rounded-full border border-amber-100/20 bg-gradient-to-br from-amber-100/40 to-amber-300/10 shadow-[0_0_80px_rgba(255,220,160,0.35)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <h3 className="font-rosella text-4xl">Redefining the standard.</h3>

        <p className="mx-auto mt-6 max-w-xl text-white/65">
          House of Yen brings clarity and certainty where it matters most:
          identity, presentation, positioning, and the business systems behind
          the visible brand.
        </p>
      </LuxuryPanel>
    </section>
  );
}

function LockedHouseOfJade() {
  return (
    <section id="future-wing" className="relative min-h-screen overflow-hidden px-6 py-32 bg-gradient-to-b from-zinc-900 via-black to-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative h-[620px] overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900 grayscale">
          <SmartImage
            src={houseOfJadeImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl">
                {"\u25cc"}
              </div>

              <p className="text-sm uppercase tracking-[0.45em] text-white/40">
                Future Expansion
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/35">
            Future Wing
          </p>

          <h2 className="font-rosella text-5xl leading-[0.95] text-white/40 md:text-7xl">
            Waiting beyond the Yen circle.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/50">
            The Jade concept is intentionally veiled, a future chapter of
            {" Duy\u00ean \u00c2n "}still waiting to awaken.
          </p>

          <button
            disabled
            className="mt-12 cursor-not-allowed rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 uppercase tracking-[0.35em] text-white/25"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}

function BookingContact() {
  return (
    <section id="visit" className="px-6 py-32 text-center bg-black">
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-200/70">
        Contact
      </p>

      <h2 className="font-rosella text-5xl md:text-7xl">
        Enter the House of Yen.
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg text-white/65">
        Inquire about House of Yen, or continue to the separate business
        websites for Salon Studio 21 and YNX Notary.
      </p>

      <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
        <LuxuryButton href={`mailto:${CONTACT_EMAIL}`}>House of Yen Inquiry</LuxuryButton>
        <LuxuryButton href={SALON_URL}>Salon Studio 21</LuxuryButton>
        <LuxuryButton href={YNX_URL}>YNX Notary</LuxuryButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-white/50">
      <p className="font-rosella mb-3 text-3xl text-white">{"Duy\u00ean \u00c2n"}</p>
      <p className="text-sm">
        House of Yen . Salon Studio 21 . YNX Notary . Future Wing
      </p>
      <p className="mt-3 text-sm">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-amber-200 transition">
          {CONTACT_EMAIL}
        </a>
        <span> . </span>
        <a href="tel:+19729007147" className="hover:text-amber-200 transition">
          {CONTACT_PHONE}
        </a>
      </p>
    </footer>
  );
}

function LuxuryPanel({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_120px_rgba(255,220,160,0.06)] ${className}`}
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-100/10 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function FloatingJadeCore() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto h-48 w-24 rounded-full bg-gradient-to-b from-emerald-100 via-emerald-300 to-emerald-600 shadow-[0_0_120px_rgba(110,231,183,0.45)]"
    />
  );
}

function SmartImage({ src, fallback, className = "", alt = "" }) {
  const [error, setError] = useState(false);

  if (error) return fallback || null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      draggable="false"
    />
  );
}

function LuxuryButton({ children, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-amber-200/20 bg-white/5 px-8 py-4 backdrop-blur-xl"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/20 to-amber-100/0 opacity-0 transition duration-700 group-hover:opacity-100" />
      <span className="relative z-10 text-sm uppercase tracking-[0.3em] text-white">
        {children}
      </span>
    </motion.a>
  );
}
