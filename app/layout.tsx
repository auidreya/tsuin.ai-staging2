import type { Metadata, Viewport } from "next";
import { AnalyticsEvents } from "@/components/analytics-events";
import { ThirdPartyScripts } from "@/components/third-party-scripts";
import { SITE_URL } from "@/lib/site";
import { lora, martianMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Tsuin AI Sdn Bhd" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/assets/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/assets/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/assets/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDF6E3" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1B26" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${martianMono.variable}`}>
      <body>
        {children}
        <AnalyticsEvents />
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
