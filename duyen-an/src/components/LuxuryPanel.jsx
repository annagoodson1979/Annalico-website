export default function LuxuryPanel({ children, className = "" }) {
  return (
    <div className={`luxury-panel ${className}`}>
      <div className="luxury-panel-bleed" aria-hidden="true">
        <div />
      </div>
      <div className="luxury-panel-edge" aria-hidden="true" />
      <div className="luxury-panel-content">{children}</div>
    </div>
  );
}
