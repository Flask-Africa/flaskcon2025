import { Hepta_Slab, Manrope } from "next/font/google";
import LocalFont from "next/font/local";

export const hepta = Hepta_Slab({
  variable: "--font-hepta",
  subsets: ["latin"],
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const ppNeue = LocalFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMachina-Light.otf",
      weight: "300",
    },
    {
      path: "../assets/fonts/PPNeueMachina-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/PPNeueMachina-Ultrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-pp-neue-machina",
});
