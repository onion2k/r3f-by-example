![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/mapcontrols-camera-up-def/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/mapcontrols-camera-up-def/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/mapcontrols-camera-up-def/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Map controls

Using Drei's map controls to pan around a scene. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/cameras/mapcontrols-camera-up-def)

## Live example
<div align="center">
  <br>
  <iframe src="https://codesandbox.io/embed/mapcontrols-ywu32?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Instanced Ducks"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
  <br>
</div>

## Code
```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { MapControls, Stats } from "@react-three/drei";
import "./styles.css";

const Torus = () => {
  const torusRef = useRef();

  useFrame(() => {
    torusRef.current.rotation.x += 0.03;
    torusRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[1, 0.2, 12, 36]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [0, 0, 5], zoom: 1, up: [0, 0, 1], far: 10000 }}
    >
      <pointLight position={[5, 5, 5]} />
      <Torus />
      <MapControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/cameras/mapcontrols-camera-up-def
$ npm install && npm run start
```