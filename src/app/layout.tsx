import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

// Downloaded at build time and served from this site, so a visit never
// calls Google. The serif is for names and sheet titles. The sans is the
// specification: dates, labels, body.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tara Andow | Project manager",
  description:
    "Tara Andow is a project manager in Cleveland. Construction coordination, commercial real estate, and operations, including eleven years at The King Group.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} motion-safe:scroll-smooth`}
    >
      <body className="bg-ink font-sans text-paper antialiased">
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
