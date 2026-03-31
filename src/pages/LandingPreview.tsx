import React, { useState } from 'react';
import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';
const heroImage = '/images/hero4.jpg';
interface LandingProps {
  onNavigate: (page: Page) => void;
}

function Landing({ onNavigate }: LandingProps) {
  const [hoveredBusiness, setHoveredBusiness] = useState<
    'notary' | 'salon' | 'partnership' | null
  >(null);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const brandLetters = Array.from('ANNA−LI CO.');
  const gold = '#f3efec';
  const bulbYellow = '#d4af37';
  const umbrellaRose = '#e4d2d7';
  const dropdownItemStyle = (delay: number): React.CSSProperties => ({
    ...styles.dropdownItem,
    opacity: 0,
    animation: `dropdownLineReveal 0.32s ease forwards`,
    animationDelay: `${delay}s`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your partnership inquiry! We will get back to you soon.');
    setShowPartnershipForm(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: "'Montserrat', sans-serif",
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
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
    },
    startHere: {
      fontSize: '0.7em',
      fontWeight: 300,
      letterSpacing: '3px',
      color: gold,
      textTransform: 'uppercase' as const,
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
      transform: 'scale(1) translateY(0)',
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
        'radial-gradient(ellipse at top, rgba(243, 239, 236, 0.16) 0%, rgba(243, 239, 236, 0.08) 22%, rgba(24, 24, 24, 0.95) 23%, #0a0a0a 42%, #080808 100%)',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 200,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '140px',
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
      transition: 'all 0.2s ease',
      transform: 'translateY(0)',
    },
    partnershipButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.65em',
      fontWeight: 300,
      letterSpacing: '1.5px',
      textTransform: 'uppercase' as const,
      color: '#aaa',
      background: 'transparent',
      border: '1px solid #333',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: '8px 16px',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      paddingTop: '60px',
      overflow: 'hidden',
      minHeight: 0,
    },
    intro: {
      marginBottom: '30px',
      animation: 'fadeInUp 1.2s ease-out forwards',
    },
    introText: {
      fontSize: '4em',
      fontWeight: 100,
      letterSpacing: '8px',
      textTransform: 'uppercase' as const,
      color: gold,
      marginBottom: '20px',
      animation: 'pulse 10s ease-in-out infinite, glow 10s ease-in-out infinite',
    },
    introLine: {
      width: '80px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      margin: '30px auto',
      boxShadow: '0 0 12px rgba(243, 239, 236, 0.45)',
    },
    businessSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
      width: '100%',
      maxWidth: '800px',
      animation: 'fadeInUp 1.2s ease-out 0.4s forwards',
      opacity: 0,
    },
    businessName: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.1em',
      fontWeight: 100,
      letterSpacing: '4px',
      textTransform: 'uppercase' as const,
      color: '#aaa',
      lineHeight: 1.4,
    },
    businessNameSub: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.1em',
      fontWeight: 100,
      letterSpacing: '4px',
      textTransform: 'uppercase' as const,
      color: '#aaa',
      lineHeight: 1.4,
    },
    hero: {},
    nymsTitle: {
      fontFamily: "'Modernline', cursive",
      fontSize: '1.1em',
      fontWeight: 400,
      color: gold,
      textTransform: 'lowercase',
      display: 'inline-block',
      marginRight: '3px',
      marginLeft: '2px',
      verticalAlign: 'baseline',
      position: 'relative' as const,
      top: '8px',
      left: '12px',
    },
  };

  const businessPulseKeyframes = `
    @keyframes businessPulse {
          0%, 100% { text-shadow: none; transform: scale(1); }
          50% { text-shadow: none; transform: scale(1.03); }
    }
  `;

  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { color: #d7d1d4; }
      25% { color: #ece8e5; }
      50% { color: #ffffff; }
      75% { color: #ece8e5; }
    }
  `;

  const rosePulseKeyframes = `
    @keyframes rosePulse {
      0%, 100% { color: #e4d2d7; }
      30% { color: #b88a92; }
      62% { color: #a96f7c; }
      82% { color: #c79693; }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{`@font-face { font-family: 'Modernline'; src: url('/fonts/modernline.otf') format('opentype'); font-weight: normal; font-style: normal; }`}{businessPulseKeyframes}{pulseKeyframes}{rosePulseKeyframes}
      {`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: none; }
          25% { text-shadow: none; }
          50% { text-shadow: none; }
          75% { text-shadow: none; }
        }
        @keyframes beamSweep {
          0%, 100% { opacity: 0.06; transform: rotate(-5deg); }
          50% { opacity: 0.12; transform: rotate(5deg); }
        }
        @keyframes wiperLeft {
          0% { transform: rotate(-25deg); opacity: 0.15; }
          100% { transform: rotate(25deg); opacity: 0.25; }
        }
        @keyframes wiperRight {
          0% { transform: rotate(25deg); opacity: 0.15; }
          100% { transform: rotate(-25deg); opacity: 0.25; }
        }
        @keyframes lineExpand {
          0% { width: 0; opacity: 0; }
          100% { width: 200px; opacity: 1; }
        }
        @keyframes lampSway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes globeSpin {
          0% { transform: perspective(320px) rotateY(0deg); }
          50% { transform: perspective(320px) rotateY(180deg); }
          100% { transform: perspective(320px) rotateY(360deg); }
        }
        @keyframes orbit {
          0% { transform: translateX(-20px) translateY(0); }
          25% { transform: translateX(0) translateY(-10px); }
          50% { transform: translateX(20px) translateY(0); }
          75% { transform: translateX(0) translateY(10px); }
          100% { transform: translateX(-20px) translateY(0); }
        }
        @keyframes carpetDrop {
          0% { opacity: 0.12; transform: translateX(-50%); clip-path: inset(0 0 calc(100% - 8px) 0); }
          100% { opacity: 1; transform: translateX(-50%); clip-path: inset(0 0 0 0); }
        }
        @keyframes dropdownLineReveal {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes letterUnfurl {
          0% { opacity: 0; transform: scaleX(0.08); }
          40% { opacity: 1; transform: scaleX(0.08); }
          100% { opacity: 1; transform: scaleX(1); }
        }
        .nav-hover-button:hover {
          color: #f3efec !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(243, 239, 236, 0.35);
        }
      `}
      </style>

      <nav style={{ ...styles.navbar, justifyContent: 'center' }}>
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
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('home')}>
            Notary
          </button>
          {hoveredBusiness === 'notary' && (
            <div style={{ ...styles.dropdown, minWidth: '150px', animation: 'carpetDrop 0.72s ease forwards' }}>
              <button style={dropdownItemStyle(0.08)} onClick={() => onNavigate('home')}>
                Website
              </button>
              <button style={dropdownItemStyle(0.14)} onClick={() => onNavigate('services')}>
                Services & Prices
              </button>
              <button style={dropdownItemStyle(0.2)} onClick={() => onNavigate('documents')}>
                Documents I Sign
              </button>
              <button style={dropdownItemStyle(0.26)} onClick={() => onNavigate('contact')}>
                Contact
              </button>
              <button style={dropdownItemStyle(0.32)} onClick={() => onNavigate('contact')}>
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
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('salon')}>
            Salon
          </button>
          {hoveredBusiness === 'salon' && (
            <div style={{ ...styles.dropdown, minWidth: '150px', animation: 'carpetDrop 0.72s ease forwards' }}>
              <button style={dropdownItemStyle(0.08)} onClick={() => onNavigate('salon')}>
                Website
              </button>
              <button style={dropdownItemStyle(0.14)} onClick={() => onNavigate('salon-portal')}>
                Client Portal
              </button>
              <button style={dropdownItemStyle(0.2)} onClick={() => onNavigate('salon-packages')}>
                Packages
              </button>
              <button style={dropdownItemStyle(0.26)} onClick={() => onNavigate('contact')}>
                Contact
              </button>
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
        <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('about')}>
          About Me
        </button>
        <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>
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
          background: 'transparent',
          borderRadius: '0',
          boxShadow: 'none',
          padding: '0',
          overflow: 'visible',
        }}
      >
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '0',
            background: 'transparent',
            display: 'block',
            margin: '0 auto',
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            clipPath: 'inset(2px 2px 2px 2px)',
          }}
        />
      </div>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div
            style={{
              position: 'absolute' as const,
              top: '66.8%',
              left: '37.5%',
              transform: 'translate(-50%, calc(-50% + 24px))',
              textAlign: 'center' as const,
              zIndex: 10,
              animation: 'fadeInUp 1s ease-out forwards',
            }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.45em',
                fontWeight: 600,
                letterSpacing: '0.2px',
                textTransform: 'uppercase',
                marginBottom: '10px',
                margin: 0,
                whiteSpace: 'nowrap' as const,
                color: umbrellaRose,
                animation: 'rosePulse 24s ease-in-out infinite',
              }}
            >
              {brandLetters.map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  style={{
                    display: 'inline-block',
                    width: char === ' ' ? '0.34em' : '1em',
                    verticalAlign: 'bottom',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '1em',
                      textAlign: 'center',
                      transformOrigin: 'center center',
                      willChange: 'transform, opacity',
                      animation:
                        char === ' '
                          ? undefined
                          : `letterUnfurl 3.1s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                      animationDelay: char === ' ' ? undefined : '0.08s',
                      opacity: char === ' ' ? 1 : 0,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </span>
              ))}
            </h1>
            <div
              style={{
                width: '0',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                margin: '15px auto 0',
                boxShadow: '0 0 12px rgba(243, 239, 236, 0.4)',
                animation: 'lineExpand 1s ease-out 1.2s forwards',
              }}
            ></div>
          </div>
          <div style={styles.businessSection}></div>
        </section>

        <div
          style={{
            position: 'fixed' as const,
            right: '120px',
            bottom: '100px',
            zIndex: 50,
            width: '180px',
            textAlign: 'center' as const,
          }}
        >
          <div style={{ position: 'relative', width: '180px', height: '160px' }}>
            <div
              style={{
                position: 'absolute' as const,
                left: '30px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                animation: 'lampSway 3s ease-in-out infinite',
                transformOrigin: 'bottom center',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '10px',
                  background: `radial-gradient(ellipse at center, ${bulbYellow} 0%, #c9a548 100%)`,
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 'calc(50% - 78px)',
                    bottom: '100%',
                    transform: 'translateX(-50%)',
                    width: '160px',
                    height: '290px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.52) 0%, rgba(212, 175, 55, 0.26) 38%, rgba(212, 175, 55, 0.1) 72%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 100% 0%, 0% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperLeft 2s ease-in-out infinite alternate',
                    filter: 'blur(4px)',
                    boxShadow: '0 0 55px rgba(212, 175, 55, 0.24)',
                    zIndex: 1,
                  }}
                ></div>
              </div>
              <div style={{ width: '6px', height: '6px', background: '#333', zIndex: 4 }}></div>
            </div>

            <div
              style={{
                position: 'absolute' as const,
                right: '30px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                animation: 'lampSway 5s ease-in-out infinite 2.5s',
                transformOrigin: 'bottom center',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '10px',
                  background: `radial-gradient(ellipse at center, ${bulbYellow} 0%, #c9a548 100%)`,
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 'calc(50% - 78px)',
                    bottom: '100%',
                    transform: 'translateX(-50%)',
                    width: '160px',
                    height: '290px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.52) 0%, rgba(212, 175, 55, 0.26) 38%, rgba(212, 175, 55, 0.1) 72%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 100% 0%, 0% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperRight 2s ease-in-out infinite alternate',
                    filter: 'blur(4px)',
                    boxShadow: '0 0 55px rgba(212, 175, 55, 0.24)',
                    zIndex: 1,
                  }}
                ></div>
              </div>
              <div style={{ width: '6px', height: '6px', background: '#333', zIndex: 4 }}></div>
            </div>

            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '15px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${bulbYellow} 0%, #c9a548 100%)`,
                  margin: '0 auto 4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow:
                    '0 0 14px rgba(212, 175, 55, 0.35), inset -7px -8px 12px rgba(0, 0, 0, 0.38), inset 3px 3px 5px rgba(255, 255, 255, 0.12)',
                  animation: 'globeSpin 20s linear infinite',
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle at 28% 24%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.12) 18%, transparent 38%)',
                    zIndex: 3,
                    pointerEvents: 'none',
                  }}
                />
                <img
                  src="/images/sealandstamp.jpeg"
                  alt="Seal and Stamp Notary logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    padding: '2px',
                    transform: 'translateZ(1px)',
                    backfaceVisibility: 'hidden',
                    opacity: 0.92,
                    filter: 'contrast(1.06) saturate(0.96)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle at 74% 76%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.2) 30%, transparent 60%), linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 22%, transparent 44%, transparent 62%, rgba(0,0,0,0.12) 78%, rgba(0,0,0,0.28) 100%)',
                    zIndex: 4,
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '0.22em',
                  color: '#c9c3bd',
                  margin: '0 0 8px',
                  fontFamily: "'Allura', cursive",
                  textTransform: 'lowercase',
                  letterSpacing: '1px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                }}
              >
                
              </p>
            </div>

            <div
              style={{
                position: 'absolute' as const,
                left: '50%',
                top: '62px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <p
                style={{
                  fontSize: '0.26em',
                  color: bulbYellow,
                  margin: '0 0 1px',
                  letterSpacing: '2px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                  whiteSpace: 'nowrap',
                }}
              >
                Seal and Stamp
              </p>
              <p
                style={{
                  fontSize: '0.24em',
                  color: '#6d6669',
                  margin: '0 0 3px',
                  letterSpacing: '3px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                }}
              >
                Notary
              </p>
            </div>

            <button
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '8px',
                transform: 'translateX(-50%)',
                padding: '2px 8px',
                background: 'transparent',
                border: 'none',
                color: gold,
                fontSize: '0.38em',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                textShadow: '0 0 10px rgba(0,0,0,0.8)',
                zIndex: 10,
              }}
              onClick={() =>
                alert(
                  'Seal and Stamp Notary\nMobile Notary Services\nLicensed, Bonded & Insured\nServing: Dallas-Fort Worth',
                )
              }
            >
              View
            </button>
          </div>

          <p
            style={{
              fontSize: '0.22em',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: '#8a8084',
              margin: '8px 0 0',
              whiteSpace: 'nowrap',
            }}
          >
            This Week's Spotlight
          </p>
        </div>

        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 80,
          }}
        >
          <SiteFooter compact />
        </div>
      </main>

      {showPartnershipForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowPartnershipForm(false)}
        >
          <div
            style={{
              background: '#f6f3f1',
              border: `1px solid ${gold}`,
              padding: '40px',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '90vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                color: '#7f7478',
                fontSize: '1.5em',
                fontWeight: 300,
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Partnership Inquiry
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#fff',
                    border: '1px solid rgba(17, 17, 17, 0.14)',
                    color: '#111',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    minHeight: '120px',
                    marginBottom: '20px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: gold,
                    color: '#000',
                    border: 'none',
                    fontFamily: 'inherit',
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setShowPartnershipForm(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'transparent',
                    color: '#888',
                    border: '1px solid #333',
                    fontFamily: 'inherit',
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
