"use client";

import { useState } from "react";

const correctCode = "OG-POP";

export default function PromoPage() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  function unlockPage(event) {
    event.preventDefault();

    if (code.trim().toUpperCase() === correctCode) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Invalid access code");
    }
  }

  return (
    <main>
      <h1>Enter Promo Code</h1>
      <p>Use your private access code to open the Olivia booking landing page.</p>

      <form onSubmit={unlockPage}>
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Enter Promo Code"
        />

        <button type="submit">Unlock</button>
      </form>

      {error ? <p>{error}</p> : null}

      {unlocked ? (
        <div>
          <p>Access granted.</p>
          <a href="/notary/olivia">Continue to Olivia Experience</a>
        </div>
      ) : null}
    </main>
  );
}
