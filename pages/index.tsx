import type { NextPage } from "next";

import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <h1 className="max-w-sm text-3xl font-bold text-center">
        Front-End exercises using Framer Motion.
      </h1>
    </Container>
  );
};

export default Home;
