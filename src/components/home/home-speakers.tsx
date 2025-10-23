"use client";

import { Speaker } from "./speaker";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { SpeakerIT } from "@/utils/types";
import {
  flaskAtTheEdge,
  speakers,
  systemDesignJudges,
  womenInFlaskPanel,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export const HomeSpeakers = () => {
  return (
    <div className="border-t-2 border-black ">
      <section
        id="speakers"
        className="font-inktrap px-4 lg:px-10 xl:px-25 max-w-[1440px] mx-auto"
      >
        <div className="px-4 border-x-2 border-black">
          <SpeakingSection
            title="Our Amazing Speakers"
            subtext="Inspire, teach, and connect with the community. If you're
                  passionate about backend, data science, or ML with Flask,
                  share your ideas with us!"
            buttonText="Apply To Speak"
            speakers={speakers}
          />
          <SpeakingSection
            title="Women In Flask Panel Session"
            speakers={womenInFlaskPanel}
          />
          <SpeakingSection
            title="Flask at The Edge Panel Session"
            speakers={flaskAtTheEdge}
          />
          <SpeakingSection
            title="System Design Judges"
            speakers={systemDesignJudges}
          />
        </div>
      </section>
    </div>
  );
};

const SpeakingSection: React.FC<{
  title: string;
  subtext?: string;
  buttonText?: string;
  speakers: SpeakerIT[];
}> = ({ title, buttonText, subtext, speakers }) => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".title", {
        type: "lines, words",
        mask: "lines",
      });
      let textSplit, btnTextSplit;
      if (subtext) {
        textSplit = SplitText.create(".text", {
          type: "lines, words",
          mask: "lines",
        });
        btnTextSplit = SplitText.create(".btn-text", {
          type: "lines, words",
          mask: "lines",
        });
      }

      const tl = gsap.timeline({ paused: true });
      tl.from(titleSplit.lines, {
        yPercent: 100,
        ease: "power3",
        stagger: 0.06,
      });
      if (subtext) {
        tl.from(
          textSplit!.lines,
          {
            yPercent: 100,
            ease: "power2",
            stagger: 0.06,
          },
          "<"
        )
          .from(
            ".btn",
            {
              yPercent: 100,
              ease: "power2",
            },
            "<0.2"
          )
          .from(
            btnTextSplit!.lines,
            {
              yPercent: -100,
              ease: "power1",
              stagger: 0.06,
            },
            "<0.3"
          );
      }

      ScrollTrigger.create({
        trigger: ".title",
        start: "top 70%",
        animation: tl,
      });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="px-5 pt-15 pb-10 xl:px-15 xl:py-[110px] xl:pb-[50px]"
    >
      <div
        className={twMerge(
          "md:flex md:gap-x-10 lg:justify-end lg:mb-25",
          !subtext && "lg:justify-start pl-[30px]"
        )}
      >
        <h2
          className={twMerge(
            "text-offblack font-extrabold text-4xl leading-120p tracking-neg5 mb-15 md:shrink-0 max-w-[300px] lg:max-w-[630px] lg:text-[61px] lg:mb-0 lg:self-end title",
            !subtext && "lg:w-[600px]"
          )}
        >
          {title}
        </h2>
        <div className="lg:w-[390px]">
          {!!subtext && (
            <p className="text-offblack leading-150p tracking-neg3 mb-5 text">
              {subtext}
            </p>
          )}
          {!!buttonText && (
            <div className="overflow-clip blur-[4px] cursor-not-allowed">
              <button
                className="w-[203px] h-[70px] font-inktrap inline-block mb-25 lg:mb-0 btn"
                disabled
              >
                <div className="w-[199px] h-[55px] text-white text-[21px] bg-[#C200FB] flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
                  <span className="relative top-[2px] btn-text">
                    {buttonText}
                  </span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-15 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0 md:gap-y-15">
        {speakers.map((speaker, idx) => (
          <Speaker key={idx} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};
