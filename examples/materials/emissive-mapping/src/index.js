import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Sphere = () => {
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
      <sphereGeometry args={[2, 36, 36]} />
      <meshPhysicalMaterial
        ref={matRef}
        color={"gold"}
        roughness={0.2}
        metalness={0.5}
        emissiveMap={base}
        emissive={"white"}
        emissiveIntensity={1}
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      onCreated={({ gl, camera }) => {
        // gl.toneMapping = THREE.Uncharted2ToneMapping
        gl.setClearColor(new THREE.Color("#222222"));
      }}
    >
      <pointLight position={[15, 10, 5]} intensity={0.25} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
