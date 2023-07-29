import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import aboutShape from "/images/shape.svg";
import BurstBload from "./BurstBload";

const AboutContent: React.FC = () => {
  const ref = useRef(null);

  const isScroll = useInView(ref, { once: true });
  const aboutContentControls = useAnimation();

  const aboutContentVariants = {
    hidden: { opacity: 0, x: -400 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: -11, y: 100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };

  useEffect(() => {
    if (isScroll) {
      aboutContentControls.start("visible");
    }
  }, [isScroll]);

  return (
    <motion.div
      ref={ref}
      animate={aboutContentControls}
      initial="hidden"
      variants={aboutContentVariants}
      className="xl:basis-[58%] md:basis-[55%] flex flex-col gap-5"
    >
      <motion.div
        variants={item}
        className="relative md:max-w-[384px] max-w-[215px]"
      >
        <img
          src={aboutShape}
          alt="about shape vickyadrii"
          className="absolute -z-10 bottom-2 xl:w-auto md:w-56 w-48"
        />
        <h2 className="md:text-[56px] text-[30px] font-bold text-primary">
          👨‍💻 About Me
        </h2>
        <BurstBload />
      </motion.div>
      <motion.p
        variants={item}
        className="xl:text-2xl md:text-base text-sm xl:leading-9 text-medium"
      >
        Hello, I’m Vicky! I’m dedicated to continuously expanding my knowledge
        and skills in <span className="font-bold">front-end development</span>{" "}
        and learning new technologies. I'm able to develop web applications,
        consume APIs and strive to deliver high-quality code.
      </motion.p>
    </motion.div>
  );
};

export default AboutContent;
