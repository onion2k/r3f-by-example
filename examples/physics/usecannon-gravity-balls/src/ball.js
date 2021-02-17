import * as THREE from "three";
import React from "react";
import { useLoader } from "react-three-fiber";
import { useSphere } from "@react-three/cannon";

const Ball = ({ position, color }) => {
  const [ballRef] = useSphere(() => ({ mass: 1, position: position }));

  const bw = useLoader(THREE.TextureLoader, "/bw.png");
  bw.wrapS = THREE.RepeatWrapping;
  bw.wrapT = THREE.RepeatWrapping;
  bw.repeat.set(3, 3);

  return (
    <mesh ref={ballRef} position={position}>
      <sphereGeometry args={[1, 36, 36]} />
      <meshPhysicalMaterial
        color={color}
        map={bw}
        roughness={0.8}
        metalness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.35}
      />
    </mesh>
  );
};

export default Ball;
