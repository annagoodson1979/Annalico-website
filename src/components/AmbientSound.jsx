import { useRef, useState } from "react";

export default function AmbientSound() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.22;
      await audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/house-of-yen-ambient.mp3" loop />

      <button onClick={toggleSound} className="sound-toggle">
        {playing ? "Sound On" : "Sound Off"}
      </button>
    </>
  );
}
