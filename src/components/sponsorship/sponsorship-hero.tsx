import { SponsorshipForm } from "./sponsorhip-form";

export const SponsorshipHero = () => {
  return (
    <section className="border-x-2 border-x-offblack text-offblack md:flex">
      <div className="py-[60px] px-5 border-b-2 border-offblack md:w-1/2 lg:px-[60px] xl:w-[52%]">
        <h1 className="font-neue font-extrabold text-[47px] leading-[120%] tracking-neg5 mb-5 lg:text-[80px]">
          Partner with FlaskCon 2025
        </h1>
        <p className="leading-[150%] text-base tracking-neg3 font-inktrap">
          FlaskCon thrives because of the support from partners like you.
          Sponsorship helps us create meaningful experiences for developers of
          all levels while giving your brand visibility in a passionate and
          growing ecosystem.
        </p>
      </div>
      <div className="md:border-l-2 md:border-offblack md:w-1/2">
        <SponsorshipForm />
      </div>
    </section>
  );
};
