import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprout Studio — Web & Mobile Development",
  description:
    "Modern websites and apps for small businesses in Australia. Landing pages, business websites, web apps, and mobile apps. Bilingual English & 中文.",
  openGraph: {
    title: "Sprout Studio — Web & Mobile Development",
    description:
      "Fast, affordable websites and apps for small businesses. Based in Australia.",
    siteName: "Sprout Studio",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
