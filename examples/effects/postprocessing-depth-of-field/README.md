![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-depth-of-field/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-depth-of-field/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-depth-of-field/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-depth-of-field/package.json&label=@react-three/postprocessing&query=$.dependencies['@react-three/postprocessing']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-depth-of-field/package.json&label=postprocessing&query=$.dependencies['postprocessing']&color=green)

# Depth of field

Using postprocessing to create Depth of Field. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/effects/postprocessing-depth-of-field)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { render } from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import {
  EffectComposer,
  DepthOfField,
  Noise
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import "./styles.css";

function Knot(props) {
  const knotRef = useRef();

  useFrame(({ clock }) => {
    knotRef.current.rotation.y += -0.01;
    knotRef.current.position.z = Math.sin(clock.getElapsedTime()) * 10 - 10;
  });

  return (
    <mesh ref={knotRef} position={props.position}>
      <torusKnotGeometry args={[1, 0.25, 256, 32]} />
      <meshLambertMaterial color={"#8888FF"} />
    </mesh>
  );
}

function Effects() {
  return (
    <>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.06}
          bokehScale={5}
          height={600}
          blendFunction={BlendFunction.Screen}
          blur={true}
        />
        <Noise opacity={0.25} />
      </EffectComposer>
    </>
  );
}

render(
  <Canvas
    style={{ height: 600, width: 600 }}
    camera={{ position: [0, 0, 3] }}
    onCreated={({ gl }) => {
      gl.setClearColor(new THREE.Color("#000000"));
    }}
  >
    <pointLight position={[15, 15, 15]} intensity={1} />
    <Suspense fallback={null}>
      <Knot position={[0, 0, 0]} />
    </Suspense>
    <Effects />
  </Canvas>,
  document.querySelector("#root")
);

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/effects/postprocessing-depth-of-field
$ npm install && npm run start
```