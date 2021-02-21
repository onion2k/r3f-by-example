![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/instanced-cubes/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/instanced-cubes/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/geometry/instanced-cubes/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# geometry/instanced-cubes

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/geometry/instanced-cubes)

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

const tempBoxes = new THREE.Object3D();

const Boxes = ({ i, j }) => {
  const material = new THREE.MeshLambertMaterial({ color: "red" });
  const boxesGeometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);
  const ref = useRef();

  useFrame(({ clock }) => {
    let counter = 0;
    const t = clock.oldTime * 0.001;
    for (let x = 0; x < i; x++) {
      for (let z = 0; z < j; z++) {
        const id = counter++;
        tempBoxes.position.set(i / 2 - x, 0, j / 2 - z);
        tempBoxes.rotation.y = t;
        tempBoxes.updateMatrix();
        ref.current.setMatrixAt(id, tempBoxes.matrix);
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={ref} args={[boxesGeometry, material, i * j]} />;
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [0, 3, 10] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Boxes i={350} j={350} />
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
$ cd examples/geometry/instanced-cubes
$ npm install && npm run start
```