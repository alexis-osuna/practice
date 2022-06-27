import React from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations.fadeInOut}
      className="flex flex-col items-center justify-center invisible w-full h-full overflow-auto lg:visible"
    >
      {children}
    </motion.div>
  );
};

export default Container;
