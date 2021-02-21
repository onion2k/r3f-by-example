![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/minimal-cube-example/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/minimal-cube-example/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/minimal-cube-example/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# geometry/minimal-cube-example

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/geometry/minimal-cube-example)

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
import "./styles.css";

const Box = () => {
  return (
    <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Box />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/geometry/minimal-cube-example
$ npm install && npm run start
```