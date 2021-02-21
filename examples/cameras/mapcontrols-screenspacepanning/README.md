![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/mapcontrols-screenspacepanning/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/mapcontrols-screenspacepanning/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/mapcontrols-screenspacepanning/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Mapcontrols screenspacepanning

Using MapControls screenspace panning to normalize mouse movements to the viewport. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/cameras/mapcontrols-screenspacepanning)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { MapControls, Stats } from "@react-three/drei";
import "./styles.css";

const Sphere = (props) => {
  return (
    <mesh position={props.position}>
      <sphereBufferGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

function Grid() {
  const x = 10;
  const y = 10;

  const spheres = Array(x * y)
    .fill()
    .map((s, i) => {
      return (
        <Sphere
          position={[x * -0.5 + Math.floor(i / x), y * -0.5 + (i % y), 0]}
        />
      );
    });

  return spheres;
}

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Grid />
      <MapControls screenSpacePanning />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/cameras/mapcontrols-screenspacepanning
$ npm install && npm run start
```