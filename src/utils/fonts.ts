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
      path: "../assets/fonts/PPNeueMachina-PlainLight.otf",
      weight: "300",
    },
    {
      path: "../assets/fonts/PPNeueMachina-PlainLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMachina-PlainRegular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/PPNeueMachina-PlainRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMachina-PlainUltrabold.otf",
      weight: "800",
    },
    {
      path: "../assets/fonts/PPNeueMachina-PlainUltraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-pp-neue-machina",
});

export const ppNeueInktrap = LocalFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMachina-InktrapLight.otf",
      weight: "300",
    },
    {
      path: "../assets/fonts/PPNeueMachina-InktrapLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMachina-InktrapRegular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/PPNeueMachina-InktrapRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMachina-InktrapUltrabold.otf",
      weight: "800",
    },
    {
      path: "../assets/fonts/PPNeueMachina-InktrapUltraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-pp-neue-machina-inktrap",
});
