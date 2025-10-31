import ReactLenis from "lenis/react";
import { ContributorTabs } from "@/components/contributors/contributor-tabs";

const SpeakersPage = () => {
  return (
    <ReactLenis root>
      <div className="px-5 pb-[60px] lg:px-10 xl:px-25 pt-32 max-w-[1440px] mx-auto lg:pb-[100px]">
        <ContributorTabs />
      </div>
    </ReactLenis>
  );
};

export default SpeakersPage;
