import React from "react";

export const Wall = () => {
  return (
    <>
      <mesh position={[0, 6, -3]} castShadow receiveShadow>
        <boxGeometry args={[16, 12, 1]} />
        <meshStandardMaterial color={"pink"} metalness={0.2} roughness={0.2} />
      </mesh>
      <mesh
        position={[-8, 6, 5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[16, 12, 1]} />
        <meshStandardMaterial color={"pink"} metalness={0.2} roughness={0.2} />
      </mesh>
    </>
  );
};

export const Box = () => {
  return (
    <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={"red"} metalness={0} roughness={0.8} />
    </mesh>
  );
};

export const SmallBox = () => {
  return (
    <mesh position={[6, 1, -1.5]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"green"} metalness={0.1} roughness={0.5} />
    </mesh>
  );
};

export const Ball = () => {
  return (
    <mesh position={[1, 6, -1]} castShadow receiveShadow>
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial color={"yellow"} metalness={0.8} roughness={0} />
    </mesh>
  );
};

export const Ground = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial color={"#888888"} metalness={0.2} roughness={0.5} />
    </mesh>
  );
};
