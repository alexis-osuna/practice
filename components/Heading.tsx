import React from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

interface Props {
  text: string;
}

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <motion.h1
      variants={animations.fadeUp}
      className="max-w-xl text-3xl font-bold text-center"
    >
      {text}
    </motion.h1>
  );
};

export default Heading;
