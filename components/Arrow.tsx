import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import animations from "../lib/animations";

interface Props {
  isActive: boolean;
  right?: boolean;
}

const Arrow: React.FC<Props> = ({ isActive, right }) => {
  if (right) {
    return (
      <motion.div
        animate={isActive ? "active" : "inactive"}
        variants={animations.arrowRight}
      >
        <HiOutlineArrowNarrowRight className="text-xl hover:text-neutral-400" />
      </motion.div>
    );
  }
  return (
    <motion.div
      animate={isActive ? "active" : "inactive"}
      variants={animations.arrowLeft}
    >
      <HiOutlineArrowNarrowLeft className="text-xl hover:text-neutral-400" />
    </motion.div>
  );
};

export default Arrow;
