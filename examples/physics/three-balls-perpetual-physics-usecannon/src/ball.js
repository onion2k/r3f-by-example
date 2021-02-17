import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { useSphere } from "@react-three/cannon";

const Ball = ({ position, color }) => {
  const [ballRef, api] = useSphere(() => ({ mass: 1, position: position }));
  const _position = useRef([0, 0, 0]);

  useEffect(() => api.position.subscribe((p) => (_position.current = p)), []);

  useFrame(() => {
    if (_position.current[0] < -25 || _position.current[0] > 25) {
      api.position.set(position[0], position[1], position[2]);
      api.velocity.set(0, 0, 0);
    }
  });

  const bw = useLoader(THREE.TextureLoader, "/bw.png");
  bw.wrapS = THREE.RepeatWrapping;
  bw.wrapT = THREE.RepeatWrapping;
  bw.repeat.set(3, 3);

  return (
    <mesh ref={ballRef} position={position} receiveShadow castShadow>
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
