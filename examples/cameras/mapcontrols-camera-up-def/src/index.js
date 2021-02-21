import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { MapControls, Stats } from "@react-three/drei";
import "./styles.css";

const Torus = () => {
  const torusRef = useRef();

  useFrame(() => {
    torusRef.current.rotation.x += 0.03;
    torusRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[1, 0.2, 12, 36]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [0, 0, 5], zoom: 1, up: [0, 0, 1], far: 10000 }}
    >
      <pointLight position={[5, 5, 5]} />
      <Torus />
      <MapControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
