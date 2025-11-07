"use client";

import agenda1 from "@/assets/svg/agenda/agenda-1.svg";
import agenda2 from "@/assets/svg/agenda/agenda-2.svg";
import agenda3 from "@/assets/svg/agenda/agenda-3.svg";
import agenda4 from "@/assets/svg/agenda/agenda-4.svg";
import agenda5 from "@/assets/svg/agenda/agenda-5.svg";
import agenda6 from "@/assets/svg/agenda/agenda-6.svg";
import agendaGridLg from "@/assets/svg/agenda/agenda-grid-lg.svg";
import { usePreloaderContext } from "@/context/preloader-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(useGSAP, SplitText);

export const DesktopAgendaHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { register, isLoaded } = usePreloaderContext();

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: !isLoaded });
      tl.set(".bg-icon", { autoAlpha: 1 })
        .set(".icon-1", { autoAlpha: 1 })
        .set(".icon-2", { autoAlpha: 1 })
        .set(".icon-3", { autoAlpha: 1 })
        .set(".icon-4", { autoAlpha: 1 })
        .set(".icon-5", { autoAlpha: 1 })
        .set(".icon-6", { autoAlpha: 1 })
        .set("h1", { autoAlpha: 1 })
        .set(".triangle-0", { autoAlpha: 1 })
        .set(".triangle-1", { autoAlpha: 1 })
        .set(".triangle-2", { autoAlpha: 1 })
        .set(".triangle-3", { autoAlpha: 1 })
        .fromTo(
          ".bg-icon",
          {
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power2",
            duration: 0.3,
          }
        )
        .from(
          ".icon-1",
          {
            xPercent: -100,
            duration: 0.2,
            ease: "power3",
          },
          "<0.2"
        )
        .from(
          ".icon-2",
          {
            xPercent: 100,
            ease: "power2",
          },
          "<"
        )
        .from(
          ".icon-3",
          {
            yPercent: 100,
            duration: 0.3,
            ease: "power3",
          },
          "<0.2"
        )
        .from(
          ".icon-4",
          {
            yPercent: -100,
            ease: "power3",
          },
          "<"
        )
        .from(
          ".icon-5",
          {
            xPercent: 100,
            ease: "power2",
          },
          "<0.25"
        )
        .from(
          ".icon-6",
          {
            xPercent: -100,
            ease: "power3",
          },
          "<"
        )
        .from(
          "h1",
          {
            yPercent: -100,
            ease: "power4",
          },
          "<0.2"
        )
        .fromTo(
          ".triangle-0",
          {
            xPercent: -100,
          },
          {
            xPercent: 0,
            ease: "power2",
          },
          "<"
        )
        .fromTo(
          ".triangle-1",
          { xPercent: -200 },
          {
            xPercent: 0,
            ease: "power3",
          },
          "<"
        )
        .fromTo(
          ".triangle-2",
          { xPercent: -300 },
          {
            xPercent: 0,
            ease: "power3",
          },
          "<"
        )
        .fromTo(
          ".triangle-3",
          { xPercent: -400 },
          {
            xPercent: 0,
            ease: "power3",
          },
          "<"
        );

      if (!isLoaded) register("agenda-desktop-hero", () => tl.play());
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="hidden lg:flex border-black">
      <div className="border-x-2 w-1/4 flex flex-col">
        <div className="p-10 grow flex justify-center items-center">
          <div className="overflow-clip">
            <Image
              src={agenda1}
              alt=""
              className="size-full object-contain icon-1 invisible w-[124px] h-26"
            />
          </div>
        </div>
        <div className="flex border-t-2 h-[117px]">
          <div className="bg-offblack w-1/2 grid grid-rows-3 grid-cols-4 border-x-2 overflow-hidden">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div
                key={idx}
                className={twMerge("triangle invisible", `triangle-${idx % 4}`)}
              >
                <div
                  className="size-full bg-white"
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="w-1/2 flex justify-center items-center p-3">
            <div className="overflow-clip">
              <Image
                src={agenda2}
                alt=""
                className="size-full object-contain icon-2 invisible"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-1/3 w-full border-r-2">
          <div className="overflow-clip h-full">
            <Image
              src={agendaGridLg}
              alt=""
              className="size-full object-cover bg-icon invisible"
            />
          </div>
        </div>
        <div className="h-2/3 flex border-t-2">
          <div className="w-1/2 p-8 border-r-2 flex justify-center items-center">
            <div className="overflow-clip">
              <Image
                src={agenda3}
                alt=""
                className="size-full object-contain icon-3 invisible w-[133px] h-[125px]"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col border-r-2">
            <div className="border-b-2">
              <div className="overflow-clip">
                <h1 className="font-neue font-extrabold text-[47px] leading-full tracking-neg5 text-center text-offblack lg:text-[56px] my-4 [&]:min-[1440px]:text-[80px] invisible">
                  Agenda
                </h1>
              </div>
            </div>
            <div className="flex grow">
              <div className="w-1/2 flex justify-center items-center border-r-2">
                <div className="overflow-clip">
                  <Image src={agenda4} alt="" className="icon-4 invisible" />
                </div>
              </div>
              <div className="flex justify-center items-center w-1/2 bg-offblack">
                <div className="overflow-clip">
                  <Image src={agenda5} alt="" className="icon-5 invisible" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex justify-center items-center border-r-2">
        <div className="overflow-clip">
          <Image
            src={agenda6}
            alt=""
            className="icon-6 invisible w-[165px] h-[161px]"
          />
        </div>
      </div>
    </div>
  );
};
