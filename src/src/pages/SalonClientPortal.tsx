interface SalonClientPortalProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function SalonClientPortal({ onNavigate }: SalonClientPortalProps) {
  const gold = '#d4af37';

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: '100px 20px' }}>
      <h1 style={{ color: gold, textAlign: 'center', fontWeight: 100, letterSpacing: '4px' }}>Client Portal</h1>
      <p style={{ color: '#888', textAlign: 'center', marginTop: '20px' }}>Coming soon...</p>
      <button 
        onClick={() => onNavigate('landing')}
        style={{
          display: 'block',
          margin: '40px auto',
          background: 'transparent',
          border: `1px solid ${gold}`,
          color: gold,
          padding: '10px 30px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default SalonClientPortal;
