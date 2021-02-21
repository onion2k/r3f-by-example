![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/basic-sphere/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/basic-sphere/package.json&label=three&query=$.dependencies['three']&color=green)

# geometry/basic-sphere

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/geometry/basic-sphere)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

const Sphere = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [0, 15, 15] }}
    >
      <pointLight position={[15, 15, 15]} />
      <Sphere />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/geometry/basic-sphere
$ npm install && npm run start
```