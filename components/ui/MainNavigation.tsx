"use client";

import React, { useState } from "react";
import Link from "next/link";

//import a module with other name

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `block h-1 w-8 my-1 rounded-full duration-500 bg-white hover:cursor-pointer`;

  return (
    <>
      <nav
        className="grid grid-cols-nav border-b-4 border-slate-400 bg-black text-lg font-bold justify-center
      items-center h-20 w-full"
      >
        {/* Burger menu */}
        <section className="flex lg:hidden items-center z-10">
          {/* X */}
          <div
            className="px-2 py-2 space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-1 group-hover:opacity-100 absolute z-20"
                  : ""
              }`}
            ></span>
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 absolute z-20"
                  : ""
              }`}
            ></span>
          </div>

          {/* Burger menu options */}
          <div
            className={
              isNavOpen
                ? "absolute top-0 left-0 bg-hamburger flex flex-col justify-evenly items-center w-72 h-full bg-black"
                : "hidden"
            }
          >
            <ul
              onClick={() => setIsNavOpen(false)}
              className="flex flex-col items-center justify-between"
            >
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/projects"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  STREAMS
                </Link>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/events"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  EVENTS
                </Link>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/events"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  SUBSCRIPTIONS
                </Link>
              </li>

              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/projects"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="border-b border-gray-300 my-8 uppercase first-letter:text-2xl text-white">
                <Link
                  href="/events"
                  className="text-white hover:bg-white hover:text-black hover:rounded-md px-2 py-1"
                >
                  CONTACT INFO
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Full menu */}
        <Link href="/" className="text-white">
          <span className="py-3 pl-6 hidden lg:flex bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-transparent text-2xl hover:animate-ping hover:cursor-pointer tracking-widest">
            OUTPUT
          </span>
        </Link>

        <div className="hidden lg:flex justify-center">
          <Link
            href="/streams"
            className="tracking-widest text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3 hover:cursor-pointer"
          >
            STREAMS
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <Link
            href="/events"
            className="tracking-widest text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3 hover:cursor-pointer"
          >
            EVENTS
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <Link
            href="/events"
            className="tracking-widest text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3 hover:cursor-pointer"
          >
            SUBSCRIPTIONS
          </Link>
        </div>
        <div className="tracking-widest hidden lg:flex justify-center">
          <Link
            href="#about"
            className="text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3 hover:cursor-pointer"
          >
            ABOUT US
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <Link
            href="#contact"
            className="tracking-widest text-white hover:bg-white hover:text-black hover:rounded-md hover:animate-pulse px-2 py-3 hover:cursor-pointer"
          >
            CONTACT INFO
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
