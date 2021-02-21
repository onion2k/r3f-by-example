import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { render } from "react-dom";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlurPass } from "postprocessing";
import "./styles.css";

function Sphere() {
  const sphereRef = useRef();
  const matRef = useRef();
  const repeatX = 10;
  const repeatY = 10;

  const base = useLoader(THREE.TextureLoader, "/emissive.png");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y += -0.01;
    matRef.current.emissiveIntensity = Math.abs(
      Math.sin(clock.elapsedTime * 0.5)
    );
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[5, 36, 36]} />
      <meshPhysicalMaterial
        ref={matRef}
        color={"gold"}
        roughness={0.4}
        metalness={0.3}
        emissiveMap={base}
        emissive={"white"}
        emissiveIntensity={1}
      />
    </mesh>
  );
}

function Effects() {
  return (
    <>
      <EffectComposer>
        <Bloom
          intensity={10}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.5}
          blurPass={new BlurPass()}
        />
      </EffectComposer>
    </>
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
    <pointLight position={[15, 15, 15]} intensity={0.2} />
    <Suspense fallback={null}>
      <Sphere />
    </Suspense>
    <Effects />
  </Canvas>,
  document.querySelector("#root")
);
