"use client";

import type { Metadata } from "next";
import "./globals.css";

import { hepta, manrope, ppNeue, ppNeueInktrap } from "@/utils/fonts";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { LayoutContainer } from "@/components/layout/layout-container";
import { PreloaderContextProvider } from "@/context/preloader-context";
import { usePathname } from "next/navigation";

const metadata: Metadata = {
  title: "Flaskcon 2025",
  description: "Connect, Learn and Innovate with Flask.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideFooter = pathname === "/contributors";

  return (
    <html lang="en">
      <body
        className={`${hepta.variable} ${manrope.variable} ${ppNeue.variable} ${ppNeueInktrap.variable} relative`}
      >
        <PreloaderContextProvider>
          <LayoutContainer>
            <Navbar />
            {children}
            {!hideFooter && <Footer />}
          </LayoutContainer>
        </PreloaderContextProvider>
      </body>
    </html>
  );
}
