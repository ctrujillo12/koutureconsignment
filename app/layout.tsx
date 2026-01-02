import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kouture Consignment | Luxury Designer Consignment & Vintage - Cherry Creek",
  description:
    "Discover curated luxury designer consignment and vintage fashion in Cherry Creek, Colorado.",
  keywords:
    "luxury consignment, designer consignment, vintage fashion, Cherry Creek, Denver, Colorado",
  openGraph: {
    title: "Kouture Consignment",
    description:
      "Curated luxury designer consignment & vintage in Cherry Creek, Colorado",
    type: "website",
    locale: "en_US",
    siteName: "Kouture Consignment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kouture Consignment",
    description:
      "Curated luxury designer consignment & vintage in Cherry Creek, Colorado",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
