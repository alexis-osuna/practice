import type { NextPage } from "next";

import Heading from "../components/Heading";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Heading message="Front-End exercises using Framer Motion." />
    </div>
  );
};

export default Home;
