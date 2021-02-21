![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/hooks/drei-usehelper/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/hooks/drei-usehelper/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/hooks/drei-usehelper/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Drei usehelper

Drawing helpers using the useHelper hook. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/hooks/drei-usehelper)

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
import { useHelper } from "@react-three/drei/useHelper";
import { OrbitControls, Stats } from "@react-three/drei";
import { BoxHelper } from "three";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";
import { FaceNormalsHelper } from "three/examples/jsm/helpers/FaceNormalsHelper";
import "./styles.css";

const CubeWithHelpers = () => {
  const cubeRef = useRef();
  useHelper(cubeRef, BoxHelper, "blue");
  useHelper(cubeRef, VertexNormalsHelper, 1, "green");
  useHelper(cubeRef, FaceNormalsHelper, 0.5, "yellow");

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <cubeGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <CubeWithHelpers />
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
$ cd examples/hooks/drei-usehelper
$ npm install && npm run start
```