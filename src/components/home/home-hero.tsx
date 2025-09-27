import Image from "next/image";

import vortexBg from "@/assets/images/vortex-bg.png";
import angleBrackets from "@/assets/images/angle-brackets.png";
import thunder from "@/assets/images/thunder.png";
import horn from "@/assets/images/horn-bg.png";
import cloud from "@/assets/images/cloud-refresh.png";

export const HomeHero = () => {
  return (
    <main className="min-h-screen relative flex justify-center items-center border-b-2 border-black">
      <div className="absolute inset-0 h-full w-full">
        <Image src={vortexBg} alt="" className="w-full h-full" />
      </div>
      <div className="relative z-10 text-center pt-[54px] font-neue w-full max-w-[400px] mx-auto">
        <div className="absolute w-full h-full inset-0">
          <Image
            src={angleBrackets}
            alt=""
            className="absolute top-[154px] -left-4 w-[106px] h-[68px]"
          />
          <Image
            src={thunder}
            alt=""
            className="absolute top-[154px] -right-4 w-[66px] h-[68px]"
          />
          <Image
            src={horn}
            alt=""
            className="absolute top-[284px] -left-4 w-[121px] h-[70px]"
          />
          <Image
            src={cloud}
            alt=""
            className="absolute top-[284px] -right-4 w-[107px] h-[68px]"
          />
        </div>
        <h1
          className="font-extrabold text-[47px] leading-120p tracking-neg5 text-offblack mb-6"
          style={{
            textShadow:
              "0px 8px 0px #fff, 8px 0px 0px #fff, -8px 0px 0px #fff, 0px -8px 0px #fff",
          }}
        >
          <span className="block">Flask</span>
          <span className="block">DevMeet</span>
          <span className="block">2025</span>
        </h1>
        <p
          className="font-extrabold text-[21px] leading-150p tracking-neg5 max-w-[318px] mx-auto mb-6"
          style={{
            textShadow:
              "0px 4px 0px #fff, 4px 0px 0px #fff, -4px 0px 0px #fff, 0px -4px 0px #fff",
          }}
        >
          Connect, Learn and Innovate with Flask
        </p>
        <div className="flex flex-col gap-y-5 items-center">
          <button className="w-[187px] h-[63px] font-neue">
            <div className="w-[183px] h-[55px] text-white text-[21px] bg-[#534EFF] flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
              <span className="relative top-[2px]">Register Now</span>
            </div>
          </button>
          <button className="w-[228px] h-[63px] font-inktrap">
            <div className="w-[223px] h-[55px] text-offblack text-[21px] bg-white flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-black">
              <span className="relative top-[2px]"> Become a Sponsor</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};
