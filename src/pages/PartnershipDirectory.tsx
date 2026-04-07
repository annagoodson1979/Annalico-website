interface PartnershipDirectoryProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

import SiteFooter from '../components/SiteFooter';

function PartnershipDirectory({ onNavigate }: PartnershipDirectoryProps) {
  const gold = '#d4af37';
  const logoAccent = '#f3efec';
  const logoImage = '/images/logo5.jpg';

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      color: '#fff',
      paddingTop: '120px',
      boxSizing: 'border-box',
    },
    content: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    },
    logoButton: {
      position: 'fixed' as const,
      top: '20px',
      left: '20px',
      width: '74px',
      height: '74px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: `1px solid ${logoAccent}`,
      background: '#080808',
      cursor: 'pointer',
      boxShadow: '0 0 24px rgba(236, 156, 188, 0.48)',
      padding: 0,
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      objectPosition: 'center' as const,
      scale: '1.16',
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
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pageLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 22px rgba(236, 156, 188, 0.4); }
          50% { transform: scale(1.012); box-shadow: 0 0 30px rgba(236, 156, 188, 0.56); }
        }
      `}</style>
      <button style={{ ...styles.logoButton, animation: 'pageLogoPulse 2.6s ease-in-out infinite' }} onClick={() => onNavigate('landing')} aria-label="Back to landing">
        <img src={logoImage} alt="Anna-Li Co." style={styles.logoImage} />
      </button>
      <div style={styles.content}>
        <h1 style={styles.heading}>Partnership Directory</h1>
        <p style={styles.text}>
          Connect with our network of trusted partners. Join our preferred partner program 
          to expand your business reach.
        </p>
      </div>
      <SiteFooter compact />
    </div>
  );
}

export default PartnershipDirectory;
