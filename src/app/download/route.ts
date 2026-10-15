import { NextResponse } from "next/server";
import { FALLBACK_APK_URL } from "@/lib/app-download";

// One stable link for every "Download" button and the QR code: /download → the current Android APK.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.redirect(process.env.CUSTOMER_APK_URL || FALLBACK_APK_URL, 302);
}
