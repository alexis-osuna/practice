import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean | undefined>>;
  setVideo: Dispatch<SetStateAction<number | undefined>>;
}

const ABC: React.FC<Props> = ({ setIsActive, setVideo }) => {
  return (
    <motion.div
      variants={animations.fadeUp}
      className="flex justify-between w-full max-w-5xl"
    >
      {[
        {
          label: "A",
        },
        {
          label: "B",
        },
        {
          label: "C",
        },
      ].map(({ label }, i) => (
        <p
          key={i}
          className="p-4 text-9xl cursor-crosshair mix-blend-exclusion"
          onMouseEnter={() => {
            setVideo(i);
            setIsActive(true);
          }}
          onMouseLeave={() => setIsActive(false)}
        >
          {label}
        </p>
      ))}
    </motion.div>
  );
};

export default ABC;
