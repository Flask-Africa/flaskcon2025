"use client";

import agenda1 from "@/assets/svg/agenda/agenda-1.svg";
import agenda2 from "@/assets/svg/agenda/agenda-2.svg";
import agenda3 from "@/assets/svg/agenda/agenda-3.svg";
import agenda4 from "@/assets/svg/agenda/agenda-4.svg";
import agenda5 from "@/assets/svg/agenda/agenda-5.svg";
import agenda6 from "@/assets/svg/agenda/agenda-6.svg";
import agendaGridSm from "@/assets/svg/agenda/agenda-grid-sm.svg";
import { usePreloaderContext } from "@/context/preloader-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export const MobileAgendaHero = () => {
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
        );
      if (!isLoaded) register("agenda-mobile-hero", () => tl.play());
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 grid-rows-3 border-x-2 border-black lg:hidden"
    >
      <div className="border-r-2 border-b-2 border-black flex justify-center items-center p-4 md:p-12">
        <div className="overflow-clip">
          <Image src={agenda1} alt="" className="icon-1 invisible" />
        </div>
      </div>
      <div className="border-r-2 border-b-2 border-black ">
        <div className="overflow-clip">
          <Image
            src={agendaGridSm}
            alt=""
            className="size-full object-cover bg-icon"
          />
        </div>
      </div>
      <div className="border-b-2 border-black flex justify-center items-center">
        <div className="overflow-clip">
          <Image src={agenda6} alt="" className="icon-2 invisible" />
        </div>
      </div>
      <div className="border-r-2 border-b-2 border-black flex justify-center items-center p-4 md:p-12">
        <div className="overflow-clip">
          <Image src={agenda3} alt="" className="icon-3 invisible" />
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center border-b-2 border-black">
        <div className="overflow-clip">
          <h1 className="font-neue font-extrabold text-[47px] leading-full tracking-neg5 text-center text-offblack md:text-[60px] invisible">
            Agenda
          </h1>
        </div>
      </div>
      <div className="border-r-2 border-black flex justify-center items-center p-4 md:p-12">
        <div className="overflow-clip">
          <Image src={agenda2} alt="" className="icon-4 invisible" />
        </div>
      </div>
      <div className="border-r-2 border-black flex justify-center items-center p-4 md:p-12">
        <div className="overflow-clip">
          <Image src={agenda4} alt="" className="icon-5 invisible" />
        </div>
      </div>
      <div className="bg-offblack flex justify-center items-center md:p-12">
        <div className="overflow-clip">
          <Image src={agenda5} alt="" className="icon-6 invisible" />
        </div>
      </div>
    </div>
  );
};
