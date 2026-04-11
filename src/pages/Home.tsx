import type { CSSProperties } from 'react';
import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';

const landingLogo = '/images/logo5.jpg';
const notaryLogo = '/images/sealandstamp.jpeg';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function Home({ onNavigate }: HomeProps) {
  const gold = '#d4af37';
  const logoAccent = '#f3efec';
  const paper = '#f2efe8';
  const footerHeight = 52;
  const navHeight = 74;

  const styles: Record<string, CSSProperties> = {
    page: {
      height: '100vh',
      background: '#050505',
      color: '#fff',
      position: 'relative',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    backgroundOverlay: {
      position: 'absolute',
      inset: 0,
      background:
        'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 32%), linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.5) 100%)',
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
      top: '50%',
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
      scale: '1.08',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      boxShadow: '0 0 34px rgba(236, 156, 188, 0.62)',
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
    navButtonPlaceholder: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.7em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      background: 'transparent',
      border: 'none',
      margin: 0,
      padding: '8px 16px',
      width: '184px',
      textAlign: 'center',
      visibility: 'hidden',
      pointerEvents: 'none',
    },
    hero: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${navHeight + 12}px 24px 12px`,
      boxSizing: 'border-box',
      minHeight: `calc(100vh - ${navHeight}px - ${footerHeight}px)`,
    },
    logoGhost: {
      position: 'absolute',
      width: 'min(62vw, 660px)',
      aspectRatio: '1 / 1',
      objectFit: 'contain',
      opacity: 0.12,
      filter: 'grayscale(0.08) drop-shadow(0 0 28px rgba(212, 175, 55, 0.16))',
      pointerEvents: 'none',
    },
    intro: {
      width: 'min(900px, 100%)',
      padding: '32px 24px',
      textAlign: 'center',
    },
    title: {
      margin: 0,
      color: gold,
      fontSize: 'clamp(2.25rem, 5vw, 4.4rem)',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontWeight: 500,
      textAlign: 'center',
      fontFamily: "'Cinzel', serif",
      textShadow: '0 0 24px rgba(212, 175, 55, 0.16)',
    },
    titleSub: {
      margin: '6px 0 0',
      color: paper,
      fontSize: 'clamp(1.25rem, 2.4vw, 2rem)',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '5px',
      textAlign: 'center',
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
    },
    line: {
      width: '118px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.35)',
      margin: '20px auto 18px',
    },
    snippet: {
      margin: '14px auto 0',
      maxWidth: 'none',
      color: '#ddd4c8',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '0.98rem',
      lineHeight: 1.2,
      textAlign: 'center',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap',
    },
    credentialLine: {
      margin: '14px auto 0',
      color: gold,
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.48rem',
      lineHeight: 1.4,
      textAlign: 'center',
      letterSpacing: '1.8px',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes landingLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(236, 156, 188, 0.52); }
          50% { transform: scale(1.015); box-shadow: 0 0 42px rgba(236, 156, 188, 0.72); }
        }
        .nav-hover-button:hover {
          color: #d4af37 !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(212, 175, 55, 0.35);
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
          <button aria-hidden="true" tabIndex={-1} style={styles.navButtonPlaceholder}>
            Back
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('services')}>
            Services & Prices
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('documents')}>
            Documents I Sign
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>
            Contact
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('hire')}>
            Work With Me
          </button>
        </div>
      </nav>

      <main style={styles.hero}>
        <img src={notaryLogo} alt="" style={styles.logoGhost} />
        <section style={styles.intro}>
          <h1 style={styles.title}>Seal and Stamp</h1>
          <p style={styles.titleSub}>Notary</p>
          <p style={styles.credentialLine}>
            NNA Certified in Both Notary Signing Agent and RON | IPEN Available
          </p>
          <div style={styles.line} />
          <p style={styles.snippet}>
            Mobile, remote, and electronic notarization for legal, business, and everyday documents.
          </p>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}

export default Home;
