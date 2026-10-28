import type { Metadata, Viewport } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { Providers } from "@/app/providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { DIVYANSH_PROFILE } from "@/content/divyanshContent";
import "../index.css";

const siteUrl = "https://divyanshkatiyar.web.app";
const title = `${DIVYANSH_PROFILE.name} | Biology Student, Innovation & Science Portfolio`;
const description = DIVYANSH_PROFILE.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${DIVYANSH_PROFILE.name}`,
  },
  description,
  applicationName: "Divyansh Katiyar Portfolio",
  authors: [
    { name: "Divyansh Katiyar", url: siteUrl },
    { name: "Piyush Ratan", url: "https://piyushratan.in" },
  ],
  creator: "Piyush Ratan (https://piyushratan.in)",
  publisher: "Quzar (https://quzar.in)",
  keywords: [
    "Divyansh Katiyar",
    "Divyansh Katiyar portfolio",
    "PCB stream",
    "Class 12 PCB",
    "student inventor",
    "biology student",
    "school innovation",
    "applied tech student",
    "science innovator",
    "Physics Chemistry Biology",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    title,
    description,
    siteName: "Divyansh Katiyar Portfolio",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Divyansh Katiyar - Biology Student, Innovation & Science Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.svg"],
    apple: ["/favicon.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-app-ready="true">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="author" href="https://piyushratan.in" />
        <style>{`
          .brand-loader-overlay {
            position: fixed;
            inset: 0;
            z-index: 200;
            background-color: #090909;
          }
        `}</style>
        <JsonLd />
      </head>
      <body>
        <noscript>
          <style>{`[data-route-shell]{opacity:1!important;pointer-events:auto!important}`}</style>
        </noscript>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
