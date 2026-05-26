import { useRef, useState } from "react";

export default function AmbientSound() {
  const audioRef = useRef(null);
  const ambientRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  const stopGeneratedAmbience = () => {
    const ambient = ambientRef.current;

    if (!ambient) return;

    ambient.gain.gain.setTargetAtTime(0.0001, ambient.context.currentTime, 0.08);

    window.setTimeout(() => {
      ambient.oscillators.forEach((oscillator) => oscillator.stop());
      ambient.context.close();
      ambientRef.current = null;
      setUsingFallback(false);
    }, 220);
  };

  const startGeneratedAmbience = async () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const oscillators = [context.createOscillator(), context.createOscillator()];

    filter.type = "lowpass";
    filter.frequency.value = 620;
    gain.gain.value = 0.0001;

    oscillators[0].type = "sine";
    oscillators[0].frequency.value = 110;
    oscillators[1].type = "triangle";
    oscillators[1].frequency.value = 146.83;

    oscillators.forEach((oscillator) => {
      oscillator.connect(filter);
      oscillator.start();
    });

    filter.connect(gain);
    gain.connect(context.destination);

    await context.resume();
    gain.gain.setTargetAtTime(0.12, context.currentTime, 0.18);

    ambientRef.current = { context, gain, oscillators };
    setUsingFallback(true);
  };

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (playing) {
      audio?.pause();
      stopGeneratedAmbience();
      setPlaying(false);
    } else {
      if (!audio) return;

      audio.volume = 0.22;
      try {
        await audio.play();
        setUsingFallback(false);
        setPlaying(true);
      } catch {
        await startGeneratedAmbience();
        setPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/house-of-yen-ambient.mp3" loop />

      <button onClick={toggleSound} className="sound-toggle">
        {playing
          ? usingFallback
            ? "Ambient On"
            : "Sound On"
          : "Turn Sound On"}
      </button>
    </>
  );
}
