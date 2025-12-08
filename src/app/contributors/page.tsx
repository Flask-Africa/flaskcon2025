import ReactLenis from "lenis/react";
import { ContributorTabs } from "@/components/contributors/contributor-tabs";

const SpeakersPage = () => {
  return (
    <ReactLenis root>
      <div className="pt-32 w-full">
        <ContributorTabs />
      </div>
    </ReactLenis>
  );
};

export default SpeakersPage;
