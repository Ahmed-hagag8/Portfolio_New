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
    "Portfolio of Ahmed Hagag, a full-stack developer crafting scalable web applications and digital experiences.",
  keywords: [
    "Ahmed Hagag",
    "portfolio",
    "full-stack developer",
    "UI engineer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Ahmed Hagag" }],
  openGraph: {
    title: "Ahmed Hagag â€” Full-Stack Developer & UI Engineer",
    description:
      "Crafting thoughtful, performant digital products with modern web technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Hagag â€” Full-Stack Developer & UI Engineer",
    description:
      "Crafting thoughtful, performant digital products with modern web technology.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
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

