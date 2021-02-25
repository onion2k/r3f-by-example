![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/textured-cube-with-shadows/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/textured-cube-with-shadows/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/textured-cube-with-shadows/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Textured cube with shadows

Using materials with shadows. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/materials/textured-cube-with-shadows)

## Live example
<div align="center">
  <br>
Coming Soon
  <br>
</div>

## Code
```js
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OrbitControls, RoundedBox, Stats } from "@react-three/drei";
import "./styles.css";

const Box = () => {
  const boxRef = useRef();
  const repeatX = 0.25;
  const repeatY = 0.25;

  const base = useLoader(THREE.TextureLoader, "/planks/base.jpg");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  const bump = useLoader(THREE.TextureLoader, "/planks/height.png");
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(repeatX, repeatY);

  const ao = useLoader(THREE.TextureLoader, "/planks/ao.jpg");
  ao.wrapS = THREE.RepeatWrapping;
  ao.wrapT = THREE.RepeatWrapping;
  ao.repeat.set(repeatX, repeatY);

  const normal = useLoader(THREE.TextureLoader, "/planks/normal.jpg");
  normal.wrapS = THREE.RepeatWrapping;
  normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(repeatX, repeatY);

  const rough = useLoader(THREE.TextureLoader, "/planks/roughness.jpg");
  rough.wrapS = THREE.RepeatWrapping;
  rough.wrapT = THREE.RepeatWrapping;
  rough.repeat.set(repeatX, repeatY);

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <RoundedBox
      ref={boxRef}
      castShadow
      receiveShadow
      args={[2, 2, 2]}
      radius={0.25}
      smoothness={12}
    >
      <meshPhysicalMaterial
        map={base}
        bumpMap={bump}
        aoMap={ao}
        normalMap={normal}
        roughnessMap={rough}
      />
    </RoundedBox>
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
        <sphereGeometry args={[0.25, 24, 24]} />
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
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color={"#eeeeee"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }} shadowMap>
      <ambientLight color={"#444444"} />
      <directionalLight
        position={[0, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
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
$ cd examples/materials/textured-cube-with-shadows
$ npm install && npm run start
```