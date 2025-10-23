"use client";

import { usePreloaderContext } from "@/context/preloader-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import angleBrackets from "@/assets/svg/angle-brackets.svg";
import thunder from "@/assets/svg/lightning.svg";
import horn from "@/assets/svg/horn.svg";
import cloud from "@/assets/svg/cloud.svg";
import Image from "next/image";

gsap.registerPlugin(useGSAP, SplitText);

export const Preloader = () => {
  const containerRef = useRef(null);
  const { play } = usePreloaderContext();

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const imgElements = Array.from(document.images);

        let assetsLoaded = 0;
        const handleAssetLoad = () => {
          assetsLoaded++;
          const percent = Math.ceil((assetsLoaded / imgElements.length) * 100);
          document.querySelector("h1.percentage")!.innerHTML =
            percent.toString() + "%";
          if (assetsLoaded == imgElements.length) {
            setTimeout(closePreloader, 500);
          }
        };

        // // Create promises for <img> tags
        imgElements.forEach((img) => {
          const image = document.createElement("img");
          image.src = img.src;
          image.addEventListener("load", handleAssetLoad);
        });

        const closePreloader = () => {
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = "visible";
              document.body.removeAttribute("data-lenis-prevent");
            },
          });
          const percentageSplit = SplitText.create("h1.percentage", {
            type: "lines",
            mask: "lines",
            linesClass: "lines",
          });

          tl.to(percentageSplit.lines, {
            yPercent: 100,
            ease: "power2",
          })
            .to(containerRef.current, {
              autoAlpha: 0,
            })
            .add(() => {
              play();
            }, ">-0.3");
        };
      });
    },
    { scope: containerRef, dependencies: [play] }
  );

  useEffect(() => {
    setTimeout(() => {
      document.body.setAttribute("data-lenis-prevent", "true");
      document.body.style.overflow = "hidden";
    }, 0);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed z-50 inset-0 bg-offblack flex justify-center items-center"
    >
      {/* <div className="size-40">
        <Image src={angleBrackets} alt="" />
      </div> */}
      <h1 className="not-italic font-semibold absolute text-white bottom-10 right-10 text-8xl font-neue percentage">
        0%
      </h1>
    </div>
  );
};
