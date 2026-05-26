import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  ExternalLink,
  Filter,
  Gem,
  Mail,
  Pause,
  Phone,
  Play,
  Plus,
  Search,
  Star,
  Upload,
} from "lucide-react";

type PartnerTier = "Registry Listing" | "Featured House" | "Founding House" | "Inner Circle";

type Partner = {
  id: number;
  name: string;
  category: string;
  tier: PartnerTier;
  status: "Active" | "Inactive";
  featured: boolean;
  phone: string;
  email: string;
  website: string;
  bookingLink: string;
  snippet: string;
  description: string;
};

const awakeningSequence = [
  {
    step: "01",
    title: "The Waters Withdraw",
    description: "The fountain slows. Water retreats into the marble channels as the chamber falls silent.",
  },
  {
    step: "02",
    title: "The Figures Awaken",
    description: "Persephone and Inanna rotate inward as Athena slips back toward the wall.",
  },
  {
    step: "03",
    title: "The Acknowledgement",
    description: "Athena turns her head slightly toward the viewer and gives one quiet nod.",
  },
  {
    step: "04",
    title: "The Clockwork Turns",
    description: "Hidden mechanisms begin realigning the registry beneath the stone.",
  },
  {
    step: "05",
    title: "The Spotlight Ignites",
    description: "A red-gold beam descends into the center chamber as the old name begins to fade.",
  },
  {
    step: "06",
    title: "The New House Revealed",
    description: "The next Featured House forms from dust, like sand gathering through time.",
  },
  {
    step: "07",
    title: "The Final Bell",
    description: "A single bell echoes through the sanctuary. The figures return to stillness.",
  },
  {
    step: "08",
    title: "The System Rests",
    description: "Water rushes forward again. The PAI System sleeps until the next awakening.",
  },
];

const initialPartners: Partner[] = [
  {
    id: 1,
    name: "YNX Notary",
    category: "Notary",
    tier: "Founding House",
    status: "Active",
    featured: true,
    phone: "(702) 867-6687",
    email: "",
    website: "",
    bookingLink: "",
    snippet: "Professional notary services with precision, discretion, and authority.",
    description:
      "YNX Notary provides notarizations, loan signing support, apostille facilitation, power of attorney notarization, affidavits, business documents, and remote online notary services.",
  },
  {
    id: 2,
    name: "House of Jade Salon",
    category: "Salon",
    tier: "Founding House",
    status: "Active",
    featured: false,
    phone: "",
    email: "",
    website: "",
    bookingLink: "",
    snippet: "Beauty, wellness, and personal transformation in a refined private setting.",
    description:
      "A salon experience centered on color, styling, care, confidence, and quiet luxury.",
  },
];

function Badge({ children, tone = "red" }: { children: React.ReactNode; tone?: "red" | "gold" | "green" | "gray" }) {
  return <span className={`pai-badge pai-badge-${tone}`}>{children}</span>;
}

function AudioReactiveControl({
  onAudioLevel,
}: {
  onAudioLevel: (level: number) => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file || !audioRef.current) return;

    audioRef.current.src = URL.createObjectURL(file);
    audioRef.current.load();
  }

  async function startAudioReaction() {
    if (!audioRef.current) return;

    if (!contextRef.current) {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      const audioContext = new AudioContextClass();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 128;

      const source = audioContext.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      contextRef.current = audioContext;
      analyserRef.current = analyser;
    }

    await contextRef.current.resume();
    await audioRef.current.play();

    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const tick = () => {
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
      const normalized = Math.min(1, average / 120);
      onAudioLevel(normalized);
      animationRef.current = requestAnimationFrame(tick);
    };

    tick();
  }

  function pauseAudio() {
    audioRef.current?.pause();

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    onAudioLevel(0);
  }

  return (
    <section className="pai-audio-panel">
      <div>
        <p className="pai-kicker">Audio Reactive Layer</p>
        <h3>Let the chamber breathe with your music</h3>
        <p>Upload a song, press play, and the glow, candles, water, and particles respond to the sound.</p>
      </div>

      <div className="pai-audio-actions">
        <label className="pai-button pai-button-outline">
          <Upload size={16} />
          Upload Song
          <input type="file" accept="audio/*" onChange={handleUpload} hidden />
        </label>

        <button className="pai-button pai-button-solid" onClick={startAudioReaction}>
          <Play size={16} />
          Play
        </button>

        <button className="pai-button pai-button-outline" onClick={pauseAudio}>
          <Pause size={16} />
          Pause
        </button>
      </div>

      <audio ref={audioRef} controls className="pai-audio-player" />
    </section>
  );
}

