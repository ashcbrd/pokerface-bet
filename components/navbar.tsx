"use client";

import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import Button from "./button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="z-[9999] justify-between w-full max-w-6xl relative mx-auto h-20 flex items-center tablet:justify-end bg-transparent gap-x-14 px-6 laptop:px-0 ">
      <ul className="flex items-center tablet:gap-x-10 h-full w-max ">
        {navLinks.map((link, index) => {
          const isActive = link.url === pathname;

          return (
            <li
              className="h-full flex items-center group cursor-pointer"
              key={index}
            >
              <Link
                className={`${
                  !link.unique &&
                  `${
                    isActive
                      ? "text-primary-200"
                      : "text-white group-hover:text-primary-100"
                  }  group-hover:-translate-y-2 transition-all duration-500 font-semibold`
                }`}
                href={link.url}
              >
                {link.unique ? (
                  <Button
                    variant="primary"
                    className="text-xs tablet:text-sm py-3 px-8 hover:bg-[#b2511c] font-semibold w-max"
                  >
                    {link.label}
                  </Button>
                ) : (
                  <p className="hidden laptop:block">{link.label}</p>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
        className="!p-0 !rounded laptop:hidden"
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </Button>
      <div
        className={`laptop:hidden w-full ${
          isOpen ? "h-20" : "h-0"
        } bg-white absolute top-0 left-0 translate-y-20 flex items-center justify-center overflow-hidden transition-all`}
      >
        <div className="w-full h-full flex flex-col">
          <a
            href="how-to-buy"
            className="text-primary-200 font-semibold w-full  hover:bg-primary-200 hover:text-white py-2 text-center"
          >
            HOW TO BUY
          </a>
          <a
            href="#tokenomics"
            className="text-primary-200 font-semibold w-full  hover:bg-primary-200 hover:text-white py-2 text-center"
          >
            TOKENOMICS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
