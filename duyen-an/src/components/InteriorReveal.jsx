import FloatingJadeCore from "./FloatingJadeCore";
import LuxuryPanel from "./LuxuryPanel";

export default function InteriorReveal() {
  return (
    <section className="interior-reveal">
      <div className="interior-reveal-gradient" />
      <div className="interior-reveal-glow" />

      <div className="interior-reveal-grid">
        <div className="interior-reveal-copy">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">
            Entering the House
          </p>

          <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
            The atmosphere changes.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Deep reds, lantern glow, reflective stone, and towering pillars shift the
            arrival from exterior warmth into ceremonial stillness.
          </p>
        </div>

        <LuxuryPanel className="interior-panel">
          <div className="interior-stage">
            <div className="interior-stage-gradient" />
            <div className="interior-pillar interior-pillar-left" />
            <div className="interior-pillar interior-pillar-right" />
            <div className="interior-lantern interior-lantern-center" />
            <div className="interior-lantern interior-lantern-left" />
            <div className="interior-lantern interior-lantern-right" />
            <FloatingJadeCore />
          </div>
        </LuxuryPanel>
      </div>
    </section>
  );
}
