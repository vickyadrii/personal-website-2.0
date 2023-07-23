import { dataLogoSocialMedia } from "../../data/dummyData";
import { motion } from "framer-motion";

const SocialMedia: React.FC = () => {
  const containerSocialMedia = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center md:gap-16 gap-8 md:m-0"
      variants={containerSocialMedia}
      initial="hidden"
      animate="visible"
    >
      {dataLogoSocialMedia.map(({ id, logo, navigate }) => (
        <a href={navigate} key={id}>
          <motion.img
            src={logo}
            alt="logo"
            whileHover={{ scale: 1.13, rotate: 10 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            className={`xl:w-11/12 md:w-24 w-14 cursor-pointer ${
              id === 1 || id === 2 ? "md:mt-20 mt-12" : "mt-auto"
            }`}
            variants={item}
          />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
