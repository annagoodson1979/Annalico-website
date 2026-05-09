import { motion } from "framer-motion";

const businesses = [
  {
    name: "Salon Studio 21",
    description: "A refined beauty destination illuminated along the House of Yen pathway.",
  },
  {
    name: "YNX Notary",
    description: "Professional services presented with clarity, trust, and elegance.",
  },
];

export default function FeaturedBusinesses() {
  return (
    <div className="featured-businesses">
      <div className="featured-businesses-header">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">Inside the House</p>
        <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
          Featured Businesses
        </h2>
        <span className="mt-6 text-lg leading-relaxed text-white/65">
          As the guest moves deeper into the House of Yen, each business awakens
          through light, reflection, and presence.
        </span>
      </div>

      <div className="featured-businesses-grid">
        {businesses.map((business) => (
          <motion.article
            key={business.name}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="featured-business-card"
          >
            <div className="featured-business-glow" />
            <h3>{business.name}</h3>
            <p>{business.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
