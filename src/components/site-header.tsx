import Link from "next/link";
import { Download } from "lucide-react";
import { DOWNLOAD_PATH, PARTNER_SITE } from "@/lib/app-download";

export function SiteHeader({ cta = true }: { cta?: boolean }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="OneLocal home" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/onelocal-logo-on-dark.png" alt="oneLocal" className="h-7 w-auto" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2 sm:gap-7">
          <Link href="/#see" className="hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground md:inline">Discover</Link>
          <Link href="/#install" className="hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground md:inline">Get the app</Link>
          <a href={PARTNER_SITE} className="hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground md:inline">For partners</a>
          <Link href="/#contact" className="hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground md:inline">Contact</Link>
          {cta && (
            <a href={DOWNLOAD_PATH} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold whitespace-nowrap text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.97] sm:px-5">
              <Download className="size-4" aria-hidden /><span className="sm:hidden">Get app</span><span className="hidden sm:inline">Download the app</span>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
