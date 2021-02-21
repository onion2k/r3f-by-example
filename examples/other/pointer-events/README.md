![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/other/pointer-events/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/other/pointer-events/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/other/pointer-events/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# other/pointer-events

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/other/pointer-events)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";

const Box = (props) => {
  const boxRef = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    if (hover) {
      boxRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={boxRef} position={props.position}>
      <mesh
        onClick={() => {
          setActive(!active);
        }}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <boxGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color={active ? "green" : "red"}
        />
      </mesh>
    </group>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ fov: 55, position: [0, 2, 2] }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/other/pointer-events
$ npm install && npm run start
```