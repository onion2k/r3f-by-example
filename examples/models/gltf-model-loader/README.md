![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/models/gltf-model-loader/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/models/gltf-model-loader/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/models/gltf-model-loader/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Gltf model loader

Loading a gltf model in an r3f scene. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/models/gltf-model-loader)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";

import Plane from "./model";

const App = () => (
  <Canvas style={{ height: 400, width: 800 }}>
    <pointLight position={[5, 5, 5]} />
    <Suspense fallback={null}>
      <Plane rotation={[0, Math.PI * 1.25, 0]} />
    </Suspense>
    <OrbitControls />
    <Stats />
  </Canvas>
);

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/models/gltf-model-loader
$ npm install && npm run start
```