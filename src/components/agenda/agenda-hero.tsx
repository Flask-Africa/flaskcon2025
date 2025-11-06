import { DesktopAgendaHero } from "./dekstop-agenda-hero";
import { MobileAgendaHero } from "./mobile-agenda-hero";

export const AgendaHero = () => {
  return (
    <main className="px-5 border-b-2 border-black lg:px-15">
      <MobileAgendaHero />
      <DesktopAgendaHero />
    </main>
  );
};
