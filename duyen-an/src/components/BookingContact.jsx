import LuxuryButton from "./LuxuryButton";

export default function BookingContact() {
  return (
    <div className="booking-contact">
      <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-200/70">Begin Your Visit</p>
      <h2 className="font-rosella text-5xl md:text-7xl leading-[0.95] tracking-[0.01em]">
        Enter the House of Yen.
      </h2>
      <span className="mt-6 text-lg leading-relaxed text-white/65">
        Discover featured businesses, book an experience, or inquire about becoming
        part of the Duyen An story.
      </span>
      <div className="booking-actions">
        <LuxuryButton href="/booking">Book a Visit</LuxuryButton>
        <LuxuryButton href="/contact">Contact House of Yen</LuxuryButton>
      </div>
    </div>
  );
}
