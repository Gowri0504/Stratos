import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stratos - AI Powered Study Intel",
  description: "Next-gen intelligent study planning and analytics system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cyber-bg text-white min-h-screen relative`}
      >
        <div className="bg-grid fixed inset-0 z-[-2]" />
        <div className="bg-glow fixed inset-0 z-[-1]" />
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-violet-900/20 pointer-events-none" />
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 md:pl-64 pt-24 px-6 relative z-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
