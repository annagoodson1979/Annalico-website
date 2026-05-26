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
  Search,
  Star,
} from "lucide-react";

type PartnerTier =
  | "Registry Listing"
  | "Featured House"
  | "Founding House"
  | "Inner Circle";

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
    snippet:
      "Professional notary services with precision, discretion, and authority.",
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
    snippet:
      "Beauty, wellness, and personal transformation in a refined private setting.",
    description:
      "A salon experience centered on color, styling, care, confidence, and quiet luxury.",
  },
];

const sceneCues = [
  { time: 0, scene: "arrival" },
  { time: 18, scene: "yen" },
  { time: 38, scene: "jade-glimpse" },
  { time: 55, scene: "monolith" },
  { time: 78, scene: "candles" },
  { time: 100, scene: "pai-chamber" },
  { time: 122, scene: "water-recedes" },
  { time: 138, scene: "mechanics" },
  { time: 155, scene: "awakening" },
  { time: 170, scene: "athena-nod" },
  { time: 182, scene: "dust-transition" },
  { time: 196, scene: "final-bell" },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="pai-badge">{children}</span>;
}

function StatueGateway() {
  return (
    <section className="pai-gateway">
      <div className="pai-gateway-copy">
        <p className="pai-kicker">The Doorway</p>

        <h2>Persephone · Athena · Inanna</h2>

        <p>
          Three figures stand as one system: transformation, wisdom, and
          reinvention.
        </p>
      </div>

      <div className="pai-statues">
        {["Persephone", "Athena", "Inanna"].map((name, index) => (
          <motion.div
            key={name}
            className="pai-statue"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="pai-statue-figure" />
            <p>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AudioReactiveSystem({
  audioLevel,
  currentScene,
  currentTime,
}: {
  audioLevel: number;
  currentScene: string;
  currentTime: number;
}) {
  const [featuredName, setFeaturedName] = useState("YNX Notary");

  useEffect(() => {
    if (currentScene === "dust-transition") {
      const timer = setTimeout(() => {
        setFeaturedName("House of Jade Salon");
      }, 1400);

      return () => clearTimeout(timer);
    }

    if (currentScene === "arrival") {
      setFeaturedName("YNX Notary");
    }
  }, [currentScene]);

  const candleCount = 12;
  const activeCandles = Math.min(
    candleCount,
    Math.floor(audioLevel * candleCount)
  );

  return (
    <section className="pai-awakening">
      <motion.div
        className="pai-red-aura"
        style={{
          scale: 1 + audioLevel * 0.25,
        }}
        animate={{
          opacity: [0.3, 0.85, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[...Array(26)].map((_, i) => (
        <motion.span
          key={i}
          className="pai-particle"
          style={{
            left: `${8 + ((i * 37) % 84)}%`,
            top: `${12 + ((i * 19) % 72)}%`,
          }}
          animate={{
            opacity: [0.1, 0.7 + audioLevel * 0.3, 0.1],
            y: [0, -18 - audioLevel * 38, 0],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.18,
          }}
        />
      ))}

      <div className="pai-awakening-inner">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="pai-start-button"
        >
          <span>Enter The Sanctuary</span>
          <strong>START EXPERIENCE</strong>
        </motion.button>

        <p className="pai-kicker">Wednesday Awakening Sequence</p>

        <h1>THE PAI SYSTEM</h1>

        <p className="pai-awakening-lead">
          Water recedes. Ancient mechanisms awaken beneath the sanctuary as the
          Featured House transitions within the spotlight.
        </p>

        <div className="pai-scene-status">
          <div>
            <span>Current Scene</span>
            <strong>{currentScene}</strong>
          </div>

          <div>
            <span>Timeline</span>
            <strong>{Math.floor(currentTime)}s</strong>
          </div>
        </div>

        <div className="pai-candles">
          {[...Array(candleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="pai-candle"
              animate={{
                opacity: i <= activeCandles ? [0.35, 1, 0.55] : 0.2,
                scale: i <= activeCandles ? [1, 1.4, 1] : 1,
              }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
              }}
            />
          ))}
        </div>

        <div className="pai-orb-wrap">
          <motion.div
            className="pai-orb-ring"
            animate={{
              scale: [1, 1 + audioLevel * 0.18, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="pai-orb-dash"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
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
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <div className="pai-orb-content">
              <span>ACTIVE SEQUENCE</span>

              <h3>{currentScene.replace("-", " ")}</h3>

              <p>
                The chamber reacts dynamically to the soundtrack, synchronizing
                motion, spotlight glow, particles, candles, and transitions.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pai-stone">
          <p className="pai-kicker">Featured House Stone</p>

          <div className="pai-stone-name">
            <motion.h3
              key={featuredName}
              initial={{
                opacity: 0,
                filter: "blur(16px)",
                scale: 1.1,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              {featuredName}
            </motion.h3>
          </div>
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
    <motion.article
      className="pai-partner-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="pai-card-top">
        <div>
          <h3>
            {partner.featured && <Star size={16} />}
            {partner.name}
          </h3>

          <p>{partner.category}</p>
        </div>

        <Badge>{partner.tier}</Badge>
      </div>

      <div className="pai-card-image">
        <Gem />
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
        View Featured Page
        <ExternalLink size={15} />
      </button>
    </motion.article>
  );
}

export default function PAIDirectoryApp() {
  const [partners] = useState<Partner[]>(initialPartners);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Partner>(initialPartners[0]);
  const [audioLevel, setAudioLevel] = useState(0);
  const [currentScene, setCurrentScene] = useState("arrival");
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTimeline = () => {
      const time = audio.currentTime;

      setCurrentTime(time);

      const activeCue = [...sceneCues]
        .reverse()
        .find((cue) => time >= cue.time);

      if (activeCue) {
        setCurrentScene(activeCue.scene);
      }
    };

    audio.addEventListener("timeupdate", updateTimeline);

    return () => {
      audio.removeEventListener("timeupdate", updateTimeline);
    };
  }, []);

  async function playExperience() {
    if (!audioRef.current) return;

    if (!contextRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (
          window as unknown as {
            webkitAudioContext: typeof AudioContext;
          }
        ).webkitAudioContext;

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

    audioRef.current.currentTime = 0;

    await audioRef.current.play();

    const analyser = analyserRef.current;

    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const tick = () => {
      analyser.getByteFrequencyData(dataArray);

      const average =
        dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

      const normalized = Math.min(1, average / 120);

      setAudioLevel(normalized);

      animationRef.current = requestAnimationFrame(tick);
    };

    tick();
  }

  function pauseExperience() {
    audioRef.current?.pause();

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setAudioLevel(0);
  }

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(partners.map((partner) => partner.category))),
    ];
  }, [partners]);

  const filteredPartners = partners.filter((partner) => {
    const searchable =
      `${partner.name} ${partner.category} ${partner.snippet}`.toLowerCase();

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

            <h1>PAI DIRECTORY</h1>

            <p>
              A cinematic directory system for featured houses, partners, and
              curated services.
            </p>
          </div>
        </header>

        <div className="pai-player">
          <button className="pai-control" onClick={playExperience}>
            <Play size={16} />
            Start Experience
          </button>

          <button className="pai-control" onClick={pauseExperience}>
            <Pause size={16} />
            Pause
          </button>

          <audio ref={audioRef} src="/audio/pai-awakening.mp3" />
        </div>

        <StatueGateway />

        <AudioReactiveSystem
          audioLevel={audioLevel}
          currentScene={currentScene}
          currentTime={currentTime}
        />

        <section className="pai-directory-tools">
          <div>
            <Search size={18} />

            <input
              placeholder="Search the directory"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div>
            <Filter size={18} />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
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
              onSelect={setSelected}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
