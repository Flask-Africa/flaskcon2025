import Image from "next/image";
import calendar from "@/assets/svg/calendar.svg";

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
      <div className="px-5 py-[70.5] font-neue outline-2 outline-black rounded-t-[40px] flex justify-between items-center">
        <div className="flex flex-col items-center">
          <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
            00
          </em>
          <em className="uppercase not-italic leading-full tracking-neg3">
            days
          </em>
        </div>
        <div className="flex flex-col items-center">
          <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
            00
          </em>
          <em className="uppercase not-italic leading-full tracking-neg3">
            hours
          </em>
        </div>
        <div className="flex flex-col items-center">
          <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
            00
          </em>
          <em className="uppercase not-italic leading-full tracking-neg3">
            minutes
          </em>
        </div>
        <div className="flex flex-col items-center">
          <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
            00
          </em>
          <em className="uppercase not-italic leading-full tracking-neg3">
            seconds
          </em>
        </div>
      </div>
    </section>
  );
};
