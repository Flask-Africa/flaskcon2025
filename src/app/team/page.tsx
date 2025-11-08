import { TeamHero } from "@/components/team/team-hero";

const TeamPage = () => {
  return (
    <div className="mt-30 lg:mt-[130px]  border-t-2 border-t-offblack w-full lg:px-15">
      <div className="lg:border-x-2 lg:border-black">
        <TeamHero />
      </div>
    </div>
  );
};

export default TeamPage;
