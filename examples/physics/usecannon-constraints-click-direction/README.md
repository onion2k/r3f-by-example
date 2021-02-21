![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/physics/usecannon-constraints-click-direction/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/physics/usecannon-constraints-click-direction/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/physics/usecannon-constraints-click-direction/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# physics/usecannon-constraints-click-direction

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/physics/usecannon-constraints-click-direction)

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
import { Physics, useSphere, useDistanceConstraint } from "@react-three/cannon";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

function Chain() {
  const [link1] = useSphere(() => ({
    mass: 0,
    position: [0, 6, 0],
    allowSleep: false
  }));

  const [link2, api2] = useSphere(() => ({
    mass: 1,
    position: [0, 4, 0],
    allowSleep: false
  }));

  const [link3, api3] = useSphere(() => ({
    mass: 5,
    position: [0, 2, 0],
    allowSleep: false
  }));

  useDistanceConstraint(link1, link2, {
    distance: 2
  });

  useDistanceConstraint(link2, link3, {
    distance: 2
  });

  return (
    <group>
      <group ref={link1}>
        <Ball color={"red"} />
      </group>
      <group
        ref={link2}
        onClick={(e) => {
          // Need to normalize and multiply by a magnitude vector...
          api2.applyImpulse(
            [e.ray.origin.x, e.ray.origin.y, e.ray.origin.z],
            [e.ray.direction.x, e.ray.direction.y, e.ray.direction.z]
          );
        }}
      >
        <Ball color={"yellow"} />
      </group>
      <group
        ref={link3}
        onClick={(e) => {
          api3.applyImpulse(
            [e.ray.origin.x, e.ray.origin.y, e.ray.origin.z],
            [e.ray.direction.x, e.ray.direction.y, e.ray.direction.z]
          );
        }}
      >
        <Ball color={"green"} />
      </group>
    </group>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 5, 10] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Physics>
          <Chain />
          <Ground />
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
$ cd examples/physics/usecannon-constraints-click-direction
$ npm install && npm run start
```