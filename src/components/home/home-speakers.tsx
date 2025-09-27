import Image from "next/image";

import paul from "@/assets/images/speakers/paul.jpg";
import babs from "@/assets/images/speakers/babs.jpg";
import bakman from "@/assets/images/speakers/bakman.jpg";
import bash from "@/assets/images/speakers/bash.jpg";
import david from "@/assets/images/speakers/david.webp";
import fortune from "@/assets/images/speakers/fortune.jpg";
import gbolahan from "@/assets/images/speakers/gbolahan.jpg";
import ifihan from "@/assets/images/speakers/ifihan.jpg";
import izu from "@/assets/images/speakers/izu.jpg";
import mustapha from "@/assets/images/speakers/mustapha.jpg";
import nancy from "@/assets/images/speakers/nancy.jpg";
import seun from "@/assets/images/speakers/seun.jpg";

import speakerHorn from "@/assets/svg/speaker-horn.svg";

const talks = [
  {
    image: paul,
    name: "paul asalu | speaker & judge",
    talk: "Flask and the Art of Making Things Simple",
  },
  {
    image: bakman,
    name: "emmanuel bakare | speaker & judge",
    talk: "Building Bridges and Empowering Communities Through Open Source",
  },
  {
    image: izu,
    name: "izuchukwu uchegbu | speaker & judge",
    talk: "High Performance Computing with Flask",
  },
  {
    image: nancy,
    name: "nancy g. areola",
    talk: "Building Scalable Flask Applications",
  },
  {
    image: ifihan,
    name: "ifihanagbara oluseye",
    talk: "Flask as a Machine Learning Gateway: Building a Multi-Model Inference Server",
  },
  {
    image: seun,
    name: "seun taiwo",
    talk: "React Server-Side Rendering in Flask",
  },
  {
    image: mustapha,
    name: "mustapha moshood olawale",
    talk: "Mapping the Future with Flask: Building Intelligent Geospatial Applications",
  },
  {
    image: gbolahan,
    name: "gbolahan kolawole",
    talk: "Real-World Flask Projects: Lessons Learned",
  },
  {
    image: fortune,
    name: "fortune adekogbe",
    talk: "Navigating Challenges in Serving Large Language Models via Flask",
  },
  {
    image: bash,
    name: "emmanuel bashorun",
    talk: "Flask Design Patterns for Clean Code",
  },
  {
    image: david,
    name: "david carmichael",
    talk: "Flask Today and Tomorrow: Recent Changes and the Pallets Ecosystem",
  },
  {
    image: babs,
    name: "babatunde hammed",
    talk: "Building Interledger-Powered Applications with Flask and Chimoney API",
  },
];

export const HomeSpeakers = () => {
  return (
    <section className="border-t-2 border-black font-inktrap px-4">
      <div className="px-4 border-x-2 border-black">
        <div className="px-5 py-15">
          <h2 className="text-offblack font-extrabold text-4xl leading-120p tracking-neg5 mb-15">
            Our Amazing Speakers and Judges
          </h2>
          <p className="text-offblack leading-150p tracking-neg3 mb-5">
            Inspire, teach, and connect with the community. If you&apos;re
            passionate about backend, data science, or ML with Flask, share your
            ideas with us!
          </p>
          <button className="w-[203px] h-[63px] font-inktrap inline-block mb-25">
            <div className="w-[199px] h-[55px] text-white text-[21px] bg-[#C200FB] flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
              <span className="relative top-[2px]">Apply To Speak</span>
            </div>
          </button>
          <div className="space-y-15">
            {talks.map((talk, idx) => (
              <div className="pb-6 border-b-2 border-offblack" key={idx}>
                <div className="text-center">
                  <div className="relative size-[232px] mb-5 mx-auto">
                    <Image
                      src={talk.image}
                      alt={talk.name}
                      className="w-full h-full object-cover grayscale-100"
                    />
                    <div className="size-10 absolute bottom-0 left-0 bg-linear-(--flaskcon-gradient) flex justify-center items-center">
                      <Image
                        src={speakerHorn}
                        alt=""
                        className="w-[25.3px] h-5"
                      />
                    </div>
                  </div>
                  <h4 className="font-inktrap font-extrabold leading-120p tracking-neg3 mb-2 uppercase">
                    {talk.name}
                  </h4>
                  <em className="not-italic leading-150p tracking-neg2">
                    {talk.talk}
                  </em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
