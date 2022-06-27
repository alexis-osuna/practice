import React from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

interface Props {
  children: string;
  type: "text" | "paragraph";
}

const Stagger: React.FC<Props> = ({ children, type }) => {
  switch (type) {
    case "text":
      return (
        <motion.div
          variants={animations.staggerTextParent}
          className="mb-8 text-4xl font-bold"
        >
          {children.split("").map((e, i) => (
            <motion.span key={i} variants={animations.staggerTextChild}>
              {e}
            </motion.span>
          ))}
        </motion.div>
      );
    case "paragraph":
      return (
        <motion.div className="mb-4" variants={animations.staggerParent}>
          {children.split("\n").map((e, i) => (
            <motion.p
              key={i}
              variants={animations.staggerChild}
              className="mb-4"
            >
              {e}
            </motion.p>
          ))}
          <motion.p className="text-right" variants={animations.staggerChild}>
            -Radar
          </motion.p>
        </motion.div>
      );
    default:
      throw new Error("Unknown type");
  }
};

export default Stagger;
