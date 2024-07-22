"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getAssetUrl } from "@/lib/utils";
import { navbarItems } from "@/constants/constants";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="md:hidden relative">
      <div className="absolute right-0 -top-3 px-5 z-50">
        <button onClick={handleShowMenu} className="p-1 border-2 rounded-md">
          <Image
            src={getAssetUrl(showMenu ? "/icons/ic_close.svg" : "/icons/ic_hamburger.svg")}
            alt="ic_menu"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div
        className={`fixed w-100 ${showMenu ? "opacity-100" : "opacity-0"} top-0 w-full bg-black/50 min-h-screen backdrop-blur-[2px] transition-all duration-[400ms] ease-out`}
      >
        <div
          className={`fixed ${showMenu ? "right-0 ease-out" : "-right-full ease-in"} w-full flex justify-end drop-shadow-2xl transition-all duration-[400ms]`}
        >
          <div className="bg-[#0c0c0c] w-1/2 min-h-screen border-l border-l-primary-dark-600">
            <nav className="px-5 py-10">
              <ul className="flex flex-col gap-4">
                {navbarItems.map(({ href, label }) => (
                  <Link href={href} key={href} onClick={handleShowMenu}>
                    <li className="relative text-sm group">
                      <span className="inline-block relative">
                        {label}
                        <span className="absolute left-0 bottom-0 h-0.5 bg-current w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left" />
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarMobile;
