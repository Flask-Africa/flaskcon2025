import type { Metadata } from "next";

import "./globals.css";

import { hepta, manrope, ppNeue } from "@/utils/fonts";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Flaskcon 2025",
  description: "Connect, Learn and Innovate with Flask.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hepta.variable} ${manrope.variable} ${ppNeue.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
