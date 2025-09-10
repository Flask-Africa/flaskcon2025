"use client";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-black px-5 py-[60px] text-center">
      <span className="font-neue leading-[150%] tracking-neg2">
        Copyright &copy; {new Date().getFullYear()} FlaskCon, A PSF-registered
        trademark owned by Pallets.
      </span>
    </footer>
  );
};
