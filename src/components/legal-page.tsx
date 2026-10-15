import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { LEGAL, isTbc } from "@/lib/legal";

// Shared frame for the privacy policy and the terms: plain reading layout in the site's dark style.
export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <p className="font-mono text-xs tracking-widest text-primary uppercase">Version {LEGAL.noticeVersion} · Updated {LEGAL.updated}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-foreground/90 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">{children}</div>
        <div className="mt-16 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/" className="text-primary">← Home</Link>
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy policy</Link>
          <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-foreground">Terms of service</Link>
        </div>
      </main>
    </div>
  );
}

// A fact that is still a placeholder shows highlighted, so it cannot be missed before launch.
export function Fact({ value }: { value: string }) {
  return isTbc(value) ? <mark className="rounded bg-amber-300/90 px-1 text-neutral-900">{value}</mark> : <>{value}</>;
}
