import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls, CameraShake } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function WobbleCamera() {
  const shakeRef = useRef();
  const orbitRef = useRef();
  useEffect(() => {
    orbitRef.current.addEventListener("change", () => {
      const shake = shakeRef.current.getIntensity();
      shakeRef.current.setIntensity(shake + 0.015);
    });
  }, [orbitRef]);

  return (
    <>
      <OrbitControls ref={orbitRef} />
      <CameraShake ref={shakeRef} additive decay />
    </>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [10, 10, 10] }}
    >
      <pointLight position={[15, 15, 15]} />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <Ground />
      <WobbleCamera />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
