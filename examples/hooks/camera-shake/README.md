![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/hooks/camera-shake/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/hooks/camera-shake/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/hooks/camera-shake/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# hooks/camera-shake

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/hooks/camera-shake)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls, CameraShake } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function WobbleCamera() {
  const shakeRef = useRef();
  const orbitRef = useRef();
  useEffect(() => {
    orbitRef.current.addEventListener("change", () => {
      const shake = shakeRef.current.getIntensity();
      shakeRef.current.setIntensity(shake + 0.015);
    });
  }, [orbitRef]);

  return (
    <>
      <OrbitControls ref={orbitRef} />
      <CameraShake ref={shakeRef} additive decay />
    </>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [10, 10, 10] }}
    >
      <pointLight position={[15, 15, 15]} />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <Ground />
      <WobbleCamera />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/hooks/camera-shake
$ npm install && npm run start
```