import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import aboutImage from "../../assets/images/about-image.png";

const AboutImage: React.FC = () => {
  const ref = useRef(null);

  const isScroll = useInView(ref, { once: true });
  const aboutContentControls = useAnimation();

  const aboutContentVariants = {
    hidden: { opacity: 0, x: -25, y: 25 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        delay: 0.5,
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
      className="xl:basis-[42%] md:basis-[45%] flex justify-end"
    >
      <img loading="lazy" decoding="async" src={aboutImage} alt="about image vickyadrii" className="xl:w-auto md:w-9/12 w-9/12" />
    </motion.div>
  );
};

export default AboutImage;
