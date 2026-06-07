import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avan Broderie - L'Art de la Broderie Africaine",
  description: "Découvrez nos collections uniques de vêtements brodés et tissus d'exception. Broderie africaine moderne, tissus traditionnels et accessoires élégants.",
  keywords: ["Avan Broderie", "broderie africaine", "tissus", "robes brodées", "mode homme", "accessoires", "Côte d'Ivoire", "Afrique"],
  authors: [{ name: "Avan Broderie" }],
  icons: {
    icon: "/logo-boutique.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
