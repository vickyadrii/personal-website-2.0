import { Fragment, useState } from "react";
import { dataNavbar } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isNavbarResponsive, setIsNavbarResponsive] = useState<boolean>(false);

  const handleResponsive: any = () => {
    setIsNavbarResponsive(!isNavbarResponsive);
  };

  const containerNavbar = {
    hidden: { opacity: 1, top: -500 },
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };

  return (
    <Fragment>
      <motion.nav
        className="flex justify-center z-50 my-5"
        variants={containerNavbar}
        initial="hidden"
        animate="visible"
      >
        <motion.ul className="lg:flex hidden items-center gap-24 px-20 py-5 bg-white/80 border backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg transition-all duration-200 rounded-full">
          {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
            <Link
              to={navigate_url}
              offset={offset}
              key={id}
              duration={500}
              spy={true}
              smooth={true}
              className={`${
                activeNav === navigate_url
                  ? "text-[#2c848f] font-semibold"
                  : "text-primary/50 font-medium"
              } cursor-pointer hover:text-[#2d6e77]`}
              onSetActive={() => setActiveNav(navigate_url)}
            >
              {navigate}
            </Link>
          ))}
        </motion.ul>
      </motion.nav>
      <div className="lg:hidden lg:mx-10 lg:my-10 mx-5 my-5 flex justify-end z-[60] fixed right-0 top-0">
        <button
          onClick={handleResponsive}
          className="cursor-pointer bg-[#FBFDFF] hover:bg-white rounded-md outline outline-sky-200 lg:p-2.5 p-2 drop-shadow-sm"
        >
          <img src={isNavbarResponsive ? closeIcon : hamburgerIcon} alt="hamburger" className="lg:w-6 w-5" />
        </button>
      </div>
      <div
        className={`${
          isNavbarResponsive ? "right-0 " : "-right-full"
        } lg:hidden fixed top-0 bg-[#FBFDFF] w-full h-screen transition-all duration-300 ease-out z-50`}
      >
        <div className="mx-5 text-sky-800 font-extrabold text-2xl italic fixed top-7">VI.</div>
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10 lg:text-base text-sm">
          {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
            <Link
              to={navigate_url}
              offset={offset}
              key={id}
              duration={500}
              spy={true}
              smooth={true}
              className={`${
                activeNav === navigate_url
                  ? "text-primary/90 font-semibold"
                  : "hover:text-primary text-primary/50 cursor-pointer font-medium"
              }`}
              onClick={handleResponsive}
              onSetActive={() => setActiveNav(navigate_url)}
            >
              {navigate}
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
