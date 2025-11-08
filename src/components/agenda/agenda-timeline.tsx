"use client";

import Image from "next/image";
import { ReactNode, useLayoutEffect, useRef } from "react";
import star from "@/assets/svg/star.svg";
import horn from "@/assets/svg/horn.svg";
import circleStar from "@/assets/svg/circle-star.svg";
import whiteStar from "@/assets/svg/white-star.svg";
import x from "@/assets/svg/x.svg";
import { twMerge } from "tailwind-merge";
import { getRandom } from "@/utils/general";
import { TimelineItem } from "./timeline-item";

const ICON_COUNT = 40;
const icons = [star, horn, circleStar, whiteStar, x];
const randomIndexes = [
  3, 4, 4, 4, 3, 1, 4, 3, 1, 2, 2, 3, 2, 0, 0, 4, 0, 1, 3, 1, 2, 2, 4, 4, 3, 3,
  0, 0, 3, 0, 3, 1, 1, 1, 3, 1, 1, 4, 2, 4,
];

export const AgendaTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let { width, height } = container.getBoundingClientRect();
    width = Math.floor(width);
    height = Math.floor(height);

    const images = document.querySelectorAll<HTMLImageElement>(".image");
    images.forEach((image) => {
      const randomLeft = getRandom(0, width - 64);
      const randomTop = getRandom(0, height);

      image.style.left = `${randomLeft}px`;
      image.style.top = `${randomTop}px`;
    });
  }, []);

  return (
    <section className="px-5 lg:px-15">
      <div
        ref={containerRef}
        className="border-x-2 border-black py-[30px] space-y-15 pb-[153px] relative lg:py-[67px]"
      >
        {Array.from({ length: ICON_COUNT }).map((_, i) => {
          const icon = icons[randomIndexes[i]];
          return (
            <div key={i} className={`absolute top-0 left-0 image`}>
              <Image
                src={icon}
                alt=""
                className={twMerge(icon == horn && "w-16")}
              />
            </div>
          );
        })}
        <div className="hidden lg:block w-0.5 h-full absolute top-0 left-[calc(50%+1px)] -translate-x-1/2 bg-black" />
        <TimelineItem time="9:00AM - 9:15AM" talk="First Keynote" />
        <TimelineItem
          time="9:15AM - 9:45AM"
          talk="Control Systems and AI on the Web: Deploying Models with Flask"
        />
        <TimelineItem
          time="9:45AM - 10:05AM"
          talk="Temporal Milestoning with Flask and SQLModel"
        />
        <TimelineItem
          time="10:05AM - 10:25AM"
          talk="Fuzzy Matching Techniques for Proper Nouns"
        />
        <TimelineItem
          time="10:25AM - 10:55AM"
          talk="Women in Flask"
          panelText="Panel Session 1"
        />
        <TimelineItem
          time="10:55AM - 11:40AM"
          talk="Bringing Flask to Life with Gemini on Cloud Run"
        />
        <TimelineItem
          time="11:40AM - 12:40PM"
          talk="Lunch Break & Networking"
        />
        <TimelineItem
          time="12:40PM - 1:10PM"
          talk="Flask & eBPF: Supercharging Application Monitoring"
        />
        <TimelineItem time="1:10PM - 1:25PM" talk="Second Keynote" />
        <TimelineItem
          time="1:25PM - 1:55PM"
          talk="Flask at the Edge: Powering Next-Generation Tech (AI, IoT, and Beyond)"
          panelText="Panel Session 2"
        />
        <TimelineItem time="1:55PM - 2:15PM" talk="Game Session" />
        <TimelineItem
          time="2:15PM - 2:45PM"
          talk="Designing Scalable Data Pipelines to Automate Real-Time Air Quality Monitoring in Python with Flask, Kafka, and Flink."
        />
        <TimelineItem time="3:20PM - 3:40PM" talk="Sponsor Showcase" />
        <TimelineItem time="3:40PM - 5:00PM" talk="Systems Design Contest" />
        <TimelineItem time="5:00PM - 5:20PM" talk="Game Session 2" />
        <TimelineItem
          time="5:20PM - 5:30PM"
          talk="Closing Keynote: Flask Today and Tomorrow"
        />
      </div>
    </section>
  );
};
