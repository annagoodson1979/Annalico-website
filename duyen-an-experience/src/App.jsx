import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brandName = "Duy\u00ean \u00c2n";
const chapterBeats = [
  { label: "arrival darkness", range: [0, 0.086] },
  { label: "door reveal", range: [0.086, 0.186] },
  { label: "driver welcome", range: [0.186, 0.243] },
  { label: "grand entrance", range: [0.243, 0.357] },
  { label: "foyer reveal", range: [0.357, 0.5] },
  { label: "House of Jade glimpse", range: [0.5, 0.571] },
  { label: "pathway invitation", range: [0.571, 0.657] },
  { label: "business corridor", range: [0.657, 0.786] },
  { label: "business showcase", range: [0.786, 0.886] },
  { label: "final approach", range: [0.886, 1] },
];

function useBeat(progress, start, peak, end = peak + 0.08) {
  return useTransform(progress, [start, peak, end], [0, 1, 0]);
}

function ChapterStep({ chapter, progress, isLast }) {
  const opacity = useTransform(progress, chapter.range, [0.36, 1]);
  const y = useTransform(progress, chapter.range, [8, 0]);
  const arrowOpacity = useTransform(progress, chapter.range, [0.22, 0.82]);

  return (
    <>
      <motion.span style={{ opacity, y }} className="chapter-word">
        {chapter.label}
      </motion.span>
      {!isLast && (
        <motion.span style={{ opacity: arrowOpacity }} className="chapter-arrow">
          {"\u2192"}
        </motion.span>
      )}
    </>
  );
}

function ChapterSequence({ progress }) {
  return (
    <div className="chapter-sequence" aria-label={chapterBeats.map((chapter) => chapter.label).join(" to ")}>
      {chapterBeats.map((chapter, index) => (
        <ChapterStep
          key={chapter.label}
          chapter={chapter}
          progress={progress}
          isLast={index === chapterBeats.length - 1}
        />
      ))}
    </div>
  );
}

function DarkArrival({ progress }) {
  const opacity = useTransform(progress, [0, 0.08, 0.16], [1, 0.9, 0.12]);
  const vignette = useTransform(progress, [0, 0.16], [1, 0.35]);

  return (
    <motion.section style={{ opacity }} className="scene dark-arrival">
      <motion.div style={{ opacity: vignette }} className="windshield-vignette" />
      <div className="dash-glow" />
      <div className="arrival-title">
        <span>Arrival</span>
        <strong>{brandName}</strong>
      </div>
    </motion.section>
  );
}

function CarDoorReveal({ progress }) {
  const rotateY = useTransform(progress, [0.04, 0.18], [0, -42]);
  const x = useTransform(progress, [0.04, 0.18], [0, -145]);
  const opacity = useTransform(progress, [0.03, 0.16, 0.28], [1, 1, 0]);

  return <motion.div style={{ rotateY, x, opacity }} className="car-door-frame" />;
}

function DriverGreeting({ progress }) {
  const opacity = useBeat(progress, 0.1, 0.2, 0.36);
  const y = useTransform(progress, [0.1, 0.22], [30, 0]);

  return (
    <motion.section style={{ opacity, y }} className="scene driver-greeting">
      <div className="glove-wrap">
        <div className="sleeve" />
        <div className="gold-trim" />
        <div className="glove" />
      </div>
      <div className="driver-copy">Welcome. Step into the House of Yen.</div>
    </motion.section>
  );
}

function ExteriorWorld({ progress, children }) {
  const opacity = useTransform(progress, [0.08, 0.2], [0, 1]);
  const y = useTransform(progress, [0, 1], [0, -160]);
  const scale = useTransform(progress, [0, 1], [1.06, 1]);

  return (
    <motion.section style={{ opacity, y, scale }} className="scene exterior-world">
      <div className="blossom-atmosphere" />
      <div className="petals petals-left">
        <i />
        <i />
        <i />
      </div>
      <div className="petals petals-right">
        <i />
        <i />
        <i />
      </div>
      <div className="steps">
        <div className="step-highlight" />
      </div>
      <div className="entry-wrap">{children}</div>
    </motion.section>
  );
}

function DoorWomen({ progress }) {
  const opacity = useTransform(progress, [0.18, 0.3], [0, 1]);

  return (
    <>
      <motion.div style={{ opacity }} className="woman woman-left">
        <div className="woman-body">
          <div className="woman-hair" />
          <div className="woman-embroidery" />
        </div>
      </motion.div>
      <motion.div style={{ opacity }} className="woman woman-right">
        <div className="woman-body woman-body-alt">
          <div className="woman-hair" />
        </div>
      </motion.div>
    </>
  );
}

