import { Fragment, useState } from "react";
import { dataNavbar } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

const Navbar: React.FC = () => {
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
        className="flex justify-center fixed left-1/2 z-50 -translate-x-1/2 my-5"
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
              smooth={true}
              className="text-primary opacity-40 hover:opacity-80 font-semibold cursor-pointer"
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
        } fixed top-0 bg-[#FBFDFF] w-full h-screen transition-all duration-300 ease-out z-50`}
      >
        <div className="mx-5 text-sky-800 font-extrabold text-2xl italic fixed top-7">VI.</div>
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10 lg:text-base text-sm">
          {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
            <Link
              onClick={() => setIsNavbarResponsive(false)}
              to={navigate_url}
              offset={offset}
              key={id}
              duration={500}
              smooth={true}
              className="text-sky-800 opacity-60 hover:opacity-90 font-semibold cursor-pointer"
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
