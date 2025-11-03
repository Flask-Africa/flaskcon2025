import ReactLenis from "lenis/react";
import { ContributorTabs } from "@/components/contributors/contributor-tabs";

const SpeakersPage = () => {
  return (
    <ReactLenis root>
      <div className="pt-32 max-w-[1440px] mx-auto">
        <ContributorTabs />
      </div>
    </ReactLenis>
  );
};

export default SpeakersPage;
