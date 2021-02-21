![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/vsm-shadows/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/vsm-shadows/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/vsm-shadows/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# lighting/vsm-shadows

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/lighting/vsm-shadows)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import * as THREE from "three";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} castShadow receiveShadow>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const Sphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.z -= 0.01;
  });

  return (
    <group ref={sphereRef}>
      <mesh castShadow receiveShadow position={[-2, 1, 0]}>
        <sphereBufferGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </group>
  );
};

const Ground = () => {
  const groundRef = useRef();

  return (
    <mesh
      ref={groundRef}
      rotation={[Math.PI * -0.5, 0, 0]}
      position={[0, -3, 0]}
      receiveShadow
    >
      <planeBufferGeometry args={[15, 15]} />
      <meshStandardMaterial color={"#eeeeee"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      shadowMap={{ type: THREE.VSMShadowMap }}
    >
      <directionalLight
        position={[0, 5, 5]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <Box />
      <Sphere />
      <Ground />
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
$ cd examples/lighting/vsm-shadows
$ npm install && npm run start
```