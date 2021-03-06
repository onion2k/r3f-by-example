![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/textured-sphere-url-array/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/textured-sphere-url-array/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/textured-sphere-url-array/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Textured sphere url array

A simpler way of loading several maps to apply to a texture. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/materials/textured-sphere-url-array)

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
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Sphere = () => {
  const sphereRef = useRef();
  const repeatX = 3;
  const repeatY = 2;

  const [base, bump, normal, ao, metal, rough] = useLoader(
    THREE.TextureLoader,
    [
      "/metal/metal1_basecolor.jpg",
      "/metal/metal1_height.png",
      "/metal/metal1_normal.jpg",
      "/metal/metal1_ambientOcclusion.jpg",
      "/metal/metal1_metallic.jpg",
      "/metal/metal1_roughness.jpg"
    ]
  );

  [base, bump, normal, ao, metal, rough].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);
  });

  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 36, 36]} />
      <meshPhysicalMaterial
        map={base}
        bumpMap={bump}
        aoMap={ao}
        normalMap={normal}
        metalnessMap={metal}
        roughnessMap={rough}
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 10, -10]} intensity={1} />
      <pointLight position={[-3, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere />
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
$ cd examples/materials/textured-sphere-url-array
$ npm install && npm run start
```