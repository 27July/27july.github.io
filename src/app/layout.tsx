import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import ThemeToggle from "@/components/ui/themeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zi Hao Wee",
  description: "Personal Website",
  icons: {
    icon: "/pixelProfile.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-200 bg-background text-foreground selection:bg-neutral-900 selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <header className = "transition-colors duration-200 sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className = "transition-colors duration-200 mx-auto flex max-w-6xl justify-end p-4 py-3">
          <div className = "space-x-4 text-sm">
          <a href = "#about" className = "hover:underline">About</a>
          <a href = "#projects" className = "hover:underline">Projects</a>
          <a href = "#contact" className = "hover:underline">Contact</a>
          <ThemeToggle/>
          </div>
        </nav>
        </header>
        <main className = "transition-colors duration-200 mx-auto max-w-6xl px-4">
          {children}
        </main>
        <footer className = "transition-colors duration-200 mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
           © {new Date().getFullYear()} Zi Hao Wee
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
