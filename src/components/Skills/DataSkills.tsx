import { useState } from "react";
import { dataSkills } from "../../data/dummyData"
import { motion } from "framer-motion";

const DataSkills = () => {
  const [isHover, setIsHover] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  const containerSocialMedia = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.090,
      },
    },
  };

  const item = {
    hidden: { x: -6, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerSocialMedia}
      initial="hidden"
      animate="visible"
      className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-4 xl:gap-10 md:gap-8 gap-4 items-center mt-12"
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
                //   key={index}
                alt="logo skills vickyadrii"
                className={`${
                  index === 0 || index === 6 ? "md:w-[90px] w-[80px]" : "md:w-16 w-6"
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
