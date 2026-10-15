import { Download, MapPin, ShieldCheck, Smartphone, Wallet } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { Accordion } from "@/components/accordion";
import { SiteHeader } from "@/components/site-header";
import { LoopVideo, Phone } from "@/components/media";
import { PARTNERS } from "@/lib/partners";
import { DotGrid } from "@/components/dot-grid";
import { WordRotator } from "@/components/word-rotator";
import { TiltCard } from "@/components/tilt-card";
import { WordReveal } from "@/components/word-reveal";
import { StickyStack } from "@/components/sticky-stack";
import { SwipeDeck } from "@/components/swipe-deck";
import { MagneticCta } from "@/components/interactive";
import { DownloadQr } from "@/components/download-qr";
import { DOWNLOAD_PATH, PARTNER_SITE } from "@/lib/app-download";

// The public address of the download link, for the QR code (a phone camera needs a full URL).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://onelocal.co";

const INSTALL = [
  { title: "Download the app", body: "Tap Download. Your phone saves the OneLocal app (about 120 MB, Android).", image: "/shots/app-splash.jpg" },
  { title: "Allow the install", body: "Open the file. If Android asks, tap Settings, allow “Install unknown apps” for your browser, and go back.", image: "/shots/app-home.webp" },
  { title: "Pick Latur and order", body: "Choose your language and your area. Your favourite local stores are right there.", image: "/shots/app-food.webp" },
];

const FAQ = [
  { question: "Where does OneLocal deliver?", answer: "In Latur. Pick your area when you open the app and it shows the stores that deliver to you." },
  { question: "How do I pay?", answer: "Cash on delivery today. UPI and card payments are coming soon." },
  { question: "Is there a delivery fee?", answer: "A small fee on smaller orders, shown in your cart before you order. Larger orders get free delivery." },
  { question: "Is the download safe?", answer: "Yes. It is the official OneLocal app, downloaded straight from us. Android asks once before installing apps from outside the Play Store; that is normal. The Play Store listing is on its way." },
  { question: "Is there an iPhone app?", answer: "Not yet. iPhone is next on our list." },
  { question: "I own a shop. Can I sell on OneLocal?", answer: "Yes! Restaurants, kiranas, pharmacies and shops in Latur can apply on our partner website in two minutes." },
];

