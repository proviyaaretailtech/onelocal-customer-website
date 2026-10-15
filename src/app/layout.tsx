import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { FloatingMascot, MascotProvider } from "@/components/mascot";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Ol can speak Hindi (Devanagari), which Geist does not draw.
const deva = Noto_Sans_Devanagari({ variable: "--font-deva", subsets: ["devanagari"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "OneLocal · Latur, delivered",
  description: "Food, groceries, medicines and your favourite Latur shops, delivered to your door. Download the OneLocal app for Android.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sans.variable} ${mono.variable} ${deva.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}><MascotProvider>{children}<FloatingMascot /></MascotProvider></body>
    </html>
  );
}
