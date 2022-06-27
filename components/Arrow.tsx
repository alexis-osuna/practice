import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { motion } from "framer-motion";
import animations from "../lib/animations";

import { content } from "../data/content";

interface Props {
  isActive: boolean;
  type: "left" | "right";
}

const Arrow: React.FC<Props> = ({ isActive, type }) => {
  const router = useRouter();

  const getPaths = () => {
    if (router.asPath.startsWith("/page-transitions/")) {
      return content.mugshots.map((e) => `/page-transitions/${e.slug}`);
    } else {
      return content.pages;
    }
  };

  const paths = getPaths();
  const currentPath = paths.indexOf(router.asPath);

  const nextPage = () => {
    if (currentPath === -1) {
      return paths[0];
    }
    if (currentPath === paths.length - 1) {
      return paths[0];
    } else {
      return paths[currentPath + 1];
    }
  };

  const prevPage = () => {
    if (currentPath === -1) {
      return paths[0];
    }
    if (currentPath === 0) {
      return paths[paths.length - 1];
    } else {
      return paths[currentPath - 1];
    }
  };

  switch (type) {
    case "left":
      return (
        <Link href={prevPage()}>
          <motion.div
            animate={isActive ? "active" : "inactive"}
            variants={animations.arrowLeft}
            className="px-4 hover:text-neutral-400"
          >
            <HiOutlineArrowNarrowLeft className="text-xl" />
          </motion.div>
        </Link>
      );
    case "right":
      return (
        <Link href={nextPage()}>
          <motion.div
            animate={isActive ? "active" : "inactive"}
            variants={animations.arrowRight}
            className="px-4 hover:text-neutral-400"
          >
            <HiOutlineArrowNarrowRight className="text-xl" />
          </motion.div>
        </Link>
      );
    default:
      throw new Error("Unknown type");
  }
};

export default Arrow;
