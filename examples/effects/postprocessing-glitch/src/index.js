import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function Effects() {
  return (
    <EffectComposer>
      <Glitch
        delay={[0.5, 1.5]}
        duration={[0.6, 1.0]}
        strength={[0.1, 0.2]}
        mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
        active // toggle on/off
        ratio={0.1}
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
