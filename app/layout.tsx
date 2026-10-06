import type { Metadata, Viewport } from "next";
import { Open_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Development & IT Consulting`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development company",
    "IT consulting",
    "web development",
    "mobile app development",
    "cloud and DevOps",
    "AI and machine learning",
    "UI/UX design",
    "THE AFTER",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
