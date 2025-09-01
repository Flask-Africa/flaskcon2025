import type { Metadata } from "next";
import { Hepta_Slab, Manrope } from "next/font/google";
import "./globals.css";

const hepta = Hepta_Slab({
  variable: "--font-hepta",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

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
      <body className={`${hepta.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
