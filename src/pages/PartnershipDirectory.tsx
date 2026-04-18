import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';

interface PartnershipDirectoryProps {
  onNavigate: (page: Page) => void;
}

const directoryEntries = [
  {
    name: 'Seal and Stamp Notary',
    email: 'info@ynxnotary.com',
    phone: '(972) 900-7147',
  },
  {
    name: 'Anna Salon Studio',
    email: 'info@ynxnotary.com',
    phone: '(972) 900-7147',
  },
];

function PartnershipDirectory({ onNavigate }: PartnershipDirectoryProps) {
  const gold = '#d4af37';
  const logoImage = '/images/llc2.jpg';

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column' as const,
      color: '#fff',
      paddingTop: '120px',
      boxSizing: 'border-box',
    },
    content: {
      flex: 1,
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'grid',
      gap: '20px',
      padding: '20px 20px 48px',
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
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      boxShadow: '0 0 24px rgba(236, 156, 188, 0.48)',
      padding: 0,
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      objectPosition: 'center' as const,
      scale: '1.08',
    },
    heading: {
      fontSize: 'clamp(2rem, 4vw, 3.1rem)',
      fontWeight: 400,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      margin: '0 0 6px',
      color: gold,
      textAlign: 'center' as const,
      fontFamily: "'Cinzel', serif",
    },
    text: {
      color: '#a39b8f',
      fontSize: '1rem',
      maxWidth: '680px',
      textAlign: 'center' as const,
      margin: '0 auto',
      lineHeight: 1.8,
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '18px',
      marginTop: '12px',
    },
    card: {
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '18px',
      padding: '24px 22px',
      background: 'rgba(10,10,10,0.72)',
      boxShadow: '0 18px 36px rgba(0,0,0,0.28)',
      textAlign: 'left' as const,
    },
    cardTitle: {
      margin: 0,
      color: '#f4efe8',
      fontSize: '1.15rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    cardMeta: {
      margin: '10px 0 0',
      color: '#b8b0a4',
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
    metaLink: {
      color: '#e7d4dc',
      textDecoration: 'none',
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
          Connect with featured business affiliates and direct contacts across the Yen An network.
        </p>
        <div style={styles.cardGrid}>
          {directoryEntries.map((entry) => (
            <section key={entry.name} className="info-hover-card" style={styles.card}>
              <p style={styles.cardTitle}>
                <strong>{entry.name}</strong>
              </p>
              <p style={styles.cardMeta}>
                <a href={`mailto:${entry.email}`} style={styles.metaLink}>
                  {entry.email}
                </a>
                <br />
                {entry.phone}
              </p>
            </section>
          ))}
        </div>
      </div>
      <SiteFooter compact />
    </div>
  );
}

export default PartnershipDirectory;
