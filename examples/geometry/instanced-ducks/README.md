![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/instanced-ducks/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/instanced-ducks/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/instanced-ducks/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Instanced ducks

Loading a gltf model and drawing it lots of times using instancing. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/geometry/instanced-ducks)

## Live example
<div align="center">
  <br>
  <iframe src="https://codesandbox.io/embed/instanced-ducks-os16k?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Instanced Ducks"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
  <br>
</div>

## Code
```js
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stats, Plane } from "@react-three/drei";
import Duck from "./duck";
import "./styles.css";

const tempDucks = new THREE.Object3D();

const Ducks = ({ i, j }) => {
  const { geometry, material } = Duck();

  const ref = useRef();

  useFrame(({ clock }) => {
    let counter = 0;
    const t = clock.oldTime * 0.001;
    for (let x = 0; x < i; x++) {
      for (let z = 0; z < j; z++) {
        const id = counter++;
        tempDucks.position.set(i / 2 - x, 0, j / 2 - z);
        tempDucks.rotation.y = t;
        tempDucks.updateMatrix();
        ref.current.setMatrixAt(id, tempDucks.matrix);
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={ref} args={[geometry, material, i * j]} />;
};

const App = () => {
  return (
    <Canvas
      pixelRatio={1}
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 1.5, 5] }}
    >
      <pointLight
        position={[5, 5, 0]}
        intensity={1.0}
        distance={25}
        decay={2}
      />
      <Plane args={[50, 50]} rotation={[Math.PI * 1.5, 0, 0]}>
        <meshPhongMaterial color={0x808080} />
      </Plane>
      <Suspense fallback={null}>
        <Ducks i={35} j={35} />
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
$ cd examples/geometry/instanced-ducks
$ npm install && npm run start
```