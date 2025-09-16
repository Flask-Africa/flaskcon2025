"use client";
import flaskcon2024 from "@/assets/images/flaskcon-2024.jpg";
import rectangleMask from "@/assets/svg/rectangle-mask.svg";
import { useMatchMedia } from "@/utils/hooks";
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
  const matches = useMatchMedia(1024);

  useGSAP(
    () => {
      gsap.from("img", {
        scale: 0,
        ease: "back",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
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
    <div className="relative my-[60px] xl:my-25" ref={containerRef}>
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
          maskSize: `290px 800px`,
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
