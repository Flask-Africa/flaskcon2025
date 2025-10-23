"use client";

import Image from "next/image";

import vortexBg from "@/assets/images/vortex-bg.png";
import vortexLgBg from "@/assets/images/hero-bg-lg.png";
import angleBrackets from "@/assets/svg/angle-brackets.svg";
import thunder from "@/assets/svg/lightning.svg";
import horn from "@/assets/svg/horn.svg";
import cloud from "@/assets/svg/cloud.svg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { usePreloaderContext } from "@/context/preloader-context";

gsap.registerPlugin(useGSAP, SplitText);

export const HomeHero = () => {
  const containerRef = useRef(null);
  const { register } = usePreloaderContext();
  useGSAP(
    () => {
      const heroText1Split = SplitText.create(".hero-text-1", {
        type: "lines, words",
        mask: "lines",
      });
      const heroText2Split = SplitText.create(".hero-text-2", {
        type: "lines, words",
        mask: "lines",
      });
      const heroBtn1Split = SplitText.create(".hero-btn-1", {
        type: "lines, words",
        mask: "lines",
      });
      const heroBtn2Split = SplitText.create(".hero-btn-2", {
        type: "lines, words",
        mask: "lines",
      });

      const tl = gsap.timeline({ paused: true });
      tl.set(".bg-image-wrapper", { autoAlpha: 1 })
        .from(".bg-image-wrapper", {
          clipPath: "inset(50% 50% 50% 50%)",
          ease: "power3",
          duration: 1,
        })
        .set([".register-btn", ".sponsor-btn"], {
          autoAlpha: 1,
        })
        .from(".register-btn", {
          yPercent: 100,
          ease: "power1",
        })
        .from(
          ".sponsor-btn",
          {
            yPercent: 100,
            ease: "power1",
          },
          "<"
        )
        .from(
          heroText1Split.lines,
          {
            yPercent: -100,
            ease: "power3",
            stagger: 0.06,
          },
          "<0.2"
        )
        .from(
          heroText2Split.lines,
          {
            yPercent: 100,
            ease: "power1",
          },
          "<"
        )
        .from(
          heroBtn1Split.lines,
          {
            yPercent: -100,
            ease: "power2",
          },
          "<0.2"
        )
        .from(
          heroBtn2Split.lines,
          {
            yPercent: 100,
            ease: "power2",
          },
          "<"
        )
        .fromTo(
          ".hero-image-1",
          {
            scale: 0.6,
            autoAlpha: 0,
            translateZ: -15,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "back(2)",
          },
          "<0.3"
        )
        .fromTo(
          ".hero-image-4",
          {
            scale: 0.6,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "back(2)",
          },
          "<"
        )
        .fromTo(
          ".hero-image-2",
          {
            scale: 0.6,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "back(2)",
          },
          "<"
        )
        .fromTo(
          ".hero-image-3",
          {
            scale: 0.6,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "back(2)",
          },
          "<"
        );

      register("home-hero", () => tl.play());

      gsap.set(".hero-text-1", {
        autoAlpha: 1,
      });
      gsap.set(".hero-text-2", {
        autoAlpha: 1,
      });
      gsap.set(".hero-btn-1", {
        autoAlpha: 1,
      });
      gsap.set(".hero-btn-2", {
        autoAlpha: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen relative flex justify-center items-center border-b-2 border-black"
    >
      <div className="absolute inset-0 h-full w-full bg-image-wrapper invisible">
        <Image
          src={vortexBg}
          alt=""
          className="w-full h-full md:hidden"
          priority
        />
        <Image
          src={vortexLgBg}
          alt=""
          className="w-full h-full hidden md:block"
          priority
        />
      </div>
      <div className="relative z-10 text-center pt-[54px] font-neue w-full max-w-[400px] mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px]">
        <div className="absolute w-full h-full inset-0">
          <Image
            priority
            src={angleBrackets}
            alt=""
            className="hero-image-1 invisible absolute top-[154px] -left-4 w-[106px] h-[68px] md:w-[180px] md:h-auto md:top-[85px] lg:w-[285px] lg:h-[182px]"
          />
          <Image
            priority
            src={thunder}
            alt=""
            className="hero-image-2 invisible absolute top-[154px] -right-4 w-[66px] h-[68px] md:w-[120px] md:h-auto md:top-[85px] lg:w-[151px] lg:h-[155px] lg:right-4"
          />
          <Image
            priority
            src={horn}
            alt=""
            className="hero-image-3 invisible absolute top-[284px] -left-4 w-[121px] h-[70px] md:w-[230px] md:h-auto md:top-[275px] md:-left-[50px] lg:w-[361px] lg:h-[208px]"
          />
          <Image
            priority
            src={cloud}
            alt=""
            className="hero-image-4 invisible absolute top-[284px] -right-4 w-[107px] h-[68px] md:w-[190px] md:h-auto md:top-[275px] md:-right-[50px] lg:w-[246px] lg:h-[156px] lg:top-[330px]"
          />
        </div>
        <h1
          className="font-extrabold text-[47px] leading-120p tracking-neg5 text-offblack mb-6 md:text-[80px] hero-text-1 invisible"
          style={{
            textShadow:
              "0px 8px 0px #fff, 8px 0px 0px #fff, -8px 0px 0px #fff, 0px -8px 0px #fff",
          }}
        >
          <span className="block">Flaskcon</span>
          <span className="block">Africa</span>
          <span className="block">2025</span>
        </h1>
        <p
          className="font-extrabold text-[21px] leading-150p tracking-neg5 max-w-[318px] mx-auto mb-6 md:max-w-[500px] hero-text-2 invisible"
          style={{
            textShadow:
              "0px 4px 0px #fff, 4px 0px 0px #fff, -4px 0px 0px #fff, 0px -4px 0px #fff",
          }}
        >
          Connect, Learn and Innovate with Flask
        </p>
        <div className="flex flex-col gap-y-5 items-center md:flex-row md:gap-y-0 md:gap-x-5 md:mx-auto md:justify-center">
          <div className="overflow-clip">
            <button className="w-[187px] h-[70px] font-neue register-btn invisible">
              <div className="w-[183px] h-[55px] text-white text-[21px] bg-[#534EFF] flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
                <span className="relative top-[2px] hero-btn-1 invisible">
                  Register Now
                </span>
              </div>
            </button>
          </div>
          <div className="overflow-clip">
            <button className="w-[228px] h-[70px] font-inktrap sponsor-btn invisible">
              <div className="w-[223px] h-[55px] text-offblack text-[21px] bg-white flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-linear-(--flaskcon-gradient)">
                <span className="relative top-[2px] hero-btn-2 invisible">
                  {" "}
                  Become a Sponsor
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
