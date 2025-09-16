"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SlideText: React.FC<{
  children: ReactElement;
  slideFrom: "TOP" | "BOTTOM";
  delay?: number;
  showOnScroll?: boolean;
  duration?: number;
  viewportTrigger?: `${number}%`;
}> = ({
  children,
  delay = 0,
  slideFrom = "TOP",
  showOnScroll = false,
  duration = 1,
  viewportTrigger = "70%",
}) => {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const preloaderDelay = 0;

    let split;
    SplitText.create(ref.current, {
      type: "lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          delay: showOnScroll ? 0 : delay + preloaderDelay,
          duration,
          yPercent: slideFrom == "TOP" ? -100 : slideFrom == "BOTTOM" ? 100 : 0,
          stagger: 0,
          ease: "power4",
          scrollTrigger: {
            trigger: showOnScroll ? ref.current : null,
            start: `top ${viewportTrigger}`,
          },
        });
        return split;
      },
    });
  }, [pathname]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return cloneElement(children as ReactElement<any>, { ref });
};
