import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armadi Gonta — Senior iOS Engineer",
  description: "Portfolio of Armadi Gonta, a Senior iOS Engineer building secure mobile systems at scale.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Armadi Gonta — Senior iOS Engineer", description: "Mobile systems that scale.", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Armadi Gonta — Senior iOS Engineer", description: "Mobile systems that scale.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
