"use client";

import { usePreloaderContext } from "@/context/preloader-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import pre1 from "@/assets/images/preloaders/pre-1.jpg";
import pre2 from "@/assets/images/preloaders/pre-2.jpg";
import pre3 from "@/assets/images/preloaders/pre-3.jpg";
import pre4 from "@/assets/images/preloaders/pre-4.jpg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(useGSAP, SplitText);

const preloaderImgs = [pre1, pre2, pre3, pre4];

export const Preloader = () => {
  const containerRef = useRef(null);
  const { play } = usePreloaderContext();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.5,
        onComplete: () => {
          // document.body.style.overflow = "visible";
          // document.body.removeAttribute("data-lenis-prevent");
        },
      });

      tl.to(".prel-wrapper", {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2",
      })
        .fromTo(
          ".prel-4",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          { clipPath: "inset(100% 0% 0% 0%)", ease: "power2", duration: 0.8 }
        )
        .fromTo(
          ".prel-3",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          { clipPath: "inset(0% 100% 0% 0%)", ease: "power2", duration: 0.8 }
        )
        .fromTo(
          ".prel-2",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          { clipPath: "inset(0% 0% 100% 0%)", ease: "power2", duration: 0.8 }
        )
        .fromTo(
          ".prel-1",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          { clipPath: "inset(0% 0% 0% 100%)", ease: "power2", duration: 0.8 }
        )
        .fromTo(
          containerRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          {
            clipPath: "inset(100% 0% 0% 0%)",
            ease: "expo",
            duration: 0.8,
          },
          "<0.6"
        )

        .add(() => play(), "<0.5")
        .set(containerRef.current, { autoAlpha: 0, height: 0, width: 0 });
    },
    { scope: containerRef, dependencies: [play] }
  );

  useEffect(() => {
    setTimeout(() => {
      // document.body.setAttribute("data-lenis-prevent", "true");
      // document.body.style.overflow = "hidden";
    }, 0);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed z-50 inset-0 bg-offblack flex justify-center items-center"
    >
      <div className="relative w-full">
        <div
          className="w-[300px] h-[200px] lg:w-[600px] lg:h-[400px] relative prel-wrapper mx-auto"
          style={{
            clipPath: "inset(100% 0% 0% 0%)",
          }}
        >
          {preloaderImgs.map((preloaderImg, idx) => (
            <div
              key={preloaderImg.src}
              className={twMerge("absolute inset-0", `prel-${idx + 1}`)}
            >
              <Image
                src={preloaderImg}
                alt=""
                className="size-full object-cover"
                priority
              />
            </div>
          ))}
        </div>
        {/* <div className="overflow-clip w-full absolute top-1/2 left-1/2 -translate-1/2">
          <h1 className="font-neue text-3xl font-semibold text-white  w-full text-center invisible">
            <span>Flaskcon</span>
            <span className="inline-block">
              {" "}
              <Logo />{" "}
            </span>
            <span>Africa</span>
          </h1>
        </div> */}
      </div>
    </div>
  );
};
