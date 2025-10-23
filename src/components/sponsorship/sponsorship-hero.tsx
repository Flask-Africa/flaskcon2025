"use client";
import gsap from "gsap";
import { SponsorshipForm } from "./sponsorhip-form";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { usePreloaderContext } from "@/context/preloader-context";

gsap.registerPlugin(useGSAP, SplitText);

export const SponsorshipHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { register, unregister } = usePreloaderContext();
  const preloaderKeys = useRef<string[]>([]);

  useGSAP(
    () => {
      SplitText.create(`.sponsor-header`, {
        type: "chars, words",
        mask: "chars",
        charsClass: "chars",
        autoSplit: true,
        onSplit: (self) => {
          const sponsorTextSplit = SplitText.create(".sponsor-text", {
            type: "lines, words",
            mask: "lines",
            charsClass: "lines",
          });
          const headerTl = gsap.timeline({ paused: true });
          headerTl
            .set(".sponsor-text", {
              autoAlpha: 1,
            })
            .set(".sponsor-header", {
              autoAlpha: 1,
            })
            .fromTo(
              self.chars,
              { yPercent: 100 },
              {
                yPercent: 0,
                stagger: 0.04,
                ease: "power4",
              }
            )
            .fromTo(
              sponsorTextSplit.lines,
              { yPercent: 100 },
              {
                yPercent: 0,
                stagger: 0.04,
                ease: "power4",
              }
            );
          register("sponsorhip-hero", () => headerTl.play());
          preloaderKeys.current.push("sponsorhip-hero");
          return headerTl;
        },
      });

      return () => {
        preloaderKeys.current.forEach((key) => unregister(key));
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="border-x-2 border-x-offblack text-offblack md:flex"
    >
      <div className="py-[60px] px-5 border-b-2 border-offblack md:w-1/2 lg:px-[60px] xl:w-[52%]">
        <h1 className="font-neue font-extrabold text-[47px] leading-[120%] tracking-neg5 mb-5 lg:text-[80px] sponsor-header invisible">
          Partner with FlaskCon 2025
        </h1>

        <p className="leading-[150%] text-base tracking-neg3 font-inktrap sponsor-text invisible">
          FlaskCon thrives because of the support from partners like you.
          Sponsorship helps us create meaningful experiences for developers of
          all levels while giving your brand visibility in a passionate and
          growing ecosystem.
        </p>
      </div>
      <div className="md:border-l-2 md:border-offblack md:w-1/2">
        <SponsorshipForm />
      </div>
    </section>
  );
};
