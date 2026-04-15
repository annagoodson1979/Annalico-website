import React, { useState } from 'react';
import type { Page } from '../types';

const heroImage = '/images/9397A37B-CBFB-45E4-ACA9-7A20332AB3F3.jpeg';

interface LandingOldPreviewProps {
  onNavigate: (page: Page) => void;
}

function LandingOldPreview({ onNavigate }: LandingOldPreviewProps) {
  const [hoveredBusiness, setHoveredBusiness] = useState<
    'notary' | 'salon' | 'partnership' | null
  >(null);
  const gold = '#d4af37';

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
      flexDirection: 'column' as const,
      position: 'relative' as const,
      height: 'calc(100vh - 60px)',
      paddingTop: '60px',
      overflow: 'hidden',
      background: '#000',
    },
    hero: {
      background: '#000',
      color: '#fff',
      padding: '150px 20px 20px',
      textAlign: 'center' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    businessSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
      alignItems: 'center',
      width: '100%',
      maxWidth: '800px',
      animation: 'fadeInUp 1.2s ease-out 0.4s forwards',
      opacity: 0,
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

  return (
    <div style={styles.container}>
      <style>{`
        @font-face { font-family: 'Modernline'; src: url('/fonts/modernline.otf') format('opentype'); font-weight: normal; font-style: normal; }
        @keyframes businessPulse {
          0%, 100% { text-shadow: 0 0 15px rgba(212, 175, 55, 0.3); transform: scale(1); }
          50% { text-shadow: 0 0 35px rgba(212, 175, 55, 0.8); transform: scale(1.03); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes beamSweep {
          0%, 100% { opacity: 0.06; transform: rotate(-5deg); }
          50% { opacity: 0.12; transform: rotate(5deg); }
        }
        @keyframes lampSway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
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
        <div style={{ width: '2px', height: '20px', background: '#333', marginRight: '10px' }} />

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
                Services
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('prices')}>
                Prices
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('documents')}>
                Documents
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Contact
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Booking Request
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('did-you-know')}>
                Did You Know?
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

        <div style={styles.navItem}>
          <button
            style={{ ...styles.navButton, color: '#f3efec', fontWeight: 500, textShadow: '0 0 10px rgba(243, 239, 236, 0.3)' }}
            onClick={() => onNavigate('did-you-know')}
          >
            DID YOU KNOW?
          </button>
        </div>

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

      <div
        style={{
          position: 'fixed',
          left: '42%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          zIndex: 1,
          textAlign: 'center',
          background: '#000',
          overflow: 'hidden',
        }}
      >
        <img
          alt="Anna-Li Co."
          src={heroImage}
          style={{ width: '100%', height: 'auto', opacity: 1, display: 'block', backgroundColor: '#000' }}
        />
      </div>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10,
              animation: 'fadeInUp 1.2s ease-out forwards, businessPulse 3s ease-in-out infinite',
            }}
          >
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '3.5em',
                fontWeight: 100,
                letterSpacing: '12px',
                textTransform: 'uppercase',
                color: '#fff',
                margin: 0,
                whiteSpace: 'nowrap',
                textShadow:
                  '0 0 20px #d4af37, 0 0 40px #d4af37, 0 0 60px rgba(212, 175, 55, 0.5)',
              }}
            >
              AN-NA
              <span
                style={{
                  fontFamily: "'Modernline', cursive",
                  fontSize: '1.1em',
                  color: '#fff',
                  textTransform: 'lowercase',
                  marginLeft: '4px',
                  marginRight: '4px',
                  position: 'relative',
                  top: '5px',
                  textShadow:
                    '0 0 20px #d4af37, 0 0 40px #d4af37, 0 0 60px rgba(212, 175, 55, 0.5)',
                }}
              >
                nyms
              </span>
              -LI Co.
            </h1>
            <p
              style={{
                fontSize: '0.9em',
                letterSpacing: '8px',
                color: gold,
                marginTop: '15px',
                textTransform: 'uppercase',
              }}
            >
              Est. 2001
            </p>
          </div>
          <div style={styles.businessSection}></div>
        </section>

        <div
          style={{
            position: 'fixed',
            right: '120px',
            bottom: '100px',
            zIndex: 50,
            width: '180px',
            textAlign: 'center',
          }}
        >
          <div style={{ position: 'relative', width: '180px', height: '160px' }}>
            <div
              style={{
                position: 'absolute',
                left: '30px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'lampSway 5s ease-in-out infinite',
                transformOrigin: 'bottom center',
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '10px',
                  background: `radial-gradient(${gold} 0%, #8a7020 100%)`,
                  borderRadius: '50%',
                  boxShadow: `0 0 20px ${gold}, 0 0 40px rgba(212, 175, 55, 0.6)`,
                }}
              />
              <div style={{ width: '6px', height: '6px', background: '#333' }} />
            </div>

            <div
              style={{
                position: 'absolute',
                right: '30px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'lampSway 5s ease-in-out 2.5s infinite',
                transformOrigin: 'bottom center',
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '10px',
                  background: `radial-gradient(${gold} 0%, #8a7020 100%)`,
                  borderRadius: '50%',
                  boxShadow: `0 0 20px ${gold}, 0 0 40px rgba(212, 175, 55, 0.6)`,
                }}
              />
              <div style={{ width: '6px', height: '6px', background: '#333' }} />
            </div>

            <div
              style={{
                position: 'absolute',
                left: '30px',
                bottom: '8px',
                width: '60px',
                height: '160px',
                background:
                  'linear-gradient(0deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.12) 40%, rgba(212, 175, 55, 0.05) 60%, transparent 100%)',
                clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
                transformOrigin: 'bottom center',
                pointerEvents: 'none',
                animation: 'beamSweep 5s ease-in-out infinite',
                filter: 'blur(2px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '30px',
                bottom: '8px',
                width: '60px',
                height: '160px',
                background:
                  'linear-gradient(0deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.12) 40%, rgba(212, 175, 55, 0.05) 60%, transparent 100%)',
                clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
                transformOrigin: 'bottom center',
                pointerEvents: 'none',
                animation: 'beamSweep 5s ease-in-out 2.5s infinite',
                filter: 'blur(2px)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                transform: 'translateX(-50%)',
                width: '100px',
                padding: '10px',
                background: 'rgba(10, 10, 10, 0.95)',
                border: `1px solid ${gold}`,
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${gold} 0%, #8a7020 100%)`,
                  margin: '0 auto 6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.4em',
                  color: '#000',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                S&S
              </div>
              <p style={{ fontSize: '0.5em', color: gold, margin: '0 0 3px', fontWeight: 400 }}>
                Seal and Stamp
              </p>
              <p style={{ fontSize: '0.45em', color: '#888', margin: '0 0 6px' }}>Mobile Notary</p>
              <button
                style={{
                  padding: '2px 8px',
                  background: 'transparent',
                  border: `1px solid ${gold}`,
                  color: gold,
                  fontSize: '0.45em',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                View
              </button>
            </div>
          </div>
          <p
            style={{
              fontSize: '0.55em',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#666',
              margin: '5px 0 0',
            }}
          >
            This Week&apos;s Spotlight
          </p>
        </div>

        <footer style={styles.footer}>
          <p>
            <span style={styles.yearWhite}>
              <span style={{ fontSize: '0.7em', verticalAlign: 'super' }}>@</span>2001
            </span>{' '}
            | Anna-Li Co. | All Rights Reserved |
            <span style={{ color: gold }}> anna@annalico.com</span> |{' '}
            <span style={styles.yearWhite}>(972) 900-7147</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default LandingOldPreview;
