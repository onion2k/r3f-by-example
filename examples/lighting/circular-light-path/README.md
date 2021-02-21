![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/circular-light-path/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/circular-light-path/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/circular-light-path/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# lighting/circular-light-path

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/lighting/circular-light-path)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

const SmallBall = () => {
  return (
    <mesh position={[1, 1, 5]} castShadow receiveShadow>
      <sphereGeometry args={[1, 128, 128]} />
      <meshLambertMaterial color={"coral"} />
    </mesh>
  );
};

const Lights = () => {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    lightRef.current.position.x = Math.sin(t) * 10;
    lightRef.current.position.z = Math.cos(t) * 10;
  });

  return (
    <>
      <ambientLight color={"#444444"} />
      <pointLight
        ref={lightRef}
        position={[5, 15, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={3}
        shadow-bias={-0.0001}
      />
    </>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [10, 10, 10] }}
      shadowMap
    >
      <Lights />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <SmallBall />
      <Ground />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/lighting/circular-light-path
$ npm install && npm run start
```