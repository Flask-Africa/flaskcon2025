import Image from "next/image";
import calendar from "@/assets/svg/calendar.svg";
import { Counter } from "./counter";

export const HomeDateAndTime = () => {
  return (
    <section>
      <div className="p-5 border-2 border-t-0 border-black rounded-b-[40px]">
        <div className="flex justify-between items-center mb-5">
          <Image src={calendar} alt="" />
          <em className="font-neue font-extrabold text-[27px] leading-full tracking-neg5 text-offblack">
            <span className="block not-italic">30</span>
            <span className="block not-italic">NOV</span>
            <span className="block not-italic text-lg tracking-[0.14em]">
              2025
            </span>
          </em>
        </div>
        <div className="text-center font-neue">
          <em className="font-extrabold text-[21px] leading-full tracking-neg3 not-italic inline-block mb-1">
            Zone Tech Park
          </em>
          <p className="leading-150p tracking-neg5">
            Plot 9 Gbagada Industrial Scheme, Beside UPS, Gbagada Expressway,
            Nigeria
          </p>
        </div>
      </div>
      <Counter />
    </section>
  );
};
