import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavbarDemo } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palmawallet.vercel.app/"),
  title: {
    default: "Palma Wallet | Secure Crypto Wallet for Africans",
    template: "%s | Palma Wallet",
  },
  description:
    "Unlock your financial freedom with Palma Wallet. The secure, non-custodial crypto wallet designed for Nigerians to manage their wealth and build their financial future.",
  keywords: [
    "crypto wallet",
    "bitcoin",
    "ethereum",
    "web3",
    "nigeria",
    "fintech",
    "blockchain",
    "palma wallet",
  ],
  openGraph: {
    title: "Palma Wallet | Secure Crypto Wallet for Africans",
    description:
      "Unlock your financial freedom with Palma Wallet. The secure, non-custodial crypto wallet designed for Nigerians to manage their wealth and build their financial future.",
    url: "https://palmawallet.vercel.app/",
    siteName: "Palma Wallet",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Palma Wallet - Your money, your rules.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palma Wallet | Secure Crypto Wallet for Africans",
    description:
      "Unlock your financial freedom with Palma Wallet. The secure, non-custodial crypto wallet designed for Nigerians to manage their wealth and build their financial future.",
    creator: "@palma_wallet",
    images: ["/images/logo.jpeg"], // Twitter sharing image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
