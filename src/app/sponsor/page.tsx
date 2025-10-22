import { SponsorshipHero } from "@/components/sponsorship/sponsorship-hero";

import { SponsorshipPartner } from "@/components/sponsorship/sponsorship-partner";
import { SponsorshipBuilding } from "@/components/sponsorship/sponsorship-building";
import { SponsorshipImage } from "@/components/sponsorship/sponsorship-image";

const SponsorshipPage = () => {
  return (
    <div className="px-5 pb-[60px] mt-30 lg:px-10 xl:px-25 max-w-[1440px] mx-auto lg:pb-[100px] border-t-2 border-t-offblack">
      <SponsorshipHero />
      <SponsorshipImage />
      <SponsorshipPartner />
      <SponsorshipBuilding />
    </div>
  );
};

export default SponsorshipPage;
