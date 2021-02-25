![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/orthographic-camera/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/orthographic-camera/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/cameras/orthographic-camera/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Orthographic camera

Using an orthographic projection camera in r3f. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/cameras/orthographic-camera)

## Live example
<div align="center">
  <br>
Coming Soon
  <br>
</div>

## Code
```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const Box = (props) => {
  const boxRef = useRef();

  return (
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[100, 100, 100]} />
      <meshStandardMaterial attach="material" color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <ambientLight intensity={0.25} />
      <pointLight intensity={0.75} position={[500, 500, 1000]} />

      <Box position={[70, 70, 0]} />
      <Box position={[-70, 70, 0]} />
      <Box position={[70, -70, 0]} />
      <Box position={[-70, -70, 0]} />

      <OrbitControls />

      <OrthographicCamera
        makeDefault
        zoom={1}
        top={200}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={2000}
        position={[0, 0, 200]}
      />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/cameras/orthographic-camera
$ npm install && npm run start
```