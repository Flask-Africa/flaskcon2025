import Image from "next/image";
import calendar from "@/assets/svg/calendar.svg";
import { Counter } from "./counter";

export const HomeDateAndTime = () => {
  return (
    <section className="md:flex md:justify-between">
      <div className="outline-2 outline-t-0 outline-black mb-[2px] md:mb-0 md:outline-2 md:w-1/2 md:outline-black rounded-b-[40px] md:rounded-none md:rounded-tr-[40px]">
        <div className="p-5 h-full w-full  lg:flex lg:justify-center lg:pl-10 xl:px-25 max-w-[720px] min-[1440px]:ml-auto">
          <div className="max-w-[400px] mx-auto flex flex-col items-center md:flex-row md:gap-x-8 lg:flex-row lg:max-w-none">
            <div className="flex flex-col items-center md:items-start lg:flex-row lg:shrink-0 lg:items-center">
              <Image
                src={calendar}
                alt=""
                className="mb-5 lg:size-25 lg:mb-0"
              />
              <em className="font-neue not-italic font-extrabold text-[27px] leading-full tracking-neg5 text-offblack flex flex-row gap-x-[11px] mb-4 md:inline-block lg:text-[36px] lg:mb-0 lg:h-[95px]">
                <span className="md:block">30</span>{" "}
                <span className="md:block">NOV</span>{" "}
                <span className="tracking-[0.18em] lg:text-[21px] lg:relative lg:bottom-2">
                  2025
                </span>
              </em>
            </div>

            <div className="text-center font-neue md:text-left">
              <em className="font-extrabold text-[21px] leading-full tracking-neg3 not-italic inline-block mb-1">
                Zone Tech Park
              </em>
              <p className="leading-150p tracking-neg5">
                Plot 9 Gbagada Industrial Scheme, Beside UPS, Gbagada
                Expressway, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
      <Counter />
    </section>
  );
};
