export default function LockedHouseOfJade() {
  return (
    <section id="house-of-jade-preview" className="locked-jade">
      <div className="locked-jade-gradient" />

      <div className="locked-jade-grid">
        <div className="locked-jade-visual">
          <div className="locked-jade-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="locked-jade-water" />
          <div className="locked-jade-arch" />

          <div className="locked-jade-veil">
            <div className="locked-jade-mark">{"\u25cc"}</div>
            <p>Future Expansion</p>
          </div>
        </div>

        <div className="locked-jade-copy">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">
            House of Jade
          </p>

          <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
            Waiting beyond the Yen circle.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/65">
            Beyond the bamboo and flowing water, the future wing remains quietly
            suspended in anticipation.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/65">
            The House of Jade is intentionally veiled, a future chapter of
            {" Duy\u00ean \u00c2n "}still waiting to awaken.
          </p>

          <button type="button" disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}
