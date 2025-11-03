"use client";

import { useEffect, useRef, useState } from "react";
import { Hamburger } from "../icons/hamburger";
import { Logo } from "../icons/logo";
import { Close } from "../icons/close";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { usePreloaderContext } from "@/context/preloader-context";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, SplitText);

export const Navbar = () => {
  const containerRef = useRef<HTMLElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { register } = usePreloaderContext();
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      const tl = gsap.timeline({});
      tl.to(".mobile-menu", {
        height: "65px",
        ease: "expo",
      }).to(".mobile-menu", { autoAlpha: 0, duration: 0.1 }, "<0.2");
    } else {
      gsap.set(".mobile-menu", { autoAlpha: 1 });
      gsap.to(".mobile-menu", {
        height: "auto",
        ease: "power3",
      });
    }
  }, [isMenuOpen]);

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

      const tl = gsap.timeline({ paused: true });
      tl.to(containerRef.current, {
        top: "20px",
      })
        .set(".events-link", {
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

      register("navbar", () => tl.play());
    },
    { scope: containerRef }
  );

  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  return (
    <nav
      ref={containerRef}
      className="fixed -top-20 md:-top-40 left-1/2 -translate-x-1/2 w-[80vw] max-w-[553px] z-20 lg:max-w-[600px]"
      onClick={() => setIsMenuOpen(false)}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black w-[93%] h-full rounded-full" />
      <div className="flex justify-between items-center w-full bg-white py-1 md:py-3 px-5 border-2 border-black rounded-full relative z-30 lg:px-10">
        <Link href="/">
          <Logo className="w-[140px] lg:w-auto" />
        </Link>
        <ul className="gap-x-5 hidden md:flex">
          <li>
            <Link
              className="events-link invisible py-5 text-center leading-[150%] tracking-neg5 text-offblack font-inktrap"
              href="/sponsor"
            >
              Sponsorship
            </Link>
          </li>
          <li>
            <Link
              className="speakers-link invisible py-5 text-center leading-[150%] tracking-neg5 text-offblack font-inktrap"
              href="/contributors"
            >
              Speakers & Contributors
            </Link>
          </li>
        </ul>

        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          }}
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
        <div className="w-full h-[65px]" />
        <div className="flex flex-col font-neue">
          <Link
            className="py-5 border-b border-offblack text-center leading-[150%] tracking-neg5 text-offblack"
            href="/"
          >
            Event Schedule
          </Link>
          <Link
            className="py-5 border-b border-offblack text-center leading-[150%] tracking-neg5 text-offblack"
            href="/#speakers"
          >
            Speakers
          </Link>
          <div className="py-5 text-center">
            <Link href="/sponsor" className="w-[185px] h-[59px] inline-block">
              <div className="w-[180px] h-[51px] text-offblack bg-white flex justify-center items-center rounded-full font-extrabold leading-full tracking-neg5 border border-offblack relative after:absolute after:top-2 after:left-[5px] after:h-full after:w-full after:-z-10 after:rounded-full after:border after:border-offblack after:bg-linear-(--flaskcon-gradient)">
                Become a sponsor
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
