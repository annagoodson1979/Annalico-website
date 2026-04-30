import React, { useState } from 'react';
import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';
import { getWeeklyFeaturedListing } from '../data/featuredListings';
const heroImage = '/images/hero.jpg';
const spotlightLogo = '/images/logo.jpg';
interface LandingProps {
  onNavigate: (page: Page) => void;
}

function Landing({ onNavigate }: LandingProps) {
  const [hoveredBusiness, setHoveredBusiness] = useState<'yen' | null>(null);
  const gold = '#f3efec';
  const bulbYellow = '#d4af37';
  const featuredListing = getWeeklyFeaturedListing();
  const dropdownItemStyle = (delay: number): React.CSSProperties => ({
    ...styles.dropdownItem,
    opacity: 0,
    animation: `dropdownLineReveal 0.32s ease forwards`,
    animationDelay: `${delay}s`,
  });

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
      filter: 'saturate(1.05) contrast(1.12) brightness(1.08)',
      opacity: 0.96,
      transform: 'scale(1.01)',
      animation: 'heroImageSettle 9s ease forwards',
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
      opacity: 0.42,
      animation: 'heroMoodSettle 9s ease forwards',
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
          0% { transform: rotate(-25deg); opacity: 0.15; }
          100% { transform: rotate(25deg); opacity: 0.25; }
        }
        @keyframes wiperRight {
          0% { transform: rotate(25deg); opacity: 0.15; }
          100% { transform: rotate(-25deg); opacity: 0.25; }
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
        @keyframes heroImageSettle {
          0% { filter: saturate(1.12) contrast(1.18) brightness(1.18); opacity: 1; }
          64% { filter: saturate(1.08) contrast(1.15) brightness(1.12); opacity: 0.99; }
          100% { filter: saturate(1.05) contrast(1.12) brightness(1.08); opacity: 0.96; }
        }
        @keyframes heroMoodSettle {
          0% { opacity: 0.2; }
          64% { opacity: 0.34; }
          100% { opacity: 0.82; }
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
          onMouseEnter={() => setHoveredBusiness('yen')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('landing')}>
            Yen Circle
          </button>
          {hoveredBusiness === 'yen' && (
            <div style={{ ...styles.dropdown, minWidth: '180px', animation: 'carpetDrop 0.72s ease forwards' }}>
              <button style={dropdownItemStyle(0.08)} onClick={() => onNavigate('landing')}>
                Yen Brand
              </button>
              <button style={dropdownItemStyle(0.14)} onClick={() => onNavigate('partnership-directory')}>
                Featured Listings
              </button>
            </div>
          )}
        </div>
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
            right: '112px',
            bottom: '232px',
            zIndex: 50,
            width: '190px',
            textAlign: 'center' as const,
            display: 'grid',
            gap: '8px',
            justifyItems: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#f3efec',
              fontSize: '0.46rem',
              letterSpacing: '0.65px',
              textTransform: 'uppercase',
            }}
          >
            Yen Brand
          </p>
          <a
            href="https://www.ynxnotary.com"
            style={{
              color: bulbYellow,
              fontSize: '0.4rem',
              letterSpacing: '0.52px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            YNX Notary
          </a>
          <a
            href="https://agsalonstudio.glossgenius.com"
            style={{
              color: '#c7b8bd',
              fontSize: '0.4rem',
              letterSpacing: '0.52px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            AG Salon Studio
          </a>
        </div>

        <div
          style={{
            position: 'fixed' as const,
            right: '112px',
            bottom: '88px',
            zIndex: 50,
            width: '180px',
            textAlign: 'center' as const,
          }}
        >
          <div style={{ position: 'relative', width: '180px', height: '176px' }}>
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
                    left: 'calc(50% - 60px)',
                    bottom: '100%',
                    transform: 'translateX(-50%)',
                    width: '132px',
                    height: '142px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.52) 0%, rgba(212, 175, 55, 0.26) 38%, rgba(212, 175, 55, 0.1) 72%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 100% 0%, 0% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperLeft 4.2s ease-in-out infinite alternate',
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
                    left: 'calc(50% - 60px)',
                    bottom: '100%',
                    transform: 'translateX(-50%)',
                    width: '132px',
                    height: '142px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.52) 0%, rgba(212, 175, 55, 0.26) 38%, rgba(212, 175, 55, 0.1) 72%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 100% 0%, 0% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperRight 4.2s ease-in-out infinite alternate',
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
                top: '22px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '66px',
                  height: '66px',
                  borderRadius: '0',
                  background: 'transparent',
                  border: 'none',
                  margin: '0 auto 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={featuredListing.logo || spotlightLogo}
                  alt={`${featuredListing.name} logo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    padding: 0,
                    opacity: 1,
                    filter: 'none',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </div>
            </div>

            <div
              style={{
                position: 'absolute' as const,
                left: '50%',
                top: '92px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <p
                style={{
                  fontSize: '0.4em',
                  color: bulbYellow,
                  margin: '0 0 4px',
                  letterSpacing: '1.2px',
                  fontWeight: 600,
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                  whiteSpace: 'nowrap',
                }}
              >
                {featuredListing.name}
              </p>
              <p
                style={{
                  fontSize: '7px',
                  color: '#9a8f94',
                  margin: '0 0 3px',
                  letterSpacing: '0.8px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                  whiteSpace: 'nowrap',
                }}
              >
                {featuredListing.subtitle}
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
                fontSize: '4.5px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                textShadow: '0 0 10px rgba(0,0,0,0.8)',
                zIndex: 10,
              }}
              onClick={() => onNavigate('partnership-directory')}
            >
              {featuredListing.ctaLabel ?? 'View Listing'}
            </button>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('partnership-directory')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              margin: '6px 0 0',
              cursor: 'pointer',
              display: 'grid',
              gap: '2px',
              justifyItems: 'center',
              width: '100%',
            }}
          >
            <span
              style={{
                fontSize: '4.2px',
                letterSpacing: '0.35px',
                textTransform: 'uppercase',
                color: '#7c7377',
                whiteSpace: 'nowrap',
              }}
            >
              This Week's Spotlight
            </span>
            <span
              style={{
                fontSize: '3.8px',
                letterSpacing: '0.42px',
                textTransform: 'uppercase',
                color: '#9a8f94',
                whiteSpace: 'nowrap',
              }}
            >
              Featured Listings
            </span>
          </button>
        </div>

        <div style={{ position: 'relative', zIndex: 80, marginTop: 'auto' }}>
          <SiteFooter compact />
        </div>
      </main>
    </div>
  );
}

export default Landing;
