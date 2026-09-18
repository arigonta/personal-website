import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

// metadataBase already carries the /personal-website/ base path, so asset paths
// here stay relative to it. A leading "/personal-website/..." would be appended
// to the base path and produce a doubled, 404-ing URL.
const siteUrl = "https://arigonta.github.io/personal-website/";
const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Armadi Gonta, Senior iOS Engineer, Jakarta, Indonesia",
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Armadi Gonta · Senior iOS Engineer",
  description: "Portfolio of Armadi Gonta, a Senior iOS Engineer building secure mobile systems at scale. Available for freelance mobile app, website, and web ERP projects.",
  alternates: { canonical: siteUrl },
  icons: { icon: "/personal-website/favicon.svg", shortcut: "/personal-website/favicon.svg" },
  openGraph: {
    title: "Armadi Gonta · Senior iOS Engineer",
    description: "Mobile systems that scale.",
    type: "website",
    url: siteUrl,
    siteName: "Armadi Gonta",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: "Armadi Gonta · Senior iOS Engineer", description: "Mobile systems that scale.", images: [ogImage] },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Armadi Gonta",
  jobTitle: "Senior iOS Engineer",
  email: "mailto:arigonta@gmail.com",
  telephone: "+6281510822471",
  url: "https://arigonta.github.io/personal-website/",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  sameAs: ["https://linkedin.com/in/arigonta", "https://github.com/arigonta"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "iOS and Android mobile app development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website and web application development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web ERP and internal business system development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical consulting, architecture review, and app security audit" } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script async src="https://gc.zgo.at/count.js" data-goatcounter="https://arigonta.goatcounter.com/count" />
      </body>
    </html>
  );
}
