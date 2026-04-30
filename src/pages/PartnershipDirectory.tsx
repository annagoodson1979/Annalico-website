import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';
import { featuredListings, getWeeklyFeaturedListing } from '../data/featuredListings';

interface PartnershipDirectoryProps {
  onNavigate: (page: Page) => void;
}

function PartnershipDirectory({ onNavigate }: PartnershipDirectoryProps) {
  const gold = '#d4af37';
  const logoImage = '/images/logo5.jpg';
  const weeklyListing = getWeeklyFeaturedListing();

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
      maxWidth: '980px',
      margin: '0 auto',
      display: 'grid',
      gap: '24px',
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
    spotlight: {
      border: '1px solid rgba(212, 175, 55, 0.26)',
      borderRadius: '24px',
      background: 'linear-gradient(180deg, rgba(16,16,16,0.96) 0%, rgba(7,7,7,0.98) 100%)',
      padding: '28px',
      display: 'grid',
      gridTemplateColumns: '86px 1fr',
      gap: '20px',
      alignItems: 'center',
      boxShadow: '0 22px 40px rgba(0,0,0,0.3)',
    },
    spotlightLogo: {
      width: '86px',
      height: '86px',
      borderRadius: '18px',
      objectFit: 'cover' as const,
      objectPosition: 'center' as const,
      border: '1px solid rgba(255,255,255,0.08)',
      background: '#070707',
    },
    spotlightEyebrow: {
      margin: 0,
      color: gold,
      fontSize: '0.66rem',
      letterSpacing: '3px',
      textTransform: 'uppercase' as const,
    },
    spotlightTitle: {
      margin: '8px 0 6px',
      color: '#f4efe8',
      fontSize: '1.35rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
    spotlightSub: {
      margin: 0,
      color: '#b8b0a4',
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '18px',
      marginTop: '8px',
    },
    card: {
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '18px',
      padding: '24px 22px',
      background: 'rgba(10,10,10,0.72)',
      boxShadow: '0 18px 36px rgba(0,0,0,0.28)',
      textAlign: 'left' as const,
    },
    cardSnippet: {
      margin: '10px 0 0',
      color: '#d2c8bd',
      fontSize: '0.95rem',
      lineHeight: 1.7,
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
    callout: {
      marginTop: '4px',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '22px',
      padding: '26px 24px',
      background: 'rgba(10,10,10,0.66)',
      textAlign: 'center' as const,
      display: 'grid',
      gap: '12px',
    },
    calloutTitle: {
      margin: 0,
      color: gold,
      fontSize: '1rem',
      letterSpacing: '3px',
      textTransform: 'uppercase' as const,
    },
    calloutText: {
      margin: 0,
      color: '#b8b0a4',
      fontSize: '0.96rem',
      lineHeight: 1.8,
      maxWidth: '700px',
      justifySelf: 'center' as const,
    },
    calloutButton: {
      justifySelf: 'center' as const,
      background: 'transparent',
      color: '#f4efe8',
      border: '1px solid rgba(212, 175, 55, 0.34)',
      borderRadius: '999px',
      padding: '11px 18px',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      fontSize: '0.7rem',
      cursor: 'pointer',
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
        <h1 style={styles.heading}>Featured Listings</h1>
        <p style={styles.text}>
          A rotating Yen Circle feature for businesses that want a polished place to be seen, shared, and discovered.
        </p>
        <section style={styles.spotlight}>
          <img src={weeklyListing.logo} alt={weeklyListing.name} style={styles.spotlightLogo} />
          <div>
            <p style={styles.spotlightEyebrow}>This Week&apos;s Spotlight</p>
            <h2 style={styles.spotlightTitle}>{weeklyListing.name}</h2>
            <p style={styles.spotlightSub}>{weeklyListing.description}</p>
          </div>
        </section>
        <div style={styles.cardGrid}>
          {featuredListings.map((entry) => (
            <section key={entry.name} className="info-hover-card" style={styles.card}>
              <p style={styles.cardTitle}>
                <strong>{entry.name}</strong>
              </p>
              <p style={styles.cardSnippet}>
                {entry.subtitle}
                <br />
                {entry.snippet}
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
        <section style={styles.callout}>
          <h2 style={styles.calloutTitle}>Want Your Business Featured?</h2>
          <p style={styles.calloutText}>
            Yen Circle is a place for polished businesses to gain extra exposure through a rotating featured listing and a dedicated directory presence.
          </p>
          <button style={styles.calloutButton} onClick={() => onNavigate('contact')}>
            Ask About Exposure
          </button>
        </section>
      </div>
      <SiteFooter compact />
    </div>
  );
}

export default PartnershipDirectory;
