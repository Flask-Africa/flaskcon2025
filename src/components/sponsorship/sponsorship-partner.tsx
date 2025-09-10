import { twMerge } from "tailwind-merge";
import bulidingonLastYear from "@/assets/images/building-on-last-year.png";
import Image from "next/image";

export const SponsorshipPartner = () => {
  const pros = [
    {
      title: "Showcase Your Products & Solutions",
      text: "Utilize exhibition spaces and demo opportunities to  highlight how your products, services, or tools can benefit Flask and Python developers.  Receive direct feedback and generate leads from a highly relevant audience. ",
      bgClassName: "bg-offblack",
    },
    {
      title: "Gain Brand Visibility",
      text: "Position your brand directly in front of a highly engaged and influential  audience of developers, tech enthusiasts, and decision-makers. ",
      bgClassName: "bg-[#EC0868]",
    },
    {
      title: "Access Top-Tier Talent",
      text: "This event serves as an ideal platform for talent acquisition, allowing you  to showcase your company culture, career opportunities, and directly engage with potential  hires who are passionate about Flask and Python.",
      bgClassName: "bg-[#C200FB]",
    },
  ];
  return (
    <section className="font-neue">
      <h2 className="text-center font-extrabold text-4xl leading-[150%] tracking-neg5 text-offblack mb-[60px]">
        Why Partner With Us
      </h2>

      <div className="border-x-2 border-black pb-[100px]">
        {pros.map((pro, idx) => (
          <div
            key={idx}
            className={twMerge(
              "p-10 text-white space-y-5 border-y-2 border-black border-collapse not-last:border-b-0",
              pro.bgClassName
            )}
          >
            <em className="not-italic block text-[21px] leading-[120%] tracking-neg5 font-extrabold">
              0{idx + 1}
            </em>
            <h3 className="text-[21px] leading-[120%] tracking-neg5 font-extrabold">
              {pro.title}
            </h3>
            <p className="text-base leading-[150%] tracking-neg5">{pro.text}</p>
          </div>
        ))}
      </div>
      <Image src={bulidingonLastYear} alt="" className="" />
    </section>
  );
};
