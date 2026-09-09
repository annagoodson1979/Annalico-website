import { LockKeyhole } from "lucide-react";
import "./Studio21PrivateEntry.css";

export default function Studio21PrivateEntry() {
  return <main className="studio21-private-entry">
    <div className="studio21-private-entry-card">
      <p className="studio21-private-entry-brand">STUDIO 21 SALON</p>
      <LockKeyhole size={30} aria-hidden="true" />
      <h1>Client files belong<br />on the private side.</h1>
      <p>The earlier unprotected booking prototype has been closed. This page contains no client files and does not accept private information.</p>
      <div className="studio21-private-entry-status">Private computer & phone access is being prepared.</div>
      <p className="studio21-private-entry-small">The private client-file service is not connected yet. This notice is not a login screen, and a shared access code is not client-file security.</p>
      <a href="/salon">Back to the salon website</a>
    </div>
  </main>;
}