function StatueGateway() {
  return (
    <section className="pai-gateway">
      <div className="pai-gateway-copy">
        <p className="pai-kicker">The Doorway</p>
        <h2>Persephone · Athena · Inanna</h2>
        <p>
          Three figures stand as one system: transformation, wisdom, and reinvention. The sanctuary does not open loudly.
          It awakens through silence, stone, water, and time.
        </p>
      </div>

      <div className="pai-statues">
        {["Persephone", "Athena", "Inanna"].map((name, index) => (
          <motion.div
            key={name}
            className="pai-statue"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="pai-statue-figure" />
            <p>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AwakeningChamber({
  audioLevel,
  beatPulse,
}: {
  audioLevel: number;
  beatPulse: number;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [featuredName, setFeaturedName] = useState("YNX Notary");

  const candleCount = 12;
  const activeCandles = Math.min(candleCount, Math.floor(audioLevel * candleCount));
  const isWaterSilent = activeStep >= 1 && activeStep <= 6;
  const isDustShift = activeStep === 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % awakeningSequence.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeStep === 5) {
      const timer = setTimeout(() => setFeaturedName("House of Jade Salon"), 900);
      return () => clearTimeout(timer);
    }

    if (activeStep === 0) {
      setFeaturedName("YNX Notary");
    }
  }, [activeStep]);

  return (
    <section className="pai-awakening">
      <motion.div
        className="pai-red-aura"
        style={{ scale: 1 + audioLevel * 0.25 }}
        animate={{ opacity: [0.3, 0.85, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(28)].map((_, i) => (
        <motion.span
          key={i}
          className="pai-particle"
          style={{
            left: `${8 + ((i * 37) % 84)}%`,
            top: `${12 + ((i * 19) % 72)}%`,
          }}
          animate={{
            opacity: [0.1, 0.75 + audioLevel * 0.25, 0.1],
            y: [0, -18 - audioLevel * 35, 0],
          }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.18 }}
        />
      ))}

      <div className="pai-awakening-inner">
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="pai-start-button">
          <span>Enter The Sanctuary</span>
          <strong>Start Experience</strong>
        </motion.button>

        <p className="pai-kicker">Wednesday Awakening Sequence</p>
        <h1>The PAI System</h1>
        <p className="pai-awakening-lead">
          Water recedes. The chamber stills. Ancient mechanisms awaken beneath the sanctuary as the Featured House
          transitions within the spotlight.
        </p>

        <div className="pai-candles">
          {[...Array(candleCount)].map((_, i) => (
            <motion.div
              key={`${i}-${beatPulse}`}
              animate={{
                opacity: i <= activeCandles ? [0.35, 1, 0.55] : 0.25,
                scale: i <= activeCandles ? [1, 1.35, 1] : 1,
              }}
              transition={{ duration: 0.7, delay: i * 0.035 }}
              className="pai-candle"
            />
          ))}
        </div>

        <div className="pai-orb-wrap">
          <motion.div
            className="pai-orb-ring"
            animate={{ scale: [1, 1 + audioLevel * 0.18, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.div
            className="pai-orb-dash"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="pai-orb"
            animate={{
              boxShadow: [
                `0 0 ${20 + audioLevel * 40}px rgba(180,20,20,0.25)`,
                `0 0 ${70 + audioLevel * 120}px rgba(255,40,40,0.55)`,
                `0 0 ${20 + audioLevel * 40}px rgba(180,20,20,0.25)`,
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="pai-orb-content"
            >
              <span>Step {awakeningSequence[activeStep].step}</span>
              <h3>{awakeningSequence[activeStep].title}</h3>
              <p>{awakeningSequence[activeStep].description}</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="pai-stone">
          <p className="pai-kicker">Featured House Stone</p>
          <div className="pai-stone-name">
            <motion.h3
              key={featuredName}
              initial={isDustShift ? { opacity: 0, filter: "blur(14px)", scale: 1.08 } : { opacity: 1 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.4 }}
            >
              {featuredName}
            </motion.h3>

            {isDustShift &&
              [...Array(36)].map((_, i) => (
                <motion.span
                  key={i}
                  className="pai-dust"
                  style={{
                    left: `${10 + ((i * 13) % 80)}%`,
                    top: `${20 + ((i * 17) % 60)}%`,
                  }}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: (i % 2 ? 1 : -1) * (18 + i),
                    y: -20 + (i % 9) * 6,
                  }}
                  transition={{ duration: 1.6, delay: i * 0.025 }}
                />
              ))}
          </div>
        </div>

        <div className="pai-system-status">
          <div>
            <p className="pai-kicker">Water State</p>
            <div className="pai-water-track">
              <motion.div
                animate={{
                  width: isWaterSilent ? `${12 + audioLevel * 25}%` : `${75 + audioLevel * 25}%`,
                  opacity: isWaterSilent ? 0.35 + audioLevel * 0.25 : 1,
                }}
                transition={{ duration: 1.4 }}
              />
            </div>
            <span>{isWaterSilent ? "Withdrawn into silence" : "Flowing through the chamber"}</span>
          </div>

          <div>
            <p className="pai-kicker">Mechanism</p>
            <motion.div
              className="pai-gear"
              animate={{ rotate: activeStep >= 3 && activeStep <= 5 ? 360 : 0 }}
              transition={{
                duration: 5,
                repeat: activeStep >= 3 && activeStep <= 5 ? Infinity : 0,
                ease: "linear",
              }}
            />
            <span>{activeStep >= 3 && activeStep <= 5 ? "Clockwork engaged" : "Resting beneath stone"}</span>
          </div>
        </div>

        <div className="pai-step-grid">
          {awakeningSequence.map((item, index) => (
            <motion.div
              key={item.step}
              className={`pai-step-card ${activeStep === index ? "pai-step-active" : ""}`}
              animate={{ y: activeStep === index ? -4 : 0 }}
            >
              <span>{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
  onSelect,
}: {
  partner: Partner;
  onSelect: (partner: Partner) => void;
}) {
  return (
    <motion.article layout className="pai-partner-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <div className="pai-card-top">
        <div>
          <h3>
            {partner.featured && <Star size={16} />}
            {partner.name}
          </h3>
          <p>{partner.category}</p>
        </div>
        <Badge tone={partner.tier === "Inner Circle" ? "gold" : "red"}>{partner.tier}</Badge>
      </div>

      <div className="pai-card-image">
        <Gem />
        <span>Featured Image</span>
      </div>

      <p className="pai-card-snippet">{partner.snippet}</p>

      <div className="pai-card-contact">
        {partner.phone && (
          <span>
            <Phone size={15} />
            {partner.phone}
          </span>
        )}
        {partner.email && (
          <span>
            <Mail size={15} />
            {partner.email}
          </span>
        )}
      </div>

      <button className="pai-card-button" onClick={() => onSelect(partner)}>
        View Featured Page <ExternalLink size={15} />
      </button>
    </motion.article>
  );
}

function FeaturedProfile({
  partner,
  onBack,
}: {
  partner: Partner;
  onBack: () => void;
}) {
  return (
    <section className="pai-profile">
      <button className="pai-back" onClick={onBack}>
        ← Back to Directory
      </button>

      <div className="pai-profile-grid">
        <div className="pai-profile-art">
          <Gem size={72} />
          <h2>{partner.name}</h2>
          <p>{partner.category}</p>
        </div>

        <div className="pai-profile-copy">
          <Badge tone="red">{partner.tier}</Badge>
          <h3>Featured House Profile</h3>
          <p>{partner.description}</p>

          <div className="pai-profile-contact">
            {partner.phone && (
              <span>
                <Phone size={18} />
                {partner.phone}
              </span>
            )}
            {partner.email && (
              <span>
                <Mail size={18} />
                {partner.email}
              </span>
            )}
            {partner.website && (
              <span>
                <ExternalLink size={18} />
                {partner.website}
              </span>
            )}
          </div>

          <button className="pai-button pai-button-solid">Book / Contact</button>
        </div>
      </div>
    </section>
  );
}

function AdminPanel({
  partners,
  setPartners,
}: {
  partners: Partner[];
  setPartners: React.Dispatch<React.SetStateAction<Partner[]>>;
}) {
  const [draft, setDraft] = useState<Omit<Partner, "id">>({
    name: "",
    category: "",
    tier: "Registry Listing",
    status: "Active",
    featured: false,
    phone: "",
    email: "",
    website: "",
    bookingLink: "",
    snippet: "",
    description: "",
  });

  function addPartner() {
    if (!draft.name.trim()) return;

    setPartners([{ ...draft, id: Date.now() }, ...partners]);
    setDraft({
      ...draft,
      name: "",
      category: "",
      phone: "",
      email: "",
      website: "",
      bookingLink: "",
      snippet: "",
      description: "",
      featured: false,
    });
  }

  return (
    <section className="pai-admin">
      <div className="pai-section-heading">
        <p className="pai-kicker">Private Admin</p>
        <h2>Partner Dashboard</h2>
        <p>Add and manage businesses inside the PAI System.</p>
      </div>

      <div className="pai-form-grid">
        <input placeholder="Business name" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
        <input placeholder="Category" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />

        <select value={draft.tier} onChange={(e) => setDraft({ ...draft, tier: e.target.value as PartnerTier })}>
          <option>Registry Listing</option>
          <option>Featured House</option>
          <option>Founding House</option>
          <option>Inner Circle</option>
        </select>

        <input placeholder="Phone number" value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} />
        <input placeholder="Email" value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} />
        <input placeholder="Website / link" value={draft.website} onChange={(e) => setDraft({ ...draft, website: e.target.value })} />

        <textarea placeholder="Short spotlight snippet" value={draft.snippet} onChange={(e) => setDraft({ ...draft, snippet: e.target.value })} />
        <textarea placeholder="Full business description" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
      </div>

      <label className="pai-check">
        <input type="checkbox" checked={draft.featured} onChange={(e) => setDraft({ ...draft, featured: e.target.checked })} />
        Featured now
      </label>

      <button className="pai-button pai-button-solid" onClick={addPartner}>
        <Plus size={16} />
        Add Partner
      </button>
    </section>
  );
}

export default function PAIDirectoryApp() {
  const [partners, setPartners] = useState<Partner[]>(initialPartners);
  const [view, setView] = useState<"directory" | "featured" | "admin">("directory");
  const [selected, setSelected] = useState<Partner>(initialPartners[0]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [audioLevel, setAudioLevel] = useState(0);
  const [beatPulse, setBeatPulse] = useState(0);

  function handleAudioLevel(level: number) {
    setAudioLevel(level);
    if (level > 0.48) setBeatPulse(Date.now());
  }

  const featured = partners.find((partner) => partner.featured) || partners[0];

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(partners.map((partner) => partner.category).filter(Boolean)))];
  }, [partners]);

  const filteredPartners = partners.filter((partner) => {
    const searchable = `${partner.name} ${partner.category} ${partner.snippet} ${partner.description}`.toLowerCase();
    const matchesSearch = searchable.includes(query.toLowerCase());
    const matchesCategory = category === "All" || partner.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pai-root">
      <div className="pai-shell">
        <header className="pai-header">
          <div>
            <p className="pai-kicker">Passage · Alignment · Intelligence</p>
            <h1>PAI Directory</h1>
            <p>A cinematic directory system for featured houses, partners, and curated services.</p>
          </div>

          <nav>
            <button className={view === "directory" ? "active" : ""} onClick={() => setView("directory")}>
              Directory
            </button>
            <button className={view === "featured" ? "active" : ""} onClick={() => setView("featured")}>
              Featured
            </button>
            <button className={view === "admin" ? "active" : ""} onClick={() => setView("admin")}>
              Admin
            </button>
          </nav>
        </header>

        <StatueGateway />
        <AudioReactiveControl onAudioLevel={handleAudioLevel} />
        <AwakeningChamber audioLevel={audioLevel} beatPulse={beatPulse} />

        {view === "directory" && (
          <>
            <section className="pai-spotlight">
              <div>
                <Badge tone="gold">
                  <Crown size={14} />
                  Current Spotlight
                </Badge>
                <h2>{featured.name}</h2>
                <p>{featured.snippet}</p>
                <button
                  className="pai-button pai-button-outline"
                  onClick={() => {
                    setSelected(featured);
                    setView("featured");
                  }}
                >
                  Click Here <ExternalLink size={16} />
                </button>
              </div>

              <div className="pai-spotlight-mark">
                <Gem size={54} />
                <p>Wednesday Cycle</p>
                <span>The Featured House changes during the awakening sequence.</span>
              </div>
            </section>

            <section className="pai-directory-tools">
              <div>
                <Search size={18} />
                <input placeholder="Search the directory" value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>

              <div>
                <Filter size={18} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </section>

            <section className="pai-directory-grid">
              {filteredPartners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  partner={partner}
                  onSelect={(selectedPartner) => {
                    setSelected(selectedPartner);
                    setView("featured");
                  }}
                />
              ))}
            </section>
          </>
        )}

        {view === "featured" && <FeaturedProfile partner={selected} onBack={() => setView("directory")} />}

        {view === "admin" && <AdminPanel partners={partners} setPartners={setPartners} />}
      </div>
    </main>
  );
}
