import teamBg from "@/assets/svg/team/team-bg.svg";
import teamSidebar from "@/assets/svg/team/team-sidebar.svg";
import Image from "next/image";

import horn from "@/assets/svg/horn.svg";
import whiteStar from "@/assets/svg/white-star.svg";
import flaskBadge from "@/assets/svg/flask-badge.svg";
import { TeamMemberIT } from "@/utils/types";

export const TeamMemberCard: React.FC<{ teamMember: TeamMemberIT }> = ({
  teamMember,
}) => {
  return (
    <div className="w-full max-w-[320px] relative border-2 border-black p-3 shrink-0 will-change-transform">
      <div className="absolute inset-0">
        <Image src={teamBg} alt="" className="object-cover size-full" />
      </div>
      <div className="relative z-10">
        <header className="bg-offblack text-white p-3 flex flex-col mb-5">
          <em className="not-italic font-neue font-extrabold text-[21px] leading-full tracking-neg3 inline-block mb-1.5">
            {teamMember.name}
          </em>
          <em className="not-italic font-neue leading-full tracking-neg3">
            {teamMember.position}
          </em>
        </header>
        <div className="flex gap-x-2 mb-2">
          <div className="w-10 shrink-0">
            <Image src={teamSidebar} alt="" />
          </div>
          <div className="w-full border-x-2">
            <Image
              src={teamMember.image}
              alt={teamMember.name}
              className="size-full object-cover grayscale"
            />
          </div>
          <div className="w-10 shrink-0">
            <Image src={teamSidebar} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center bg-white border-y-2 border-black gap-x-4 h-[68px]">
          <div className="border-x-2 w-1/3 self-stretch flex justify-center items-center">
            <Image src={horn} alt="" className="w-[94px] h-[54px] rotate-30" />
          </div>
          <div className="border-x-2 w-1/3 self-stretch flex justify-center items-center">
            <Image src={whiteStar} alt="" className="w-[47px] h-[46px]" />
          </div>
          <div className="border-x-2 w-1/3 self-stretch flex justify-center items-center">
            <Image src={flaskBadge} alt="" className="size-15" />
          </div>
        </div>
      </div>
    </div>
  );
};
