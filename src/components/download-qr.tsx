import QRCode from "qrcode";

// A QR code for people reading the site on a laptop: scan it with the phone to get the app.
// Drawn on the server as SVG, so it is crisp and needs no script.
export async function DownloadQr({ url, className }: { url: string; className?: string }) {
  const svg = await QRCode.toString(url, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#0b0f0c", light: "#ffffff" } });
  return <div className={className} role="img" aria-label={`QR code: ${url}`} dangerouslySetInnerHTML={{ __html: svg }} />;
}
