"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const TimelineItem: React.FC<{
  time: string;
  talk: string;
  panelText?: string;
}> = ({ time, talk, panelText }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeSplit = SplitText.create(".time", {
        type: "lines, words",
        mask: "lines",
      });
      const panelTextSplit = SplitText.create(".panel-text", {
        type: "lines, words",
        mask: "lines",
      });
      const titleSplit = SplitText.create(".title", {
        type: "lines, words",
        mask: "lines",
      });

      const tl = gsap.timeline({ paused: true });
      const textItems = [
        ...timeSplit.lines,
        panelTextSplit.lines,
        ...titleSplit.lines,
      ];
      tl.from(textItems, {
        yPercent: 100,
        ease: "power2",
        stagger: 0.06,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        animation: tl,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="group max-w-[1212px] mx-auto">
      <div className="relative z-10 lg:w-1/2 group-odd:lg:ml-auto">
        <div className="absolute top-2 w-[20%] flex items-center group-odd:-left-[15px] group-even:-right-[15px] group-even:flex-row-reverse">
          <div className="bg-white size-7 rounded-full border-2 border-black shrink-0" />
          <div className="border-t-2 border-dashed border-black w-full" />
        </div>
        <div className="w-[85%] group-odd:ml-auto relative z-10">
          <div className="bg-offblack p-3 w-full">
            <em className="not-italic text-white font-inktrap text-sm leading-full tracking-neg3 lg:text-base time">
              {time}
            </em>
          </div>
          {panelText && (
            <em className="not-italic font-neue font-extrabold text-sm leading-full tracking-neg3 px-2 mb-2 mt-6 block bg-white lg:text-base panel-text">
              {panelText}
            </em>
          )}

          <em className="not-italic font-neue font-extrabold leading-150p tracking-neg3 px-2 inline-block nth-[2]:mt-6 bg-white lg:text-[21px] title">
            {talk}
          </em>
        </div>
      </div>
    </div>
  );
};
