import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nestloop - Smart Care Platform for Children",
  description:
    "Empowering children's homes, foster carers, and caregivers with trauma-informed, insight-driven care tools.",
  keywords:
    "childcare, foster care, special needs, trauma-informed care, care coordination",
  authors: [{ name: "Nestloop Team" }],
  openGraph: {
    title: "Nestloop - Smart Care Platform for Children",
    description:
      "Empowering caregivers with smart, trauma-informed care tools.",
    type: "website",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
