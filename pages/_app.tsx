import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/Layout";
import Container from "../components/Container";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Container key={router.asPath}>
          <Component {...pageProps} />
        </Container>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
