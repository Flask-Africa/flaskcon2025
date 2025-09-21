"use client";
import flaskcon2024 from "@/assets/images/flaskcon-2024.jpg";
import rectangleMask from "@/assets/svg/rectangle-mask.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const SponsorshipImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffsetX, setMouseOffsetX] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const breakpoint = 768;

      mm.add(
        {
          // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
          isDesktop: `(min-width: ${breakpoint}px)`,
          isMobile: `(max-width: ${breakpoint - 1}px)`,
        },
        (context) => {
          // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
          const { isMobile } = context.conditions as { isMobile: boolean };

          const tl = gsap.timeline({ paused: true });

          tl.from(containerRef.current, {
            clipPath: "inset(50% 0)",
            duration: 1,
            ease: "power4.inOut",
          });
          tl.from(
            "img",
            {
              scale: 1.1,
              duration: 0.5,
            },
            0.5
          );

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: isMobile ? "top 60%" : "top 40%",
            onEnter: () => {
              tl.play();
            },
          });

          return () => {};
        }
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMouseOffsetX(e.offsetX);
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", updateMousePosition);

    return () =>
      container?.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="relative my-[60px] xl:my-25 overflow-hidden"
      ref={containerRef}
      style={{
        clipPath: "inset(0%)",
      }}
    >
      <Image
        src={flaskcon2024}
        alt="group picture of flaskcon 2024"
        className="w-full object-cover border-2 border-black grayscale"
      />
      <motion.div
        className="absolute inset-0 mask-wrapper hidden lg:block"
        style={{
          maskImage: `url('${rectangleMask.src}')`,
          maskRepeat: "no-repeat",
          maskSize: `290px 1000px`,
        }}
        animate={{
          maskPosition: `${mouseOffsetX - 150}px`,
        }}
        transition={{
          ease: "backOut",
          type: "tween",
        }}
      >
        <Image
          src={flaskcon2024}
          alt="group picture of flaskcon 2024"
          className="w-full object-cover border-2 border-black"
        />
      </motion.div>
    </div>
  );
};
