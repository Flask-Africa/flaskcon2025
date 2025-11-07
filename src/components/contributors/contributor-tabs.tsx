"use client";
import Image, { StaticImageData } from "next/image";
import contributorBg from "@/assets/images/contributor-bg.png";

import NameBg1 from "@/assets/images/contributors/name-bg-1.png";
import NameBg2 from "@/assets/images/contributors/name-bg-2.png";
import Star1 from "@/assets/svg/star-1.svg";
import Star2 from "@/assets/svg/star-2.svg";
import Star3 from "@/assets/svg/marquee-star.svg";
import Star4 from "@/assets/svg/marquee-star-2.svg";

import IsoStar from "@/assets/svg/star-iso.svg";
import NameBtm1 from "@/assets/images/contributors/name-bottom-bg-1.png";
import NameBtm2 from "@/assets/images/contributors/name-bottom-bg-2.png";
import Badge from "@/assets/svg/flask-badge.svg";
import { useState, useEffect, useRef } from "react";
import { contributorsData } from "./contributors";
import Marquee from "react-fast-marquee";
import gsap from "gsap";

export interface Contributor {
  index: number;
  name: string;
  description: string;
  iconSrc: StaticImageData;
  bgLetterSrc: StaticImageData;
  image: StaticImageData;
  job: {
    position: string;
    coy?: string;
  };
  type: string;
}

