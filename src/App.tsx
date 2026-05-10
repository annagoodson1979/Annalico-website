import "./App.css";

export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/duyen-an-arrival.mp4" type="video/mp4" />
        </video>

        <div className="overlay" />

        <div className="hero-content">
          <p className="eyebrow">WELCOME TO</p>

          <h1>Duyên Ân</h1>

          <p className="subtitle">
            A hidden garden arrival into warmth, ceremony,
            and the House of Yen.
          </p>
        </div>
      </section>

      <section className="interior">
        <div className="interior-overlay" />

        <img
          src="/images/foyer.jpg"
          alt=""
          className="foyer-image"
        />

        <div className="interior-content">
          <p className="eyebrow">ENTERING THE HOUSE</p>

          <h2>The atmosphere changes.</h2>

          <p>
            Deep reds, lantern glow, reflective stone,
            and towering pillars shift the arrival
            into ceremonial stillness.
          </p>
        </div>
      </section>

      <section className="businesses">
        <div className="card">
          <h3>Salon Studio 21</h3>

          <p>
            A refined beauty destination illuminated
            along the House of Yen pathway.
          </p>
        </div>

        <div className="card">
          <h3>YNX Notary</h3>

          <p>
            Professional services presented with
            clarity, trust, and elegance.
          </p>
        </div>
      </section>

      <section className="jade">
        <img
          src="/images/house-of-jade.jpg"
          alt=""
          className="jade-image"
        />

        <div className="jade-overlay" />

        <div className="jade-content">
          <p className="eyebrow">HOUSE OF JADE</p>

          <h2>Waiting beyond the Yen circle.</h2>

          <p>
            A future chapter still hidden beyond
            bamboo, mist, and flowing water.
          </p>
        </div>
      </section>
    </main>
  );
}