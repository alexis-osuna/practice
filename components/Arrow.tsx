import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

const pages = ["/", "/page-transitions", "/dynamic-cursor"];

const Arrow: React.FC<Props> = ({ isActive, right }) => {
  const router = useRouter();
  const currentPage = pages.indexOf(router.pathname);

  const nextPage = () => {
    if (currentPage === -1) {
      return pages[0];
    }
    if (currentPage === pages.length - 1) {
      return pages[0];
    } else {
      return pages[currentPage + 1];
    }
  };

  const prevPage = () => {
    if (currentPage === -1) {
      return pages[0];
    }
    if (currentPage === 0) {
      return pages[pages.length - 1];
    } else {
      return pages[currentPage - 1];
    }
  };

  if (right) {
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
  }
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
};

export default Arrow;
