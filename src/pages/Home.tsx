import { useState } from 'react';
import type { Page } from '../types';

const logoImage = '/images/20260118_134105000_iOS.jpg';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function Home({ onNavigate }: HomeProps) {
  const gold = '#d4af37';
  const [hoveredBusiness, setHoveredBusiness] = useState<
    'notary' | 'salon' | 'partnership' | 'didyouknow' | null
  >(null);

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
      padding: '0 20px',
      position: 'fixed' as const,
      top: 0,
      left: 0,
      zIndex: 100,
      gap: '20px',
    },
    navItem: {
      position: 'relative' as const,
      height: '60px',
      display: 'flex',
      alignItems: 'center',
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
      margin: '0 12px',
      padding: '8px 16px',
      transform: 'scale(1) translateY(0)',
    },
    dropdown: {
      position: 'absolute' as const,
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0a0a0a',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 200,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '150px',
    },
    dropdownWide: {
      position: 'absolute' as const,
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0a0a0a',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 200,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '280px',
    },
    dropdownItem: {
      display: 'block',
      width: '100%',
      padding: '10px 20px',
      background: 'transparent',
      border: 'none',
      color: '#888',
      fontSize: '11px',
      letterSpacing: '1px',
      textTransform: 'uppercase' as const,
      cursor: 'pointer',
      textAlign: 'center' as const,
      transition: 'all 0.2s ease',
    },
    hero: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '140px 40px 60px',
      textAlign: 'center' as const,
    },
    heroH1: {
      fontSize: '4em',
      fontWeight: 100,
      letterSpacing: '8px',
      textTransform: 'uppercase' as const,
      marginBottom: '20px',
      lineHeight: 1.2,
      color: gold,
      animation: 'fadeInUp 1s ease-out forwards, pulse 10s ease-in-out infinite 1s, glow 10s ease-in-out infinite 1s',
    },
    line: {
      width: '100px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      margin: '20px auto 40px',
      boxShadow: '0 0 8px rgba(212, 175, 55, 0.3)',
    },
    heroSub: {
      fontSize: '0.8em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#888',
      marginBottom: '40px',
    },
    card: {
      background: '#111',
      padding: '40px',
      border: '1px solid #222',
      borderRadius: '4px',
      maxWidth: '820px',
      width: '100%',
      boxSizing: 'border-box' as const,
    },
    cardText: {
      fontSize: '0.95em',
      lineHeight: 1.9,
      letterSpacing: '0.8px',
      color: '#ccc',
      margin: 0,
      textTransform: 'none' as const,
    },
    footer: {
      background: '#000',
      color: gold,
      textAlign: 'center' as const,
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
      textTransform: 'lowercase' as const,
      display: 'inline-block',
      marginRight: '3px',
      marginLeft: '2px',
    },
    yearWhite: {
      color: '#ffffff',
      fontWeight: 300,
    },
  };

  const keyframes = `
    @keyframes logoPulse {
      0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); transform: translateY(-50%) scale(1); }
      50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.6); transform: translateY(-50%) scale(1.05); }
    }
    @keyframes pulse {
      0%, 100% { color: #d4af37; }
      25% { color: #e8d5a3; }
      50% { color: #f5f0e0; }
      75% { color: #e8d5a3; }
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

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>

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

        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('notary')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={{ ...styles.navButton, color: gold }} onClick={() => onNavigate('home')}>
            Notary
          </button>
          {hoveredBusiness === 'notary' && (
            <div style={styles.dropdown}>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('home')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Website
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Booking Request
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('services')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Services and Prices
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Contact
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => window.open('https://annalico.glossgenius.com', '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Pay Online
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
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('salon')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Website
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('salon-portal')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Client Portal
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('salon-packages')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Packages
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Contact
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => window.open('https://annalico.glossgenius.com', '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Pay Online
              </button>
            </div>
          )}
        </div>

        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('didyouknow')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={{ ...styles.navButton, color: gold }}>DID YOU KNOW?</button>
          {hoveredBusiness === 'didyouknow' && (
            <div style={styles.dropdownWide}>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('hire')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Ways to Save Money at Signing and more Answers
              </button>
            </div>
          )}
        </div>

        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('partnership')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton}>Partnership</button>
          {hoveredBusiness === 'partnership' && (
            <div style={styles.dropdown}>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                Preferred Partner Portal
              </button>
              <button
                style={styles.dropdownItem}
                onClick={() => onNavigate('contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
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

        <img
          src={logoImage}
          alt="Home"
          title="Back to Home"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            cursor: 'pointer',
            position: 'absolute',
            left: '40px',
            top: '100%',
            transform: 'translateY(-50%)',
            borderRadius: '50%',
            animation: 'logoPulse 2s ease-in-out infinite',
            transition: 'all 0.3s ease',
          }}
          onClick={() => onNavigate('landing')}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = '100px';
            e.currentTarget.style.height = '100px';
            e.currentTarget.style.left = '30px';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = '80px';
            e.currentTarget.style.height = '80px';
            e.currentTarget.style.left = '40px';
          }}
        />
      </nav>

      <main style={{ flex: 1, paddingTop: '60px' }}>
        <section style={styles.hero}>
          <h1 style={styles.heroH1}>SEAL AND STAMP Notary</h1>
          <div style={styles.line}></div>
          <p style={styles.heroSub}>
            Mobile • Remote • IPEN • NNA Certified in both RON • NSA
          </p>
          <div style={styles.card}>
            <p style={styles.cardText}>
              Trusted mobile notary serving Plano, Texas. Loan signings, affidavits,
              acknowledgments, powers of attorney, legal documents, business notarization,
              and more. Fast scheduling, secure handling, and service with care.
            </p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>
          <span style={styles.yearWhite}>
            <span style={{ fontSize: '0.7em', verticalAlign: 'super' }}>@</span>2001
          </span>{' '}
          | AN-NA<span style={styles.nymsFooter}>nyms</span>-LI Co., LLC | All Rights Reserved
          | <span style={{ color: gold }}>anna@annalico.com</span> |{' '}
          <span style={styles.yearWhite}>(972) 900-7147</span>
        </p>
      </footer>
    </div>
  );
}

export default Home;
