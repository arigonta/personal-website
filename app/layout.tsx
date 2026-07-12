import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arigonta.github.io/personal-website/"),
  title: "Armadi Gonta — Senior iOS Engineer",
  description: "Portfolio of Armadi Gonta, a Senior iOS Engineer building secure mobile systems at scale.",
  icons: { icon: "/personal-website/favicon.svg", shortcut: "/personal-website/favicon.svg" },
  openGraph: { title: "Armadi Gonta — Senior iOS Engineer", description: "Mobile systems that scale.", type: "website", images: ["/personal-website/og.png"] },
  twitter: { card: "summary_large_image", title: "Armadi Gonta — Senior iOS Engineer", description: "Mobile systems that scale.", images: ["/personal-website/og.png"] },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Armadi Gonta",
  jobTitle: "Senior iOS Engineer",
  email: "mailto:arigonta@gmail.com",
  url: "https://arigonta.github.io/personal-website/",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  sameAs: ["https://linkedin.com/in/arigonta", "https://github.com/arigonta"],
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
