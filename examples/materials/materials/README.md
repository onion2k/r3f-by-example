![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/materials/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/materials/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/materials/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Materials

Examples of five basic material types. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/materials/materials)

## Screenshot
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
import { OrbitControls, Stats } from "@react-three/drei";

const Sphere = (props) => {
  const sphereRef = useRef();

  return (
    <mesh ref={sphereRef} position={props.position}>
      <sphereGeometry args={[1, 24, 24]} />
      {props.children}
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 800 }}>
      <pointLight position={[5, 5, 5]} />
      <Sphere position={[-4, 0, 0]}>
        <meshBasicMaterial color={"red"} />
      </Sphere>
      <Sphere position={[-2, 0, 0]}>
        <meshLambertMaterial color={"red"} />
      </Sphere>
      <Sphere position={[0, 0, 0]}>
        <meshPhongMaterial color={"red"} />
      </Sphere>
      <Sphere position={[2, 0, 0]}>
        <meshStandardMaterial color={"red"} metalness={0.2} roughness={0.2} />
      </Sphere>
      <Sphere position={[4, 0, 0]}>
        <meshPhysicalMaterial
          color={"red"}
          metalness={0.2}
          roughness={0}
          clearcoat={0.8}
        />
      </Sphere>
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
$ cd examples/materials/materials
$ npm install && npm run start
```