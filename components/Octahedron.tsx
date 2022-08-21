import React, { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";

const Octahedron = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh {...props} ref={mesh}>
      <octahedronBufferGeometry args={[1.4, 0]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Octahedron;
