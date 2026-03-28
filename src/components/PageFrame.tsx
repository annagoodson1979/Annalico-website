import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { Page } from '../types';

const logoImage = '/images/logo.jpg';

interface PageFrameProps {
  children: ReactNode;
  onNavigate: (page: Page) => void;
  title: string;
  subtitle?: string;
  backTo?: Page;
  backLabel?: string;
  maxWidth?: string;
}

function PageFrame({
  children,
  onNavigate,
  title,
  subtitle,
  backTo,
  backLabel = 'Back',
  maxWidth = '1100px',
}: PageFrameProps) {
  const gold = '#d4af37';
  const [hoveredBusiness, setHoveredBusiness] = useState<
    'notary' | 'salon' | 'partnership' | null
  >(null);

  const styles: Record<string, CSSProperties> = {
    shell: {
      minHeight: '100vh',
      background:
        'radial-gradient(circle at top, rgba(212, 175, 55, 0.12), transparent 30%), linear-gradient(180deg, #030303 0%, #000 70%)',
      color: '#fff',
      fontFamily: "'Montserrat', sans-serif",
      overflow: 'hidden',
      position: 'relative',
    },
    navbar: {
      width: '100%',
      height: '60px',
      background: '#000',
      borderBottom: '1px solid #111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 18,
      gap: '20px',
    },
    navDivider: {
      width: '2px',
      height: '20px',
      background: '#333',
    },
    navItem: {
      position: 'relative',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
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
      margin: '0 12px',
      padding: '8px 16px',
    },
    dropdown: {
      position: 'absolute',
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0a0a0a',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 19,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '150px',
    },
    dropdownItem: {
      display: 'block',
      width: '100%',
      padding: '8px 20px',
      background: 'transparent',
      border: 'none',
      color: '#888',
      fontSize: '8px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textAlign: 'center',
    },
    logoButton: {
      position: 'fixed',
      top: '82px',
      left: '22px',
      width: '74px',
      height: '74px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '1px solid rgba(212, 175, 55, 0.45)',
      background: '#080808',
      cursor: 'pointer',
      zIndex: 20,
      boxShadow: '0 0 16px rgba(212, 175, 55, 0.25)',
      padding: 0,
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    backButton: {
      position: 'fixed',
      top: '82px',
      right: '28px',
      border: `1px solid ${gold}`,
      background: 'rgba(0, 0, 0, 0.6)',
      color: gold,
      padding: '10px 18px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontSize: '11px',
      cursor: 'pointer',
      zIndex: 20,
    },
    main: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '144px 28px 36px',
      boxSizing: 'border-box',
    },
    panel: {
      width: '100%',
      maxWidth,
      minHeight: 'calc(100vh - 194px)',
      maxHeight: 'calc(100vh - 194px)',
      background: 'linear-gradient(180deg, rgba(17, 17, 17, 0.92) 0%, rgba(5, 5, 5, 0.98) 100%)',
      border: '1px solid rgba(212, 175, 55, 0.18)',
      borderRadius: '26px',
      padding: '38px 42px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '26px',
      flexShrink: 0,
    },
    title: {
      margin: 0,
      fontSize: 'clamp(2rem, 4vw, 3.6rem)',
      fontWeight: 200,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      color: gold,
      textShadow: '0 0 18px rgba(212, 175, 55, 0.18)',
    },
    line: {
      width: '96px',
      height: '2px',
      margin: '16px auto 14px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      boxShadow: '0 0 8px rgba(212, 175, 55, 0.35)',
    },
    subtitle: {
      margin: 0,
      color: '#a5a5a5',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontSize: '0.82rem',
      lineHeight: 1.6,
    },
    body: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '18px',
    },
  };

  return (
    <div style={styles.shell}>
      <style>{`
        @keyframes pageLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 16px rgba(212, 175, 55, 0.25); }
          50% { transform: scale(1.04); box-shadow: 0 0 24px rgba(212, 175, 55, 0.35); }
        }
      `}</style>

      <nav style={styles.navbar}>
        <div
          style={{
            width: '100px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '10px',
            paddingTop: '10px',
          }}
        >
          <span
            style={{
              fontSize: '0.7em',
              fontWeight: 300,
              letterSpacing: '2px',
              color: gold,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Start
            <br />
            here
          </span>
        </div>
        <div style={styles.navDivider}></div>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('notary')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('home')}>
            Notary
          </button>
          {hoveredBusiness === 'notary' && (
            <div style={styles.dropdown}>
              <button style={styles.dropdownItem} onClick={() => onNavigate('home')}>
                Website
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('services')}>
                Services & Prices
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('documents')}>
                Documents I Sign
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Contact
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Booking Request
              </button>
            </div>
          )}
        </div>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('salon')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('salon')}>
            Salon
          </button>
          {hoveredBusiness === 'salon' && (
            <div style={styles.dropdown}>
              <button style={styles.dropdownItem} onClick={() => onNavigate('salon')}>
                Website
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('salon-portal')}>
                Client Portal
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('salon-packages')}>
                Packages
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Contact
              </button>
            </div>
          )}
        </div>
        <button style={{ ...styles.navButton, color: gold }} onClick={() => onNavigate('hire')}>
          DID YOU KNOW?
        </button>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('partnership')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('contact')}>
            Partnership
          </button>
          {hoveredBusiness === 'partnership' && (
            <div style={{ ...styles.dropdown, minWidth: '180px' }}>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Preferred Partner Portal
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Local Network Portal
              </button>
            </div>
          )}
        </div>
        <button style={styles.navButton} onClick={() => onNavigate('about')}>
          About Me
        </button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')}>
          Contact
        </button>
      </nav>

      <button
        style={{ ...styles.logoButton, animation: 'pageLogoPulse 2.6s ease-in-out infinite' }}
        onClick={() => onNavigate('landing')}
        aria-label="Back to landing"
      >
        <img src={logoImage} alt="Anna-Li Co." style={styles.logoImage} />
      </button>

      {backTo && (
        <button style={styles.backButton} onClick={() => onNavigate(backTo)}>
          {backLabel}
        </button>
      )}

      <main style={styles.main}>
        <section style={styles.panel}>
          <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>
            <div style={styles.line}></div>
            {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
          </header>
          <div style={styles.body}>{children}</div>
        </section>
      </main>
    </div>
  );
}

export default PageFrame;
