![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-dotscreen/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-dotscreen/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-dotscreen/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-dotscreen/package.json&label=@react-three/postprocessing&query=$.dependencies['@react-three/postprocessing']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-dotscreen/package.json&label=postprocessing&query=$.dependencies['postprocessing']&color=green)

# Dotscreen

Using postprocessing to create a halftone-like dotscreen effect. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/effects/postprocessing-dotscreen)

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
import { EffectComposer, DotScreen } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import "./styles.css";

function Knot() {
  const knotRef = useRef();

  useFrame(() => {
    knotRef.current.rotation.y += -0.01;
  });

  return (
    <mesh ref={knotRef}>
      <torusKnotGeometry args={[4, 1, 256, 64]} />
      <meshPhysicalMaterial color={"#FFFF00"} roughness={0.1} metalness={0.4} />
    </mesh>
  );
}

function Effects() {
  return (
    <EffectComposer>
      <DotScreen
        blendFunction={BlendFunction.NORMAL}
        angle={Math.PI * 0.5}
        scale={0.5}
      />
    </EffectComposer>
  );
}

render(
  <Canvas
    style={{ height: 600, width: 600 }}
    camera={{ position: [0, 0, 10] }}
    onCreated={({ gl }) => {
      gl.setClearColor(new THREE.Color("#000000"));
    }}
  >
    <pointLight position={[15, 15, 15]} intensity={1} />
    <Suspense fallback={null}>
      <Knot />
      <Effects />
    </Suspense>
  </Canvas>,
  document.querySelector("#root")
);

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/effects/postprocessing-dotscreen
$ npm install && npm run start
```