function GrandDoorOpen({ progress }) {
  const leftDoorX = useTransform(progress, [0.32, 0.5], ["0%", "-48%"]);
  const rightDoorX = useTransform(progress, [0.32, 0.5], ["0%", "48%"]);

  return (
    <>
      <motion.div style={{ x: leftDoorX }} className="entry-door entry-door-left">
        <div className="door-pull door-pull-left" />
      </motion.div>
      <motion.div style={{ x: rightDoorX }} className="entry-door entry-door-right">
        <div className="door-pull door-pull-right" />
      </motion.div>
    </>
  );
}

function EntryBuilding({ progress }) {
  return (
    <div className="entry-building">
      <div className="brand-lockup">
        <div className="brand-name">{brandName}</div>
        <div className="brand-kicker">House of Yen</div>
      </div>
      <DoorWomen progress={progress} />
      <GrandDoorOpen progress={progress} />
    </div>
  );
}

function FoyerReveal({ progress, children }) {
  const opacity = useTransform(progress, [0.42, 0.58], [0, 1]);

  return (
    <motion.section style={{ opacity }} className="scene foyer">
      <div className="foyer-bg" />
      <div className="water-reflection" />
      {children}
    </motion.section>
  );
}

function JadeCourtyardGlimpse({ progress }) {
  const opacity = useTransform(progress, [0.55, 0.7], [0, 1]);
  const x = useTransform(progress, [0.55, 0.82], [60, 0]);

  return (
    <motion.div style={{ opacity, x }} className="jade-courtyard">
      <div className="courtyard-glow" />
      <div className="petals courtyard-petals">
        <i />
        <i />
        <i />
      </div>
      <div className="courtyard-water" />
      <div className="courtyard-bridge" />
      <div className="distant-house" />
      <div className="courtyard-sign">House of Jade</div>
    </motion.div>
  );
}

function HouseYenHost({ progress }) {
  const opacity = useTransform(progress, [0.58, 0.72], [0, 1]);
  const y = useTransform(progress, [0.58, 0.72], [20, 0]);

  return (
    <motion.div style={{ opacity, y }} className="host">
      <div className="host-body">
        <div className="host-head" />
        <div className="host-arm" />
      </div>
      <div className="host-greeting">Welcome to the House of Yen</div>
    </motion.div>
  );
}

function TealightPath({ progress }) {
  const opacity = useTransform(progress, [0.62, 0.76], [0, 1]);
  const y = useTransform(progress, [0.62, 0.76], [30, 0]);

  return (
    <motion.div style={{ opacity, y }} className="tealight-path">
      {[...Array(7)].map((_, index) => (
        <span key={index} />
      ))}
    </motion.div>
  );
}

function SalonReveal({ progress }) {
  const opacity = useTransform(progress, [0.78, 0.86], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="business-reveal-card salon-reveal">
      <div className="business-card-glow salon-card-glow" />
      <div className="business-card-copy">
        <div className="business-card-title">Salon Studio</div>
        <div className="business-card-kicker">Beauty · Ritual · Refinement</div>
      </div>
    </motion.div>
  );
}

function YNXReveal({ progress }) {
  const opacity = useTransform(progress, [0.84, 0.92], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="business-reveal-card ynx-reveal">
      <div className="business-card-glow ynx-card-glow" />
      <div className="business-card-copy">
        <div className="business-card-title">YNX Notary</div>
        <div className="business-card-kicker">Documents · Trust · Precision</div>
      </div>
    </motion.div>
  );
}

function SpotlightShowcase({ progress }) {
  const opacity = useTransform(progress, [0.88, 0.96], [0, 1]);
  const scale = useTransform(progress, [0.88, 0.96], [0.94, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="spotlight-showcase">
      <div className="jewel-spotlight">
        <div className="jewel-core">
          <div className="jewel-kicker">Business of the Week</div>
          <div className="jewel-title">Featured Brand</div>
          <div className="jewel-copy">A short curated business description appears here.</div>
        </div>
      </div>
    </motion.div>
  );
}

function YenCircle({ progress }) {
  const opacity = useTransform(progress, [0.78, 0.92], [0, 1]);
  const x = useTransform(progress, [0.78, 1], [120, -120]);

  return (
    <motion.div style={{ opacity, x }} className="yen-wall">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="yen-circle" />
      ))}
    </motion.div>
  );
}

