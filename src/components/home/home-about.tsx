"use client";

import aboutBg from "@/assets/images/about-bg.png";
import Image from "next/image";

import games from "@/assets/svg/games.svg";
import keynotes from "@/assets/svg/keynotes.svg";
import brainstorming from "@/assets/svg/brainstorming.svg";
import networking from "@/assets/svg/networking.svg";
import workshops from "@/assets/svg/workshops.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

const highlights = [
  {
    icon: networking,
    title: "Networking",
    description: "Connect with fellow developers over breaks.",
  },
  {
    icon: workshops,
    title: "Workshops",
    description:
      "Dive into Flask integrations, backend strategies, and ML applications.",
  },
  {
    icon: keynotes,
    title: "Keynotes",
    description:
      "Hear from Flask experts sharing insights and industry trends.",
  },
  {
    icon: games,
    title: "Games",
    description: "Fun activities and giveaways to keep the energy high.",
  },
  {
    icon: brainstorming,
    title: "Brainstorming Session",
    description: "Collaborate on new ideas for future Flask projects.",
  },
];

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export const HomeAbout = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const titleSplit = SplitText.create(".title", {
        type: "lines, words",
        mask: "lines",
      });
      const textSplit = SplitText.create(".text", {
        type: "lines, words",
        mask: "lines",
      });
      const highlightTitleSplit = SplitText.create(".highlight-title", {
        type: "lines, words",
        mask: "lines",
      });
      const agendaTextSplit = SplitText.create(".agenda-text", {
        type: "lines, words",
        mask: "lines",
      });

      const tl = gsap.timeline({ paused: true });
      tl.from(titleSplit.lines, {
        yPercent: 100,
        ease: "power3",
        stagger: 0.06,
      }).from(
        textSplit.lines,
        {
          yPercent: 100,
          ease: "power3",
          stagger: 0.06,
        },
        "<0.2"
      );

      ScrollTrigger.create({
        trigger: ".title",
        start: "top 70%",
        animation: tl,
      });

      const highlightTl = gsap.timeline({ paused: true });
      highlightTl
        .from(highlightTitleSplit.lines, {
          yPercent: -100,
          ease: "power2",
          stagger: 0.06,
        })
        .from(
          ".agenda-btn",
          {
            yPercent: 100,
            ease: "power2",
          },
          "<"
        )
        .from(
          agendaTextSplit.lines,
          {
            yPercent: -100,
            ease: "power1",
          },
          "<0.3"
        );

      ScrollTrigger.create({
        trigger: ".highlight-title",
        start: "top 70%",
        animation: highlightTl,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="mt-14 border-t-2 border-black lg:mt-25"
    >
      <div className="md:px-4 lg:px-10 xl:px-25 max-w-[1440px] mx-auto">
        <div className="md:border-x-2 md:border-b-2 md:border-black md:flex ">
          <div className="md:w-1/2 md:border-r-2">
            <div className="px-4 border-b-2 border-black md:px-0">
              <div className="px-5 py-10 border-2 border-y-0 border-black md:border-none lg:p-15">
                <h2 className="font-inktrap font-extrabold text-[47px] leading-120p tracking-neg5 text-offblack max-w-[313px] lg:text-[61px] title">
                  About Flaskcon
                </h2>
              </div>
            </div>
            <div className="px-4 border-b-2 border-black md:px-0 md:border-none">
              <div className="px-5 py-10 border-2 border-y-0 border-black md:border-none lg:p-15">
                <p className="font-inktrap leading-150p tracking-neg3 text-offblack text">
                  <span className="block">
                    Flaskcon Africa 2025 is a one-of-a-kind event for Flask
                    developers and enthusiasts.
                  </span>
                  <span className="block">
                    Join us for talks, workshops, and networking with fellow
                    Flask professionals. Ideal for all experience levels, from
                    beginners to experts.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-0 md:grow md:w-1/2">
            <div className="border-2 border-black border-t-0 md:border-none md:h-full">
              <Image
                src={aboutBg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black">
        <div className="px-4 font-inktrap lg:px-10 xl:px-25 max-w-[1440px] mx-auto">
          <div className="border-2 border-y-0 border-black text-center py-25">
            <h2 className="font-extrabold text-[47px] leading-120p tracking-neg5 text-offblack max-w-[271px] mx-auto mb-5 md:max-w-none lg:text-[61px] highlight-title">
              Event Highlights
            </h2>
            <div className="overflow-clip">
              <button className="w-[271px] h-[70px] font-inktrap agenda-btn">
                <div className="w-[267px] h-[55px] text-white text-[21px] bg-[#EC0868] flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
                  <span className="relative top-[2px] agenda-text">
                    Explore Event Agenda
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 font-inktrap lg:px-10 xl:px-25 max-w-[1440px] mx-auto">
        <div className="md:border-2 md:border-b-0 md:border-black md:pb-25 md:border-t-0">
          <div className="border-x-2 border-black pb-25 md:grid md:grid-cols-3 md:pb-0 md:border-b-2 md:border-x-0 md:border-t-0 xl:grid-cols-5">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center w-full relative md:not-[&:nth-child(3)]:border-r-2 xl:border-r-2 xl:last:border-r-0  md:border-black xl:even:flex-col-reverse group overflow-hidden"
              >
                <div className="py-6">
                  <Image src={highlight.icon} alt="" className="h-[150px]" />
                </div>
                <div className="h-[61px] w-full hidden xl:block" />
                <div className="bg-black p-5 text-white w-full transition-all duration-[350ms] md:grow xl:absolute xl:w-full xl:h-full xl:group-odd:translate-y-[210px] xl:group-even:top-0 xl:group-even:max-h-[50px] xl:overflow-hidden xl:group-even:group-hover:max-h-[500px] xl:group-odd:group-hover:translate-y-0">
                  <h3 className="font-extrabold text-[21px] leading-full tracking-neg5 mb-2 truncate">
                    {highlight.title}
                  </h3>
                  <em className="not-italic leading-150p tracking-neg5">
                    {highlight.description}
                  </em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
