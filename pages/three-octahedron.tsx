import type { NextPage } from "next";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Octahedron from "../components/Octahedron";

const ThreeOctahedron: NextPage = () => {
  return (
    <>
      <Head>
        <title>Three Octahedron</title>
      </Head>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Octahedron position={[0, 0, 0]} />
      </Canvas>
      ,
    </>
  );
};

export default ThreeOctahedron;
