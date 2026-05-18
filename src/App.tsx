import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { BadgePercent, Heart, PartyPopper, Sparkles } from "lucide-react";
import IntroLoader from "./components/IntroLoader";
import AutoJourney from "./components/AutoJourney";
import AmbientSound from "./components/AmbientSound";
import BookingRequest from "./components/BookingRequest";
import "./App.css";

const promoCode = "OG-POP";
const promoStorageKey = "ynxPromoUnlocked";

function SalonPage() {
  return (
    <main className="simple-route-page salon-route-page">
      <a className="route-back-link" href="/">
        Duyên Ân
      </a>

      <section className="simple-route-content">
        <p className="section-kicker">Salon Studio 21</p>
        <h1>Salon Studio 21</h1>
        <p>
          Personalized beauty services with polished results, warm care, and an
          easy request path.
        </p>

        <div className="route-actions">
          <a href="/appointments">Request Appointment</a>
          <a href="/notary">Notary Services</a>
        </div>
      </section>
    </main>
  );
}

function NotaryPage() {
  return (
    <main className="simple-route-page notary-route-page">
      <a className="route-back-link" href="/">
        Duyên Ân
      </a>

      <section className="simple-route-content">
        <p className="section-kicker">YNX Notary</p>
        <h1>Notary Services</h1>
        <p>Professional mobile and document services.</p>

        <div className="route-actions">
          <a href="/notary/book">Reserve Appointment</a>
          <a href="/notary/promo">Promo Code Access</a>
        </div>
      </section>
    </main>
  );
}

function PromoPage() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const unlockPromo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.trim().toUpperCase() === promoCode) {
      sessionStorage.setItem(promoStorageKey, "true");
      setUnlocked(true);
      setError("");
      return;
    }

    setError("Invalid access code");
  };

  return (
    <main className="simple-route-page promo-route-page">
      <a className="route-back-link" href="/notary">
        YNX Notary
      </a>

      <section className="simple-route-content promo-route-content">
        <p className="section-kicker">Private Promo</p>
        <h1>Enter Promo Code</h1>
        <p>Use your private access code to open the Olivia booking landing page.</p>

        <form className="promo-code-form" onSubmit={unlockPromo}>
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter Promo Code"
          />
          <button type="submit">Unlock</button>
        </form>

        {error ? <p className="promo-error">{error}</p> : null}

        {unlocked ? (
          <div className="promo-unlocked">
            <p>Access granted.</p>
            <a href="/notary/olivia">Continue to Olivia Experience</a>
          </div>
        ) : null}
      </section>
    </main>
  );
}

function OliviaLanding() {
  return (
    <main className="olivia-landing">
      <section className="olivia-hero">
        <div className="olivia-hero-bg" />

        <div className="olivia-container">
          <div className="olivia-card olivia-hero-card">
            <p className="olivia-pill">
              <Heart className="olivia-pill-icon" />
              A special thank you from Olivia & Mom
            </p>

            <h1>Welcome Olivia's Friends & Families!</h1>

            <p>
              Thank you for being part of Olivia's village. As a small thank you
              to her classmates, school friends, teachers, and parents, I wanted
              to create a little page just for you with special notary discounts
              and fun options.
            </p>

            <div className="private-code-badge">
              <p>Private Access Code</p>
              <strong>OG-POP</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="olivia-benefits">
        <div className="olivia-benefit-grid">
          <article className="olivia-card olivia-benefit-card">
            <BadgePercent className="olivia-icon pink" />
            <h2>School Family Discount</h2>
            <p>
              Use the special code below when booking to receive 15% off your
              notarization appointment.
            </p>
            <div className="olivia-callout pink-callout">
              Code: <span>OG-POP</span>
              <br />
              15% off for Olivia's school friends, families, and teachers.
            </div>
          </article>

          <article className="olivia-card olivia-benefit-card">
            <PartyPopper className="olivia-icon emerald" />
            <h2>Fun Notary Options</h2>
            <p>
              Choose from themed stamps, elegant seals, colorful signing setups,
              or a more playful experience for memorable occasions.
            </p>
            <ul>
              <li>Celebration signings</li>
              <li>Cute stationery options</li>
              <li>Elegant or modern seal styles</li>
              <li>Family-friendly atmosphere</li>
            </ul>
          </article>

          <article className="olivia-card olivia-benefit-card">
            <Sparkles className="olivia-icon amber" />
            <h2>Local & Flexible</h2>
            <p>
              Mobile and online appointments available with flexible scheduling
              for busy families, teachers, and professionals.
            </p>
            <div className="olivia-callout amber-callout">
              Use access code <span>OG-POP</span> to unlock booking access and
              apply your discount.
            </div>
          </article>
        </div>
      </section>

      <section className="olivia-thanks">
        <div className="olivia-thanks-card">
          <h2>A little thank you</h2>
          <p>
            Supporting local families and building meaningful community
            connections means a lot to us. Thank you for supporting a small
            business built with care, creativity, and heart.
          </p>
          <p className="olivia-signoff">- Olivia & Family</p>

          <a href="https://ynxnotary.com/notary">Reserve Appointment</a>
        </div>
      </section>
    </main>
  );
}

function OliviaPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(promoStorageKey) === "true");
  }, []);

  if (!unlocked) {
    return (
      <main className="simple-route-page olivia-route-page">
        <a className="route-back-link" href="/notary">
          YNX Notary
        </a>

        <section className="simple-route-content">
          <p className="section-kicker">Private Booking</p>
          <h1>Promo Code Required</h1>
          <p>This private landing page opens after entering the promo code.</p>

          <div className="route-actions">
            <a href="/notary/promo">Enter Promo Code</a>
          </div>
        </section>
      </main>
    );
  }

  return <OliviaLanding />;
}

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/salon") {
    return <SalonPage />;
  }

  if (currentPath === "/notary") {
    return <NotaryPage />;
  }

  if (currentPath === "/notary/promo") {
    return <PromoPage />;
  }

  if (currentPath === "/notary/olivia") {
    return <OliviaPage />;
  }

  if (currentPath === "/appointments" || currentPath === "/book" || currentPath === "/notary/book") {
    return (
      <>
        <BookingRequest />
        <AmbientSound />
      </>
    );
  }

  return (
    <>
      <IntroLoader />
      <AutoJourney />
      <AmbientSound />
    </>
  );
}

export default App;
