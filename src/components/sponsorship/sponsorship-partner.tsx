"use client";

import { twMerge } from "tailwind-merge";
import { SlideText } from "../animation/slide-text";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

type Pro = {
  title: string;
  text: string;
  bgClassName: string;
};

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const SponsorshipPartner = () => {
  const pros: Pro[] = [
    {
      title: "Showcase Your Products & Solutions",
      text: "Utilize exhibition spaces and demo opportunities to  highlight how your products, services, or tools can benefit Flask and Python developers.  Receive direct feedback and generate leads from a highly relevant audience. ",
      bgClassName: "bg-offblack",
    },
    {
      title: "Gain Brand Visibility",
      text: "Position your brand directly in front of a highly engaged and influential  audience of developers, tech enthusiasts, and decision-makers. ",
      bgClassName: "bg-[#EC0868]",
    },
    {
      title: "Access Top-Tier Talent",
      text: "This event serves as an ideal platform for talent acquisition, allowing you  to showcase your company culture, career opportunities, and directly engage with potential  hires who are passionate about Flask and Python.",
      bgClassName: "bg-[#C200FB]",
    },
  ];
  return (
    <section className="font-neue">
      <SlideText slideFrom="BOTTOM" viewportTrigger="70%" showOnScroll>
        <h2 className="text-center font-extrabold text-4xl leading-[150%] tracking-neg5 text-offblack mb-[60px] font-inktrap lg:text-[61px] xl:mb-25">
          Why Partner With Us
        </h2>
      </SlideText>

      <div className="border-x-2 border-black pb-[100px] lg:flex">
        {pros.map((pro, idx) => (
          <SponsorshipProCard pro={pro} key={idx} idx={idx} />
        ))}
      </div>
    </section>
  );
};

const SponsorshipProCard: React.FC<{ pro: Pro; idx: number }> = ({
  pro,
  idx,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const splitText = SplitText.create(`.pro-words-${idx}`, {
        type: "words",
        mask: "words",
        wordsClass: "word",
      });
      gsap.set(splitText.masks, {
        overflow: "hidden",
        lineHeight: "16px",
      });
      const tl = gsap.timeline();
      ScrollTrigger.create({
        trigger: `.pro-words-${idx}`,
        start: "top 80%",
        end: "top 45%",
        animation: tl,
      });
      splitText.masks.forEach((mask) => {
        tl.from(
          mask,
          {
            filter: "blur(4px)",
            ease: "circ",
            duration: 0.01,
          },
          ">"
        );
      });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      key={idx}
      className={twMerge(
        "p-10 text-white border-y-2 border-black border-collapse not-last:border-b-0 md:py-16 lg:not-last:border-r-2 lg:not-last:border-b-2",
        pro.bgClassName
      )}
    >
      <div className="max-w-[600px] mx-auto space-y-5">
        <SlideText slideFrom="TOP" showOnScroll viewportTrigger="70%">
          <em className="not-italic block text-[21px] leading-[120%] tracking-neg5 font-extrabold">
            0{idx + 1}
          </em>
        </SlideText>
        <SlideText slideFrom="BOTTOM" showOnScroll viewportTrigger="70%">
          <h3
            className={`text-[21px] leading-[120%] tracking-neg5 font-extrabold font-inktrap `}
          >
            {pro.title}
          </h3>
        </SlideText>
        <p
          className={`text-base leading-[150%] tracking-neg5 pro-words-${idx}`}
        >
          {pro.text}
        </p>
      </div>
    </div>
  );
};
