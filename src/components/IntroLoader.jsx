import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="intro-loader">
      <div className="intro-mark">Duyên Ân</div>
      <div className="intro-line" />
      <p>House of Yên</p>
    </div>
  );
}
