import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Hagag || Full-Stack Developer",
  description:
    "Portfolio of Ahmed Hagag, a Full-Stack Web Developer (React–Laravel) building secure, scalable web applications with Laravel, PHP, React, Next.js, MySQL, WordPress, and Filament.",
  keywords: [
    "Ahmed Hagag",
    "portfolio",
    "full-stack developer",
    "Laravel developer",
    "Filament",
    "WordPress",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Ahmed Hagag" }],
  openGraph: {
    title: "Ahmed Hagag — Full-Stack Web Developer (React–Laravel)",
    description:
      "Building secure, scalable, real-world web applications with Laravel, React, and Next.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Hagag — Full-Stack Web Developer (React–Laravel)",
    description:
      "Building secure, scalable, real-world web applications with Laravel, React, and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

