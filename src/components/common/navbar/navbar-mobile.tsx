"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { getAssetUrl } from "@/lib/utils";
import { navbarItems } from "@/constants/constants";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 md:p-0 p-5 w-full">
      <div className="md:hidden relative">
        <div className="absolute right-0 z-50">
          <button onClick={handleShowMenu} className="p-1 border-2 rounded-md bg-black/60 backdrop-blur-sm">
            <Image
              src={getAssetUrl(showMenu ? "/icons/ic_close.svg" : "/icons/ic_hamburger.svg")}
              alt="ic_menu"
              width={16}
              height={16}
            />
          </button>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="fixed w-full left-0 top-0 bg-black/50 min-h-screen backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <motion.div
                className="fixed right-0 flex justify-end drop-shadow-2xl w-full"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="bg-[#0c0c0c] w-2/3 min-h-screen border-l border-l-primary-dark-600">
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavbarMobile;
