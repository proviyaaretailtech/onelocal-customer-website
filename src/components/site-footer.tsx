import Link from "next/link";
import { LEGAL } from "@/lib/legal";
import { PARTNER_SITE } from "@/lib/app-download";

const EXPLORE = [
  { href: "/", label: "Home" },
  { href: "/#see", label: "Discover" },
  { href: "/#install", label: "Get the app" },
  { href: PARTNER_SITE, label: "For partners" },
  { href: "/#contact", label: "Contact us" },
  { href: "/privacy-policy", label: "Privacy policy" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/onelocal-logo-on-dark.png" alt="oneLocal" className="h-9 w-auto" />
          <p className="mt-6 text-sm font-bold tracking-[0.18em] text-white uppercase">Your town. Your people.</p>
          <address className="mt-5 max-w-sm text-sm leading-7 text-white/70 not-italic">{LEGAL.registeredAddress}</address>
          <p className="mt-5 text-xs text-white/50">oneLocal is a service of {LEGAL.legalEntity}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">Get in touch</h2>
          <ul className="mt-6 space-y-4 text-white/90">
            <li><a href={`mailto:${LEGAL.supportEmail}`} className="hover:text-primary">{LEGAL.supportEmail}</a></li>
            {LEGAL.businessPhone && <li><a href={`tel:${LEGAL.businessPhone.replace(/\s/g, "")}`} className="hover:text-primary">{LEGAL.businessPhone}</a></li>}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">Explore</h2>
          <ul className="mt-6 space-y-4 text-sm font-bold tracking-[0.12em] text-white uppercase">
            {EXPLORE.map(l => <li key={l.label}><Link href={l.href} className="hover:text-primary">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-white/10 px-5 py-6 text-sm text-white/60">
        <span>© 2026 {LEGAL.legalEntity.replace(/ \(CIN.*$/, "")}</span>
        <span className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-white">Terms of Use</Link>
          <Link href="/delete-account" className="hover:text-white">Delete account</Link>
          <a href={process.env.NEXT_PUBLIC_SOURCE_URL ?? "/source"} className="hover:text-white">Source code</a>
        </span>
        <span className="font-semibold tracking-wider text-primary">#oneLocalLatur</span>
      </div>
    </footer>
  );
}
