import { useState } from "react";

export default function CinematicVideoLayer({ src, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <video
      className={`cinematicVideoLayer ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onError={() => setFailed(true)}
    />
  );
}
