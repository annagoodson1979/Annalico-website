import FloatingJadeCore from "./FloatingJadeCore";

export default function HouseOfYenWelcome() {
  return (
    <div className="house-welcome">
        <div className="house-welcome-copy">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">House of Yen</p>
        <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
          A foyer of lantern light, jade, and quiet ceremony.
        </h2>
        <span className="mt-6 text-lg leading-relaxed text-white/65">
          Step beyond the grand doors into deep reds, reflective stone, towering pillars,
          and the illuminated jade monolith that anchors the House of Yen.
        </span>
        </div>

        <div className="house-welcome-visual" aria-hidden="true">
        <div className="amber-blur-wash" />
        <div className="house-welcome-shade" />
        <div className="house-welcome-aura" />
        <FloatingJadeCore className="house-welcome-jade" />
        <div className="house-welcome-floor" />
        </div>
    </div>
  );
}
