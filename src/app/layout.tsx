import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hiruthickroshan E | Portfolio",
  description:
    "Personal portfolio of Hiruthickroshan E — Electronics & Communication Engineering undergraduate, creative thinker, and national-level athlete.",
  keywords: [
    "Hiruthickroshan",
    "Portfolio",
    "ECE",
    "Engineer",
    "Developer",
    "Rope Skipping Champion",
  ],
  authors: [{ name: "Hiruthickroshan E" }],
  openGraph: {
    title: "Hiruthickroshan E | Portfolio",
    description:
      "Creative and Curious Thinker — ECE Undergraduate at GCE Erode",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.variable} antialiased`} style={{ fontFamily: "'Work Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
