import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { CircleLens } from "./circleLens";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function Effects() {
  return (
    <EffectComposer>
      <CircleLens fragments={53} />
    </EffectComposer>
  );
}
const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [10, 10, 10] }}
    >
      <directionalLight position={[2.5, 5, 5]} />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <Ground />
      <Effects />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
