import React from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

interface Props {
  message: string;
}

const Heading: React.FC<Props> = ({ message }) => {
  return (
    <motion.h1
      initial="initial"
      animate="animate"
      variants={animations.fadeInUp}
      className="max-w-sm text-3xl font-bold text-center"
    >
      {message}
    </motion.h1>
  );
};

export default Heading;
