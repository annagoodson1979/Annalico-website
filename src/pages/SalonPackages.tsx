import { useState } from 'react';
import SiteFooter from '../components/SiteFooter';
import type { Page } from '../types';
const logoImage = '/images/llc2.jpg';

interface SalonPackagesProps {
  onNavigate: (page: Page) => void;
}

const PACKAGES = [
  {
    name: 'Cut & Style Package',
    sessions: 4,
    price: 240,
    savings: 60,
    description: '4 sessions of cuts & blowouts',
  },
  {
    name: 'Color Package',
    sessions: 3,
    price: 375,
    savings: 75,
    description: '3 color sessions with gloss',
  },
  {
    name: 'Highlight Package',
    sessions: 3,
    price: 450,
    savings: 90,
    description: '3 full highlight sessions',
  },
  {
    name: 'Balayage Package',
    sessions: 2,
    price: 360,
    savings: 40,
    description: '2 balayage sessions with toners',
  },
  {
    name: 'Ultimate Care',
    sessions: 6,
    price: 600,
    savings: 150,
    description: 'Mix of cuts, color & treatments',
  },
];

function SalonPackages({ onNavigate }: SalonPackagesProps) {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [hoveredBusiness, setHoveredBusiness] = useState<'primary' | 'partnership' | null>(null);
  const gold = '#d4af37';
  const dropdownItemStyle = (delay: number): React.CSSProperties => ({
    ...styles.dropdownItem,
    opacity: 0,
    animation: 'dropdownLineReveal 0.32s ease forwards',
    animationDelay: `${delay}s`,
  });

  const handlePurchase = (pkg: any) => {
    alert(`${pkg.name} - Payment processing would happen here.\n\nFor now, please contact Anna directly to purchase packages.`);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column' as const,
      overflow: 'hidden',
    },
    navbar: {
      width: '100%',
      height: '60px',
      background: '#000',
      borderBottom: '1px solid #111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '0 20px',
      position: 'fixed' as const,
      top: 0,
      left: 0,
      zIndex: 100,
    },
    navDivider: {
      width: '2px',
      height: '20px',
      background: '#333',
    },
    navItem: {
      position: 'relative' as const,
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
      textTransform: 'uppercase' as const,
      color: '#888',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: 0,
      padding: '8px 16px',
      width: '184px',
      textAlign: 'center' as const,
    },
    dropdown: {
      position: 'absolute' as const,
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      transformOrigin: 'top center',
      background:
        'radial-gradient(ellipse at top, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.08) 22%, rgba(24, 24, 24, 0.95) 23%, #0a0a0a 42%, #080808 100%)',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 200,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '150px',
      overflow: 'hidden' as const,
      borderRadius: '0 0 18px 18px',
      isolation: 'isolate' as const,
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
      textTransform: 'uppercase' as const,
      cursor: 'pointer',
      textAlign: 'center' as const,
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      paddingTop: '60px',
      overflow: 'hidden',
    },
    hero: {
      background: '#000',
      color: '#fff',
      padding: '150px 20px 100px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: '5em',
      fontWeight: 100,
      letterSpacing: '8px',
      textTransform: 'uppercase',
      marginBottom: '30px',
      lineHeight: 1.2,
      color: gold,
      animation: 'fadeInUp 1s ease-out forwards, pulse 10s ease-in-out infinite 1s, glow 10s ease-in-out infinite 1s',
    },
    heroP: {
      fontSize: '1.2em',
      fontWeight: 300,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#ccc',
    },
    byAnna: {
      fontSize: '0.9em',
      marginTop: '-20px',
      marginBottom: '10px',
      fontFamily: "'Qwigley', cursive",
      textTransform: 'none',
      letterSpacing: '1px',
      color: '#888',
    },
    line: {
      width: '100px',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, gold, transparent)',
      margin: '40px auto',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
    },
    content: {
      padding: '80px 20px',
      textAlign: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
      borderTop: '1px solid #111',
      background: '#000',
    },
    sectionTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '4px',
      marginBottom: '30px',
      textTransform: 'uppercase',
    },
    notice: {
      background: '#111',
      border: '1px solid #333',
      padding: '20px 30px',
      marginBottom: '40px',
    },
    noticeText: {
      color: '#888',
      fontSize: '0.9em',
      letterSpacing: '1px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginBottom: '40px',
    },
    card: {
      background: '#111',
      border: '1px solid #222',
      padding: '35px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    cardSelected: {
      border: `1px solid ${gold}`,
      boxShadow: '0 0 30px rgba(212, 175, 55, 0.1)',
    },
    packageName: {
      color: gold,
      fontSize: '1.2em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      marginBottom: '10px',
    },
    sessions: {
      color: '#fff',
      fontSize: '3em',
      fontWeight: 100,
      marginBottom: '5px',
    },
    sessionsLabel: {
      color: '#888',
      fontSize: '0.85em',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      marginBottom: '20px',
    },
    description: {
      color: '#aaa',
      fontSize: '0.9em',
      marginBottom: '20px',
      lineHeight: 1.6,
    },
    price: {
      color: gold,
      fontSize: '2em',
      fontWeight: 300,
      marginBottom: '5px',
    },
    savings: {
      color: '#4CAF50',
      fontSize: '0.85em',
      letterSpacing: '1px',
      marginBottom: '20px',
    },
    btn: {
      display: 'inline-block',
      width: '100%',
      background: 'transparent',
      color: gold,
      border: '1px solid gold',
      padding: '12px',
      fontFamily: 'inherit',
      fontSize: '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      cursor: 'pointer',
    },
    backBtn: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: '#666',
      padding: '15px 50px',
      textDecoration: 'none',
      marginTop: '40px',
      borderBottom: '1px solid transparent',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontSize: '12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'all 0.3s',
    },
    footer: {
      background: '#000',
      color: gold,
      textAlign: 'center',
      padding: '20px 15px',
      fontSize: '13px',
      letterSpacing: '1px',
      borderTop: '1px solid #111',
      marginTop: 'auto',
      whiteSpace: 'nowrap' as const,
    },
    nymsFooter: {
      fontFamily: "'Allura', cursive",
      fontSize: '1.25em',
      fontWeight: 400,
      color: gold,
      textTransform: 'lowercase',
      display: 'inline-block',
      marginRight: '3px',
      marginLeft: '2px',
    },
    yearWhite: {
      color: '#ffffff',
      fontWeight: 300,
    },
  };

  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { color: #d4af37; }
      50% { color: #e5c76b; }
    }
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes glow {
      0%, 100% { text-shadow: 0 0 5px rgba(212, 175, 55, 0.3), 0 0 10px rgba(212, 175, 55, 0.2); }
      25% { text-shadow: 0 0 10px rgba(232, 213, 163, 0.5), 0 0 18px rgba(232, 213, 163, 0.3); }
      50% { text-shadow: 0 0 20px rgba(245, 240, 224, 0.7), 0 0 35px rgba(245, 240, 224, 0.5); }
      75% { text-shadow: 0 0 10px rgba(232, 213, 163, 0.5), 0 0 18px rgba(232, 213, 163, 0.3); }
    }
  `;

  const logoPulseKeyframes = `
    @keyframes logoPulse {
      0%, 100% { box-shadow: 0 0 18px rgba(236, 156, 188, 0.42); transform: translateY(-50%) scale(1); }
      50% { box-shadow: 0 0 28px rgba(236, 156, 188, 0.58); transform: translateY(-50%) scale(1.012); }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{pulseKeyframes}{logoPulseKeyframes}{`
        .nav-hover-button:hover {
          color: #f3efec !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(243, 239, 236, 0.35);
        }
        @keyframes carpetDrop {
          0% { opacity: 0.12; transform: translateX(-50%); clip-path: inset(0 0 calc(100% - 8px) 0); }
          100% { opacity: 1; transform: translateX(-50%); clip-path: inset(0 0 0 0); }
        }
        @keyframes dropdownLineReveal {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* Top Navbar */}
      <nav style={styles.navbar}>
        <div style={{ position: 'absolute', left: '20px', top: '98%', transform: 'translateY(-50%)', width: '132px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logoImage} alt="Home" title="Back to Home" style={{width: '86px', height: '86px', objectFit: 'cover', objectPosition: 'center', scale: '1.02', cursor: 'pointer', borderRadius: '50%', animation: 'logoPulse 2s ease-in-out infinite', transition: 'all 0.3s ease', border: 'none', background: 'transparent'}} onClick={() => onNavigate('landing')} />
        </div>
        <div style={styles.navDivider}></div>
        <div style={styles.navItem} onMouseEnter={() => setHoveredBusiness('primary')} onMouseLeave={() => setHoveredBusiness(null)}>
          <button className="nav-hover-button" style={{...styles.navButton, color: gold}} onClick={() => onNavigate('salon')}>Salon</button>
          {hoveredBusiness === 'primary' && (
            <div style={{ ...styles.dropdown, animation: 'carpetDrop 0.72s ease forwards' }}>
              <button style={dropdownItemStyle(0.08)} onClick={() => onNavigate('salon-portal')}>Client Portal</button>
              <button style={dropdownItemStyle(0.14)} onClick={() => onNavigate('salon-packages')}>Packages</button>
              <button style={dropdownItemStyle(0.2)} onClick={() => onNavigate('contact')}>Contact</button>
            </div>
          )}
        </div>
        <button
          className="nav-hover-button"
          style={{ ...styles.navButton, color: '#f3efec', fontWeight: 500, textShadow: '0 0 10px rgba(243, 239, 236, 0.3)' }}
          onClick={() => onNavigate('did-you-know')}
        >
          DID YOU KNOW?
        </button>
        <div style={styles.navItem} onMouseEnter={() => setHoveredBusiness('partnership')} onMouseLeave={() => setHoveredBusiness(null)}>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>Partnership</button>
          {hoveredBusiness === 'partnership' && (
            <div style={{ ...styles.dropdown, minWidth: '180px', animation: 'carpetDrop 0.72s ease forwards' }}>
              <button style={dropdownItemStyle(0.08)} onClick={() => onNavigate('contact')}>Preferred Partner Portal</button>
              <button style={dropdownItemStyle(0.14)} onClick={() => onNavigate('contact')}>Local Network Portal</button>
            </div>
          )}
        </div>
        <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>Contact</button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.heroH1}>Client Packages</h1>
          <div style={{...styles.line, margin: '40px auto 30px'}}></div>
          <p style={styles.byAnna}>by Anna</p>
          <p style={styles.heroP}>Save with prepaid sessions</p>
        </section>

        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Prepaid Session Packages</h2>
          
          <div className="info-hover-card" style={styles.notice}>
            <p style={styles.noticeText}>
              These packages are available exclusively for current clients. 
              Sessions never expire and can be used for any service within the package category.
            </p>
          </div>

          <div style={styles.grid}>
            {PACKAGES.map((pkg, index) => (
              <div
                className="info-hover-card"
                key={index}
                style={{
                  ...styles.card,
                  ...(selectedPackage === index ? styles.cardSelected : {}),
                }}
                onClick={() => setSelectedPackage(index)}
                onMouseEnter={(e) => {
                  if (selectedPackage !== index) {
                    e.currentTarget.style.borderColor = '#444';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPackage !== index) {
                    e.currentTarget.style.borderColor = '#222';
                  }
                }}
              >
                <h2 style={styles.packageName}>{pkg.name}</h2>
                <div style={styles.sessions}>{pkg.sessions}</div>
                <div style={styles.sessionsLabel}>Sessions</div>
                <p style={styles.description}>{pkg.description}</p>
                <div style={styles.price}>${pkg.price}</div>
                <div style={styles.savings}>Save ${pkg.savings}</div>
                <button
                  style={styles.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(pkg);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = gold;
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = gold;
                  }}
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>

          <button
            style={styles.backBtn}
            onClick={() => onNavigate('salon')}
            onMouseEnter={(e) => {e.currentTarget.style.color = gold; e.currentTarget.style.borderBottomColor = gold;}}
            onMouseLeave={(e) => {e.currentTarget.style.color = '#666'; e.currentTarget.style.borderBottomColor = 'transparent';}}
          >
            ← Back to Salon Home
          </button>
        </section>

        <SiteFooter compact />
      </main>
    </div>
  );
}

export default SalonPackages;
