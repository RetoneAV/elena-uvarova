import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Unbounded } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { home, site } from "@/lib/content";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-unbounded",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Creative Producer`,
    template: `%s — ${site.name}`,
  },
  description: home.headline,
  openGraph: {
    title: `${site.name} — Creative Producer`,
    description: home.headline,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: "+447703564394",
  jobTitle: "Creative Producer",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "GB",
  },
  sameAs: [site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-[#ffc600] focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
