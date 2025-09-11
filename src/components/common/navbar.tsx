"use client";

import { useState } from "react";
import { Hamburger } from "../icons/hamburger";
import { Logo } from "../icons/logo";
import { Close } from "../icons/close";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <nav className="relative border-b-2 border-offblack">
      <div className="flex justify-between items-center bg-white px-5 py-6  relative z-20 max-w-[1440px] mx-auto lg:px-10 xl:px-25 ">
        <Logo />
        <ul className="gap-x-5 hidden md:flex">
          <li>
            <Link
              className="py-5 text-center leading-[150%] tracking-neg5 text-offblack font-inktrap"
              href="/events"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className="py-5 text-center leading-[150%] tracking-neg5 text-offblack font-inktrap"
              href="/speakers-and-contributions"
            >
              Speakers & Contributions
            </Link>
          </li>
        </ul>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={handleHamburgerClick}
          className="z-20 md:hidden"
        >
          {menuOpen ? <Close /> : <Hamburger />}
        </button>
        <button className="w-[185px] h-[59px] hidden md:block font-inktrap">
          <div className="w-[180px] h-[51px] text-offblack bg-white flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-linear-(--flaskcon-gradient)">
            Become a sponsor
          </div>
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full transition-transform duration-300 bg-white shadow-md border-offblack md:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col font-neue">
          <Link
            className="py-5 border-b border-offblack text-center leading-[150%] tracking-neg5 text-offblack"
            href="/events"
          >
            Events
          </Link>
          <Link
            className="py-5 border-b border-offblack text-center leading-[150%] tracking-neg5 text-offblack"
            href="/speakers-and-contributions"
          >
            Speakers & Contributions
          </Link>
          <div className="py-5 text-center">
            <button className="w-[185px] h-[59px]">
              <div className="w-[180px] h-[51px] text-offblack bg-white flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-linear-(--flaskcon-gradient)">
                Become a sponsor
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
