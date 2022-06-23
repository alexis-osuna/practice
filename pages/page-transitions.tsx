import type { NextPage } from "next";

import Heading from "../components/Heading";

const PageTransitions: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Heading message="Page Transitions" />
    </div>
  );
};

export default PageTransitions;
