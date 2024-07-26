"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { getAssetUrl } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

    history.replaceState(null, document.title, window.location.pathname);
  };

  return (
    <button
      className={`fixed md:block hidden bottom-5 right-5 p-1 border-[1.5px] rounded-lg bg-black/60 backdrop-blur-sm outline-none transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleScrollToTop}
    >
      <Image src={getAssetUrl("/icons/ic_arrow_top.svg")} alt="ic_menu" width={18} height={18} />
    </button>
  );
};

export default ScrollToTop;
