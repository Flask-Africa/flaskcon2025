import { SponsorshipHero } from "@/components/sponsorship/sponsorship-hero";

import { SponsorshipPartner } from "@/components/sponsorship/sponsorship-partner";
import { SponsorshipBuilding } from "@/components/sponsorship/sponsorship-building";
import { SponsorshipImage } from "@/components/sponsorship/sponsorship-image";

const SponsorshipPage = () => {
  return (
    <div className="px-5 pb-[60px] mt-30 lg:mt-[130px] lg:px-10 xl:px-25  lg:pb-[100px] border-t-2 border-t-offblack">
      <div className="max-w-[1440px] mx-auto">
        <SponsorshipHero />
        <SponsorshipImage />
        <SponsorshipPartner />
        <SponsorshipBuilding />
      </div>
    </div>
  );
};

export default SponsorshipPage;
