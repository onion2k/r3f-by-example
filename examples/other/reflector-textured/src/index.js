import * as THREE from "three";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats, Reflector, useTexture } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

const TexturedReflector = () => {
  const texture = useTexture("./checkerboard.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <Reflector
      blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
      mixBlur={0.75} // How much blur mixes with surface roughness
      mixStrength={0.75} // Strength of the reflections
      resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
      args={[30, 30]} // PlaneBufferGeometry arguments
      rotation={[-Math.PI * 0.5, 0, 0]}
      mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
      minDepthThreshold={0.25}
      maxDepthThreshold={1}
      depthScale={50}
    >
      {(Material, props) => (
        <Material
          map={texture}
          color={"#ffff00"}
          metalness={0.75}
          roughness={0.75}
          roughnessMap={texture}
          {...props}
        />
      )}
    </Reflector>
  );
};

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
      <Suspense fallback={Ground}>
        <TexturedReflector />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
