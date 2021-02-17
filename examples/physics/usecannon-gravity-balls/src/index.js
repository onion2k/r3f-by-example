import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Physics } from "@react-three/cannon";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 10, 10] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Physics>
          <Ball position={[0.5, 7, 0]} color={"red"} />
          <Ball position={[0, 5, 0]} color={"green"} />
          <Ball position={[-0.5, 9, 0]} color={"blue"} />
          <Ground rotation={[-Math.PI / 2, 0, 0]} />
        </Physics>
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
