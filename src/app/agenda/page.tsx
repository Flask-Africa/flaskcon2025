import { AgendaHero } from "@/components/agenda/agenda-hero";
import { AgendaTimeline } from "@/components/agenda/agenda-timeline";
import { HomeDateAndTime } from "@/components/home/home-date-and-time";

const AgendaPage = () => {
  return (
    <div className="mt-30 lg:mt-[130px]  border-t-2 border-t-offblack">
      <div className="">
        <AgendaHero />
        <HomeDateAndTime />
        <AgendaTimeline />
      </div>
    </div>
  );
};

export default AgendaPage;
