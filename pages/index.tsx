import type { NextPage } from "next";

import Heading from "../components/Heading";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <Heading message="Front-End exercises using Framer Motion." />
    </Container>
  );
};

export default Home;