function OfficeArrival({ progress }) {
  const opacity = useTransform(progress, [0.94, 1], [0, 1]);
  const y = useTransform(progress, [0.94, 1], [40, 0]);

  return (
    <motion.div style={{ opacity, y }} className="office-arrival">
      <div className="office-copy">
        <strong>House of Yen</strong>
        <span>Private Office</span>
      </div>
    </motion.div>
  );
}

function JadeMonolith({ progress }) {
  const opacity = useTransform(progress, [0.5, 0.68], [0, 1]);
  const scale = useTransform(progress, [0.5, 0.68], [0.94, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="jade-monolith">
      <div className="monolith-face">
        <div className="monolith-sheen" />
        <div className="monolith-title">{brandName}</div>
        <div className="monolith-subtitle">House of Yen</div>
      </div>
    </motion.div>
  );
}

function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="homepage-section">
      <div className="section-inner">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function HouseOfYenWelcome() {
  return (
    <SectionShell id="house-of-yen" eyebrow="House of Yen" title="A Welcome in Lantern Light">
      <p>
        Step through the foyer, past the jade monolith and tealight path, into a polished world built for care,
        ceremony, and calm direction.
      </p>
    </SectionShell>
  );
}

function FeaturedBusinesses() {
  return (
    <SectionShell id="featured-businesses" eyebrow="Featured Businesses" title="Discover the Circle">
      <div className="section-grid">
        <article>
          <span>Salon Studio</span>
          <p>Beauty, ritual, and refinement held in warm light.</p>
        </article>
        <article>
          <span>YNX Notary</span>
          <p>Documents, trust, and precision with a quiet standard.</p>
        </article>
      </div>
    </SectionShell>
  );
}

function BusinessOfTheWeek() {
  return (
    <SectionShell id="business-of-the-week" eyebrow="Business of the Week" title="The Jewel Spotlight">
      <p>
        A curated feature display for one business at a time, presented like a suspended jewel in the House of Yen.
      </p>
    </SectionShell>
  );
}

function HouseOfJadePreview() {
  return (
    <SectionShell id="house-of-jade-preview" eyebrow="House of Jade" title="A Glimpse Beyond the Wall">
      <p>
        Bamboo, bridge, flowing water, and cherry blossoms hint at the next wing of the Duy\u00ean \u00c2n world.
      </p>
    </SectionShell>
  );
}

function BookingContact() {
  return (
    <SectionShell id="booking-contact" eyebrow="Begin Your Visit" title="Book, Inquire, or Connect">
      <div className="cta-row">
        <a href="https://www.ynxnotary.com">YNX Notary</a>
        <a href="https://agsalonstudio.glossgenius.com">AG Salon Studio</a>
        <a href="mailto:notary@theyenan.com">Contact House of Yen</a>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="homepage-footer">
      <span>Duy\u00ean \u00c2n</span>
      <span>House of Yen</span>
    </footer>
  );
}

export default function App() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const enterOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <main className="homepage-shell">
      <section id="cinematic-arrival" ref={ref} className="arrival-page">
        <div className="arrival-stage">
          <ExteriorWorld progress={scrollYProgress}>
            <EntryBuilding progress={scrollYProgress} />
          </ExteriorWorld>
          <DarkArrival progress={scrollYProgress} />
          <CarDoorReveal progress={scrollYProgress} />
          <DriverGreeting progress={scrollYProgress} />
          <FoyerReveal progress={scrollYProgress}>
            <JadeCourtyardGlimpse progress={scrollYProgress} />
            <JadeMonolith progress={scrollYProgress} />
            <HouseYenHost progress={scrollYProgress} />
            <TealightPath progress={scrollYProgress} />
            <SalonReveal progress={scrollYProgress} />
            <YNXReveal progress={scrollYProgress} />
            <SpotlightShowcase progress={scrollYProgress} />
            <YenCircle progress={scrollYProgress} />
            <OfficeArrival progress={scrollYProgress} />
          </FoyerReveal>
          <motion.div style={{ opacity: enterOpacity }} className="enter-prompt">
            Enter
          </motion.div>
          <ChapterSequence progress={scrollYProgress} />
        </div>
      </section>
      <HouseOfYenWelcome />
      <FeaturedBusinesses />
      <BusinessOfTheWeek />
      <HouseOfJadePreview />
      <BookingContact />
      <Footer />
    </main>
  );
}
