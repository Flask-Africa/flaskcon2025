"use client";

import { teamMembers } from "@/utils/constants";
import { TeamMemberCard } from "./team-member-card";
import Marquee from "react-fast-marquee";
import { useMatchMedia } from "@/utils/hooks";

export const TeamHero = () => {
  const matches = useMatchMedia(1024);
  return (
    <main className="min-h-[calc(100vh-296px)] lg:min-h-[calc(100vh-280px)]">
      <h1 className="text-center font-neue font-extrabold text-[47px] leading-full tracking-neg5 capitalize pt-10 lg:pt-20 lg:text-[80px] max-w-[881px] mx-auto">
        The minds making it happen
      </h1>

      <Marquee
        speed={matches ? 100 : 70}
        gradient={false}
        pauseOnHover
        className="w-full overflow-x-auto flex items-center my-10 px-5 team lg:mt-20 lg:mb-0 lg:pb-20"
      >
        {teamMembers.map((teamMember) => (
          <TeamMemberCard key={teamMember.name} teamMember={teamMember} />
        ))}
      </Marquee>
    </main>
  );
};
