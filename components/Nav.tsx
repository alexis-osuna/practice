import React, { useState } from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

import Arrow from "./Arrow";

const Nav: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="absolute flex justify-center w-full h-8 bottom-24">
      <motion.div
        initial="initial"
        animate="animate"
        variants={animations.fadeIn}
        className="flex items-center space-x-16 cursor-pointer"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Arrow isActive={isActive} />
        <p>Use the arrows to navigate through</p>
        <Arrow isActive={isActive} right />
      </motion.div>
    </nav>
  );
};

export default Nav;
