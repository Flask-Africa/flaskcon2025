import { HomeAbout } from "@/components/home/home-about";
import { HomeDateAndTime } from "@/components/home/home-date-and-time";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSpeakers } from "@/components/home/home-speakers";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <HomeDateAndTime />
      <HomeAbout />
      <HomeSpeakers />
    </div>
  );
}
