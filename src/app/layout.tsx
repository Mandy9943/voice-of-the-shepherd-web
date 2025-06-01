import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  Mona_Sans as FontSans,
  Young_Serif as FontSerif,
} from "next/font/google";
import type React from "react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-serif", // Changed to --font-serif for clarity
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voice of the Shepherd | Listen. Reflect. Be still.",
  description:
    "Experience the teachings of Jesus Christ through curated scriptures, soothing audio, and a calm, minimalist design. Download the app today.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-vos-bg-light font-sans text-vos-text-primary antialiased selection:bg-vos-accent/40 selection:text-vos-primary",
          "text-base leading-relaxed tracking-normal md:text-[17px] md:leading-relaxed", // Global typography refinement
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
