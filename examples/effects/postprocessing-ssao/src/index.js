import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function Effects() {
  return (
    <EffectComposer>
      <SSAO
        blendFunction={BlendFunction.MULTIPLY} // Use NORMAL to see the effect
        samples={31}
        radius={5}
        intensity={30}
      />
    </EffectComposer>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
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
