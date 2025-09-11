import { SponsorshipHero } from "@/components/sponsorship/sponsorship-hero";
import flaskcon2024 from "@/assets/images/flaskcon-2024.png";

import Image from "next/image";
import { SponsorshipPartner } from "@/components/sponsorship/sponsorship-partner";
import { SponsorshipBuilding } from "@/components/sponsorship/sponsorship-building";

const SponsorshipPage = () => {
  return (
    <div className="px-5 pb-[60px] lg:px-10 xl:px-25 max-w-[1440px] mx-auto lg:pb-[100px]">
      <SponsorshipHero />
      <Image
        src={flaskcon2024}
        alt="group picture of flaskcon 2024"
        className="w-full my-[60px] xl:my-25 object-cover"
      />
      <SponsorshipPartner />
      <SponsorshipBuilding />
    </div>
  );
};

export default SponsorshipPage;
