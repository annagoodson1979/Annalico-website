import { useEffect, useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  ExternalLink,
  Filter,
  Gem,
  Globe,
  Mail,
  Phone,
  Plus,
  Search,
  Star,
} from "lucide-react";

type Partner = {
  id: number;
  name: string;
  category: string;
  tier: "Registry Listing" | "Featured House" | "Founding House" | "Inner Circle";
  status: string;
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
    description:
      "The fountain slows. Water retracts into the marble channels as the chamber falls silent.",
  },
  {
    step: "02",
    title: "The Figures Awaken",
    description:
      "Persephone and Inanna slowly rotate inward while Athena retracts into shadow.",
  },
  {
    step: "03",
    title: "The Acknowledgement",
    description:
      "Athena's head turns slightly toward the viewer. A subtle nod confirms the transition.",
  },
  {
    step: "04",
    title: "The Clockwork Turns",
    description:
      "Hidden gears and ceremonial mechanisms begin realigning the registry.",
  },
  {
    step: "05",
    title: "The Spotlight Ignites",
    description:
      "A golden beam descends into the center chamber as the current Featured House fades.",
  },
  {
    step: "06",
    title: "The New House Revealed",
    description:
      "The next Featured House materializes slowly within the spotlight.",
  },
  {
    step: "07",
    title: "The Final Bell",
    description:
      "A single bell echoes through the sanctuary. The figures return to stillness.",
  },
  {
    step: "08",
    title: "The System Rests",
    description:
      "Water rushes forward again. The PAI System sleeps until the next awakening.",
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
    email: "info@ynxnotary.com",
    website: "https://ynxnotary.com",
    bookingLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeAj11M5t6ji4qn6wYjSXV3INLf_mHttATePmDrNA1ItGDNRg/viewform?usp=dialog",
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
    email: "salon@email.com",
    website: "",
    bookingLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfx-d8XV8dK5MV7Ipuv1ZPb2tjcGKTUJ5n0QCYOgZIVgET7gw/viewform?usp=dialog",
    snippet: "Beauty, wellness, and personal transformation in a refined private setting.",
    description:
      "A salon experience centered on color, styling, care, confidence, and quiet luxury.",
  },
];

const tierStyles: Record<Partner["tier"], string> = {
  "Registry Listing": "registry",
  "Featured House": "featured",
  "Founding House": "founding",
  "Inner Circle": "inner",
};

function Badge({
  children,
  tone = "registry",
}: {
  children: ReactNode;
  tone?: string;
}) {
  return <span className={`pai-badge ${tone}`}>{children}</span>;
}

