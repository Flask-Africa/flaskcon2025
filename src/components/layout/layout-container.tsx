"use client";

import ReactLenis from "lenis/react";
import { PropsWithChildren } from "react";
import { Preloader } from "../animation/preloader";

export const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis root>
      <Preloader />
      {children}
    </ReactLenis>
  );
};
