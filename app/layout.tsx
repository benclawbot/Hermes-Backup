import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComplyScan — Instant GDPR Compliance Checker",
  description:
    "Instant automated GDPR compliance scan. No signup required. Detect cookie consent issues, privacy policy gaps, tracking script risks, and more. Get a PDF report in minutes.",
  keywords: [
    "GDPR compliance scanner",
    "free GDPR compliance checker",
    "cookie consent checker",
    "privacy policy checker",
    "GDPR audit tool",
    "GDPR compliance software agencies",
    "AI GDPR compliance checker",
    "GDPR PDF report",
    "website privacy compliance",
  ],
  openGraph: {
    title: "ComplyScan — Instant GDPR Compliance Checker",
    description:
      "Instant automated GDPR compliance scan. No signup required. Get a PDF report in minutes.",
    type: "website",
    locale: "en_US",
    siteName: "ComplyScan",
  },
  twitter: {
    card: "summary_large_image",
    title: "ComplyScan — Instant GDPR Compliance Checker",
    description:
      "Instant automated GDPR compliance scan. No signup required. Get a PDF report in minutes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
