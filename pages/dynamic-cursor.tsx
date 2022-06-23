import type { NextPage } from "next";

import Heading from "../components/Heading";

const DynamicCursor: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Heading message="Dynamic Cursor" />
    </div>
  );
};

export default DynamicCursor;
