"use client";

import ReactLenis from "lenis/react";
import { PropsWithChildren } from "react";

export const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
