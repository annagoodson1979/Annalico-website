import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface HireProps {
  onNavigate: (page: Page) => void;
}

function Hire({ onNavigate }: HireProps) {
  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Did You Know"
      subtitle="Helpful answers before your signing"
      backTo="home"
      backLabel="Back to Notary Home"
      maxWidth="920px"
    >
      <div
        style={{
          background: '#101010',
          border: '1px solid #242424',
          borderRadius: '18px',
          padding: '28px',
          color: '#d0d0d0',
          lineHeight: 1.9,
        }}
      >
        <p style={{ marginTop: 0 }}>
          Save time and money by having valid ID ready, confirming all signer names match the
          documents exactly, and avoiding signatures before the appointment begins.
        </p>
        <p style={{ marginBottom: 0 }}>
          If you are unsure whether a document is ready for notarization, reach out before booking
          and I can help you prepare.
        </p>
      </div>
    </PageFrame>
  );
}

export default Hire;
