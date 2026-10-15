import type { Metadata } from "next";
import { Fact, LegalPage } from "@/components/legal-page";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = { title: "Privacy policy · OneLocal", description: "How OneLocal uses your personal data, why, and how you stay in control." };

// The public copy of the in-app privacy notice (DPDP Act 2023), same version and the same facts.
const COLLECT = [
  ["Name, mobile number and email", "To create your account, sign you in (including with Google), and reach you about your orders.", "While your account is open."],
  ["Delivery addresses and map pins", "To deliver your orders and check that we deliver there.", "Saved addresses: until you delete them. On an order: with the order."],
  ["Orders: items, prices, taxes, coupons, store", "To fulfil, bill and refund orders, and keep the tax records the law requires.", "As tax law requires."],
  ["Payment references (method, status, payment ids)", "To confirm payments and refunds. Card numbers, UPI PINs and bank logins are typed on the payment provider’s page and never reach us.", "As payment and tax law require."],
  ["Location: the town you pick, or your current location when you tap “Use current location”", "To show what OneLocal offers where you are.", "On your phone only, until you change it."],
  ["Help and privacy requests", "To answer you.", "Until answered, then as our retention schedule says."],
  ["A device key for notifications", "To tell you about your orders. You can turn notifications off in your phone’s settings.", "While the app is on your phone."],
  ["Marketing messages and personalised suggestions", "Only if you say yes. Off until you switch them on.", "Your choice is recorded, with the date and notice version."],
];

const SHARED = [
  ["The store or restaurant fulfilling your order", "The items, and the delivery address and notes for that order only.", "India"],
  ["The delivery rider", "The delivery address, map pin and notes for the order they carry.", "India"],
  ["Supabase", "Hosts our database and sign-in.", "Mumbai region, India"],
  ["Google", "Sign in with Google (your name and email, only if you choose it); maps and address search when switched on; push notifications (Firebase).", "Google’s servers, may be outside India"],
  ["Payment provider", "Takes online payments; holds card, UPI and bank details under its own licence.", "India"],
];

export default function PrivacyPage() {
  const g = LEGAL.grievanceOfficer;
  return (
    <LegalPage title="Privacy policy" intro="How OneLocal uses your personal data, why, and how you stay in control. Written to be read in two minutes.">
      <section>
        <h2>Who we are</h2>
        <p>OneLocal is run by <Fact value={LEGAL.legalEntity} />, <Fact value={LEGAL.registeredAddress} />. Under India’s Digital Personal Data Protection Act, 2023 we are the “Data Fiduciary” and you are the “Data Principal”.</p>
      </section>

      <section>
        <h2>What we collect, and why</h2>
        <p>We collect only what these purposes need, and use it only for them. We never sell your data.</p>
        <div className="mt-4 space-y-3">
          {COLLECT.map(([data, why, kept]) => (
            <div key={data} className="rounded-2xl border border-white/10 bg-card p-4">
              <p className="font-semibold text-foreground">{data}</p>
              <p className="mt-1 text-muted-foreground">{why}</p>
              <p className="mt-1 text-sm text-muted-foreground">Kept: {kept}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>Anyone who handles your data for us may use it only on our instructions, and must keep it safe.</p>
        <ul className="mt-3">
          {SHARED.map(([who, what, where]) => <li key={who}><span className="font-semibold text-foreground">{who}:</span> {what} <span className="text-muted-foreground">({where})</span></li>)}
        </ul>
      </section>

      <section>
        <h2>Sign in with Google</h2>
        <p>If you choose “Continue with Google”, Google shares your name, email address and profile picture with us. We use them only to create and sign in to your OneLocal account. We do not get your Google password, and we do not read your Gmail, contacts or any other Google data. You can remove OneLocal’s access any time at myaccount.google.com/permissions.</p>
      </section>

      <section>
        <h2>Your rights</h2>
        <ul>
          <li><span className="font-semibold text-foreground">See your data:</span> download everything we hold about you, with who we shared it with.</li>
          <li><span className="font-semibold text-foreground">Correct it:</span> edit your profile any time, or ask us to fix anything else.</li>
          <li><span className="font-semibold text-foreground">Delete it:</span> delete your account in the app. We erase what we can at once and tell you what the law makes us keep.</li>
          <li><span className="font-semibold text-foreground">Withdraw consent:</span> switch off any optional use in the app, as easily as you switched it on.</li>
          <li><span className="font-semibold text-foreground">Nominate someone</span> to use these rights for you if you die or cannot act.</li>
          <li><span className="font-semibold text-foreground">Complain:</span> to us first, then to the Data Protection Board of India.</li>
        </ul>
        <p className="mt-3">All of these are in the app under You → Privacy &amp; your data.</p>
      </section>

      <section>
        <h2>What we must keep</h2>
        <p>Tax invoices and order amounts (GST records) for the statutory period; payment and refund records as payment and tax law require; your consent history so we can show we followed your choices; security logs for one year. Everything else is erased once it is no longer needed for the purpose you gave it for, or when you withdraw consent.</p>
      </section>

      <section>
        <h2>Children</h2>
        <p>Accounts are for people aged {LEGAL.minimumAge} or older. A child can use OneLocal only through a parent’s or guardian’s own account. We do not track children’s behaviour or show them targeted advertising.</p>
      </section>

      <section>
        <h2>Keeping it safe</h2>
        <p>Your data travels encrypted and is stored with Supabase in the Mumbai region, India. Only our servers can read the database. If a breach ever affects your data, we will tell you and the Data Protection Board without delay.</p>
      </section>

      <section>
        <h2>Questions and complaints</h2>
        <p>Our grievance officer answers questions about your personal data: <Fact value={g.name} />, <Fact value={g.email} />, <Fact value={g.phone} /> ({g.hours}). We reply within {LEGAL.responseDays} days. General support: {LEGAL.supportEmail}.</p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>When this policy changes, the version above changes, and we ask again wherever your consent is needed. You can ask us for it in Marathi, Hindi or any language in the Eighth Schedule to the Constitution.</p>
      </section>
    </LegalPage>
  );
}
