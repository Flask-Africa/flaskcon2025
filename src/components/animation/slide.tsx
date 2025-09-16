"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement, useRef } from "react";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(SplitText);

export const Slide: React.FC<{
  children: ReactElement;
  slideFrom?: "TOP" | "BOTTOM" | "LEFT" | "RIGHT";
  delay?: number;
  duration?: number;
  showOnScroll?: boolean;
  viewportTrigger?: `${number}%`;
  className?: string;
  shouldScrub?: boolean;
}> = ({
  children,
  delay = 0,
  slideFrom = "TOP",
  duration = 1,
  showOnScroll = false,
  viewportTrigger = "80%",
  className,
  shouldScrub = false,
}) => {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const preloaderDelay = 0;

    gsap.from(ref.current, {
      delay: showOnScroll ? 0 : preloaderDelay + delay,
      duration,
      yPercent:
        slideFrom == "TOP" ? -100 : slideFrom == "BOTTOM" ? 100 : undefined,
      xPercent:
        slideFrom == "LEFT" ? -100 : slideFrom == "RIGHT" ? 100 : undefined,
      ease: "power4",
      scrollTrigger: showOnScroll
        ? {
            trigger: showOnScroll ? ref.current : null,
            start: showOnScroll ? `top ${viewportTrigger}` : undefined,
            scrub: shouldScrub,
          }
        : undefined,
    });
  }, [pathname]);

  return (
    <div
      className={twMerge(
        "overflow-hidden flex justify-center items-center",
        className
      )}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {cloneElement(children as ReactElement<any>, { ref })}
    </div>
  );
};
