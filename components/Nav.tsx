import React, { useState } from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

import Arrow from "./Arrow";

const Nav: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animations.fadeIn}
      className="absolute flex items-center justify-center w-full h-8 space-x-16 cursor-pointer bottom-24"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Arrow isActive={isActive} />
      <p>Use the arrows to navigate through</p>
      <Arrow isActive={isActive} right />
    </motion.div>
  );
};

export default Nav;
