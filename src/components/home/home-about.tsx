import aboutBg from "@/assets/images/about-bg.png";
import Image from "next/image";

import games from "@/assets/svg/games.svg";
import keynotes from "@/assets/svg/keynotes.svg";
import brainstorming from "@/assets/svg/brainstorming.svg";
import networking from "@/assets/svg/networking.svg";
import workshops from "@/assets/svg/workshops.svg";

const highlights = [
  {
    icon: networking,
    title: "Networking",
    description: "Connect with fellow developers over breaks.",
  },
  {
    icon: workshops,
    title: "Workshops",
    description:
      "Dive into Flask integrations, backend strategies, and ML applications.",
  },
  {
    icon: keynotes,
    title: "Keynotes",
    description:
      "Hear from Flask experts sharing insights and industry trends.",
  },
  {
    icon: games,
    title: "Games",
    description: "Fun activities and giveaways to keep the energy high.",
  },
  {
    icon: brainstorming,
    title: "Brainstorming Session",
    description: "Collaborate on new ideas for future Flask projects.",
  },
];

export const HomeAbout = () => {
  return (
    <section className="mt-14 border-t-2 border-black">
      <div className="px-4 border-b-2 border-black">
        <div className="px-5 py-10 border-2 border-y-0 border-black">
          <h2 className="font-inktrap font-extrabold text-[47px] leading-120p tracking-neg5 text-offblack max-w-[313px]">
            About Flaskcon
          </h2>
        </div>
      </div>
      <div className="px-4 border-b-2 border-black">
        <div className="px-5 py-10 border-2 border-y-0 border-black">
          <p className="font-inktrap leading-150p tracking-neg3 text-offblack">
            <span className="block">
              Flask Connect 2024 is a one-of-a-kind event for Flask developers
              and enthusiasts.
            </span>
            <span className="block">
              Join us for talks, workshops, and networking with fellow Flask
              professionals. Ideal for all experience levels, from beginners to
              experts.
            </span>
          </p>
        </div>
        <div>
          <Image src={aboutBg} alt="" className="w-full" />
        </div>
      </div>
      <div className="px-4 border-b-2 border-black font-inktrap">
        <div className="border-2 border-y-0 border-black text-center px-10 py-25">
          <h2 className="font-extrabold text-[47px] leading-120p tracking-neg5 text-offblack max-w-[271px] mx-auto mb-5">
            Event Highlights
          </h2>
          <button className="w-[271px] h-[63px] font-inktrap">
            <div className="w-[267px] h-[55px] text-white text-[21px] bg-[#EC0868] flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
              <span className="relative top-[2px]">Explore Event Agenda</span>
            </div>
          </button>
        </div>
      </div>
      <div className="px-4 font-inktrap">
        <div className="border-x-2 border-black pb-25">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center"
            >
              <div className="py-6">
                <Image src={highlight.icon} alt="" className="h-[150px]" />
              </div>
              <div className="bg-black p-5 text-white">
                <h3 className="font-extrabold text-[21px] leading-full tracking-neg5 mb-2">
                  {highlight.title}
                </h3>
                <em className="not-italic leading-150p tracking-neg5">
                  {highlight.description}
                </em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