function AwakeningChamber({ featuredName }: { featuredName: string }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % awakeningSequence.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const active = awakeningSequence[activeStep];
  const waterSilent = activeStep >= 1 && activeStep <= 6;
  const revealing = activeStep === 5;

  return (
    <section className="pai-chamber">
      <div className="pai-chamber-bg" />
      <motion.div
        className="pai-red-orbit"
        animate={{ opacity: [0.28, 0.74, 0.28], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {Array.from({ length: 26 }, (_, index) => (
        <motion.span
          key={index}
          className="pai-dust"
          style={{
            left: `${8 + ((index * 37) % 84)}%`,
            top: `${12 + ((index * 19) % 72)}%`,
          }}
          animate={{ opacity: [0.08, 0.72, 0.08], y: [0, -18, 0] }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.18,
          }}
        />
      ))}

      <div className="pai-chamber-content">
        <div className="pai-chamber-copy">
          <p className="pai-eyebrow">Wednesday Awakening Sequence</p>
          <h1>The PAI System</h1>
          <p>
            Water recedes. The chamber stills. Ancient mechanisms awaken beneath
            the sanctuary as the Featured House transitions within the spotlight.
          </p>
        </div>

        <div className="pai-ritual-stage">
          <motion.div
            className={`pai-water ${waterSilent ? "is-silent" : ""}`}
            animate={{ scaleX: waterSilent ? 0.4 : 1, opacity: waterSilent ? 0.18 : 0.68 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <motion.div
            className="pai-statue left"
            animate={{ rotate: activeStep >= 2 ? -8 : -24, x: activeStep >= 2 ? 12 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            P
          </motion.div>
          <motion.div
            className="pai-statue center"
            animate={{ y: activeStep >= 3 ? -8 : 0, opacity: activeStep >= 3 ? 0.95 : 0.62 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            A
          </motion.div>
          <motion.div
            className="pai-statue right"
            animate={{ rotate: activeStep >= 2 ? 8 : 24, x: activeStep >= 2 ? -12 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            I
          </motion.div>

          <motion.div
            className="pai-spotlight-beam"
            animate={{ opacity: activeStep >= 4 && activeStep <= 6 ? 1 : 0.18 }}
            transition={{ duration: 0.9 }}
          />

          <motion.div
            className="pai-featured-name"
            animate={{
              opacity: revealing ? [0.2, 1, 0.85] : 0.92,
              filter: revealing ? ["blur(10px)", "blur(0px)", "blur(0px)"] : "blur(0px)",
            }}
            transition={{ duration: 1.2 }}
          >
            {featuredName}
          </motion.div>
        </div>

        <div className="pai-active-step">
          <span>{active.step}</span>
          <div>
            <h2>{active.title}</h2>
            <p>{active.description}</p>
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
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="pai-partner-card"
    >
      <div className="pai-card-top">
        <div>
          <div className="pai-card-title-row">
            {partner.featured && <Star />}
            <h3>{partner.name}</h3>
          </div>
          <p>{partner.category}</p>
        </div>
        <Badge tone={tierStyles[partner.tier]}>{partner.tier}</Badge>
      </div>

      <div className="pai-image-box">
        <span>{partner.name.split(" ").map((part) => part[0]).join("").slice(0, 3)}</span>
      </div>

      <p className="pai-snippet">{partner.snippet}</p>

      <div className="pai-contact-list">
        {partner.phone && (
          <a href={`tel:${partner.phone.replace(/[^0-9+]/g, "")}`}>
            <Phone /> {partner.phone}
          </a>
        )}
        {partner.email && (
          <a href={`mailto:${partner.email}`}>
            <Mail /> {partner.email}
          </a>
        )}
        {partner.website && (
          <a href={partner.website} target="_blank" rel="noreferrer">
            <Globe /> Website
          </a>
        )}
      </div>

      <div className="pai-card-actions">
        <button onClick={() => onSelect(partner)}>View Featured Page</button>
        {partner.bookingLink && (
          <a href={partner.bookingLink} target="_blank" rel="noreferrer">
            Book <ExternalLink />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function AddPartnerPanel({
  partners,
  setPartners,
}: {
  partners: Partner[];
  setPartners: Dispatch<SetStateAction<Partner[]>>;
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
    });
  }

  return (
    <section className="pai-admin-panel">
      <div>
        <p className="pai-eyebrow">Private Admin</p>
        <h2>Add Business Member</h2>
      </div>

      <div className="pai-admin-grid">
        <input placeholder="Business name" value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} />
        <input placeholder="Category" value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value })} />
        <select value={draft.tier} onChange={(event) => setDraft({ ...draft, tier: event.target.value as Partner["tier"] })}>
          <option>Registry Listing</option>
          <option>Featured House</option>
          <option>Founding House</option>
          <option>Inner Circle</option>
        </select>
        <input placeholder="Phone number" value={draft.phone} onChange={(event) => setDraft({ ...draft, phone: event.target.value })} />
        <input placeholder="Email" value={draft.email} onChange={(event) => setDraft({ ...draft, email: event.target.value })} />
        <input placeholder="Website" value={draft.website} onChange={(event) => setDraft({ ...draft, website: event.target.value })} />
        <input className="wide" placeholder="Booking link" value={draft.bookingLink} onChange={(event) => setDraft({ ...draft, bookingLink: event.target.value })} />
        <input className="wide" placeholder="Short spotlight snippet" value={draft.snippet} onChange={(event) => setDraft({ ...draft, snippet: event.target.value })} />
        <textarea className="wide" placeholder="Full business description" value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} />
      </div>

      <button className="pai-add-button" onClick={addPartner}>
        <Plus /> Add Partner
      </button>
    </section>
  );
}

export default function PAIDirectoryApp() {
  const [partners, setPartners] = useState<Partner[]>(initialPartners);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Partner>(initialPartners[0]);
  const [showAdmin, setShowAdmin] = useState(false);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(partners.map((partner) => partner.category).filter(Boolean)))],
    [partners],
  );

  const featured = partners.find((partner) => partner.featured) || partners[0];

  const filtered = partners.filter((partner) => {
    const haystack = [partner.name, partner.category, partner.snippet, partner.description]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === "All" || partner.category === category);
  });

  return (
    <main className="pai-page">
      <a className="pai-return" href="/">
        Return to Duyen An
      </a>

      <AwakeningChamber featuredName={featured.name} />

      <header className="pai-directory-header">
        <div>
          <p className="pai-eyebrow">Passage · Alignment · Intelligence</p>
          <h1>PAI Directory</h1>
          <p>A curated network of trusted services, featured houses, and private partners.</p>
        </div>
        <nav>
          <a href="#directory">Directory</a>
          <a href="#featured">Featured</a>
          <button onClick={() => setShowAdmin((current) => !current)}>Admin</button>
        </nav>
      </header>

      {showAdmin && <AddPartnerPanel partners={partners} setPartners={setPartners} />}

      <section id="featured" className="pai-current-spotlight">
        <div>
          <Badge tone="inner">
            <Crown /> Current Spotlight
          </Badge>
          <h2>{featured.name}</h2>
          <p>{featured.snippet}</p>
          <button onClick={() => setSelected(featured)}>Click Here</button>
        </div>
        <div className="pai-gem-card">
          <Gem />
          <p>Wednesday Cycle</p>
          <span>The featured house changes during the awakening sequence.</span>
        </div>
      </section>

      <section id="directory" className="pai-filter-bar">
        <label>
          <Search />
          <input placeholder="Search the directory" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label>
          <Filter />
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </section>

      <section className="pai-partner-grid">
        {filtered.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} onSelect={setSelected} />
        ))}
      </section>

      <section className="pai-feature-profile">
        <button onClick={() => setSelected(featured)}>Refresh Featured View</button>
        <div className="pai-profile-grid">
          <div className="pai-profile-mark">
            <Gem />
            <h2>{selected.name}</h2>
            <p>{selected.category}</p>
          </div>
          <div className="pai-profile-copy">
            <Badge tone={tierStyles[selected.tier]}>{selected.tier}</Badge>
            <h3>Featured House Profile</h3>
            <p>{selected.description}</p>
            <div className="pai-card-actions left">
              {selected.website && (
                <a href={selected.website} target="_blank" rel="noreferrer">
                  Website <ExternalLink />
                </a>
              )}
              {selected.bookingLink && (
                <a href={selected.bookingLink} target="_blank" rel="noreferrer">
                  Book / Contact <ExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