export const ContributorTabs = () => {
  const [activeContributor, setActiveContributor] = useState<Contributor>(
    contributorsData[0]
  );
  const [displayedContributor, setDisplayedContributor] = useState<Contributor>(
    contributorsData[0]
  );
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bgLetterRef = useRef<HTMLImageElement>(null);
  const starIsoRef = useRef<HTMLImageElement>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    tl.to([nameRef.current, marqueeRef.current, descriptionRef.current], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    })
      .to(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "<"
      )
      .to(
        [badgeRef.current, bgLetterRef.current, starIsoRef.current],
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "<"
      )
      .call(() => {
        setDisplayedContributor(activeContributor);
      })
      .set(
        [
          imageRef.current,
          nameRef.current,
          marqueeRef.current,
          descriptionRef.current,
          badgeRef.current,
          bgLetterRef.current,
          starIsoRef.current,
        ],
        {
          opacity: 0,
        }
      )
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(
        bgLetterRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "<0.1"
      )
      .to(
        starIsoRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          rotation: 360,
          ease: "back.out(1.5)",
        },
        "<0.1"
      )
      .to(
        badgeRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "<"
      )
      .to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "<0.2"
      )
      .to(
        marqueeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "<0.1"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "<0.1"
      );
  }, [activeContributor]);

  return (
    <section className="w-full border-t-2 border-black min-h-screen h-[150vh]">
      <div className="md:px-2 lg:px-4 xl:px-16 max-w-[1440px] h-full mx-auto">
        <div className="md:border-x-2 flex flex-col lg:flex-row h-full w-full items-stretch justify-start">
          <div className="hidden lg:flex flex-col w-[15%] h-auto lg:h-full border-r-2 border-black overflow-hidden relative">
            <div className="animate-marquee-vertical hidden lg:flex flex-col">
              {contributorsData
                .concat(contributorsData)
                .map((contributor, index) => (
                  <div
                    key={`contributor-${index}`}
                    onClick={() => setActiveContributor(contributor)}
                    className="h-[300px] w-full flex flex-col items-center cursor-pointer justify-start group"
                  >
                    <div className="w-full h-[70%] relative flex justify-center items-end overflow-hidden">
                      <Image
                        src={contributor.image}
                        alt={contributor.name}
                        className="w-full h-full object-cover"
                      />
                      {activeContributor?.name !== contributor.name && (
                        <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] mix-blend-saturation origin-top transition-all duration-300 group-hover:h-0"></div>
                      )}
                    </div>

                    <div className="flex items-center justify-center bg-black w-full h-[30%]">
                      <Image src={contributor.iconSrc} alt="" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="lg:hidden w-full">
            <Marquee
              speed={40}
              gradient={false}
              pauseOnHover
              className="flex items-center"
            >
              {contributorsData.map((contributor, index) => (
                <div
                  key={`contributor-mobile-${index}`}
                  onClick={() => setActiveContributor(contributor)}
                  className="h-[250px] w-[150px] border-y-2 border-r-2 border-black flex flex-col items-center cursor-pointer justify-start"
                >
                  <div className="w-full h-[70%] relative flex justify-center items-end overflow-hidden">
                    <Image
                      src={contributor.image}
                      alt={contributor.name}
                      className="w-full h-full object-cover"
                    />
                    {activeContributor?.name !== contributor.name && (
                      <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] mix-blend-saturation origin-top transition-all ease-in duration-700 group-hover:h-0"></div>
                    )}
                  </div>

                  <div className="flex items-center justify-center bg-black w-full h-[30%]">
                    <Image
                      src={contributor.iconSrc}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          <div className="w-full lg:w-[40%] min-h-[60vh] lg:h-full border-y-2 lg:border-y-0 lg:border-r-2 border-black relative flex items-center justify-center py-8 lg:py-0">
            <Image
              src={contributorBg}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
            />
            <div className="flex flex-col items-center justify-end w-[70%] md:w-[50%] lg:w-[70%] h-auto relative">
              <div ref={imageRef} className="relative z-30 w-full">
                <Image
                  src={displayedContributor?.image}
                  alt={displayedContributor?.name}
                  className="object-cover w-full h-auto"
                />
              </div>
              <Image
                ref={starIsoRef}
                src={IsoStar}
                alt=""
                width={40}
                className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 z-10 w-8 lg:w-[60px]"
              />
              <Image
                ref={bgLetterRef}
                src={displayedContributor.bgLetterSrc}
                alt=""
                className="absolute w-full top-0 left-0 z-[5]"
              />
              <div
                ref={badgeRef}
                className="bg-[#1B1B1B] w-full px-3 py-4 lg:px-5 lg:py-6 border-2 relative z-40 border-black flex items-center justify-center"
              >
                <span className="font-inktrap uppercase text-base lg:text-[21px] text-white font-extrabold">
                  {displayedContributor?.type}
                </span>
                <div className="absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2">
                  <Image src={Badge} alt="" width={100} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col">
            <div className="w-full min-h-[40vh] lg:h-[44%] border-b-2 border-black flex items-center justify-center relative py-8 lg:py-0">
              <Image
                src={activeContributor.index % 2 === 0 ? NameBg1 : NameBg2}
                alt=""
                className="w-full h-full object-cover absolute top-0 left-0 z-10"
              />

              <div className="absolute bottom-0 z-20 left-0 w-full h-20 lg:h-32">
                <Image
                  src={activeContributor.index % 2 === 0 ? NameBtm1 : NameBtm2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="relative w-full z-30 flex items-center justify-center px-4"
                ref={nameRef}
              >
                <h1 className="relative z-20 text-outline-black mx-4 lg:mx-20 text-[40px] md:text-[50px] lg:text-[60px] uppercase text-center text-white font-inktrap font-extrabold leading-tight">
                  {displayedContributor?.name}
                </h1>
                <h1 className="absolute top-1 lg:top-2 text-outline-black left-1/2 -translate-x-1/2 z-10 text-[40px] md:text-[50px] lg:text-[60px] uppercase text-center text-[#1B1B1B] font-inktrap font-extrabold leading-tight">
                  {displayedContributor?.name}
                </h1>
                <Image
                  src={Star1}
                  alt=""
                  width={50}
                  className="object-cover absolute -top-6 lg:-top-10 right-[5%] lg:right-[10%] z-40 w-12 lg:w-20"
                />
                <Image
                  src={Star2}
                  alt=""
                  width={40}
                  className="object-cover absolute bottom-[15%] lg:bottom-[20%] left-[5%] lg:left-[10%] z-10 w-10 lg:w-[60px]"
                />
              </div>
            </div>

            <div ref={marqueeRef} className="h-[10vh] lg:h-[12%]">
              <Marquee
                speed={40}
                gradient={false}
                pauseOnHover
                className="border-b-2 border-black h-full flex items-center"
              >
                <div className="flex items-center gap-4 px-4">
                  <span className="text-[24px] md:text-[28px] lg:text-[32px] font-inktrap text-offblack uppercase font-extrabold whitespace-nowrap">
                    {displayedContributor.job.position}{" "}
                    {displayedContributor.job.coy &&
                      `@ ${displayedContributor.job.coy}`}
                  </span>
                  <Image
                    alt=""
                    src={activeContributor.index % 2 === 0 ? Star3 : Star4}
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                </div>

                <div className="flex items-center gap-4 px-4">
                  <span className="text-[24px] md:text-[28px] lg:text-[32px] font-inktrap text-offblack uppercase font-extrabold whitespace-nowrap">
                    {displayedContributor.job.position}{" "}
                    {displayedContributor.job.coy &&
                      `@ ${displayedContributor.job.coy}`}
                  </span>
                  <Image
                    alt=""
                    src={activeContributor.index % 2 === 0 ? Star3 : Star4}
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                </div>
              </Marquee>
            </div>
            <div className="w-full min-h-[30vh] overflow-auto lg:h-[44%] bg-black p-6 md:p-8 lg:p-10 flex items-start">
              <p
                ref={descriptionRef}
                className="font-neue text-base md:text-lg lg:text-[21px] text-white font-normal leading-relaxed"
              >
                {displayedContributor?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
