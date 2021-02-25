![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/pbr-environment-map/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/pbr-environment-map/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/lighting/pbr-environment-map/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Pbr environment map

Lighting using environment mapping. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/lighting/pbr-environment-map)

## Live example
<div align="center">
  <br>
Coming Soon
  <br>
</div>

## Code
```js
import React, { Suspense } from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls, Environment } from "@react-three/drei";

const Ball = ({ position, children }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 24, 24]} />
      {children}
    </mesh>
  );
};

const App = () => {
  const materials = [
    <meshStandardMaterial metalness={0.9} roughness={0.1} />,
    <meshStandardMaterial metalness={0.6} roughness={0.3} />,
    <meshStandardMaterial metalness={0.5} roughness={0.5} />,
    <meshStandardMaterial metalness={0.3} roughness={0.6} />,
    <meshPhysicalMaterial clearcoat={0.6} roughness={0.1} />
  ];
  return (
    <Canvas style={{ height: 400, width: 600 }}>
      <Suspense fallback={null}>
        {materials.map((mat, i) => (
          <Ball key={`ball-${i}`} position={[-4 + 2 * i, 0, 0]}>
            {mat}
          </Ball>
        ))}
        <Environment files={"colorful_studio_1k.hdr"} path={"/"} />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/lighting/pbr-environment-map
$ npm install && npm run start
```