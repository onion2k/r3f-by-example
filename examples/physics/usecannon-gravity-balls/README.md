![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/physics/usecannon-gravity-balls/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/physics/usecannon-gravity-balls/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/physics/usecannon-gravity-balls/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# physics/usecannon-gravity-balls

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/physics/usecannon-gravity-balls)

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
import { Physics } from "@react-three/cannon";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 10, 10] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Physics>
          <Ball position={[0.5, 7, 0]} color={"red"} />
          <Ball position={[0, 5, 0]} color={"green"} />
          <Ball position={[-0.5, 9, 0]} color={"blue"} />
          <Ground rotation={[-Math.PI / 2, 0, 0]} />
        </Physics>
      </Suspense>
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
$ cd examples/physics/usecannon-gravity-balls
$ npm install && npm run start
```