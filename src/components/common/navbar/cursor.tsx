import { motion, TargetAndTransition } from "framer-motion";

import React from "react";

type Props = {
  position: TargetAndTransition;
};

const Cursor = ({ position }: Props) => {
  return (
    <motion.li
      animate={position}
      initial={{ opacity: 0 }}
      className="absolute z-0 md:h-11 h-7 w-36 bg-white/80 rounded-full"
    />
  );
};

export default Cursor;
