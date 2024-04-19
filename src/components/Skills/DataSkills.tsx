import { useEffect, useRef, useState } from "react";
import { dataSkills } from "../../constants";
import { motion, useAnimation, useInView } from "framer-motion";

const DataSkills = () => {
  const ref = useRef(null);

  const [isHover, setIsHover] = useState<boolean>(false);
  const [dataIndex, setDataIndex] = useState<number>(0);

  const isScroll = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const containerDataSkills = {
    hidden: { x: -11, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.09,
      },
    },
  };

  const item = {
    hidden: { x: -12, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    if (isScroll) {
      mainControls.start("visible");
    }
  }, [isScroll]);

  return (
    <motion.div
      ref={ref}
      animate={mainControls}
      initial="hidden"
      variants={containerDataSkills}
      className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-4 xl:gap-10 md:gap-8 gap-7 items-center mt-12"
    >
      {dataSkills.map((data, index) => {
        return (
          <div className="relative flex justify-center" key={index}>
            <motion.div
              onMouseOver={() => {
                setIsHover(true);
                setDataIndex(index);
              }}
              onMouseOut={() => setIsHover(false)}
              variants={item}
              whileHover={{ transform: "translate(0, -6px)" }}
              className="cursor-pointer relative flex justify-center z-30 md:w-[144px] w-[70px] md:h-[140px] h-[71px] rounded-md bg-[#192D3E] md:p-5 p-3 shadow-[0px_1px_5px_0px_#000]"
            >
              <img
                src={data}
                alt="logo skills vickyadrii"
                className={`${
                  index === 0 || index === 6
                    ? "md:w-[90px] w-[80px]"
                    : "md:w-16 w-6"
                }`}
              />
            </motion.div>
            <div
              className={`${
                isHover &&
                dataIndex === index &&
                "cursor-pointer bg-[#68E3FF] blur-[20px] z-0 opacity-[0.2] absolute md:w-[144px] w-[85px] md:h-[114px] h-[55px] bottom-0"
              }`}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default DataSkills;
