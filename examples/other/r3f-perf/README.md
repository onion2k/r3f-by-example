![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/other/r3f-perf/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/other/r3f-perf/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/other/r3f-perf/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# R3f perf

An example of the r3f-perf library. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/other/r3f-perf)

## Live example
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
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Perf } from "r3f-perf";
import "./styles.css";

const Torus = () => {
  const torusRef = useRef();

  useFrame(() => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[2, 1, 256, 64]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Torus />
      <OrbitControls />
      <Perf />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/other/r3f-perf
$ npm install && npm run start
```