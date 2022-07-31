import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Cursor from "../components/Cursor";
import ABC from "../components/ABC";

const DynamicCursor: NextPage = () => {
  const [isActive, setIsActive] = useState<boolean>();
  const [video, setVideo] = useState<number>();

  return (
    <>
      <Head>
        <title>Dynamic Cursor</title>
      </Head>
      <Cursor isActive={isActive} video={video} />
      <ABC setIsActive={setIsActive} setVideo={setVideo} />
    </>
  );
};

export default DynamicCursor;
