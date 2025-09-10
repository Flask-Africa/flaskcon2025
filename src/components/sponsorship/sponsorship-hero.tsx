import { SponsorshipForm } from "./sponsorhip-form";

export const SponsorshipHero = () => {
  return (
    <section className="border-x-2 border-x-offblack text-offblack font-neue">
      <div className="py-[60px] px-5 border-b-2 border-offblack">
        <h1 className="font-neue font-extrabold text-[47px] leading-[120%] tracking-neg5 mb-5">
          Partner with FlaskCon 2025
        </h1>
        <p className="leading-[150%] tracking-neg3">
          FlaskCon thrives because of the support from partners like you.
          Sponsorship helps us create meaningful experiences for developers of
          all levels while giving your brand visibility in a passionate and
          growing ecosystem.
        </p>
      </div>
      <SponsorshipForm />
    </section>
  );
};
