import type { CSSProperties } from 'react';
import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';

const landingLogo = '/images/logo5.jpg';

interface SalonHomeProps {
  onNavigate: (page: Page) => void;
}

function SalonHome({ onNavigate }: SalonHomeProps) {
  const gold = '#d4af37';
  const logoAccent = '#f3efec';
  const footerHeight = 52;
  const navHeight = 74;

  const styles: Record<string, CSSProperties> = {
    page: {
      height: '100vh',
      background: '#050505',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    },
    backgroundOverlay: {
      position: 'absolute',
      inset: 0,
      background:
        'radial-gradient(circle at center, rgba(255,255,255,0.07) 0%, transparent 34%), linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.52) 100%)',
      pointerEvents: 'none',
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: `${navHeight}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      background: 'rgba(7, 7, 7, 0.92)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      zIndex: 20,
      backdropFilter: 'blur(10px)',
      gap: '20px',
    },
    navLeft: {
      position: 'absolute',
      left: '20px',
      top: '52%',
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
    },
    navLogo: {
      width: '74px',
      height: '74px',
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center',
      scale: '1.02',
      border: `1px solid ${logoAccent}`,
      background: '#080808',
      cursor: 'pointer',
      boxShadow: '0 0 26px rgba(236, 156, 188, 0.52)',
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      fontFamily: "'Montserrat', sans-serif",
      justifyContent: 'center',
    },
    navDivider: {
      width: '2px',
      height: '20px',
      background: '#333',
    },
    navButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.7em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#888',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: 0,
      padding: '8px 16px',
      width: '184px',
      textAlign: 'center',
    },
    hero: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      minHeight: `calc(100vh - ${navHeight}px - ${footerHeight}px)`,
      maxHeight: `calc(100vh - ${navHeight}px - ${footerHeight}px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${navHeight + 12}px 24px 12px`,
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    logoGhost: {
      position: 'absolute',
      width: 'min(48vw, 520px)',
      height: 'min(68vh, 620px)',
      objectFit: 'contain',
      opacity: 0.12,
      filter: 'drop-shadow(0 0 28px rgba(212, 175, 55, 0.14))',
      pointerEvents: 'none',
    },
    intro: {
      width: 'min(920px, 100%)',
      background: 'linear-gradient(180deg, rgba(10,10,10,0.28) 0%, rgba(10,10,10,0.14) 100%)',
      border: '1px solid rgba(212, 175, 55, 0.16)',
      borderRadius: '38px',
      padding: '42px 40px',
      textAlign: 'center',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 24px 54px rgba(0,0,0,0.26)',
    },
    eyebrow: {
      margin: 0,
      color: '#d6c09a',
      fontSize: '10px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Montserrat', sans-serif",
    },
    title: {
      margin: '18px 0 10px',
      color: gold,
      fontSize: 'clamp(3rem, 6.8vw, 5.6rem)',
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontWeight: 500,
      fontFamily: "'Cinzel', serif",
      textShadow: '0 0 24px rgba(212, 175, 55, 0.16)',
    },
    subtitle: {
      margin: 0,
      color: '#f4efe6',
      fontSize: '0.98rem',
      lineHeight: 1.4,
      maxWidth: '28ch',
      marginInline: 'auto',
    },
    line: {
      width: '118px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.35)',
      margin: '20px auto 22px',
    },
    copy: {
      margin: '0 auto',
      color: '#ddd4c8',
      fontSize: '0.92rem',
      lineHeight: 1.6,
      maxWidth: '52ch',
    },
    metaRow: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '10px 16px',
      marginTop: '18px',
      color: '#cdbc9f',
      fontSize: '0.82rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes landingLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 24px rgba(236, 156, 188, 0.42); }
          50% { transform: scale(1.015); box-shadow: 0 0 32px rgba(236, 156, 188, 0.58); }
        }
        .nav-hover-button:hover {
          color: #f3efec !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(243, 239, 236, 0.35);
        }
      `}</style>
      <div style={styles.backgroundOverlay} />

      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <img
            src={landingLogo}
            alt="Anna-Li Co."
            style={{ ...styles.navLogo, animation: 'landingLogoPulse 2.6s ease-in-out infinite' }}
            onClick={() => onNavigate('landing')}
          />
        </div>
        <div style={styles.navDivider}></div>

        <div style={styles.navRight}>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('salon-packages')}>
            Packages
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('salon-portal')}>
            Client Portal
          </button>
          <button
            className="nav-hover-button"
            style={{ ...styles.navButton, color: '#f3efec', fontWeight: 500, textShadow: '0 0 10px rgba(243, 239, 236, 0.3)' }}
            onClick={() => onNavigate('did-you-know')}
          >
            Did You Know?
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>
            Contact
          </button>
        </div>
      </nav>

      <main style={styles.hero}>
        <section className="info-hover-card" style={styles.intro}>
          <p style={styles.eyebrow}>Hair • Beauty • Client Care</p>
          <h1 style={styles.title}>Salon</h1>
          <p style={styles.subtitle}>Personalized beauty services with polished results and easy booking paths.</p>
          <div style={styles.line} />
          <p style={styles.copy}>
            A simple introduction to the salon side of the brand. Clients can quickly move into
            packages, portal access, or contact.
          </p>
          <div style={styles.metaRow}>
            <span>Healthy Hair</span>
            <span>Polished Results</span>
            <span>Client Comfort</span>
            <span>Packages</span>
            <span>Appointments</span>
          </div>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}

export default SalonHome;
