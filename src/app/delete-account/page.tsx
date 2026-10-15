import type { Metadata } from "next";
import Link from "next/link";
import { Fact, LegalPage } from "@/components/legal-page";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = { title: "Delete your account · OneLocal", description: "How to delete your OneLocal account and personal data, in the app or by writing to us." };

// The public page Google Play asks for ("delete account URL"). The steps and the kept/erased lists mirror the
// in-app flow (You → Privacy & your data → Delete my account) and the privacy policy.
export default function DeleteAccountPage() {
  const g = LEGAL.grievanceOfficer;
  return (
    <LegalPage title="Delete your account" intro="You can delete your OneLocal account and personal data any time, from inside the app or by asking us.">
      <section>
        <h2>In the app (fastest)</h2>
        <ol className="ml-5 list-decimal space-y-1">
          <li>Open the OneLocal app and sign in.</li>
          <li>Go to the <strong>You</strong> tab, then <strong>Privacy &amp; your data</strong>.</li>
          <li>Tap <strong>Delete my account</strong> and confirm. This cannot be undone.</li>
        </ol>
        <p className="mt-3">You are signed out everywhere at once, and your login is closed.</p>
      </section>

      <section>
        <h2>Can’t use the app?</h2>
        <p>Write to <a className="text-primary underline" href={`mailto:${g.email}?subject=Delete%20my%20OneLocal%20account`}>{g.email}</a> from the email address on your account, or call <Fact value={g.phone} /> ({g.hours}). Tell us the email or mobile number on the account. We confirm it is you, then delete the account and reply within {LEGAL.responseDays} days.</p>
        <p className="mt-2">Contact: <Fact value={g.name} />, grievance officer, {LEGAL.legalEntity}.</p>
      </section>

      <section>
        <h2>What is deleted</h2>
        <ul>
          <li>Your login, name, email and mobile number.</li>
          <li>Your delivery addresses and the notes on your orders.</li>
          <li>Your help messages and booking requests.</li>
          <li>Your optional consents, including offers on WhatsApp (switched off).</li>
          <li>Your profile, saved addresses, wishlist and cart kept on your phone.</li>
        </ul>
      </section>

      <section>
        <h2>What we must keep</h2>
        <p>Some records are kept because the law requires it. They no longer point to you.</p>
        <ul>
          <li>Tax invoices and order amounts (GST records), for the statutory period. Your name, address and notes are removed from them.</li>
          <li>Payment and refund records, as payment and tax law require.</li>
          <li>Your consent history and privacy requests, so we can show we followed your choices.</li>
          <li>Security logs, for one year, then deleted.</li>
        </ul>
        <p className="mt-3">More detail is in the <Link className="text-primary underline" href="/privacy-policy">privacy policy</Link>.</p>
      </section>
    </LegalPage>
  );
}
