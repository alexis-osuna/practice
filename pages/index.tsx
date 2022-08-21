import type { NextPage } from "next";
import Head from "next/head";

import Heading from "../components/Heading";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alexis Osuna | Practice</title>
      </Head>
      <Heading text="Front-End exercises using Framer Motion and React Three Fiber." />
    </>
  );
};

export default Home;
