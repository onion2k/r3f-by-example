import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats, Reflector } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball } from "./scene";

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
      <Reflector
        blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={0.75} // How much blur mixes with surface roughness
        mixStrength={0.25} // Strength of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
        args={[50, 50]} // PlaneBufferGeometry arguments
        rotation={[-Math.PI * 0.5, 0, 0]}
        mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        minDepthThreshold={0.25}
        maxDepthThreshold={1}
        depthScale={50}
      >
        {(Material, props) => (
          <Material metalness={0.5} roughness={1} {...props} />
        )}
      </Reflector>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
