interface PartnershipDirectoryProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function PartnershipDirectory({ onNavigate }: PartnershipDirectoryProps) {
  const gold = '#d4af37';

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
    heading: {
      fontSize: '3em',
      fontWeight: 100,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      color: gold,
    },
    text: {
      color: '#888',
      fontSize: '1.2em',
      maxWidth: '600px',
      textAlign: 'center' as const,
    },
    button: {
      marginTop: '30px',
      padding: '15px 30px',
      background: 'transparent',
      border: `1px solid ${gold}`,
      color: gold,
      cursor: 'pointer',
      fontSize: '14px',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Partnership Directory</h1>
      <p style={styles.text}>
        Connect with our network of trusted partners. Join our preferred partner program 
        to expand your business reach.
      </p>
      <button style={styles.button} onClick={() => onNavigate('landing')}>
        Back to Home
      </button>
    </div>
  );
}

export default PartnershipDirectory;
