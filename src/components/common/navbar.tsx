"use client";

import { useRef, useState } from "react";
import { Hamburger } from "../icons/hamburger";
import { Logo } from "../icons/logo";
import { Close } from "../icons/close";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export const Navbar = () => {
  const containerRef = useRef<HTMLElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    if (isMenuOpen) {
      const tl = gsap.timeline({});
      tl.to(".mobile-menu", {
        height: "81px",
        ease: "expo",
      }).to(".mobile-menu", { autoAlpha: 0, duration: 0.1 }, "<0.2");
      setIsMenuOpen(false);
    } else {
      gsap.set(".mobile-menu", { autoAlpha: 1 });
      gsap.to(".mobile-menu", {
        height: "auto",
        ease: "bounce",
      });
      setIsMenuOpen(true);
    }
  };

  useGSAP(
    () => {
      const eventSplit = SplitText.create(".events-link", {
        type: "words",
        mask: "words",
        wordsClass: "words",
      });
      const speakerSplit = SplitText.create(".speakers-link", {
        type: "words",
        mask: "words",
        wordsClass: "words",
      });

      const tl = gsap.timeline({});
      tl.set(".events-link", {
        autoAlpha: 1,
      })
        .set(".speakers-link", {
          autoAlpha: 1,
        })
        .fromTo(
          eventSplit.words,
          {
            yPercent: 100,
            ease: "power4",
          },
          {
            yPercent: 0,
            ease: "power4",
          }
        )
        .fromTo(
          speakerSplit.words,
          {
            yPercent: 100,
            ease: "power4",
          },
          {
            yPercent: 0,
            ease: "power4",
          },
          "<0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <nav
      ref={containerRef}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[80vw] max-w-[553px] z-20 lg:max-w-[600px]"
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black w-[93%] h-full rounded-full" />
      <div className="flex justify-between items-center w-full bg-white py-3 px-5 border-2 border-black rounded-full relative z-30 lg:px-10">
        <Logo className="w-[140px] lg:w-auto" />
        <ul className="gap-x-5 hidden md:flex">
          <li>
            <Link
              className="events-link invisible py-5 text-center leading-[150%] tracking-neg5 text-offblack font-inktrap"
              href="/events"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className="speakers-link invisible py-5 text-center leading-[150%] tracking-neg5 text-offblack font-inktrap"
              href="/speakers-and-contributions"
            >
              Speakers & Contributions
            </Link>
          </li>
        </ul>

        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleHamburgerClick}
          className="z-20 md:hidden"
        >
          {isMenuOpen ? <Close /> : <Hamburger />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`absolute mobile-menu left-0 right-0 top-0 transition-transform duration-300 bg-white shadow-md border-offblack rounded-[40px] h-0 invisible border-2 md:hidden overflow-hidden
       `}
        style={{ zIndex: 20 }}
        ref={navMenuRef}
      >
        <div className="w-full h-[81px]" />
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
