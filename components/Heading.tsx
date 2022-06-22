import React from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

const Heading: React.FC = () => {
  return (
    <motion.h1
      initial="initial"
      animate="animate"
      variants={animations.fadeInUp}
      className="max-w-sm text-3xl font-bold text-center"
    >
      Front-End exercises using Framer Motion.
    </motion.h1>
  );
};

export default Heading;
