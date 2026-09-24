import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Panchayat Resolution Centre",
    template: "%s | Panchayat Resolution Centre",
  },
  description:
    "Strengthening Grassroot Dispute Resolution Ecosystem in Panchayats.",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    type: "website",
    title: "Panchayat Resolution Centre",
    description:
      "Strengthening Grassroot Dispute Resolution Ecosystem in Panchayats.",
    siteName: "Panchayat Resolution Centre",
  },
  twitter: {
    card: "summary",
    title: "Panchayat Resolution Centre",
    description:
      "Strengthening Grassroot Dispute Resolution Ecosystem in Panchayats.",
  },
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${manrope.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
