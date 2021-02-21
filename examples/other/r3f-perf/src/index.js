import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Perf } from "r3f-perf";
import "./styles.css";

const Torus = () => {
  const torusRef = useRef();

  useFrame(() => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[2, 1, 256, 64]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Torus />
      <OrbitControls />
      <Perf />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
