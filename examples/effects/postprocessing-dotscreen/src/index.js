import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { render } from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { EffectComposer, DotScreen } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import "./styles.css";

function Knot() {
  const knotRef = useRef();

  useFrame(() => {
    knotRef.current.rotation.y += -0.01;
  });

  return (
    <mesh ref={knotRef}>
      <torusKnotGeometry args={[4, 1, 256, 64]} />
      <meshPhysicalMaterial color={"#FFFF00"} roughness={0.1} metalness={0.4} />
    </mesh>
  );
}

function Effects() {
  return (
    <EffectComposer>
      <DotScreen
        blendFunction={BlendFunction.NORMAL}
        angle={Math.PI * 0.5}
        scale={0.5}
      />
    </EffectComposer>
  );
}

render(
  <Canvas
    style={{ height: 600, width: 600 }}
    camera={{ position: [0, 0, 10] }}
    onCreated={({ gl }) => {
      gl.setClearColor(new THREE.Color("#000000"));
    }}
  >
    <pointLight position={[15, 15, 15]} intensity={1} />
    <Suspense fallback={null}>
      <Knot />
      <Effects />
    </Suspense>
  </Canvas>,
  document.querySelector("#root")
);
