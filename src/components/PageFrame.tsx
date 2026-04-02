import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { Page } from '../types';
import SiteFooter from './SiteFooter';

const logoImage = '/images/logo4.jpg';

interface PageFrameProps {
  children: ReactNode;
  onNavigate: (page: Page) => void;
  title: string;
  subtitle?: string;
  backTo?: Page;
  backLabel?: string;
  maxWidth?: string;
  business?: 'notary' | 'salon';
}

function PageFrame({
  children,
  onNavigate,
  title,
  subtitle,
  backTo,
  backLabel = 'Back',
  maxWidth = '1100px',
  business = 'notary',
}: PageFrameProps) {
  const gold = '#d4af37';
  const logoAccent = '#f3efec';
  const [hoveredBusiness, setHoveredBusiness] = useState<'primary' | 'partnership' | null>(null);
  const primaryLabel = business === 'salon' ? 'Salon' : 'Notary';
  const primaryTarget: Page = business === 'salon' ? 'salon' : 'home';
  const primaryDropdownItems =
    business === 'salon'
      ? [
          { label: 'Client Portal', page: 'salon-portal' as Page },
          { label: 'Packages', page: 'salon-packages' as Page },
          { label: 'Contact', page: 'contact' as Page },
        ]
      : [
          { label: 'Services & Prices', page: 'services' as Page },
          { label: 'Documents I Sign', page: 'documents' as Page },
          { label: 'Contact', page: 'contact' as Page },
          { label: 'Booking Request', page: 'contact' as Page },
        ];
  const dropdownItemStyle = (delay: number): CSSProperties => ({
    ...styles.dropdownItem,
    opacity: 0,
    animation: 'dropdownLineReveal 0.32s ease forwards',
    animationDelay: `${delay}s`,
  });

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
      justifyContent: 'center',
      width: '184px',
      flexShrink: 0,
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
    dropdown: {
      position: 'absolute',
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      transformOrigin: 'top center',
      background:
        'radial-gradient(ellipse at top, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.08) 22%, rgba(24, 24, 24, 0.95) 23%, #0a0a0a 42%, #080808 100%)',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 19,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '150px',
      overflow: 'hidden',
      borderRadius: '0 0 18px 18px',
      isolation: 'isolate',
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
      width: '74px',
      height: '74px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: `1px solid ${logoAccent}`,
      background: '#080808',
      cursor: 'pointer',
      boxShadow: '0 0 16px rgba(243, 239, 236, 0.22)',
      padding: 0,
      flexShrink: 0,
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      scale: '1.16',
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
      fontSize: 'clamp(1.55rem, 3vw, 2.6rem)',
      fontWeight: 200,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: gold,
      fontFamily: "'Cinzel', serif",
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
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      fontSize: '0.66rem',
      lineHeight: 1.6,
    },
    body: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '18px',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.08rem',
      lineHeight: 1.6,
    },
  };

  return (
    <div style={styles.shell}>
      <style>{`
        @keyframes pageLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 16px rgba(243, 239, 236, 0.22); }
          50% { transform: scale(1.04); box-shadow: 0 0 24px rgba(243, 239, 236, 0.32); }
        }
        @keyframes carpetDrop {
          0% { opacity: 0.12; transform: translateX(-50%); clip-path: inset(0 0 calc(100% - 8px) 0); }
          100% { opacity: 1; transform: translateX(-50%); clip-path: inset(0 0 0 0); }
        }
        @keyframes dropdownLineReveal {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .nav-hover-button:hover {
          color: #f3efec !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(243, 239, 236, 0.35);
        }
      `}</style>

      <nav style={styles.navbar}>
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            style={{ ...styles.logoButton, animation: 'pageLogoPulse 2.6s ease-in-out infinite' }}
            onClick={() => onNavigate('landing')}
            aria-label="Back to landing"
          >
            <img src={logoImage} alt="Anna-Li Co." style={styles.logoImage} />
          </button>
        </div>
        <div style={styles.navDivider}></div>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('primary')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button className="nav-hover-button" style={{ ...styles.navButton, color: gold }} onClick={() => onNavigate(primaryTarget)}>
            {primaryLabel}
          </button>
          {hoveredBusiness === 'primary' && (
            <div style={{ ...styles.dropdown, animation: 'carpetDrop 0.72s ease forwards' }}>
              {primaryDropdownItems.map((item, index) => (
                <button
                  key={item.label}
                  style={dropdownItemStyle(0.08 + index * 0.06)}
                  onClick={() => onNavigate(item.page)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="nav-hover-button" style={{ ...styles.navButton, color: gold }} onClick={() => onNavigate('hire')}>
          DID YOU KNOW?
        </button>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('partnership')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>
            Partnership
          </button>
          {hoveredBusiness === 'partnership' && (
            <div style={{ ...styles.dropdown, minWidth: '180px', animation: 'carpetDrop 0.72s ease forwards' }}>
              <button style={dropdownItemStyle(0.08)} onClick={() => onNavigate('contact')}>
                Preferred Partner Portal
              </button>
              <button style={dropdownItemStyle(0.14)} onClick={() => onNavigate('contact')}>
                Local Network Portal
              </button>
            </div>
          )}
        </div>
        <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>
          Contact
        </button>
      </nav>

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
      <SiteFooter compact />
    </div>
  );
}

export default PageFrame;
