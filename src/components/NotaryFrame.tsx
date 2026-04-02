import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { Page } from '../types';
import SiteFooter from './SiteFooter';

const landingLogo = '/images/logo4.jpg';
const notaryLogo = '/images/sealandstamp.jpeg';

interface NotaryFrameProps {
  children: ReactNode;
  onNavigate: (page: Page) => void;
  title: string;
  subtitle?: string;
  backTo?: Page;
  backLabel?: string;
  maxWidth?: string;
  showNavBack?: boolean;
}

function NotaryFrame({
  children,
  onNavigate,
  title,
  subtitle,
  backTo,
  backLabel = 'Back to Notary Home',
  maxWidth = '1060px',
  showNavBack = true,
}: NotaryFrameProps) {
  const gold = '#d4af37';
  const logoAccent = '#f3efec';
  const paper = '#f2efe8';
  const footerHeight = 52;
  const navHeight = 74;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles: Record<string, CSSProperties> = {
    page: {
      minHeight: '100vh',
      background: '#050505',
      color: '#fff',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
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
      scale: '1.14',
      border: `1px solid ${logoAccent}`,
      background: '#080808',
      cursor: 'pointer',
      boxShadow: '0 0 18px rgba(243, 239, 236, 0.24)',
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
    main: {
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
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -44%)',
      width: 'min(62vw, 660px)',
      aspectRatio: '1 / 1',
      objectFit: 'contain',
      opacity: 0.07,
      filter: 'grayscale(0.08) drop-shadow(0 0 28px rgba(212, 175, 55, 0.12))',
      pointerEvents: 'none',
      zIndex: 1,
    },
    contentWrap: {
      width: '100%',
      maxWidth,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px 24px',
      boxSizing: 'border-box',
    },
    intro: {
      textAlign: 'center',
      marginBottom: '22px',
    },
    title: {
      margin: 0,
      color: gold,
      fontSize: 'clamp(1.8rem, 3.6vw, 3.15rem)',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '4px',
      fontWeight: 500,
      textAlign: 'center',
      fontFamily: "'Cinzel', serif",
      textShadow: '0 0 24px rgba(212, 175, 55, 0.16)',
    },
    subtitle: {
      margin: '8px 0 0',
      color: paper,
      fontSize: 'clamp(0.68rem, 1vw, 0.82rem)',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: '4px',
      textAlign: 'center',
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
    },
    line: {
      width: '118px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.35)',
      margin: '26px auto 16px',
    },
    panel: {
      background: 'transparent',
      border: 'none',
      borderRadius: '0',
      padding: 0,
      boxShadow: 'none',
      backdropFilter: 'none',
      width: '100%',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.08rem',
      lineHeight: 1.65,
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes landingLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 18px rgba(243, 239, 236, 0.24); }
          50% { transform: scale(1.05); box-shadow: 0 0 28px rgba(243, 239, 236, 0.36); }
        }
        .nav-hover-button:hover {
          color: #d4af37 !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(212, 175, 55, 0.35);
        }
      `}</style>
      <div style={styles.backgroundOverlay} />
      <img src={notaryLogo} alt="" style={styles.logoGhost} />

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
          {showNavBack ? (
            <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('home')}>
              Back
            </button>
          ) : null}
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

      <main style={styles.main}>
        <div style={styles.contentWrap}>
          <section style={styles.intro}>
            <h1 style={styles.title}>{title}</h1>
            {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
            <div style={styles.line} />
          </section>

          <section style={styles.panel}>{children}</section>
        </div>
      </main>

      {showBackToTop ? (
        <button
          onClick={() =>
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
          }
          style={{
            position: 'fixed',
            left: '10px',
            top: '146px',
            border: 'none',
            background: 'transparent',
            color: 'rgba(183, 176, 167, 0.5)',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.18rem',
            fontWeight: 300,
            letterSpacing: '0.35px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            zIndex: 15,
            lineHeight: 1,
            textAlign: 'left',
          }}
        >
          Back to
          <br />
          Bottom
        </button>
      ) : null}

      {showBackToTop ? (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            left: '10px',
            bottom: '72px',
            border: 'none',
            background: 'transparent',
            color: 'rgba(183, 176, 167, 0.5)',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.18rem',
            fontWeight: 300,
            letterSpacing: '0.35px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            zIndex: 15,
            lineHeight: 1,
            textAlign: 'left',
          }}
        >
          Back to
          <br />
          Top
        </button>
      ) : null}

      <SiteFooter compact />
    </div>
  );
}

export default NotaryFrame;
