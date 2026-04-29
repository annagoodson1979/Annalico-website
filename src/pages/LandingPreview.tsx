import React, { useState } from 'react';
import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';
const heroImage = '/images/hero.jpg';
interface LandingProps {
  onNavigate: (page: Page) => void;
}

function Landing({ onNavigate }: LandingProps) {
  const [hoveredBusiness, setHoveredBusiness] = useState<
    'notary' | 'salon' | 'partnership' | null
  >(null);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const gold = '#f3efec';
  const bulbYellow = '#d4af37';
  const spotlightPartner = {
    name: 'TGB Global',
    tagline: 'Global logistics with local care.',
  };
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
      minHeight: 'calc(100vh - 60px)',
      paddingTop: '60px',
      paddingBottom: '24px',
      overflow: 'visible',
    },
    hero: {
      position: 'relative' as const,
      flex: 1,
      minHeight: 'calc(100vh - 120px)',
      overflow: 'hidden',
    },
    heroBackground: {
      position: 'absolute' as const,
      inset: 0,
      backgroundImage: `url(${heroImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'calc(50% - 496px) 128px',
      backgroundSize: 'min(70vw, 680px) auto',
      backgroundColor: '#000',
      filter: 'saturate(1) contrast(1.06) brightness(1.03)',
      opacity: 0.96,
      transform: 'scale(1.01)',
      WebkitMaskImage:
        'radial-gradient(ellipse 58% 74% at 24% 40%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.86) 66%, rgba(0,0,0,0) 92%)',
      maskImage:
        'radial-gradient(ellipse 58% 74% at 24% 40%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.86) 66%, rgba(0,0,0,0) 92%)',
    },
    heroPhotoBlend: {
      position: 'absolute' as const,
      inset: 0,
      pointerEvents: 'none' as const,
      background:
        'radial-gradient(ellipse at 24% 42%, rgba(0,0,0,0) 34%, rgba(0,0,0,0.42) 66%, rgba(0,0,0,0.78) 100%), linear-gradient(180deg, rgba(0,0,0,0.56) 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.1) 78%, rgba(0,0,0,0.7) 100%), linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 24%, rgba(0,0,0,0.08) 44%, rgba(0,0,0,0.34) 66%, rgba(0,0,0,0.86) 100%)',
    },
    heroOverlay: {
      position: 'absolute' as const,
      inset: 0,
      background:
        'radial-gradient(circle at 23% 32%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 18%, rgba(0,0,0,0.1) 44%, transparent 58%), linear-gradient(90deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.04) 24%, rgba(0,0,0,0.08) 48%, rgba(0,0,0,0.26) 72%, rgba(0,0,0,0.46) 100%)',
    },
  };

  const businessPulseKeyframes = `
    @keyframes businessPulse {
          0%, 100% { text-shadow: none; transform: scale(1); }
          50% { text-shadow: none; transform: scale(1.03); }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{businessPulseKeyframes}
      {`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0.92) translateZ(0); filter: blur(3px); }
          100% { opacity: 1; transform: scale(1) translateZ(0); filter: blur(0); }
        }
        @keyframes blurFocusIn {
          0% { opacity: 0; filter: blur(5px); }
          100% { opacity: 1; filter: blur(0); }
        }
        @keyframes wordReveal {
          0% { opacity: 0; transform: translateY(6px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes forwardEnter {
          0% { opacity: 0; transform: perspective(650px) translateZ(-120px) scale(0.9); filter: blur(4px); }
          100% { opacity: 1; transform: perspective(650px) translateZ(0) scale(1); filter: blur(0); }
        }
        @keyframes quietEnter {
          0% { opacity: 0; transform: translateY(8px); }
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
          0% { transform: rotate(-52deg); opacity: 0.15; }
          100% { transform: rotate(52deg); opacity: 0.26; }
        }
        @keyframes wiperRight {
          0% { transform: rotate(52deg); opacity: 0.15; }
          100% { transform: rotate(-52deg); opacity: 0.26; }
        }
        @keyframes suspendedFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
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
        @font-face {
          font-family: 'Bethany';
          src: url('/images/BethanyRomanceRegular-gwMMR-2.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Boheme';
          src: url('/images/Boheme Floral.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
        }
        @keyframes yenFadeRise {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineRise {
          0% { opacity: 0; transform: translateY(18px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes sideFadeAway {
          0% { opacity: 1; filter: blur(0); }
          100% { opacity: 0; filter: blur(2px); }
        }
        @keyframes slowFadeIn {
          0% { opacity: 0; filter: blur(2px); }
          100% { opacity: 1; filter: blur(0); }
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
                Services
              </button>
              <button style={dropdownItemStyle(0.2)} onClick={() => onNavigate('services')}>
                Prices
              </button>
              <button style={dropdownItemStyle(0.26)} onClick={() => onNavigate('documents')}>
                Documents
              </button>
              <button style={dropdownItemStyle(0.32)} onClick={() => onNavigate('contact')}>
                Contact
              </button>
              <button style={dropdownItemStyle(0.38)} onClick={() => onNavigate('contact')}>
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
        <button
          className="nav-hover-button"
          style={{ ...styles.navButton, color: '#f3efec', fontWeight: 500, textShadow: '0 0 10px rgba(243, 239, 236, 0.3)' }}
          onClick={() => onNavigate('did-you-know')}
        >
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

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroBackground} />
          <div style={styles.heroPhotoBlend} />
          <div style={styles.heroOverlay} />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '52%',
              transform: 'translate(-50%, -50%)',
              zIndex: 12,
              width: 'min(560px, 56vw)',
              minHeight: 'min(80vh, 700px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
              padding: '54px 18px 66px',
              background: 'transparent',
              boxShadow: 'none',
              backdropFilter: 'none',
            }}
          >
            <h1
              style={{
                margin: 0,
                color: '#983c3b',
                fontFamily: "'Bethany', serif",
                fontSize: 'clamp(4rem, 9.4vw, 7.3rem)',
                fontWeight: 400,
                letterSpacing: '0.08em',
                lineHeight: 0.9,
                opacity: 0,
                animation: 'yenFadeRise 1.1s ease forwards',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                gap: '0.24em',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: 0,
                }}
              >
                <span
                  style={{
                    animation: 'sideFadeAway 3.2s ease 5.8s both',
                    willChange: 'opacity, filter',
                  }}
                >
                  DU
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    marginLeft: '-0.02em',
                  }}
                >
                  YEN
                </span>
              </span>
              <span
                style={{
                  marginLeft: '0.06em',
                  animation: 'sideFadeAway 3.2s ease 5.8s both',
                  willChange: 'opacity, filter',
                }}
              >
                AN
              </span>
            </h1>
            <p
              style={{
                margin: '40px 0 0',
                color: '#8a5658',
                fontFamily: "'Boheme', cursive",
                fontSize: 'clamp(2.05rem, 3.9vw, 3.55rem)',
                lineHeight: 1.04,
                textShadow: 'none',
                opacity: 0,
                animation: 'lineRise 0.85s ease 1.15s forwards',
              }}
            >
              Leading with strength and grace...
            </p>
            <p
              style={{
                margin: '42px auto 0',
                color: '#bbb8bd',
                fontFamily: "'Bethany', serif",
                fontSize: 'clamp(1.18rem, 1.95vw, 1.86rem)',
                lineHeight: 1.46,
                letterSpacing: '0.1em',
                maxWidth: '500px',
                opacity: 0,
                animation: 'forwardEnter 0.95s ease 3.8s forwards',
              }}
            >
              Built on precision.
              <br />
              Redefining the standard.
            </p>
            <p
              style={{
                margin: '46px 0 0',
                color: '#a06a6b',
                fontFamily: "'Boheme', cursive",
                fontSize: 'clamp(2.05rem, 3.9vw, 3.55rem)',
                lineHeight: 1.04,
                textShadow: 'none',
                filter: 'contrast(1.04)',
                opacity: 0,
                animation: 'lineRise 0.85s ease 2.25s forwards',
              }}
            >
              ...authority without noise.
            </p>
            <p
              style={{
                margin: '52px auto 0',
                color: '#5f5d63',
                fontFamily: "'Bethany', serif",
                fontSize: 'clamp(0.96rem, 1.18vw, 1.18rem)',
                lineHeight: 1.72,
                letterSpacing: '0.07em',
                maxWidth: '500px',
                opacity: 0,
                animation: 'slowFadeIn 3.2s ease 5.8s both',
              }}
            >
              To bring clarity and certainty where it matters most.
            </p>
          </div>
        </section>

        <div
          style={{
            position: 'fixed' as const,
            right: '130px',
            bottom: '82px',
            zIndex: 24,
            width: '220px',
            opacity: 0.72,
            textAlign: 'center' as const,
          }}
        >
          <div style={{ position: 'relative', width: '220px', height: '206px' }}>
            <div
              style={{
                position: 'absolute' as const,
                left: '36px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                animation: 'none',
                transformOrigin: 'bottom center',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '12px',
                  background: `radial-gradient(ellipse at center, ${bulbYellow} 0%, #c9a548 100%)`,
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'relative',
                  zIndex: 3,
                  transform: 'translateX(44px)',
                }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '100%',
                      transform: 'translateX(-50%)',
                      width: '186px',
                    height: '170px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.5) 0%, rgba(212, 175, 55, 0.34) 36%, rgba(212, 175, 55, 0.12) 70%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 84% 0%, 16% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperLeft 17s ease-in-out infinite alternate',
                    filter: 'blur(6px)',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.18)',
                    zIndex: 1,
                  }}
                ></div>
              </div>
              <div style={{ width: '6px', height: '6px', background: '#333', zIndex: 4, transform: 'translateX(44px)' }}></div>
            </div>

            <div
              style={{
                position: 'absolute' as const,
                right: '36px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                animation: 'none',
                transformOrigin: 'bottom center',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '12px',
                  background: `radial-gradient(ellipse at center, ${bulbYellow} 0%, #c9a548 100%)`,
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'relative',
                  zIndex: 3,
                  transform: 'translateX(44px)',
                }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '100%',
                      transform: 'translateX(-50%)',
                      width: '186px',
                    height: '170px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.5) 0%, rgba(212, 175, 55, 0.34) 36%, rgba(212, 175, 55, 0.12) 70%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 84% 0%, 16% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperRight 17s ease-in-out infinite alternate',
                    filter: 'blur(6px)',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.18)',
                    zIndex: 1,
                  }}
                ></div>
              </div>
              <div style={{ width: '6px', height: '6px', background: '#333', zIndex: 4, transform: 'translateX(44px)' }}></div>
            </div>

          </div>
        </div>

        <div
          style={{
            position: 'fixed' as const,
            left: '68%',
            bottom: '94px',
            zIndex: 25,
            width: '120px',
            textAlign: 'center' as const,
            pointerEvents: 'auto' as const,
            animation: 'suspendedFloat 6s ease-in-out infinite',
            transform: 'translateX(-50%)',
          }}
        >
          <div
            style={{
              margin: '0 auto 6px',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.92rem',
              color: '#d4af37',
              filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.2))',
            }}
          >
            🌐
          </div>
          <div
            style={{
              padding: '7px 8px 7px',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.22)',
              background: 'rgba(12, 12, 12, 0.38)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 8px 18px rgba(0,0,0,0.24)',
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#f3efec',
                fontSize: '0.66rem',
                letterSpacing: '0.45px',
                fontWeight: 600,
                lineHeight: 1.35,
                textShadow: '0 0 10px rgba(0,0,0,0.85)',
              }}
            >
              {spotlightPartner.name}
            </p>
            <p
              style={{
                margin: '4px 0 7px',
                color: '#aaa296',
                fontSize: '0.5rem',
                letterSpacing: '0.28px',
                lineHeight: 1.35,
                textShadow: '0 0 10px rgba(0,0,0,0.85)',
              }}
            >
              {spotlightPartner.tagline}
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('partnership-directory')}
          style={{
            position: 'fixed' as const,
            left: '68%',
            bottom: '66px',
            zIndex: 26,
            width: '220px',
            border: 'none',
            background: 'transparent',
            color: '#9b9498',
            padding: 0,
            fontSize: '0.48rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            textAlign: 'center' as const,
            textShadow: '0 0 8px rgba(0,0,0,0.82)',
            transform: 'translateX(-50%)',
          }}
        >
          This Week&apos;s Spotlight
        </button>

        <div style={{ position: 'relative', zIndex: 80, marginTop: 'auto' }}>
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
