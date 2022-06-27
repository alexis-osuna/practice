import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import animations from "../lib/animations";

import Arrow from "./Arrow";

const Nav: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <nav className="absolute justify-center hidden w-full h-8 bottom-24 lg:flex mix-blend-exclusion">
      <motion.div
        key={Number(router.asPath.startsWith("/page-transitions/"))}
        initial="initial"
        animate="animate"
        variants={animations.fadeIn}
        className="flex items-center space-x-16 cursor-pointer"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Arrow isActive={isActive} type="left" />
        {router.asPath.startsWith("/page-transitions/") ? (
          <Link href="/page-transitions">
            <a className="underline-offset-4 hover:underline">Go back</a>
          </Link>
        ) : (
          <p>Use the arrows to navigate through</p>
        )}
        <Arrow isActive={isActive} type="right" />
      </motion.div>
    </nav>
  );
};

export default Nav;
