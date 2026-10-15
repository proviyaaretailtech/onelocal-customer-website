import type { Metadata } from "next";
import Link from "next/link";
import { Fact, LegalPage } from "@/components/legal-page";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = { title: "Terms of service · OneLocal", description: "The rules for using the OneLocal app and website." };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" intro="The rules for using the OneLocal app and this website, in plain language.">
      <section>
        <h2>Who we are</h2>
        <p>OneLocal is run by <Fact value={LEGAL.legalEntity} />, <Fact value={LEGAL.registeredAddress} /> (“OneLocal”, “we”). By using the app or this website you agree to these terms.</p>
      </section>

      <section>
        <h2>What OneLocal does</h2>
        <p>OneLocal is a marketplace. It lets you order food, groceries, medicines and other goods from independent local stores and restaurants in {LEGAL.city}, and arranges delivery. Each store sells its own goods and is responsible for their quality, quantity, prices, labelling and any licences they need (for example FSSAI for food, a drug licence for medicines).</p>
      </section>

      <section>
        <h2>Your account</h2>
        <ul>
          <li>You must be {LEGAL.minimumAge} or older to have an account.</li>
          <li>Keep your sign-in details to yourself. You are responsible for orders placed from your account.</li>
          <li>Give a correct delivery address and a phone number where the rider can reach you.</li>
        </ul>
      </section>

      <section>
        <h2>Orders, prices and payment</h2>
        <ul>
          <li>Prices, taxes and any delivery fee are shown in your cart before you order. The amount you confirm is the amount you pay.</li>
          <li>A store may refuse or cancel an order, for example if an item is out of stock or the store is closed. If that happens you are not charged, or you are refunded in full.</li>
          <li>Cash on delivery: pay the rider the order amount when it arrives. Online payments, when offered, are processed by a licensed payment provider.</li>
          <li>Prescription medicines are supplied only against a valid prescription, as the law requires.</li>
        </ul>
      </section>

      <section>
        <h2>Cancellations and refunds</h2>
        <p>You can cancel an order in the app until the store accepts it. If an item is missing, wrong or damaged, report it in the app on the day of delivery and we will help you get a replacement or a refund. Refunds go back to the way you paid.</p>
      </section>

      <section>
        <h2>Fair use</h2>
        <p>Do not misuse the app: no fake orders, no abuse of riders or store staff, no attempts to break or copy the service. We may suspend accounts that do.</p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>We work hard to keep OneLocal running and orders on time, but delivery times are estimates and the service may sometimes be unavailable. To the extent the law allows, our liability for an order is limited to the amount you paid for it. Nothing in these terms limits your rights under the Consumer Protection Act, 2019.</p>
      </section>

      <section>
        <h2>Your data</h2>
        <p>How we use your personal data is explained in our <Link href="/privacy" className="font-semibold text-primary underline underline-offset-2">privacy policy</Link>.</p>
      </section>

      <section>
        <h2>Complaints and law</h2>
        <p>Write to {LEGAL.supportEmail} or use Help &amp; Support in the app; our grievance officer is <Fact value={LEGAL.grievanceOfficer.name} /> (<Fact value={LEGAL.grievanceOfficer.email} />). These terms are governed by the laws of India, and the courts at {LEGAL.city} have jurisdiction.</p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>We may update these terms. The date at the top changes when we do, and for important changes we tell you in the app before they apply.</p>
      </section>
    </LegalPage>
  );
}
