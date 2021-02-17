import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

const Sphere = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [0, 15, 15] }}
    >
      <pointLight position={[15, 15, 15]} />
      <Sphere />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));
