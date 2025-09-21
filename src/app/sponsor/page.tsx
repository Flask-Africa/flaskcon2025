import { SponsorshipHero } from "@/components/sponsorship/sponsorship-hero";

import { SponsorshipPartner } from "@/components/sponsorship/sponsorship-partner";
import { SponsorshipBuilding } from "@/components/sponsorship/sponsorship-building";
import { SponsorshipImage } from "@/components/sponsorship/sponsorship-image";
import ReactLenis from "lenis/react";

const SponsorshipPage = () => {
  return (
    <ReactLenis root>
      <div className="px-5 pb-[60px] lg:px-10 xl:px-25 max-w-[1440px] mx-auto lg:pb-[100px]">
        <SponsorshipHero />
        <SponsorshipImage />
        <SponsorshipPartner />
        <SponsorshipBuilding />
      </div>
    </ReactLenis>
  );
};

export default SponsorshipPage;
