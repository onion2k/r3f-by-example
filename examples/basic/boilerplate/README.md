![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/basic/boilerplate/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/basic/boilerplate/package.json&label=three&query=$.dependencies['three']&color=green)

# Boilerplate

A minimal boilerplate for r3f. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/basic/boilerplate)

## Live example
<div align="center">
  <br>
  <iframe src="https://codesandbox.io/embed/boilerplate-h2w36?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Instanced Ducks"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
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
$ cd examples/basic/boilerplate
$ npm install && npm run start
```