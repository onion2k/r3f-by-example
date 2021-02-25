![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-godrays/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-godrays/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-godrays/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-godrays/package.json&label=@react-three/postprocessing&query=$.dependencies['@react-three/postprocessing']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-godrays/package.json&label=postprocessing&query=$.dependencies['postprocessing']&color=green)

# Godrays

Creating a light-through-smoke godrays effect. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/effects/postprocessing-godrays)

## Live example
<div align="center">
  <br>
Coming Soon
  <br>
</div>

## Code
```js
import * as THREE from "three";
import React, { useRef, Suspense, forwardRef } from "react";
import { render } from "react-dom";
import { Canvas, useFrame, useResource } from "react-three-fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import "./styles.css";

function Knot() {
  const knotRef = useRef();

  useFrame(() => {
    knotRef.current.rotation.y += -0.01;
    knotRef.current.rotation.z += -0.01;
  });

  return (
    <mesh ref={knotRef}>
      <torusKnotGeometry args={[4, 0.4, 256, 64, 2, 5]} />
      <meshPhysicalMaterial
        color={"#FFFFFF"}
        roughness={0}
        metalness={0}
        clearcoat={1}
      />
    </mesh>
  );
}

const Sun = forwardRef(function Sun(props, forwardRef) {
  useFrame(({ clock }) => {
    forwardRef.current.position.x = Math.sin(clock.getElapsedTime()) * -8;
    forwardRef.current.position.y = Math.cos(clock.getElapsedTime()) * -8;
  });

  return (
    <mesh ref={forwardRef} position={[0, 0, -15]}>
      <sphereGeometry args={[1, 36, 36]} />
      <meshBasicMaterial color={"#00FF00"} />
    </mesh>
  );
});

function Effects() {
  const sunRef = useResource();
  return (
    <>
      <Sun ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Screen}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.6}
            exposure={0.4}
            clampMax={1}
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer>
      )}
    </>
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
    </Suspense>
    <Effects />
  </Canvas>,
  document.querySelector("#root")
);

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/effects/postprocessing-godrays
$ npm install && npm run start
```