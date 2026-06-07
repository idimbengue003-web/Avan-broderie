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
  title: "Maison Élégance - L'Élégance Africaine Moderne",
  description: "Découvrez nos collections uniques de vêtements et tissus d'exception. Mode africaine moderne, tissus traditionnels et accessoires élégants.",
  keywords: ["Maison Élégance", "mode africaine", "tissus", "robes", "mode homme", "accessoires", "Côte d'Ivoire", "Afrique"],
  authors: [{ name: "Maison Élégance" }],
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
