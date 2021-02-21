import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useLoader } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Sphere = () => {
  const sphereRef = useRef();
  const repeatX = 2;
  const repeatY = 2;

  const base = useLoader(THREE.TextureLoader, "/bw.jpg");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  return (
    <mesh ref={sphereRef} rotation={[0, Math.PI * 0.5, 0]}>
      <sphereGeometry args={[3, 36, 36]} />
      <meshPhysicalMaterial map={base} color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <ambientLight color={"#444444"} />
      <pointLight position={[5, 0, -10]} intensity={1} />
      <pointLight position={[5, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
