import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [10, 10, 10] }}
      shadowMap
    >
      <pointLight
        position={[15, 25, 5]}
        intensity={0.1}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <pointLight
        position={[15, 15, 15]}
        intensity={0.1}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <pointLight
        position={[0, 15, 15]}
        intensity={0.7}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={20}
        shadow-bias={-0.0001}
      />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <Ground />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
