import type { NextPage } from "next";
import Head from "next/head";

import Mugshots from "../components/Mugshots";

import { content } from "../data/content";

export async function getStaticProps() {
  return {
    props: {
      mugshots: content.mugshots,
    },
  };
}

interface Props {
  mugshots: {
    name: string;
    image: string;
    slug: string;
  }[];
}

const PageTransitions: NextPage<Props> = ({ mugshots }) => {
  return (
    <>
      <Head>
        <title>Page Transitions</title>
      </Head>
      <Mugshots mugshots={mugshots} />
    </>
  );
};

export default PageTransitions;
