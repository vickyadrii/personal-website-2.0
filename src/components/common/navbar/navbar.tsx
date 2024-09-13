"use client";

import { useState } from "react";
import Link from "next/link";

import { navbarItems } from "@/constants/constants";
import Cursor from "./cursor";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="md:py-8 fixed left-1/2 -translate-x-1/2 top-0">
      <nav className="md:flex hidden justify-center items-center">
        <ul
          onMouseLeave={() => {
            setPosition((prev) => ({
              ...prev,
              opacity: 0,
            }));
          }}
          className="relative mx-auto flex w-fit bg-primary-dark-800/80 border-2 border-primary-dark-600 rounded-full backdrop-blur-sm p-1"
        >
          {navbarItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <li
                onMouseEnter={(e) => {
                  const { offsetWidth, offsetLeft } = e.currentTarget;
                  setPosition({
                    width: offsetWidth,
                    opacity: 1,
                    left: offsetLeft,
                  });
                }}
                className="relative z-10 block cursor-pointer text-white md:px-5 md:py-3 px-3 py-1.5 text-sm mix-blend-difference"
              >
                {label}
              </li>
            </Link>
          ))}
          <Cursor position={position} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
