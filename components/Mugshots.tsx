import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../lib/animations";

interface Props {
  mugshots: {
    name: string;
    image: string;
    slug: string;
  }[];
}

const Mugshots: React.FC<Props> = ({ mugshots }) => {
  return (
    <motion.div
      variants={animations.fadeUp}
      className="flex justify-between w-full max-w-5xl h-80"
    >
      {mugshots.map(({ name, image, slug }, i) => (
        <Link key={i} href={`page-transitions/${slug}`}>
          <div className="relative w-64 h-full cursor-pointer">
            <Image
              className="transition-transform duration-1000 hover:scale-110"
              src={image}
              layout="fill"
              objectFit="cover"
              alt={name}
            />
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default Mugshots;
