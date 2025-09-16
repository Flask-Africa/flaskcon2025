"use client";
import bulidingonLastYear from "@/assets/images/building-on-last-year.png";
import { useGSAP } from "@gsap/react";
import NumberFlow from "@number-flow/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
import { SlideText } from "../animation/slide-text";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const SponsorshipBuilding = () => {
  const containerRef = useRef(null);
  const [signupCount, setSignupCount] = useState(0);
  const [attendeeCount, setAttendeeCount] = useState(0);
  const [speakerCount, setSpeakersCount] = useState(0);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".signups",
        start: "top 70%",
        onEnter: () => {
          setSignupCount(140);
        },
      });
      ScrollTrigger.create({
        trigger: ".attendees",
        start: "top 70%",
        onEnter: () => {
          setAttendeeCount(80);
        },
      });
      ScrollTrigger.create({
        trigger: ".speakers",
        start: "top 70%",
        onEnter: () => {
          setSpeakersCount(12);
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="lg:flex">
      <Image
        src={bulidingonLastYear}
        alt=""
        className="border-2 border-offblack lg:w-[35%] object-cover"
      />
      <div className="border-2 border-black border-t-0 font-neue lg:border-t-2 lg:border-l-0">
        <div className="px-5 py-[60px] border-b-2 border-black lg:px-[60px] lg:pb-[120px]">
          <SlideText slideFrom="BOTTOM" showOnScroll viewportTrigger="70%">
            <h3 className="font-extrabold text-4xl leading-[120%] tracking-neg5 text-offblack mb-5 font-inktrap lg:text-[47px]">
              Building on Last Year&apos;s Success
            </h3>
          </SlideText>
          <SlideText slideFrom="TOP" viewportTrigger="70%" showOnScroll>
            <p className=" text-base leading-[150%] tracking-neg5 text-offblack">
              Our last event connected developers and industry leaders across
              the globe, demonstrating the visibility and influence sponsors can
              expect.
            </p>
          </SlideText>
        </div>
        <div className="md:flex ">
          <div className="py-10 flex justify-center items-center md:grow border-b-2 border-black md:border-b-0 md:border-r-2">
            <em className="not-italic text-center">
              <span className="block font-extrabold text-[47px] leading-full tracking-neg3 text-offblack mb-2 lg:text-[61px] signups">
                <NumberFlow value={signupCount} />+
              </span>
              <span className="text-[21px] leading-[150%] tracking-neg3 text-offblack font-neue">
                Signups
              </span>
            </em>
          </div>
          <div className="py-10 flex justify-center items-center md:grow border-b-2 border-black md:border-b-0 md:border-r-2">
            <em className="not-italic text-center">
              <span className="block font-extrabold text-[47px] leading-full tracking-neg3 text-offblack mb-2 lg:text-[61px] attendees">
                {/* 80+ */}
                <NumberFlow value={attendeeCount} />+
              </span>
              <span className="text-[21px] leading-[150%] tracking-neg3 text-offblack font-neue">
                Attendees
              </span>
            </em>
          </div>
          <div className="py-10 flex justify-center items-center md:grow">
            <em className="not-italic text-center">
              <span className="block font-extrabold text-[47px] leading-full tracking-neg3 text-offblack mb-2 lg:text-[61px] speakers">
                {/* 12 */}
                <NumberFlow value={speakerCount} />+
              </span>
              <span className="text-[21px] leading-[150%] tracking-neg3 text-offblack font-neue">
                Speakers
              </span>
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};
