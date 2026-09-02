import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Hiruthickroshan E | Software Developer",
  description:
    "Personal portfolio of Hiruthickroshan E — Software Developer, Electronics & Communication Engineering Graduate, and national-level athlete.",
  keywords: [
    "Hiruthickroshan",
    "Portfolio",
    "Software Developer",
    "ECE Graduate",
    "Engineer",
    "Full-stack",
    "Rope Skipping Champion",
  ],
  authors: [{ name: "Hiruthickroshan E" }],
  openGraph: {
    title: "Hiruthickroshan E | Software Developer",
    description:
      "Software Developer — Electronics & Communication Engineering Graduate from GCE Erode",
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
        {/* Google Fonts: Syne & Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* RemixIcon CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"
        />
        {/* DevIcons CDN */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="antialiased font-poppins">
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
