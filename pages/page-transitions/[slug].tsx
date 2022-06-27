import Head from "next/head";
import Image from "next/image";

import Stagger from "../../components/Stagger";

import { content } from "../../data/content";

export async function getStaticPaths() {
  const paths = content.mugshots.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const mugshot = content.mugshots.find((e) => e.slug === params.slug);

  return {
    props: {
      mugshot,
    },
  };
}

interface Props {
  mugshot: {
    name: string;
    description: string;
    image: string;
    slug: string;
  };
}

const MugshotLayout: React.FC<Props> = ({ mugshot }) => {
  return (
    <>
      <Head>
        <title>{mugshot.name}</title>
      </Head>
      <div className="grid w-full max-w-4xl mb-16 lg:grid-cols-2">
        <div className="relative w-full h-96">
          <Image
            src={mugshot.image}
            layout="fill"
            objectFit="contain"
            alt={mugshot.name}
          />
        </div>
        <div className="flex flex-col max-w-sm">
          <Stagger type="text">{mugshot.name}</Stagger>
          <Stagger type="paragraph">{mugshot.description}</Stagger>
        </div>
      </div>
    </>
  );
};

export default MugshotLayout;