function DownloadButton({ children = "Download for Android" }: { children?: React.ReactNode }) {
  return (
    <a href={DOWNLOAD_PATH} className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-extrabold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.97]">
      <Download className="size-5" aria-hidden />{children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-clip">
      <SiteHeader />
      <main>
        {/* Hero: what you get on the left, a wall of food moving on the right with the real app in front. */}
        <section className="relative isolate" data-mascot-tip="Hi, I’m Ol! Download OneLocal and Latur comes to your door.">
          <DotGrid className="absolute inset-0 -z-10 aspect-auto h-full w-full rounded-none bg-transparent opacity-70 shadow-none" />
          <div className="pointer-events-none absolute -top-40 right-[-10%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,oklch(0.9_0.24_128/0.18),transparent)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-20 lg:pb-28">
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />Now delivering in Latur
              </p>
              <h1 className="mt-6 text-[clamp(2.8rem,6.8vw,5.6rem)] leading-[0.92] font-extrabold tracking-[-0.05em]">
                <WordRotator words={["Biryani,", "Groceries,", "Medicines,", "Sweets,", "Everything,"]} interval={2200} /><br /><span className="neon">from Latur’s</span><br />own shops.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">Food, groceries, medicines and the stores you already love, delivered to your door. One app for all of Latur.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticCta href={DOWNLOAD_PATH}>Download for Android ↓</MagneticCta>
                <a href="#install" className="rounded-full border border-white/15 px-6 py-4 text-base font-semibold transition-colors hover:bg-white/5">How to install</a>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Smartphone className="size-3.5" aria-hidden />Android · free · iPhone coming soon</p>
              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
                <div className="flex -space-x-3">
                  {PARTNERS.slice(0, 5).map(p => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={p.title} src={p.src} alt={p.title} title={p.title} className="size-11 rounded-full bg-white object-contain p-0.5 ring-2 ring-background" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Latur favourites</span>, now one tap away</p>
              </div>
            </div>

            <div className="relative mx-auto h-[540px] w-full max-w-[520px] [perspective:1400px] sm:h-[600px]">
              <div className="absolute inset-0 grid grid-cols-3 gap-3 [transform:rotateY(-14deg)_rotateX(6deg)] opacity-90">
                <div className="mt-16 overflow-hidden rounded-3xl"><LoopVideo src="/video/pasta.mp4" /></div>
                <div className="overflow-hidden rounded-3xl"><LoopVideo src="/video/tomato.mp4" /></div>
                <div className="mt-28 overflow-hidden rounded-3xl"><LoopVideo src="/video/dairy.mp4" /></div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-1/2 w-[230px] -translate-x-1/2 sm:w-[255px]"><TiltCard className="rounded-[2.6rem]"><Phone video="/video/app-demo.mp4" alt="The OneLocal app in action" /></TiltCard></div>
            </div>
          </div>
        </section>

        {/* Local stores, big and moving. */}
        <section data-mascot-tip="These are your Latur favourites. All of them, in one app!" aria-label="Stores on OneLocal" className="border-y border-white/5 bg-white/[0.02] py-8">
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-[logos_38s_linear_infinite] gap-5 motion-reduce:animate-none">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div key={i} className="flex h-24 w-44 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={i < PARTNERS.length ? p.title : ""} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-24 lg:grid-cols-[1.1fr_1fr]">
          <WordReveal className="text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.15] font-extrabold tracking-[-0.03em]"
            text="What to eat tonight, what the house needs this week, the medicine that cannot wait. OneLocal brings it from the shops down your road, not a warehouse far away." />
          <div className="grid h-[380px] grid-cols-2 grid-rows-2 gap-3 sm:h-[420px]">
            {[
              { src: "/photo/collage-eat.webp", caption: "What to eat", span: "row-span-2" },
              { src: "/photo/collage-buy.webp", caption: "What to buy", span: "" },
              { src: "/photo/collage-app.webp", caption: "All on OneLocal", span: "" },
            ].map(c => (
              <figure key={c.caption} className={`relative overflow-hidden rounded-3xl border border-white/10 ${c.span}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt="" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-4 pr-3 text-sm font-bold text-white">{c.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* What the app does: a bento with the real app and plain promises. */}
        <section data-mascot-tip="Food, groceries, pharmacy and shops. One app." id="see" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">Why OneLocal</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">All of Latur, <span className="neon">in your pocket.</span></h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-6 lg:grid-rows-[280px_280px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.25_0.06_140)] to-card p-8 lg:col-span-3 lg:row-span-2">
              <h3 className="max-w-xs text-2xl font-bold">Food, groceries, pharmacy and shops</h3>
              <p className="mt-2 max-w-xs text-muted-foreground">Hot meals from local kitchens, the weekly kirana, medicines and gifts, all from stores in your city.</p>
              <Phone src="/shots/app-home.webp" alt="The OneLocal home screen" className="absolute -bottom-36 left-[8%] w-[190px] rotate-[6deg] opacity-95 lg:right-[15.5rem] lg:left-auto" />
              <Phone src="/shots/app-food.webp" alt="Restaurants in the OneLocal app" className="absolute -bottom-24 right-[6%] w-[230px] rotate-[-4deg] lg:right-8" />
              <div className="h-[380px] lg:h-0" />
            </div>
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.22_0.05_150)] to-card p-7 sm:min-h-[280px] sm:flex-row sm:items-center lg:col-span-3">
              <div className="sm:flex-1">
                <h3 className="text-2xl font-bold">Know where your order is</h3>
                <p className="mt-1 text-muted-foreground">The shop accepts, packs and hands it to a rider. You see every step until it reaches your door.</p>
              </div>
              <ol className="w-full max-w-[290px] shrink-0 space-y-2 sm:w-[220px]" aria-label="Sample order steps">
                {["Order placed", "Accepted by the shop", "Packed", "On the way", "At your door"].map((s, i) => (
                  <li key={s} className={`flex items-center gap-2.5 rounded-2xl px-3.5 py-2 text-[13px] font-semibold ${i < 3 ? "bg-white text-neutral-900" : "border border-white/10 text-muted-foreground"}`}>
                    <span className={`grid size-6 place-items-center rounded-full text-xs font-extrabold ${i < 3 ? "bg-[oklch(0.9_0.24_128)] text-neutral-900" : "bg-white/10"}`}>{i < 3 ? "✓" : i + 1}</span>{s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-card p-7 lg:col-span-2">
              <div className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Wallet className="size-6" aria-hidden /></div>
              <h3 className="mt-6 text-xl font-bold">Cash on delivery</h3>
              <p className="mt-1 text-muted-foreground">Pay when it arrives. UPI and cards are coming soon.</p>
            </div>
            <div className="rounded-[2rem] bg-primary p-7 text-primary-foreground lg:col-span-1">
              <MapPin className="size-10" aria-hidden />
              <h3 className="mt-6 text-lg leading-tight font-extrabold">Made in Latur</h3>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-widest text-primary uppercase">Swipe it</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">Whatever the hour, <span className="neon">we’ve got you.</span></h2>
            <p className="mt-4 max-w-md text-muted-foreground">Flick the cards. From the morning milk to the midnight snack, it’s all on OneLocal.</p>
          </div>
          <div className="flex justify-center"><SwipeDeck cards={[
            { title: "7 am · Milk, bread & eggs", note: "Before school and office, at your door", image: "/photo/swipe-milk.webp" },
            { title: "11 am · Weekly kirana", note: "Atta, dal and oil, delivered before lunch", image: "/photo/swipe-kirana.webp" },
            { title: "2 pm · Medicines", note: "From the pharmacy down your road", image: "/photo/swipe-medicine.webp" },
            { title: "6 pm · Sweets & farsan", note: "Guests at home? We’ve got the plate", image: "/photo/swipe-sweets.webp", fit: "contain", backdrop: "linear-gradient(160deg, oklch(0.85 0.14 70), oklch(0.7 0.17 45))" },
            { title: "9 pm · Late-night cravings", note: "Hot, crisp and at the door", image: "/photo/swipe-latenight.webp" },
          ]} /></div>
        </section>

        <section className="border-y border-white/5 py-7">
          <Marquee label="What you can order on OneLocal" speed={40} items={["Biryani & thali", "Pizza & burgers", "Cafés & bakeries", "Sweets & farsan", "Groceries", "Fruits & vegetables", "Dairy", "Medicines", "Beauty & wellness", "Gifts & fashion"]} />
        </section>

        {/* Installing an APK is the one unfamiliar step, so it gets its own walk-through. */}
        <section id="install" data-mascot-tip="Android asks once before installing. Tap allow, and you’re in!" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24">
          <StickyStack label="How to install OneLocal" items={INSTALL.map(x => ({ title: x.title, text: x.body, image: x.image }))}
            heading={<><h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Installed in three steps.</h2><p className="text-sm text-muted-foreground">Scroll to stack them up.</p></>} />
        </section>

        {/* The closing moment: download, or scan from a laptop. */}
        <section className="border-t border-white/5" data-mascot-tip="On a laptop? Scan the code with your phone camera.">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">Latur is ordering. <span className="neon">Join in.</span></h2>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <DownloadButton />
                  <a href={PARTNER_SITE} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-base font-semibold transition-colors hover:bg-white/5">Own a shop? Sell on OneLocal →</a>
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground"><ShieldCheck className="size-4 text-primary" aria-hidden />Official app, straight from OneLocal</p>
              </div>
              <div className="hidden flex-col items-center gap-3 rounded-[2rem] border border-white/10 bg-white p-5 text-center text-neutral-900 lg:flex">
                <DownloadQr url={`${SITE_URL}${DOWNLOAD_PATH}`} className="size-44 [&_svg]:size-full" />
                <p className="text-sm font-bold">Scan to download</p>
              </div>
            </div>
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo/onelocal-banner.webp" alt="A OneLocal rider shows the app in front of a street of neighbourhood shops: fruits and vegetables, daily needs, dairy, pharmacy, restaurant, café and bakery." className="h-auto w-full" />
            </div>
          </div>
        </section>

        <section data-mascot-tip="Any other question? Ask us, we’re right here in Latur." className="mx-auto max-w-3xl px-5 py-24">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">Questions people ask</h2>
          <Accordion items={FAQ} />
        </section>
      </main>
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/onelocal-logo-on-dark.png" alt="OneLocal" className="h-6 w-auto" />
          <span>© 2026 OneLocal · Made in Latur · <a href={PARTNER_SITE} className="underline underline-offset-2 hover:text-foreground">For partners</a> · <a href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">Privacy</a> · <a href="/terms-and-conditions" className="underline underline-offset-2 hover:text-foreground">Terms</a> · <a href={process.env.NEXT_PUBLIC_SOURCE_URL ?? "/source"} className="underline underline-offset-2 hover:text-foreground">Source code (AGPL-3.0)</a></span>
        </div>
      </footer>
    </div>
  );
}
