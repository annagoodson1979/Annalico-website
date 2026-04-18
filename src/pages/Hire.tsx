import NotaryFrame from '../components/NotaryFrame';
import type { Page } from '../types';

interface HireProps {
  onNavigate: (page: Page) => void;
}

function Hire({ onNavigate }: HireProps) {
  const gold = '#d4af37';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Hire an Agent"
      subtitle="Hire an Agent"
      backTo="services"
      contentJustify="start"
    >
      <div style={{ display: 'grid', gap: '18px', maxWidth: '860px', margin: '-12px auto 0', width: '100%' }}>
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
          <p style={{ margin: 0, color: '#d8d1c6', lineHeight: 1.7 }}>
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
            padding: '2px 6px 0',
          }}
        >
          <p style={{ margin: '0 0 6px', color: '#d8d1c6', lineHeight: 1.7 }}>
            As a borrower you could save money at your next signing.
          </p>
          <p style={{ margin: 0, color: '#cfc8bc', lineHeight: 1.7 }}>
            Did you know you can hire your signing agent in Texas? Don&apos;t forget to find out how in{' '}
            <strong>Did You Know?</strong>
          </p>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default Hire;
