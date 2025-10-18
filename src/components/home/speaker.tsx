"use client";

import { Talk } from "@/utils/types";
import Image from "next/image";
import speakerHorn from "@/assets/svg/speaker-horn.svg";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export const Speaker: React.FC<{ talk: Talk }> = ({ talk }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const selector = gsap.utils.selector(containerRef.current);
    const onHoverEnter = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        selector(".up-path"),
        {
          drawSVG: "0%",
        },
        {
          drawSVG: "100%",
        }
      ).fromTo(
        selector(".down-path"),
        {
          drawSVG: "0%",
        },
        {
          drawSVG: "100%",
        },
        0
      );
    };
    const onHoverLeave = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        selector(".up-path"),
        {
          drawSVG: "100%",
        },
        {
          drawSVG: "0%",
        }
      ).fromTo(
        selector(".down-path"),
        {
          drawSVG: "100%",
        },
        {
          drawSVG: "0%",
        },
        0
      );
    };

    container.addEventListener("mouseenter", onHoverEnter);
    container.addEventListener("mouseleave", onHoverLeave);

    return () => {
      container.removeEventListener("mouseenter", onHoverEnter);
      container.removeEventListener("mouseleave", onHoverLeave);
    };
  }, []);

  return (
    <div className="pb-6 border-b-2 border-offblack max-w-[283px] mx-auto">
      <div className="text-center lg:text-left">
        <div
          ref={containerRef}
          className="relative size-[232px] mb-5 mx-auto md:w-auto lg:size-[232px] lg:mx-0 group"
        >
          <div className="absolute inset-0 w-full h-full z-10 border-black transition-all duration-300 group-hover:translate-x-[14.5px] group-hover:-translate-y-[14.5px]">
            <Image
              src={talk.image}
              alt={talk.name}
              className="w-full h-full object-cover grayscale-100 transition-all group-hover:grayscale-0"
            />
            <div className="absolute inset-0 h-full w-full z-20">
              <svg width="234" height="234" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 1 1 L 233 1 L 233 233"
                  fill="none"
                  stroke="black"
                  strokeWidth="2px"
                  strokeDasharray={466}
                  strokeDashoffset={466}
                  className="up-path"
                />

                <path
                  d="M 233 233 L 1 233 L 1 1"
                  fill="none"
                  stroke="black"
                  strokeWidth="2px"
                  strokeDasharray={466}
                  strokeDashoffset={466}
                  className="down-path"
                />
              </svg>
            </div>
            <div className="size-10 absolute bottom-0 left-0 bg-linear-(--flaskcon-gradient) flex justify-center items-center duration-300 transition-all group-hover:bg-black group-hover:bg-none">
              <Image src={speakerHorn} alt="" className="w-[25.3px] h-5" />
            </div>
          </div>
          <div className="absolute w-full h-full bg-linear-(--flaskcon-gradient) inset-0" />
        </div>
        <h4 className="font-inktrap font-extrabold leading-120p tracking-neg3 mb-2 uppercase">
          {talk.name}
        </h4>
        <em className="not-italic leading-150p tracking-neg2">{talk.talk}</em>
      </div>
    </div>
  );
};
