import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`} style={{ fontFamily: "'Inter', sans-serif" }}>
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
