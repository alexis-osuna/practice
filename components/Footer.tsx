import React from "react";
import { motion } from "framer-motion";
import animations from "../lib/animations";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial="initial"
      animate="animate"
      variants={animations.fadeIn}
      className="absolute bottom-0 flex flex-col-reverse items-center justify-between w-full px-0 py-8 sm:px-48 sm:flex-row"
    >
      <p className="text-sm">© {new Date().getFullYear()} Alexis Osuna.</p>
      <div className="mb-4 space-x-8 text-sm underline-offset-4 sm:mb-0">
        <a
          className="hover:underline"
          href="https://www.github.com/alexis-osuna"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="hover:underline"
          href="https://www.alexisosuna.dev"
          target="_blank"
          rel="noreferrer"
        >
          Alexis
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
