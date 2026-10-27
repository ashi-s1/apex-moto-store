import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Apex Moto Corse | Precision Motorcycle Racing Hardware & Track Gear",
  description:
    "Engineering high-performance motorcycle components, carbon fiber protective gear, and competition exhaust systems certified under ECE 22.06 and FIM standards.",
  keywords: [
    "motorcycle performance parts",
    "ECE 22.06 helmet",
    "titanium exhaust",
    "monobloc brake calipers",
    "track rearsets",
    "Apex Moto India"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-zinc-950 text-zinc-100 min-h-screen flex flex-col selection:bg-amber-400 selection:text-black font-sans w-full overflow-x-hidden">
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
