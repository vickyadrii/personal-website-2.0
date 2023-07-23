import { motion } from "framer-motion";
import burstBloadIcons from "/icons/burst-bloat.svg";

const BurstBload: React.FC = () => {
  return (
    <div>
      <motion.img
        src={burstBloadIcons}
        animate={{ scale: [0.8, 0.8, 1.05], rotate: [0, 360] }}
        transition={{ ease: 'easeInOut', repeatType: "reverse", repeat: Infinity, duration: 1.2 }}
        alt="about shape vickyadrii"
        className="absolute -z-10 top-0 md:right-4 right-5 md:w-auto w-6"
      />
    </div>
  );
};

export default BurstBload;
