import NotaryFrame from '../components/NotaryFrame';
import type { Page } from '../types';

interface HowIHelpProps {
  onNavigate: (page: Page) => void;
}

function HowIHelp({ onNavigate }: HowIHelpProps) {
  const gold = '#d4af37';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="How I Can Help"
      subtitle="Calm support for important moments"
      backTo="home"
    >
      <div style={{ display: 'grid', gap: '18px', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, color: '#cfc8bc', lineHeight: 1.7 }}>
            Use these quick links to go where you need in one click.
          </p>
          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('prices')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Packages
            </button>
            <button
              onClick={() => onNavigate('how-help')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              How I Can Help
            </button>
            <button
              onClick={() => onNavigate('hire')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Hire an Agent
            </button>
            <button
              onClick={() => onNavigate('services')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Prices
            </button>
          </div>
        </section>

        <section
          style={{
            textAlign: 'center',
            padding: '40px 8px 28px',
          }}
        >
          <h2
            style={{
              margin: '0 0 12px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'none',
              lineHeight: 1.22,
              fontSize: 'clamp(1.7rem, 3.2vw, 2.35rem)',
              fontFamily: "'Cinzel', serif",
              textShadow: '0 0 14px rgba(212, 175, 55, 0.14)',
            }}
          >
            Yen Experience
          </h2>
          <p
            style={{
              margin: 0,
              color: '#ffffff',
              fontStyle: 'italic',
              fontSize: 'clamp(1.06rem, 2vw, 1.28rem)',
              letterSpacing: '0.6px',
              lineHeight: 1.45,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Your Next Experiences
          </p>
          <div
            style={{
              margin: '20px auto 0',
              width: 'min(240px, 60%)',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
            }}
          />
          <div
            style={{
              margin: '18px auto 0',
              width: '100%',
              maxWidth: '120px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)',
            }}
          />
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: '0 0 10px',
              color: gold,
              fontWeight: 600,
              letterSpacing: '1.6px',
              textTransform: 'none',
              fontSize: '1.22rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            The Signature Signing
          </h2>
          <p
            style={{
              margin: '0 0 12px',
              color: '#b9b2a5',
              lineHeight: 1.7,
              maxWidth: '58ch',
              marginInline: 'auto',
              fontStyle: 'italic',
            }}
          >
            Done right, from the very first signature.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            A seamless, thoughtfully guided signing experience.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            Every detail is prepared, every step is clear-handled with professionalism, precision, and quiet confidence
            from beginning to end.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            Clear, calm, and completed with care-so you can move forward knowing it was done exactly as it should be.
          </p>
          <p
            style={{
              margin: 0,
              color: gold,
              lineHeight: 1.65,
              maxWidth: '58ch',
              marginInline: 'auto',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontSize: '0.92rem',
              fontWeight: 600,
            }}
          >
            Starting at $125
          </p>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: '0 0 10px',
              color: gold,
              fontWeight: 600,
              letterSpacing: '1.6px',
              textTransform: 'none',
              fontSize: '1.22rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            The Diamond Vault
          </h2>
          <p
            style={{
              margin: '0 0 12px',
              color: '#b9b2a5',
              lineHeight: 1.7,
              maxWidth: '58ch',
              marginInline: 'auto',
              fontStyle: 'italic',
            }}
          >
            Not everything belongs here.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            Reserved for what matters most.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            A private, elevated loan-signing experience where every detail is handled with intention, discretion, and
            uncompromising care.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            This is not a crowded table or shared signing setup. Your appointment is curated with dedicated space,
            calm pacing, and personal attention from start to finish.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            Your Diamond experience begins with hospitality, including a warm hand towel (lavender available), a wine
            or champagne beverage, and a charcuterie board.
          </p>
          <p style={{ margin: '0 0 12px', color: '#b9b2a5', lineHeight: 1.72, maxWidth: '58ch', marginInline: 'auto' }}>
            Please share any allergies or food dislikes in advance so everything is prepared with care.
          </p>
          <p
            style={{
              margin: 0,
              color: gold,
              lineHeight: 1.65,
              maxWidth: '58ch',
              marginInline: 'auto',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontSize: '0.92rem',
              fontWeight: 600,
            }}
          >
            Starting at $195
          </p>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: '0 0 10px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '1.6px',
              textTransform: 'none',
              fontSize: '1.22rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            JUST IN CASE MOMENTS
          </h2>
          <p
            style={{
              margin: '0 0 12px',
              color: '#b9b2a5',
              lineHeight: 1.7,
              maxWidth: '58ch',
              marginInline: 'auto',
              fontStyle: 'italic',
            }}
          >
            Life doesn&apos;t always give us time to prepare.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            This session is designed to help you put important information, contacts, and personal wishes in one place
            - so your family isn&apos;t left searching or guessing during difficult moments.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            Together, we&apos;ll walk through a simple, guided journal that covers what matters most. Once complete,
            your document is sealed and ready to be kept safely for when it&apos;s needed.
          </p>
          <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.75, maxWidth: '58ch', marginInline: 'auto' }}>
            This is not a legal document - it&apos;s a practical, meaningful way to ensure your loved ones have
            direction and clarity when it matters most.
          </p>
          <p style={{ margin: '0 0 10px', color: '#b9b2a5', lineHeight: 1.72, maxWidth: '58ch', marginInline: 'auto' }}>
            This document is intended for personal organization and guidance only and does not replace legal advice or
            formal legal documents. No legal advice has been provided.
          </p>
          <p style={{ margin: 0, color: '#b9b2a5', lineHeight: 1.72, maxWidth: '58ch', marginInline: 'auto' }}>
            If legal guidance is needed, please consult a licensed attorney.
          </p>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default HowIHelp;
